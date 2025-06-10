let price = [250, 645, 300, 900, 50];



for (let i = 0; i < price.length; i++) {
    console.log(`Before applying offer, price is :${price[i]}`);
    let afterOffer = price[i] * 0.10; // 10% of the price
    let newPrice = price[i] - afterOffer; // price after discount
    
    console.log(`After applying the offer, price is: ${newPrice}`);
}
