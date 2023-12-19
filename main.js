fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json()) //parse
  .then(data => {
    console.log(data.message)
    document.querySelector('img').src = data.message
  })
  .catch(err => {
    console.log(`error ${err}`)
  });

  //The user can enter a cocktail. Get name, photo and instructions
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) //parse
    .then(data => {
      console.log(data.message)
      document.querySelector('img').src = data.message
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
