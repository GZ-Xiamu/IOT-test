//set the weight for feeder 1
document.getElementById('5').onclick = function(){
    let KG1 = document.getElementById('KG1').value;
    if(KG1 === ""){
        alert('Please key in the weight value before submit');
    }else{
        let url = new URL('https://api.thingspeak.com/update?api_key=BIU94GXY729I4YB6&field7=0');
        var search_params = url.searchParams;
        // new value of "field6" is set to user input
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