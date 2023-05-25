const cart=document.querySelector(".cart")
// document.getElementById("cartRemove").addEventListener("click",closeeCart);
const cartClose=document.getElementById("cartRemove");
const cartOpen=document.querySelector(".logo")
cartClose.addEventListener("click",closeeCart);
cartOpen.addEventListener("click",closeeCart);
let isclosed=0;
console.log(cartRemove);
const addtoCart=document.querySelector(".btn");
addtoCart.addEventListener("click",addCart);
function closeeCart(){
    if(!isclosed){
        console.log("yes")
        cart.classList.add("close")
        // cart.style.left="100%";
        isclosed=1;
    }
    else{
        isclosed=0;
        console.log("opening")
        cart.classList.remove("close")
        // cart.style.right="10rem"
    }
}
function addCart(){
    cart.innerHTML+=`<div class="cart-box">
    <img src="1.jpg" alt="" class="cart-img">
    <div class="details">
        <div class="cart-product-title fontss">GESSO</div>
        <div class="cart-price fontss">Price: $150</div>
        <input type="number fontss" value="1" class="cart-quantity" id="">
    </div>
    <div class="remove-btn">
        <i class='fa fa-close cart-remove' style='color: red' ></i>
    </div>
</div>`
}
