window.onscroll = () => {
    if (window.scrollY > 50) {
      document.querySelector("#navbar-overlay").classList.add("navbarDown");
      document.querySelector("#logoImg").setAttribute("src", "./images/icons/logo2.png");
      let navItems = document.querySelectorAll(".nav-item");           
      console.log(navItems.length);
      for (let i = 0; i < navItems.length; i++) { 
        navItems[i].style.color = "#d61c22";    
      }  
    }
 }
console.log("test");

// let navItems = document.querySelectorAll(".nav-item");           
// console.log(navItems.length);