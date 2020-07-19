function name(){
    var CC=parseInt(document.getElementById("century").value); 
    var YY=parseInt(document.getElementById("year").value); 
    var MM=parseInt(document.getElementById("month").value); 
    var DD=parseInt(document.getElementById("day").value);

    var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
}
    var dayOfWeek = parseInt(((CC/4)-2*CC-1) +((5*YY/4)) + ((26*(MM+1)/10)) +DD)%7;

    if (gender==="male"){
        if (dayOfWeek===0){
            alert ("You were born on: "+day[0]);
            alert("Your Akan name  is: "+maleNames[0]);
        }else if(dayOfWeek===1){
            alert("You were born on:"+day[1]);
            alert("You Akan name is: "+maleNames[1]);
        }else if(dayOfWeek===2){
            alert("You were born on:"+day[2]);
            alert("You Akan name is: "+maleNames[2]);
        }else if(dayOfWeek===3){
            alert("You were born on:"+day[3]);
            alert("You Akan name is: "+maleNames[2]);
        }else if(dayOfWeek===4){
            alert("You were born on:"+day[4]);
            alert("You Akan name is: "+maleNames[4]);
        }else if(dayOfWeek===5){
            alert("You were born on:"+day[5]);
            alert("You Akan name is: "+maleNames[5]);
        }else if(dayOfWeek===6){
            alert("You were born on:"+day[6]);
            alert("You Akan name is: "+maleNames[6]);
        }

    }else{
        if (dayOfWeek===0){
           alert ("You were born on: "+day[0]);
           alert("Your Akan name  is: "+femaleNames[0]);
        }else if(dayOfWeek===1){
           alert("You were born on:"+day[1]);
           alert("You Akan name is: "+femaleNames[1]);
        }else if(dayOfWeek===2){
           alert("You were born on:"+day[2]);
           alert("You Akan name is: "+femaleNames[2]);
        }else if(dayOfWeeK===3){
           alert("You were born on:"+day[3]);
           alert("You Akan name is: "+femaleNames[2]);
        }else if(dayOfWeek===4){
           alert("You were born on:"+day[4]);
           alert("You Akan name is: "+femaleNames[4]);
        }else if(dayOfWeek===5){
           alert("You were born on:"+day[5]);
           alert("You Akan name is: "+femaleNames[5]);
        }else if(dayOfWeek===6){
           alert("You were born on:"+day[6]);
           alert("You Akan name is: "+femaleNames[6]);
        }
    }
    if(day <=0 || day >31){
        console.log("You entered an invalid day") 
    }else{
        console.log("You entered a valid day")
    }
    if (month <=0 || month >12){
        console.log("You entered an invalid month")
    }else{
        console.log("You entered an valid month")
    }
}




