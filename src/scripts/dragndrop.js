dragula([document.querySelector('#left'), document.querySelector('#right')]);

function test() {
    var x = document.getElementById("drag");
    var y = document.querySelector('#right > div') !== null;
        console.log(y);
        if (y) {
          x.style.display = "none";
        } else {
          x.style.display = "block";  
        }
}