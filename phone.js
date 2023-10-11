



document.getElementById('phoneplus').addEventListener('click', function(){
let newcount=UpdatePhoneNumber(true)
SetAllTotal(newcount)

SetTotalPrice()


})



document.getElementById('minuss').addEventListener('click', function(){
    let newcount=UpdatePhoneNumber(false)
    SetAllTotal(newcount)
    SetTotalPrice()
})
    
    






    function UpdatePhoneNumber(MORE) {

        let PinP=document.getElementById('phoneinput');
        let Pconvert=PinP.value;
        let Phon=parseInt(Pconvert);
        let newPnum;
        if(MORE === true){
            newPnum= Phon +1;
        }
        else{
            newPnum =Phon -1;
        }
        PinP.value= newPnum;
        return newPnum;
        
    }

    function SetAllTotal(value) {
        let showmoney=document.getElementById('phone-price')
        let AllTotal=value*1219;
        showmoney.innerText=AllTotal;
    }
    
    