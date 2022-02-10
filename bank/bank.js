//  input id 
function inputField (id){
    const inputId = document.getElementById(id);
    const inputAmountText = inputId.value;
    const inputAmount = parseFloat(inputAmountText)
    //  emty string
    document.getElementById(id).value = ""
    return inputAmount;
}
//  update deposit and withdraw
function updateTotalField(totalField,currentMoney){
    const totalFieldAmount = document.getElementById(totalField);
    const totalFieldMoneyText = totalFieldAmount.innerText;
    const totalFieldMoney = parseFloat(totalFieldMoneyText);
    totalFieldAmount.innerText = totalFieldMoney + currentMoney;
   }
//    total balance
function getCurrentBalance(){
    const totalBalance = document.getElementById("total-balance");
    const totalBalanceText = totalBalance.innerText;
    const updateBalance = parseFloat(totalBalanceText);
    return updateBalance
}
// total calculation
function updateTotalAmount(currentBalance,isAdd){
    const totalBalance = document.getElementById("total-balance");
    const updateBalance = getCurrentBalance();
    if(isAdd == true){
        totalBalance.innerText = updateBalance + currentBalance
    }
    else{
        totalBalance.innerText = updateBalance - currentBalance
    }

}

//  deposit btn
 document.getElementById('deposit-btn').addEventListener("click",function(){
    const depositAmount = inputField("deposit-input");
   if(depositAmount > 0){
    updateTotalField("deposit-total",depositAmount);
    updateTotalAmount(depositAmount,true)
   }
   else{
       alert("pls use positive number")
   }
});
// withdraw btn
 document.getElementById("withdraw-btn").addEventListener("click",function(){
   const withdrawAmount = inputField("withdraw-input")
   const amount = getCurrentBalance()
    if(withdrawAmount > 0 && withdrawAmount < amount ){
        updateTotalField("withdraw-total",withdrawAmount)
        updateTotalAmount(withdrawAmount,false)
    }
    else{
        alert("use positive number or you have not available money right now plz try again")
    }
 })