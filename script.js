//Получаем элементы со страницы
const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
    dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
    inputCitiesTo = formSearch.querySelector('.input__cities-to'),
    dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to')

//Данные
const citiesApi = 'database/cities.json',
    proxy = 'https://cors-anywhere.herokuapp.com/',
    API_KEY = '9f874ffe86202b9fe3731d0f660215b2',
    calendar = 'http://min-prices.aviasales.ru/calendar_preload';
//let urlParams = '?origin=SVX&destination=KGD&depart_date=2020-05-25&one_way=true';    
//const url = calendar + urlParams;

let city = [];

//Функции

const getData = (url, callback) => {
    const request = new XMLHttpRequest();

    request.open('GET', url);
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;

        if (request.status === 200) {
            callback(request.response);
        } else {
            console.error(request.status);
        }
    });

    request.send();
}

const showCity = (input, list) => {
    list.textContent = '';

    if (input.value !== '') {
        const filterCity = city.filter((item) => {
            if (item.name) {
                const fixItem = item.name.toLowerCase();
                return fixItem.includes(input.value.toLowerCase());
            }
        });

        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item.name;
            list.append(li)
        });
    }
}

const selectCity = (event, input, list) => {
    const target = event.target;
    if (target.tagName.toLowerCase === 'li') {
        input.value = target.textContent;
        list.textContent = '';
    }
}

//Обработчики событий

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom);
});

inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo);
});

dropdownCitiesFrom.addEventListener('click', () => {
    selectCity(event, inputCitiesFrom, dropdownCitiesFrom)
});

dropdownCitiesTo.addEventListener('click', () => {
    selectCity(event, inputCitiesTo, dropdownCitiesTo)
});

//Вызовы функций
getData(citiesApi, (data) => {
    city = JSON.parse(data).filter((item) => {
        return item.name;
    });    
});