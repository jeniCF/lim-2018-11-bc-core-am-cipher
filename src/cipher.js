window.cipher = {

  // ... 
};

/* window es un objeto
dentro coloco cosas como
   name 
   lastname

   cypher debe tener dos metodos
   encode decode


windows.cipher ={
sum () => (
efks

)

rest () => (
  sdfds
)
encode:
decode:
} 
*/


const offset_= 1;
let message_= "Aaaaaaaa".toUpperCase();

const cipher = (message,offset) => {
let to_codeascii= [];
let applying_offset =[];
let ascii_to_cipher = [];

for(let i =0 ; i< message.length; i++) {
  to_codeascii.push(message.charCodeAt(i));
  applying_offset.push((to_codeascii[i] + offset -65)%26 +65);
  ascii_to_cipher.push(String.fromCharCode(applying_offset[i]));
  }
  console.log(ascii_to_cipher.join (""));
}

cipher(message_,offset_);


const offsetde_= 1;
let messagede_= "Bbbbbb".toUpperCase();

const decipher = (messagede,offsetde) => {
let tocodeascii_de = [];
let applying_offset_de =[];
let ascii_to_cipher_de = [];
debugger
  for (let i=0; i <messagede.length; i++) {
  
   tocodeascii_de.push(messagede.charCodeAt(i));
   applying_offset_de.push((Math.abs(tocodeascii_de[i]-offsetde -65))%26 +65);
   ascii_to_cipher_de.push(String.fromCharCode(applying_offset_de[i]));
  }
  console.log(ascii_to_cipher_de.join(""));
}

decipher(messagede_,offsetde_);