const cart=document.querySelector(".cart")
const cartClose=document.getElementById("cartRemove");
const cartOpen=document.querySelector(".logo");
const itemsIncart = [];
const proceed=document.querySelector('.proceed')
proceed.addEventListener('click',()=>{
    alert('There is nothing ahead!')
})
cartOpen.onclick=()=>{
    cart.classList.remove("close");
}
cartClose.onclick=()=>{
    cart.classList.add("close");
}

if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}

function ready()
{
    var removeCartBtns=document.getElementsByClassName('cart-remove');
    // for(var i=0;i<removeCartBtns.length;i++){
    //     var button=removeCartBtns[i];
    //     button.addEventListener("click",removeCartItem);
    // }
    var quantityInputs=document.getElementsByClassName('cart-quantity');
    // for(var i=0;i<quantityInputs.length;i++){
    //    var input=quantityInputs[i]
    //    input.addEventListener("change",quantityChanged)
    // }
    updateTotal()
    var addToCart=document.getElementsByClassName('add-btn')
    for(var i=0;i<addToCart.length;i++){
        var button=addToCart[i]
        button.addEventListener("click",addCartClicked)
    }
}

function addCartClicked(event){
    var button=event.target;
    var buttonparent=button.parentElement
    var shopProduct=buttonparent.parentElement
    var priceParent=shopProduct.parentElement
    // console.log(shopProduct)
    var title=shopProduct.getElementsByClassName('product-title')[0].innerText
    var price=priceParent.getElementsByClassName('product-price')[0].innerText
    var productImage=priceParent.getElementsByClassName('image')[0].src
    price.replace("Price: ₹","");
    addProduct(title,price,productImage);
    updateTotal();

}
function addProduct(title,price,productImage){
    console.log("called")
    var cartbox=document.createElement("div")
    cartbox.classList.add('cart-box')
    var cartitems=document.getElementsByClassName('cart-content')[0]
    var cartItemsnames=cartitems.getElementsByClassName('cart-product-title')
    // for(var i=0;i<cartItemsnames.length;i++){
    //     // console.log(cartItemsnames[i])
    //     console.log(title,cartItemsnames[i].getElementsByClassName('cart-product-title'))
    //     if(title==cartItemsnames[i].getElementsByClassName('cart-product-title')){
    //         alert('Product is already in cart')
    //         return;
    //     }
    // }
    for(var i=0;i<itemsIncart.length;i++){
        if(title==itemsIncart[i]){
            alert('Product is already in cart')
            return;
        }
    }
    console.log(price)
    var cartBoxContent=`<img src="${productImage}" alt="" class="cart-img">
    <div class="details">
    <div class="cart-product-title fontss">${title}</div>
    <div class="cart-price fontss">${price}</div>
    <input type="number" value="1" class="cart-quantity fontss"  min="1" max="10" id="quantity" name="quantity">
    </div>
    <!-- <div class="remove-btn"> -->
    <i class='fa fa-close cart-remove' style='color: red' ></i>
    <!-- </div> -->`
    cartbox.innerHTML=cartBoxContent;
    cartitems.append(cartbox)
    cartbox.getElementsByClassName('cart-remove')[0].addEventListener('click',(event,title)=>{
        removeCartItem(event);
        removefromcart(title);
    })
    cartbox.getElementsByClassName('cart-quantity')[0].addEventListener('click',quantityChanged)
    itemsIncart.push(title)
}

function removefromcart(title){
    console.log("callled again")
    const index = itemsIncart.indexOf(title)
    itemsIncart.splice(index,1)
}

function quantityChanged(event){
    var input=event.target;
    if(isNaN(input.value) || input.value<=0){
        input.value=1;
    }
    updateTotal();
}

function removeCartItem(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove()
    updateTotal();
}

function updateTotal()
{ 
    var cartContent=document.getElementsByClassName('cart-content')[0];
    var cartBoxes=cartContent.getElementsByClassName('cart-box')
    var total=0;
    for(var i=0;i<cartBoxes.length;i++){
        var cartBox=cartBoxes[i];
        var quantityElement=cartBox.getElementsByClassName('cart-quantity')[0]
        var priceElement=cartBox.getElementsByClassName('cart-price')[0]
        var quantity=quantityElement.value
        var price=parseFloat(priceElement.innerText.replace("Price: ₹",""));
        // console.log(priceElement)

        total=total+(price*quantity);
        total=Math.round(total*100)/100
        document.getElementsByClassName("total-price")[0].innerText="₹"+total;

    }
}















// cartClose.addEventListener("click",closeeCart);
// cartOpen.addEventListener("click",closeeCart);
// let isclosed=0;
// console.log(cartRemove);
// const addtoCart=document.querySelector(".btn");
// addtoCart.addEventListener("click",addCart);
// function closeeCart(){
//     if(!isclosed){
//         console.log("yes")
//         cart.classList.add("close")
//         // cart.style.left="100%";
//         isclosed=1;
//     }
//     else{
//         isclosed=0;
//         console.log("opening")
//         cart.classList.remove("close")
//         // cart.style.right="10rem"
//     }
// }
// function addCart(){
//     cart.innerHTML+=`<div class="cart-box">
//     <img src="1.jpg" alt="" class="cart-img">
//     <div class="details">
//         <div class="cart-product-title fontss">GESSO</div>
//         <div class="cart-price fontss">Price: $150</div>
//         <input type="number fontss" value="1" class="cart-quantity" id="">
//     </div>
//     <div class="remove-btn">
//         <i class='fa fa-close cart-remove' style='color: red' ></i>
//     </div>
// </div>`
// // cartClose=document.getElementById("cartRemove");
// }
