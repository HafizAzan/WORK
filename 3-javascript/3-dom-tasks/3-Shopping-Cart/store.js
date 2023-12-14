const AllShopCustom = document.querySelector(".custom-shop-container");
const cartItems = document.querySelector(".cart-items");

AllShopCustom.addEventListener('click', function(event){
    event.preventDefault();
    const currentEl = event.target;
    console.log(currentEl,'currentEl');

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
 }
});

const btnRemove = document.querySelectorAll(".btn-remove");
btnRemove.forEach(function (single){
    single.addEventListener('click' , function(event){
        const targetKill = event.target;
        if(confirm("sach mai aap delete krna chatay hain ?")){
            targetKill.parentElement.parentElement.parentElement.parentElement.remove();
        console.log("deleted!")  
        }
    });
});
