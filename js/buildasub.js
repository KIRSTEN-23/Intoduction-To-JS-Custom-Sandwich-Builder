realTimeCost = () => {

    realTimePrice = 0;

    let bread = document.getElementById("bread").value;
    
    if(bread === "French-bread"){
        realTimePrice = realTimePrice + 20;
    } else if(bread === "Whole-wheat"){
        realTimePrice = realTimePrice + 15;
    } else if(bread === "Multi-grain"){
        realTimePrice = realTimePrice + 25;
    }

    let toppingOptions = document.getElementsByName("toppings");
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            realTimePrice = realTimePrice + +toppingOptions[i].dataset.cost
        }
    }

    let sauceOptions = document.getElementsByName("sauce");
    for(let i = 0; i < sauceOptions.length; i++){
        if(sauceOptions[i].checked){
            realTimePrice = realTimePrice + +sauceOptions[i].dataset.cost
        }
    }

    console.log(realTimePrice);

    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00"

}

let subOrder = [];

makeSub = () =>{

    let subTotal = 0;

    let subName = document.getElementById("subName").value;
    let bread = document.getElementById("bread").value;

    if(bread === "French-bread"){
        realTimePrice = realTimePrice + 20;
    } else if(bread === "Whole-wheat"){
        realTimePrice = realTimePrice + 15;
    } else if(bread === "Multi-grain"){
        realTimePrice = realTimePrice + 25;
    }
    
          
    let toppingOptions = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            topArray.push(toppingOptions[i].value);
            subTotal = subTotal + +toppingOptions[i].dataset.cost
        }
    }

    subOrder.push({
        subName: subName,
        subBread: bread,
        subSauce: subSauce,
        subToppings: topArray,
        subPrice: subTotal
    });

    console.log(subOrder)

    document.getElementById("realTimeCost").innerHTML = "R0.00"
    document.getElementById("subForm").reset();

}

displayOrder = () => {
    
    let area = document.getElementById("checkoutOrder");

    area.innerHTML = "";

    for(let i = 0; i < subOrder.length; i++){

        let name = subOrder[i].subName;
        let bread = subOrder[i].subBread;
        let sauce = subOrder[i].subSauce;
        let toppings = subOrder[i].subToppings;
        let price = subOrder[i].subPrice;

        area.innerHTML += `
            <div class="Summary">
                <div class="details">
                    <h4 class="name"> ${name}</h4>
                    <p><strong>Bread:</strong> ${bread}</p>
                    <p><strong>Sauce:</strong> ${sauce}</p>
                    <p><strong>Toppings:</strong> ${toppings.join(', ')}</p>
                    <h4><p class="price">R${price}.00</p></h4>
                </div>
            </div>`

    }

}

checkOut = () => {
    let data = JSON.stringify(subOrder);
    localStorage.setItem('order', data);
    window.location.href = 'checkout.html';
}

