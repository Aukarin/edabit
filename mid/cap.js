function capToFront(str){
    textU="";
    textD="";

    for (let i =0 ;i<str.length;i++){
    if(str[i]==str[i].toUpperCase()){  
        textU+=(str[i]);  
    }
    else{
        textD+=(str[i]);   
    }
}


return (textU+textD);
}
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));