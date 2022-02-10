//  input id 
function inputField (id){
    const inputId = document.getElementById(id);
    const inputAmountText = inputId.value;
    const inputAmount = parseFloat(inputAmountText)
    //  emty string
    document.getElementById(id).value = ""
    return inputAmount;
}


//  deposit btn
 document.getElementById('deposit-btn').addEventListener("click",function(){
    const depositAmount = inputField("deposit-input")
    console.log(depositAmount)
});
// withdraw btn
 document.getElementById("withdraw-btn").addEventListener("click",function(){
   const withdrawAmount = inputField("withdraw-input")
 })