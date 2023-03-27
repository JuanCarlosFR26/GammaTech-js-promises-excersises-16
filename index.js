// Ejercicio de promesas (then / catch)

// Para realizar estos ejercicios, usaremos la API de Star Wars.
// 1- Haz una petición a la API y consigue una lista de los personajes de Stars Wars.
const starWars = fetch('https://swapi.dev/api/');

// 2- Busca cómo conseguir hacer una petición para que te llegue sólo la información de Darth Vader, y muéstrala por consola.

const starWarsPjs = fetch('https://swapi.dev/api/people/');
starWarsPjs
    .then(response => response.json())
    .then(data => {
        data.results.forEach(e => {
            (e.name === 'Darth Vader') ? console.log(e) : null;
        })
        console.log('======================================');
    })

// 3- Muestra por consola la lista de películas en las que aparece el personaje de Luke Skywalker.
const starWarsFilms = fetch('https://swapi.dev/api/people/');
starWarsFilms
    .then(response => response.json())
    .then(data => {
        data.results.forEach(e => {
            if(e.name === 'Luke Skywalker') {
                e.films.forEach(e => {
                    fetch(e)
                        .then(response => response.json())
                        .then(data => console.log('Luke sale en: ', data.title))
                })
            }
        });
    })


// 4- Busca el personaje de Leia Organa y consigue que se muestre por consola la información de su planeta natal: Alderaan.
const leia = fetch('https://swapi.dev/api/people/')
leia
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pj => {
            if(pj.name === 'Leia Organa') {
                fetch(pj.homeworld)
                    .then(response => response.json())
                    .then(data => console.log('Su planeta natal es: ',data.name))
            }
        })
    })

// 5- En este ejercicio, debes conseguir el resultado final encadenando varios métodos then(). Obtén la lista de personajes, haz una petición para C-3PO, encuentra las películas en las que aparece, y haz una petición por cada película para mostrar por consola su información. Para hacer esto último, deberás usar un forEach que itere sobre la lista de urls de películas y que, en cada iteración, haga una petición con dicha url.
const pjsList = fetch('https://swapi.dev/api/people/')
pjsList
    .then(response => response.json())
    .then(pjs => {
        pjs.results.forEach(element => {
            if(element.name === 'C-3PO') {
                element.films.forEach(film => {
                    fetch(film)
                        .then(response => response.json())
                        .then(data => console.log('Información de la película: ', data))
                })
            }
        })
    })


// Una vez hayas terminado los ejercicios, prueba a repetir el ejercicio nº 2, pero esta vez introduce los resultados en el DOM para que podamos ver en el navegador el nombre, la fecha de nacimiento y la altura de Darth Vader.
const darthVader = fetch('https://swapi.dev/api/people/')
darthVader
    .then(response => response.json())
    .then(pjs => {
            pjs.results.forEach(e => {
                if(e.name === 'Darth Vader') {
                    console.log(e);
                    const dom = document.querySelector('body');
                    let name = e.name;
                    let brth = e.birth_year;
                    let height = e.height;
                    let result = `El personaje es ${name}. Mide ${height} cms y nació en ${brth}`;

                    dom.innerText = result;
                }
            })
    })