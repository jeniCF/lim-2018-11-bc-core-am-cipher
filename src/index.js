document.getElementById("main-page").style.display = "none";
    
    
document.getElementById("start").addEventListener("click", function(){
    event.preventDefault();
    document.getElementById("main-page").style.display = "block";
    document.getElementById("first-page-title").style.display = "none";
    });


let ciphertext = document.getElementById("cipherbutton").addEventListener("click", function() {

let offseten = parseInt(document.getElementById("offsetin").value);
let messageen = document.getElementById("messagetocipher").value;
let messageentrance= cipher.encode(messageen,offseten);
console.log(messageentrance);



document.getElementById("result").innerHTML = 3 ;
});


