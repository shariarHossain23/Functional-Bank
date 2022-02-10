//  input id 
function inputField (id){
    const inputId = document.getElementById(id);
    const inputAmountText = inputId.value;
    const inputAmount = parseFloat(inputAmountText)
    //  emty string
    document.getElementById(id).value = ""
    return inputAmount;
}

function updateTotalField(totalField,currentMoney){
    const totalFieldAmount = document.getElementById(totalField);
    const totalFieldMoneyText = totalFieldAmount.innerText;
    const totalFieldMoney = parseFloat(totalFieldMoneyText);
    totalFieldAmount.innerText = totalFieldMoney + currentMoney;
   }


//  deposit btn
 document.getElementById('deposit-btn').addEventListener("click",function(){
    const depositAmount = inputField("deposit-input")
    updateTotalField("deposit-total",depositAmount)
});
// withdraw btn
 document.getElementById("withdraw-btn").addEventListener("click",function(){
   const withdrawAmount = inputField("withdraw-input")
   updateTotalField("withdraw-total",withdrawAmount)
 })