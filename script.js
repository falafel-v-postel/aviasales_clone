const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
    dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
    inputCitiesTo = formSearch.querySelector('.input__cities-to'),
    dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to')

const city = ['Moscow', 'Minsk', 'Volgograd', 'Samara', 'Kiev', 'Tokio', 'Odessa', 'Vilnius', 'New-York',
    'Riga', 'Warsaw', 'Wroclaw', 'Berlin', 'Bangkok', 'Beijing', 'Tallinn', 'Oslo', 'Lisbon', 'Porto', 'Dresden',
    'Roma', 'Bern', 'Viena', 'Madrid', 'Paris', 'Florence', 'Amsterdam', 'Krakow', 'Prague', 'Sydney', 'Manila'
];

const showCity = (input, list) => {
    list.textContent = '';

    if (input.value !== '') {
        const filterCity = city.filter((item) => {
            const fixItem = item.toLowerCase();
            return fixItem.includes(input.value.toLowerCase());
        });
    
        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li);
            console.log(li);
        });
    }

}

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom)
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase === 'li') {
        inputCitiesFrom.value = target.textContent;
        dropdownCitiesFrom.textContent = '';

    }

});

inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo)
});

dropdownCitiesTo.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase === 'li') {
        inputCitiesTo.value = target.textContent;
        dropdownCitiesTo.textContent = '';

    }

});