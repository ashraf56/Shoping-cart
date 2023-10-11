document.getElementById('case-increement').addEventListener('click',function(){

CasENUmber(true)


setAllelement()
})

document.getElementById('case-decreement').addEventListener('click',function(){

 
  CasENUmber(false)
  setAllelement()

})


function CasENUmber(CS) {
    
    let inputnum=document.getElementById('case-input') ;
    let Casevslue=inputnum.value ;
    let Caseinput=parseInt(Casevslue);
    let newCaseNUm;


    if(CS===true ){
           newCaseNUm=Caseinput + 1;
    }
    else{
        if(Caseinput <= 0){
            alert('error')
            return;
        }
       newCaseNUm=Caseinput - 1;
    }

  
     inputnum.value=newCaseNUm;


      let Caseprice=document.getElementById('case-price');
       let CaseTotal=newCaseNUm*59;
        Caseprice.innerText=CaseTotal;
}

