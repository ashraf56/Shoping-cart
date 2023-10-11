document.getElementById('increement').addEventListener('click', function(){

let newNum=UpdatecaseNUmber(true);
SetTotal(newNum)
SetTotalPrice()
})

document.getElementById('decreement').addEventListener('click',function () {
   

 let newNum=UpdatecaseNUmber(false);
SetTotal(newNum)
SetTotalPrice()

})

function UpdatecaseNUmber(isIncrese) {
    let plus=document.getElementById('inputnumber');
let plusplus=plus.value ;
let plusString=parseInt(plusplus);
let newnumber;
if(isIncrese === true){
     newnumber=plusString +1;
}
else{
    newnumber=plusString -1;
}
plus.value =newnumber;
return newnumber;
}

function SetTotal(value) {
    let showmoney=document.getElementById('cart-price')
    let AllTotal=value*59;
    showmoney.innerText=AllTotal;
}


