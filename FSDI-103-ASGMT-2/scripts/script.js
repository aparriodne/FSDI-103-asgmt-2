function avocadoShop(){
    let itemName =  "Hass avococado"
    const pricePer = 1.5
    let amount = Number (prompt("How many do you want?"))
    let cost = (amount*pricePer) 
    let tax = (cost*.0725)
    let totalCost = (tax+cost)
    document.getElementById("text").innerHTML=`\
    <h5>Welcome to the ${itemName} shop</h5>
    <p>Item: ${itemName}</p>
    <p>Quantity needed? ${amount}</p>
    <p>Price per: $ ${pricePer}</p>
    <p>Before taxes: $ ${cost}</p>
    <p>Tax total: $ ${tax}</p>
    <p>Total Cost: $ ${totalCost}</p>
    `
};