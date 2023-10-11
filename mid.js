function ElementId(EID) {
    
    let Allprice= document.getElementById(EID);
    let Callprice=Allprice.innerText;
    let AllPrice=parseInt(Callprice);
    return AllPrice;
}

function amaountSet(EID,val) {
  let X=document.getElementById(EID);
  X.innerText=val;
}


function SetTotalPrice() {
    let PhonePrice=ElementId('phone-price');
    let CasePrice=ElementId('cart-price');

 let AllPrice=  PhonePrice + CasePrice;

    amaountSet('sub-total',AllPrice)

    let totalTax1=(AllPrice * 0.1).toFixed(2);
    let totalTax=parseFloat(totalTax1);
   amaountSet('tax',totalTax);

   let finalamaunt=AllPrice + totalTax;
   amaountSet('finaltax',finalamaunt)

  // let Tax=document.getElementById('')

}