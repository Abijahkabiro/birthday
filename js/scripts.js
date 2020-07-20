var century;
var year;
var month;
var day;
var dayOfTheWeek ;

function getInput(){
    century = parseInt(document.getElementById("century").value);
    year= parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    day= parseInt(document.getElementById("date").value);
    console.log(century);
    console.log(year);
    console.log(month);
    console.log(day);
}
function calculateDay(){
    getInput(); 
    dayOfTheWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day) % 7;
    console.log(dayOfTheWeek);
    return(dayOfTheWeek);

}
function checkDayOfTheWeek(){
    day=calculateDay;
    checkgender();
    console.log(gender);
}
var daysOfTheWeek=["Sunday","Monday","Tuesday","Wedanesday","Thursday","Friday","Sunday"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Afua","Afua","Ama"];

//if(document.getElementById("male").checked==true){
   // gender="Male"
//}else{
  // gender="Female"
//}
//console.log(gender);
var gender = document.querySelector('input[name="gender"]:checked').value;
if (gender==="male"){
    if(daysOfTheWeek===0){
      alert("You were born on: " + day[0]);
      alert("Your Akan name is: " + maleNames[0]);
    } else if(daysOfTheWeek===1){
      alert("You were born on: " + day[1]);
      alert("Your Akan name is: " + maleNames[1]);
    } else if(daysOfTheWeek===2){
      alert("You were born on: " + day[2]);
      alert("Your Akan name is: " + maleNames[2]);
    } else if(daysOfTheWeek===3){
      alert("You were born on: " + day[3]);
      alert("Your Akan name is: " + maleNames[3]);
    } else if(daysOfTheWeek===4){
      alert("You were born on: " + day[4]);
      alert("Your Akan name is: " + maleNames[4]);
    } else if(daysOfTheWeek===5){
      alert("You were born on: " + day[5]);
      alert("Your Akan name is: " + maleNames[5]);
    } else if(daysOfTheWeek===6){
      alert("You were born on: " + day[6]);
      alert("Your Akan name is: " + maleNames[6]);
    }

  } else {
     if(daysOfTheWeek===0){
      alert("You were born on: " + day[0]);
      alert("Your Akan name is: " + femaleNames[0]);
    } else if(daysOfTheWeek===1){
      alert("You were born on: " + day[1]);
      alert("Your Akan name is: " + femaleNames[1]);
    } else if(daysOfTheWeek===2){
      alert("You were born on: " + day[2]);
      alert("Your Akan name is: " + femaleNames[2]);
    } else if(daysOfTheWeek===3){
      alert("You were born on: " + day[3]);
      alert("Your Akan name is: " + femaleNames[3]);
    } else if(daysOfTheWeek===4){
      alert("You were born on: " + day[4]);
      alert("Your Akan name is: " + femaleNames[4]);
    } else if(daysOfTheWeek===5){
      alert("You were born on: " + day[5]);
      alert("Your Akan name is: " + femaleNames[5]);
    } else if(daysOfTheWeek===6){
      alert("You were born on: " + day[6]);
      alert("Your Akan name is: " + femaleNames[6]);
    }
  }
 }