// APP DE RECETTES / PLATS

// A l'aide de themealdb.com ou Free Meal API, créer une barre de recherche qui permet de rechercher des recettes de plats.
// de retrouver des plats via leur nom ou leurs composants

// On veut afficher les résultats dans une liste sous la barre de recherche

// On veut pouvoir liker un plat et que celui-ci soit enregistré en local storage

// On doit aussi pouvoir afficher les plats favoris après avoir cliqué sur le bouton
// de favoris (toujours depuis le local storage)


const search = document.querySelector('.search');
const submit = document.querySelector('.submit');
const ul = document.querySelector('.results');
const listFavorites = document.querySelector('.favorites');
const favButton = document.querySelector('.favButton');


let ids = [];

submit.addEventListener('click', () => {
    const meals = search.value;
    (axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`))
        .then(response => response.data)
        .then(response => {
            ul.innerHTML = '';
            if (response.meals === null) {
                const noResult = document.createElement('p')
                noResult.classList.add('noResult');
                noResult.innerHTML = 'Aucun résultat';
                ul.appendChild(noResult);
            } else {
            response.meals.forEach(meal => {
                const html = `
                <h1>${meal.strMeal}</h1>
                <img src="${meal.strMealThumb}" alt="image of ${meal.strMeal}">
                <div class="center2">
                <button class="favButton">Ajouter aux favoris</button>
                </div>
                `;
                const li = document.createElement('p');
                li.innerHTML = html;
                ul.appendChild(li);
            });
        }
        }
        )
        .catch(error => console.error(error));
}
);










