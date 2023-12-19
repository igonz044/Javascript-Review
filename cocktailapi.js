// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(res => res.json()) //parse
//   .then(data => {
//     console.log(data.message)
//     document.querySelector('img').src = data.message
//   })
//   .catch(err => {
//     console.log(`error ${err}`)
//   });

  //The user can enter a cocktail. Get name, photo and instructions
  fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(res => res.json()) //parse
    .then(data => {
      console.log(data.drinks[0])
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
