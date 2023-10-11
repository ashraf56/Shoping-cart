function getELEMENT(ID) {
    let AlltxtID=document.getElementById(ID);
    let ALLTXTSTRING=AlltxtID.innerText;
    let finaltxt=parseFloat(ALLTXTSTRING);
    return finaltxt;
}

function Settaxt(ID,value) {
    let sub=document.getElementById(ID);
    sub.innerText=value;
}

function setAllelement() {
    let PhoNE=getELEMENT('phone-price');
    let CAsE=getELEMENT('case-price');

    let SubTotal=PhoNE+ CAsE;
Settaxt('subtotal',SubTotal);
let fullTax=(SubTotal * 0.1).toFixed(2);
let Fulltx=parseFloat(fullTax);
Settaxt('tax',Fulltx);
    
}