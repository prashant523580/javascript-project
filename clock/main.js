
function updateClock(){
    
    // get current time
    let dateTime = new Date();

    //extract  hour, minute , and second from date
    let currentHour = dateTime.getHours();
    console.log(currentHour);
    //  converted railway clock to am/pm clock
    let currentMeridiem = (currentHour < 12) ? "A.M" : "P:M";
    let currentMinute = dateTime.getMinutes();
    let currentSecond = dateTime.getSeconds();
    //pad 0 if hour minute second is less then 10
     currentHour = (currentHour > 12) ?  currentHour - 12 :"0"+ currentHour;
     currentHour = (currentHour == 0 ) ? 12 : "0" +  currentHour;
     currentMinute = (currentMinute < 10 ? "0" : '') + currentMinute;
     currentSecond = (currentSecond < 10 ? "0" : '') + currentSecond;
    // let currentTimeStr = currentHour + " : "+ currentMinute + " : " + currentSecond + currentMeridiem;
        document.getElementById("hours").innerHTML =  "" + currentHour;
        document.getElementById("minutes").innerHTML = ""+currentMinute;
        document.getElementById("seconds").innerHTML = ""+currentSecond;
    document.getElementById("meridiem").innerHTML = currentMeridiem;
    // document.getElementById("clock").innerHTML = currentTimeStr;
}
window.addEventListener("load", () => {

    setInterval(()=>{
        updateClock();
    },1000);
})