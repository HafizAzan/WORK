const AllShopCustom = document.querySelector(".custom-shop-container");
const cartItems = document.querySelector(".cart-items");

AllShopCustom.addEventListener('click', function(event){
    event.preventDefault();
    const currentEl = event.target;
    // console.log(currentEl,'currentEl');

 if(currentEl.classList.contains("shop-item-button")){
    const ShopItemsGoods = currentEl.closest(".shop-item");
    const ShopItemName = ShopItemsGoods.querySelector(".shop-item-title");
    const ShopItemImg = ShopItemsGoods.querySelector(".shop-item-image");
    const ShopItemsRs = ShopItemsGoods.querySelector(".shop-item-price");
    
    console.log({currentEl,ShopItemsGoods,ShopItemName,ShopItemImg,ShopItemsRs});

    const DivWorkCreate = document.createElement("div");
    DivWorkCreate.className = "cart-row";
    DivWorkCreate.innerHTML =  `<div class="cart-item cart-column">
    <img
      class="cart-item-image"
      src="${ShopItemImg?.src}"
      width="100"
      height="100"
    />
    <span class="cart-item-title">${ShopItemName?.innerText}</span>
  </div>
  <span class="cart-column">
    $ <span class="cart-price-item-item">${ShopItemsRs?.innerText}</span>
  </span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1" />
    <button class="btn btn-danger btn-remove" type="button">
      REMOVE
    </button>
  </div>`;

  cartItems.append(DivWorkCreate);
    console.log(DivWorkCreate,"DivWorkCreate");
    updateCartTotal();
 }
});

function  updateCartTotal(){
  const AllVariableDiv = document.querySelectorAll(".cart-items .cart-row");
  console.log(AllVariableDiv,"AllVariableDiv"); 
  let total = 0;
  if(AllVariableDiv?.length > 0){

    AllVariableDiv.forEach(function (singleCartRow){
      console.log(singleCartRow,"singleCartRow");

  const VariablePrice = singleCartRow.querySelector(".cart-price-item-item")?.innerText;
  console.log(VariablePrice,"VariablePrice");

  const VariableQuantity = singleCartRow.querySelector(".cart-quantity-input");
  console.log(VariableQuantity,"VariableQuantity");
 
  total += VariablePrice * VariableQuantity?.value;
  
  VariableQuantity.addEventListener('change' , function(e){
    const currentE = e.target;
    if(currentE.value <= 0){
      currentE.value ="1";
      console.log(currentE,"currentE");

    }
    updateCartTotal();
  });
  });

  const TotalPriceCart = document.querySelector(".cart-total-price");
  TotalPriceCart.innerText = `$ ${total.toFixed(2)}`
  console.log(total,"total")
  }

cartItems.addEventListener('click', function(Event){
Event.preventDefault();
const targetKiller = Event.target;
if(targetKiller.classList.contains("btn-remove")){
  const closeBtn = targetKiller.closest(".cart-row");
  const imgka = closeBtn.querySelector(".cart-item-image");
  const titleka = closeBtn.querySelector(".cart-item-title");
  const Quantityka = closeBtn.querySelector(".cart-quantity-input");
  // const totalka = closeBtn.querySelector(".cart-total-price");

  cartItems.removeChild(closeBtn);



}
console.log(targetKiller,"targetKiller");
});
};