let bagItems = [];
onload();

function onload(){
    let BagItemStr = localStorage.getItem('bagItems');
    bagItems = BagItemStr ? JSON.parse(BagItemStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}
function AddtoBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    bagItemCountElement.innerText = bagItems.length;

}

function displayItemsOnHomePage(){
    let itemscontainer = document.querySelector('.items-container');

    let inneerHTML = '';
    items.forEach(item =>{
        inneerHTML += `<div class="item-container">
                <img src="${item.image}" class="item-img" alt="item-image">
                <div class="rating">
                    ${item.rating.stars} ⭐| ${item.rating.count} 
                </div>
    
                <div class="company-name">${item.company}</div>
    
                <div class="item-name">${item.item_name}</div>
    
                <div class="price">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="original-price">${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="AddtoBag(${item.id});">Add To Bag</button>
            </div>`
    })
    
    itemscontainer.innerHTML= inneerHTML;    
}
