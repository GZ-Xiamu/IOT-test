let mybutton = document.querySelector('button');


// trigger the thingspeak field link to perform action
// field 1 = motor 1 ; field 2  = motor 2;
// field 1 = 0 (close)/ 1(open) ; field 2 = 0 (close)/ 1(open)
// set the time out to close the open window, as the button will open a link
let myWindow;

//open motor 1
document.getElementById('1').onclick = function (){
    let word = document.getElementById('1').value;
    if (word.match('Open')){
        document.getElementById("1").value= "Close";
        document.getElementById("1").style.backgroundColor = 'red';
        myWindow = window.open("https://api.thingspeak.com/update?api_key=BIU94GXY729I4YB6&field1=1", "myWindow", "width=200,height=100");
        setTimeout(function(){myWindow.close();},1000);
    }else {
        document.getElementById("1").value= "Open";
        document.getElementById("1").style.backgroundColor = '#4CAF50'
        myWindow = window.open("https://api.thingspeak.com/update?api_key=BIU94GXY729I4YB6&field1=0", "myWindow", "width=200,height=100");
        setTimeout(function(){myWindow.close();},1000);
    }
}

//open motor 2
document.getElementById('2').onclick = function (){
    let word = document.getElementById('2').value;
    if (word.match('Open')){
        document.getElementById("2").value= "Close";
        document.getElementById("2").style.backgroundColor = 'red';
        myWindow = window.open("https://api.thingspeak.com/update?api_key=BIU94GXY729I4YB6&field2=1", "myWindow", "width=200,height=100");
        setTimeout(function(){myWindow.close();},1000);
    }else {
        document.getElementById("2").value= "Open";
        document.getElementById("2").style.backgroundColor = '#4CAF50'
        myWindow = window.open("https://api.thingspeak.com/update?api_key=BIU94GXY729I4YB6&field2=0", "myWindow", "width=200,height=100");
        setTimeout(function(){myWindow.close();},1000);
    }
}

//set the weight for feeder 1
document.getElementById('5').onclick = function(){
    let KG1 = document.getElementById('KG1').value;
    if(KG1 === ""){
        alert('Please key in the weight value before submit');
    }else{
        let url = new URL('https://api.thingspeak.com/update?api_key=BIU94GXY729I4YB6&field7=0');
        var search_params = url.searchParams;
        // new value of "field7" is set to user input
        search_params.set('field7', KG1);
        // change the search property of the main url
        url.search = search_params.toString();
        // the new url string
        var new_url = url.toString();
        //open the new url to trigger the update field
        myWindow = window.open(new_url, "myWindow", "width=200,height=100");
        setTimeout(function(){myWindow.close();},1000);
    } 
}
//set the weight for feeder 2
document.getElementById('6').onclick = function(){
    let KG2 = document.getElementById('KG2').value;
    if(KG2 === ""){
        alert('Please key in the weight value before submit');
    }else{
        let url = new URL('https://api.thingspeak.com/update?api_key=BIU94GXY729I4YB6&field8=0');
        var search_params = url.searchParams;
        // new value of "field6" is set to user input
        search_params.set('field8', KG2);
        // change the search property of the main url
        url.search = search_params.toString();
        // the new url string
        var new_url = url.toString();
        //open the new url to trigger the update field
        myWindow = window.open(new_url, "myWindow", "width=200,height=100");
        setTimeout(function(){myWindow.close();},1000);
    } 
}
//set the time and sent input from user to thingspeak field
document.getElementById('Timer').onclick = function(){
    let time1 = document.getElementById('time1').value;
    let time2 = document.getElementById('time2').value;
    let time3 = document.getElementById('time3').value;
    if(time1  === "" || time2 === "" || time3 ===""){
        alert('Please make sure all the time have been set');
    }else{
        let url = new URL('https://api.thingspeak.com/update?api_key=BIU94GXY729I4YB6&field6=0');
        //remove the ":"  
        realtime1 = time1.replace(/:/g, "");
        realtime2 = time2.replace(/:/g, "");
        realtime3 = time3.replace(/:/g, "");
        let arrayOfTime = [realtime1,realtime2,realtime3] 
        let timer = arrayOfTime.join('');
        var search_params = url.searchParams;
        // new value of "field6" is set to user input, add a "1" before the timer to make sure the morning time start with "0" will bot be filter out in thingspeaks
        search_params.set('field6', 1+timer);
        // change the search property of the main url
        url.search = search_params.toString();
        // the new url string
        var new_url = url.toString();
        //open the new url to trigger the update field
        myWindow = window.open(new_url, "myWindow", "width=200,height=100");
        setTimeout(function(){myWindow.close();},1000);
    } 
}
