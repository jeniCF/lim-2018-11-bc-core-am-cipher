document.getElementById("main-page").style.display = "none";
    

document.getElementById("start").addEventListener("click", function(){
    event.preventDefault();
    document.getElementById("main-page").style.display = "block";
    document.getElementById("first-page-title").style.display = "none";
    });
  

    document.getElementById("cipherbutton").addEventListener("click", function() { 

   if (document.getElementById("offsetin").value === "") {
    alert ("Debe seleccionar un número");
    }
   else {
    let offseten= parseInt(document.getElementById("offsetin").value);
    let messageen = (document.getElementById("messagetocipher").value).toUpperCase();
    let messageentrance= cipher.encode(offseten,messageen);
    document.getElementById("result").value = messageentrance;
   }
});


document.getElementById("decipherbutton").addEventListener("click", function() {
    if(document.getElementById("offsetin").value === ""){
    alert ("Debe seleccionar un número");
    }
   else {
    let offseten = parseInt(document.getElementById("offsetin").value);    
    let messageen = (document.getElementById ("result").value).toUpperCase();

    let messageentrance= cipher.decode(offseten,messageen);
    document.getElementById("messagetodecipher").value = messageentrance;
   }
    });


document.getElementById("clean").addEventListener("click",function (){
     let clean = "";    
    document.getElementById("messagetocipher").value= clean; 
    document.getElementById ("messagetodecipher").value= clean;
    document.getElementById("result").value = clean;
    document.getElementById("offsetin").value=clean;
    });

