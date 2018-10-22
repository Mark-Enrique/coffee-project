"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-6">';
    html += '<div><h4>' + coffee.name + '</h4>';
    html += '<span>' + coffee.roast + '</span></div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (coffee.all === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesSearch(e) {
    //e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (coffee.all === selectedRoast) {
            filteredCoffees.push(coffee);
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

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees)

var search = document.getElementById("coffee-name-search");

search.addEventListener("keyup", updateCoffeesSearch)


//
// console.log(searchTest());

// search.addEventListener("keyup", function() {
//     coffees.prototype.forEach.call(els, function(el) {
//         var values = search.value.split(' ');
//         var display = true;
//         for (var i = 0; i < values.length; i++) {
//             if(el.textContent.trim().indexOf(values[i]) === -1)
//                 display = false;
//         }
//
//         el.style.display = display ? 'block' : 'none';
//     });
// });



/* Test function

var timeout = null;
// Init a timeout variable to be used below

//Listen for keystroke events
function searchTest() {
    search.addEventListener("keydown", function () {

        clearTimeout(timeout);
        timeout = setTimeout(function () {
            console.log('Input Value:', search.value);
        }, 500);
    });
    return 0;
}
 */
