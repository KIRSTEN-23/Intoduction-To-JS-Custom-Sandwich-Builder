displayCheck = () => {

    let data = JSON.parse(localStorage.getItem('order'));
    let items = document.getElementById('checkoutOrder');
    let totalArea = document.getElementById('totalOut');

    let checkTotal = 0;

    for(let i = 0; i < data.length; i++){

        let name = data[i].subName;
        let bread = data[i].subBread;
        let sauce = data[i].subSauce;
        let toppings = data[i].subToppings;
        let price = data[i].subPrice;
        
        checkTotal += price;

        items.innerHTML += `
        <div class="Summary">
            <div class="details">
                <p><h4>${name}</h4></p>
                <p><strong>Bread:</strong> ${bread}</p>
                <p><strong>Sauce:</strong> ${sauce}</p>
                <p><strong>Toppings:</strong> ${toppings.join(', ')}</p>
                <p class="price"><strong>R${price}.00</strong></p>
            </div>
        </div>`
        
        totalArea.innerHTML = "R" + checkTotal + ".00";

    }
}

addDiscount = () => {
    let promo = document.getElementById('promo').value;
    let data = JSON.parse(localStorage.getItem('order'));
    let totalArea = document.getElementById('totalOut');

    if(promo === "12345"){
        
        let checkTotal = 0;

        for(let i = 0; i < data.length; i++){

        let price = data[i].subPrice;
        checkTotal += price;

        let discount = 10/100*checkTotal
        let total = checkTotal - discount

        totalArea.innerHTML = "R" + total + "0";

    } 
} else {
        alert("Invalid promo code")
    }
}


resetReturn = () => {
    localStorage.removeItem('order');
    window.location.href = 'home.html';
}
