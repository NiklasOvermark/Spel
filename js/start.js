function processForm(){
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    l = unescape(temp[1]);
    document.getElementById("data").innerHTML = l;
}
newFunction();


