function Myfun(){

    let message = document.getElementById("demo");
    let values = document.getElementById("getvalue").value;
    
    message.innerHTML = '';
    try{
        values = Number(values);
        if(values > 10) throw "big value";
        if(isNaN(values)) throw "enter number";
        if(values < 0) throw "negative number";
        if(values == undefined) throw "empty";
       
    }catch(err){
       message.innerHTML =  "input is " + err;
    }
    finally{
        document.getElementById("getvalue").innerHTML = '';
    }
}