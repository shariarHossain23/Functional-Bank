document.getElementById("log-in-btn").addEventListener("click",function(){
    const inputEmail = document.getElementById("email-input").value;
    const inputPassword = document.getElementById("input-password").value;

    if(inputEmail == "shariar23@gmail.com" && inputPassword == "shariar"){
        window.location = "../bank/bank.html"
    } 
    else{
        alert("email:shariar23@gmail.com password:shariar")
    }
   
})