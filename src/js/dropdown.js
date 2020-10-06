const arrowDropdown = document.querySelector(".header__arrow__img");

dropDown = () => {
    const dropdownMenu = document.querySelector("#dropdown");

    arrowDropdown.classList.toggle("rotate");
    dropdownMenu.classList.toggle("show");
} 

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      const dropdowns = document.getElementsByClassName("test");
      let i; 
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          arrowDropdown.classList.remove("rotate");
        }
      }
    }
  }