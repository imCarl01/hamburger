// page 2

document.addEventListener("DOMContentLoaded",function(){
    
    var countCart = 0;
    var numberInCart = document.getElementById("cartCount");
    var buyMeButton = document.getElementById("buy-me");

    for(var i = 0; i<6; i++){
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            countCart++;
            numberInCart.textContent = countCart;
    
        })  
    }
    // buyMeButton.addEventListener("click", function(){

    // })

})