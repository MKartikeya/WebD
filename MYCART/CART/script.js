const cart=document.querySelector(".cart")
const filter=document.querySelector(".filter")
const filterClose=document.querySelector('.filter-close-btn')
const cartClose=document.getElementById("cartRemove");
const cartOpen=document.querySelector(".logo");
const filterOpen=document.querySelector(".filter-icon")
const sortLow=document.querySelector(".sort-low");
const sortHigh=document.querySelector(".sort-high");
const sortReset=document.querySelector(".sort-reset");
const search=document.querySelector(".search-btn");
const nothing=document.querySelector(".nothing")
const reset=document.querySelector(".refresh-btn")
const itemsIncart = [];
var resetItems=[{"title":"GESSO","price":229,"image":"1.jpg"},{"title":"RETARDER","price":119,"image":"2.jpg"},{"title":"LINSEED OIL","price":150,"image":"3.jpg"},{"title":"TURPENTINE","price":130,"image":"4.jpg"},{"title":"DRYING OIL","price":160,"image":"5.jpg"},{"title":"CAMLI-GEL","price":139,"image":"6.jpg"},{"title":"VARNISH","price":110,"image":"7.jpg"},{"title":"CERULEAN","price":260,"image":"8.jpg"},{"title":"MAGENTA","price":230,"image":"9.jpg"},{"title":"TITANIUM WHITE","price":220,"image":"10.jpg"},{"title":"CRIMSON LAKE","price":260,"image":"11.jpg"},{"title":"RAW UMBER","price":260,"image":"12.jpg"},{"title":"SCARLET LAKE","price":290,"image":"13.jpg"},{"title":"LEMON YELLOW","price":280,"image":"14.jpg"},{"title":"PRUSSIAN BLUE","price":260,"image":"15.jpg"},{"title":"ULTRAMARINE BLUE","price":220,"image":"16.jpg"},{"title":"VIRIDIAN HUE","price":170,"image":"17.jpg"}]
var filterStatus=0;

const proceed=document.querySelector('.proceed')
reset.addEventListener('click',()=>{
    console.log(resetItems)
    cartItemsData=[];
    resetItems.forEach((item)=>{
        cartItemsData.push(item)
    })
    console.log(cartItemsData)
    nothing.classList.add("nothing-close")
    updateSorted();
})
const constcartItemsData=[{"title":"GESSO","price":229,"image":"1.jpg"},{"title":"RETARDER","price":119,"image":"2.jpg"},{"title":"LINSEED OIL","price":150,"image":"3.jpg"},{"title":"TURPENTINE","price":130,"image":"4.jpg"},{"title":"DRYING OIL","price":160,"image":"5.jpg"},{"title":"CAMLI-GEL","price":139,"image":"6.jpg"},{"title":"VARNISH","price":110,"image":"7.jpg"},{"title":"CERULEAN","price":260,"image":"8.jpg"},{"title":"MAGENTA","price":230,"image":"9.jpg"},{"title":"TITANIUM WHITE","price":220,"image":"10.jpg"},{"title":"CRIMSON LAKE","price":260,"image":"11.jpg"},{"title":"RAW UMBER","price":260,"image":"12.jpg"},{"title":"SCARLET LAKE","price":290,"image":"13.jpg"},{"title":"LEMON YELLOW","price":280,"image":"14.jpg"},{"title":"PRUSSIAN BLUE","price":260,"image":"15.jpg"},{"title":"ULTRAMARINE BLUE","price":220,"image":"16.jpg"},{"title":"VIRIDIAN HUE","price":170,"image":"17.jpg"}]
var sortOrder=1 //low to high
//-1 for high to low
var cartItemsData=[{"title":"GESSO","price":229,"image":"1.jpg"},{"title":"RETARDER","price":119,"image":"2.jpg"},{"title":"LINSEED OIL","price":150,"image":"3.jpg"},{"title":"TURPENTINE","price":130,"image":"4.jpg"},{"title":"DRYING OIL","price":160,"image":"5.jpg"},{"title":"CAMLI-GEL","price":139,"image":"6.jpg"},{"title":"VARNISH","price":110,"image":"7.jpg"},{"title":"CERULEAN","price":260,"image":"8.jpg"},{"title":"MAGENTA","price":230,"image":"9.jpg"},{"title":"TITANIUM WHITE","price":220,"image":"10.jpg"},{"title":"CRIMSON LAKE","price":260,"image":"11.jpg"},{"title":"RAW UMBER","price":260,"image":"12.jpg"},{"title":"SCARLET LAKE","price":290,"image":"13.jpg"},{"title":"LEMON YELLOW","price":280,"image":"14.jpg"},{"title":"PRUSSIAN BLUE","price":260,"image":"15.jpg"},{"title":"ULTRAMARINE BLUE","price":220,"image":"16.jpg"},{"title":"VIRIDIAN HUE","price":170,"image":"17.jpg"}]
search.addEventListener('click',()=>{

    // console.log("searched")
    // resetItems=[];
    // cartItemsData.forEach((item)=>{
    //     resetItems.push(item)
    // })
    var searchWord=document.getElementById("search-input").value
    console.log(searchWord) 
    cartItemsData=[];
    var isFound=0
    constcartItemsData.forEach((item)=>{
        var curTitle=item.title
        let re = new RegExp(searchWord, "i");
        // console.log(curTitle.search(re))
        if(curTitle.search(re)>=0){
            cartItemsData.push(item)
            isFound=1
        }
    })
    if(!isFound){
        nothing.classList.remove("nothing-close")
    }
    else{
        nothing.classList.add("nothing-close")
    }
    // console.log(cartItemsData);
    updateSorted()
    document.getElementById("search-input").value="";
})
filterOpen.addEventListener('click',()=>{
    filter.classList.remove("filter-close");
    filterStatus=1;
})
filterClose.addEventListener('click',()=>{
    filter.classList.add("filter-close")
    filterStatus=0;
})
sortLow.addEventListener('click',()=>{
    console.log("clicked")
    sortOrder=1;
    cartItemsData.sort((a, b) => {
        return (a.price - b.price)*sortOrder;
    });
    updateSorted()
})
sortHigh.addEventListener('click',()=>{
    sortOrder=-1;
    cartItemsData.sort((a, b) => {
        return (a.price - b.price)*sortOrder;
    });
    updateSorted()
})
sortReset.addEventListener('click',()=>{
    // console.log(cartItemsData)
    cartItemsData=[];
    // console.log(cartItemsData)
    constcartItemsData.forEach((item)=>{
        cartItemsData.push(item)
    })
    // cartItemsData=constcartItemsData;
    // console.log(cartItemsData)
    updateSorted();
    console.log(constcartItemsData)
})
proceed.addEventListener('click',()=>{
    alert('There is nothing ahead!')
})
cartOpen.onclick=()=>{
    cart.classList.remove("close");
    var width = window.innerWidth;
    if(width<=800 && filterStatus==1){
        filter.classList.add("filter-close")
    }
    
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
    updateSorted()
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
    if(cartBoxes.length==0){
        document.getElementsByClassName("total-price")[0].innerText="₹0";

    }
}


function updateSorted(){

    var homeBox=document.getElementsByClassName("products")[0];
    homeBox.innerHTML="";
    // console.log(homeBox.innerHTML)
    var virhomebox=document.createElement("div")
    // console.log(cartItemsData.length)
    cartItemsData.forEach((item,index)=>{
        var homeproductbox=document.createElement("div")
        homeproductbox.classList.add("p1");
        homeproductbox.classList.add("product");
        var homeboxContent=`<img  class="image"src=${item.image} alt="">
            <div class="p">
                <p class="product-title">${item.title}</p>
                <button class="add-btn">
                    <img width="24" height="24" src="shopping-cart.gif" alt="shopping-cart--v1"/>
                </button>
            </div>
            <p class="product-price">Price: ₹${item.price}</p>`;
            // console.log(item.title)
    homeproductbox.innerHTML=homeboxContent;
    // console.log(homeproductbox.innerHTML)
    homeBox.append(homeproductbox);
    // console.log(homeBox.innerHTML)
    // virhomebox.append(homeproductbox);
    homeBox.getElementsByClassName("add-btn")[index].addEventListener('click',addCartClicked)
    })
}
