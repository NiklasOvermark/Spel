
//function for text file(That not working in google chrome)
function aboutPianoTiles(){
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


