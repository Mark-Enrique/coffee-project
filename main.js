"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-6 pb-5">';
    html += '<span class="font-weight-bold text-capitalize coffee-name">' + coffee.name + '</span>';
    html += '<span class="text-secondary pl-2 coffee-roast">' + coffee.roast + '</span></div>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    // var timeout = null;
    // clearTimeout(timeout);
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var coffeeName = new RegExp('^' + search.value.toLowerCase())
    coffees.forEach(function(coffee) {
        var coffeeToLower = coffee.name.toLowerCase();
        var coffeeNameSplit = coffeeToLower.split(' ');
        for (var i = 0; i < coffeeNameSplit.length; i += 1){
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

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var search = document.querySelector("#coffee-name-search");

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees)
search.addEventListener("keyup", updateCoffees)
