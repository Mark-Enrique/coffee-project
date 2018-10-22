(function () {
"use strict";

function renderCoffee(coffee) {
    let html = '<div class="coffee col-6 pb-5">';
    html += '<span class="font-weight-bold text-capitalize coffee-name">' + coffee.name + '</span>';
    html += '<span class="text-secondary pl-2 coffee-roast">' + coffee.roast + '</span></div>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    // add timeout on keystroke search, 500
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    let coffeeName = new RegExp('^' + search.value.toLowerCase());
    coffees.forEach(function(coffee) {
        let coffeeToLower = coffee.name.toLowerCase();
        let coffeeNameSplit = coffeeToLower.split(' ');
        for (let i = 0; i < coffeeNameSplit.length; i += 1) {
            if ((coffee.roast === selectedRoast ||
                coffee.all === selectedRoast) &&
                (coffeeNameSplit[i].search(coffeeName) > -1))
            {
                filteredCoffees.push(coffee);
                break;
            }
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

    let text = ["<em>Mark & Enrique's Coffee Project</em>"];
    let counter = 0;
    let elem = document.getElementById("coffee-title");
    let background = document.getElementById("coffee-background");
    let inst = setInterval(change, 10000);

    function change() {
        elem.innerHTML = text[counter];
        background.style.background = "linear-gradient(to right, #f7f8f8, #acbb78)";
        counter++;
        if (counter >= text.length) {
            counter = 0;
            clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
        }
    }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light', all: 'all'},
    {id: 2, name: 'Half City', roast: 'light', all: 'all'},
    {id: 3, name: 'Cinnamon', roast: 'light', all: 'all'},
    {id: 4, name: 'City', roast: 'medium', all: 'all'},
    {id: 5, name: 'American', roast: 'medium', all: 'all'},
    {id: 6, name: 'Breakfast', roast: 'medium', all: 'all'},
    {id: 7, name: 'High', roast: 'dark', all: 'all'},
    {id: 8, name: 'Continental', roast: 'dark', all: 'all'},
    {id: 9, name: 'New Orleans', roast: 'dark', all: 'all'},
    {id: 10, name: 'European', roast: 'dark', all: 'all'},
    {id: 11, name: 'Espresso', roast: 'dark', all: 'all'},
    {id: 12, name: 'Viennese', roast: 'dark', all: 'all'},
    {id: 13, name: 'Italian', roast: 'dark', all: 'all'},
    {id: 14, name: 'French', roast: 'dark', all: 'all'},
];

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let search = document.querySelector("#coffee-name-search");

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
search.addEventListener("keyup", updateCoffees);

tbody.innerHTML = renderCoffees(coffees);
})();
