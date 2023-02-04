const cinco=document.querySelector('.cinco');
const diez=document.querySelector('.diez');
const quince=document.querySelector('.quince');
const ticinco=document.querySelector('.ticinco');
const cincuenta=document.querySelector('.cincuenta');

const tipResult=document.querySelector('#tip-amount-result');
const totalAmount=document.querySelector('#total-amount-result')
var varAmout=0;
var peopleResult=0;
let billResult=0;
const botones=document.querySelectorAll('.amout');

cinco.addEventListener('click', function(){
        varAmout=0.05
        resultadoTotal();
    })
diez.addEventListener('click', function(){
        varAmout=0.10
        resultadoTotal();
    })
quince.addEventListener('click', function(){
        varAmout=0.15
        resultadoTotal();
    })
ticinco.addEventListener('click', function(){
        varAmout=0.25
        resultadoTotal();
    })
cincuenta.addEventListener('click', function(){
        varAmout=0.50
        resultadoTotal();
    })


function tomaContenidoBill(value){
    
    billResult=value
   
    resultadoTotal();
    
}
function tomaContenidoPeople(value){
    peopleResult=value
    resultadoTotal();
    
}

botones.forEach(boton =>{
    boton.addEventListener('click', clickEnBoton);
})
function clickEnBoton(){
    console.log('si llego');
   
    this.classList.toggle('activo');
    selectTip();
}


function selectTip(){
    console.log('si lego');
    if(cinco.classList.contains('activo')){
        
        diez.classList.remove('activo');
        quince.classList.remove('activo');
        ticinco.classList.remove('activo');
        cincuenta.classList.remove('activo');
    }
    else if(diez.classList.contains('activo')){
       
        cinco.classList.remove('activo');
        quince.classList.remove('activo');
        ticinco.classList.remove('activo');
        cincuenta.classList.remove('activo');
    }
}

function resultadoTotal(){
   
    
    if(billResult!=0 && varAmout!=0 && peopleResult!=0){
        var totalForPerson=0;
        var totalTipForPerson=0;
        totalTipForPerson=billResult*varAmout;
        totalTipForPerson=(totalTipForPerson/peopleResult).toFixed(2);
        totalForPerson=billResult*varAmout;
        totalForPerson=+billResult+totalForPerson;
        console.log(typeof totalForPerson);
        console.log(totalForPerson);
        totalForPerson/=peopleResult;
        console.log(totalForPerson);
        totalForPerson=totalForPerson.toFixed(2);
        billResult 
        varAmout;
        peopleResult;
        
        tipResult.innerText='$'+totalTipForPerson;
        totalAmount.innerText='$ '+totalForPerson;
    }
   
}