const cipher_ = (message,offset) => {

  
  let to_codeascii= [];
  let applying_offset =[];
  let ascii_to_cipher = [];
  
  for(let i =0 ; i< message.length; i++) {
    to_codeascii.push(message.charCodeAt(i));
    applying_offset.push((to_codeascii[i] + offset -65)%26 +65);
    ascii_to_cipher.push(String.fromCharCode(applying_offset[i]));
    }
    let strascii= ascii_to_cipher.join ("");
    return (strascii)
  }
  
  
  const decipher_ = (messagede,offsetde) => {
  let tocodeascii_de = [];
  let applying_offset_de =[];
  let ascii_to_cipher_de = [];
  
    for (let i=0; i <messagede.length; i++) {
    
     tocodeascii_de.push(messagede.charCodeAt(i));
     applying_offset_de.push((Math.abs(tocodeascii_de[i]-offsetde -65))%26 +65);
     ascii_to_cipher_de.push(String.fromCharCode(applying_offset_de[i]));
    }
    let straasciide= ascii_to_cipher_de.join("");
    return (straasciide)
  }
  

window.cipher = {
encode: cipher_,
decode: decipher_,
};
