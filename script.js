
//Caroussel
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems,{duration:300,  fullWidth:true, indicators:true,});
    instances.next();

  });

 // Navbar
const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
const instancesDropdown = M.Dropdown.init(elemsDropdown, {
        coverTrigger: false
    });
const elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav, {
        edge: "left"
    });


    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.materialboxed');
        var instance = M.Materialbox.init(elems, options);
        instance.open();
      });

    
      