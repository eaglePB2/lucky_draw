let main = document.querySelector("#main");

fetch('json/selectors.json')
  .then(response => response.json())
  .then(data => {
    main.addEventListener('click', (event) => {
      main.textContent = "...";
      main.classList.add("animate__animated", "animate__rubberBand", "animate__infinite");
      main.classList.remove("animate__tada");
      setTimeout(() => {
        let random = Math.floor(Math.random() * data.selectors.length);
        main.textContent = data.selectors[random];
        main.classList.add("animate__tada");
        main.classList.remove("animate__rubberBand", "animate__infinite");
      }, 2000);
    });
  })
  .catch(error => {
    console.error('Error fetching selectors:', error);
  });
