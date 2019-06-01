dragula([document.querySelector('#left'), document.querySelector('#right')]);

elementList = document.querySelectorAll('.ittinery-list__place');

elementList.forEach(myFunction);

function myFunction(value) {
    value.addEventListener("mouseup", function myFunction() {        
    var x = document.getElementById("drag");
    var y = document.querySelector('#right > div') !== null;
        console.log(y);
        if (y) {
          x.style.display = "none";
        } else {
          x.style.display = "block";  
        }
      });
}