function compute()
{
      
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if(principal <= 0){
        alert("Please Enter a Positive Number");
        document.getElementById(principal).focus()
    }
    else{
        var interest = principal * years * rate/100;
        var updatedYear= end_year = new Date().getFullYear() + parseInt(years);

        var resultFinal = "If you Deposit <mark>"+principal +"</mark>,"+"<br>At an Interest Rate of <mark>"+rate+
        "%</mark>,<br>You will Receive an Amount of <mark>"+interest+
        "</mark>,<br>In the Year <mark>"+updatedYear+"</mark>.";

        document.getElementById("result").innerHTML = resultFinal;
    }

}
    
function displayVal(){
    var rangeVal = document.getElementById("rate").value;
    document.getElementById("updated_rate").textContent = rangeVal +"%";
}
        