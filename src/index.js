document.getElementById("main-page").style.display = "none";
    

document.getElementById("start").addEventListener("click", function(){
    event.preventDefault();
    document.getElementById("main-page").style.display = "block";
    document.getElementById("first-page-title").style.display = "none";
    });
       
document.getElementById("cipherbutton").addEventListener("click", function() { 
   let offseten = parseInt(document.getElementById("offsetin").value);
   if (offseten < 0 ) {
   alert ("Debe seleccionar un número mayor que 0")
   }
   else {
    let messageen = document.getElementById("messagetocipher").value;
    let messageentrance= cipher.encode(messageen,offseten);
    document.getElementById("result").value += messageentrance;
   }
});

document.getElementById("decipherbutton").addEventListener("click", function() {
    let offseten = parseInt(document.getElementById("offsetin").value);    
    let messageen = document.getElementById ("messagetodecipher").value;
    let messageentrance= cipher.decode(messageen,offseten);
    document.getElementById("result").value = messageentrance;
    });


document.getElementById("clean").addEventListener("click",function (){
     let clean = "";    
    document.getElementById("messagetocipher").value= clean; 
    document.getElementById ("messagetodecipher").value= clean;
    document.getElementById("result").value = clean;
    });

