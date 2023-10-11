function Phonevalue(PH){
    let Phoneinput=document.getElementById('phone-input');
    let PHONEString=Phoneinput.value ;
    let PhoneQun=parseInt(PHONEString);

    let newPhone;
    if(PH==true){
        newPhone=PhoneQun+1;
    }
    else{
        if(PhoneQun <= 0){
            alert('error')
            return;
        }
        newPhone=PhoneQun-1;
    }
    Phoneinput.value=newPhone;
    let Phoneprice=document.getElementById('phone-price');
    let PhTotal=newPhone*1219;
     Phoneprice.innerText=PhTotal;

}

document.getElementById('phone-plus').addEventListener('click',function(){

    Phonevalue(true);
    setAllelement()
})
document.getElementById('phone-minuss').addEventListener('click',function(){

    Phonevalue(false);
    setAllelement()
})