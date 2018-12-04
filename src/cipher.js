const cipher_ = (offset,message) => {

  let to_codeascii= [];
  let applying_offset =[];
  let ascii_to_cipher = [];
  
  for(let i =0 ; i< message.length; i++) {

    to_codeascii.push(message.charCodeAt(i));
    
    if (to_codeascii[i] === 32) {
      applying_offset[i]= 32;
    }
    
    else {applying_offset.push((to_codeascii[i] + offset -65)%26 +65);
    }
    ascii_to_cipher.push(String.fromCharCode(applying_offset[i]));

  }
    let strascii= ascii_to_cipher.join ("");
    return (strascii)
  }
  
  
  const decipher_ = (offsetde,messagede) => {
  let tocodeascii_de = [];
  let applying_offset_de =[];
  let ascii_to_cipher_de = [];
  
  for (let i=0; i <messagede.length; i++) {
    
  tocodeascii_de.push(messagede.charCodeAt(i));

if (tocodeascii_de[i] === 32) {
  applying_offset_de[i] = 32;
  }

  else {

if (Math.sign((tocodeascii_de[i]-offsetde -65)%26)>=0)  {
  applying_offset_de.push((tocodeascii_de[i]-offsetde -65)%26 +65);
  }  
else {
  applying_offset_de.push (26-((Math.abs(tocodeascii_de[i]-offsetde -65))%26) +65);
  }
     /*applying_offset_de.push((Math.abs(tocodeascii_de[i]-offsetde -65))%26 +65);
    26 - math.abs todo ) +65 <= todo para ejemplos negativos */
  }
  ascii_to_cipher_de.push(String.fromCharCode(applying_offset_de[i]));
    }
    let straasciide= ascii_to_cipher_de.join("");
    return (straasciide)
  }
  

window.cipher = {
encode: cipher_,
decode: decipher_,
};
