
//function for text file(That's not working in google chrome)
function about(){
    var xmlhttp;
    if(window.XMLHttpRequest){

        xmlhttp=new XMLHttpRequest();
    }else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4){
            document.getElementById('result').innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","about.txt",true);
    xmlhttp.send();
}


