// Selecting Side Navbar

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")


menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})


// Product Search 


var productContainer = document.getElementById("productContainer");
var productList = productContainer.querySelectorAll("div");
var search = document.getElementById("search");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("h1").textContent;

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});
