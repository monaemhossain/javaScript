let phones = [
    {brand: "apple", camera: 48, price: 5000, battery: 4300},
    {brand: "samsung", camera: 200, price: 3800, battery: 5000},
    {brand: "xiaomi", camera: 108, price: 2000, battery: 5000},
    {brand: "google", camera: 48, price: 1800, battery: 4300}
]

function cheapPrice(checkPrice){
    let cheapest = checkPrice[0];
    for(let i = 0; i < checkPrice.length; i++){
        let phone = checkPrice[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const cheapestPhone = cheapPrice(phones);
console.log(cheapestPhone);