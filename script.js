fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.message);

    let img = document.querySelector('img')
    img.src = data.message 
  
      img.addEventListener('mouseover', () => {
        x = img.src
        img.src = img.dataset.hover
        img.dataset.hover = x
      })
  ();
  

  })
