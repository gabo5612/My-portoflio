/* 
    -hacer la accion correspondiente dependiendo el boton 

    -cuando se seleccione el boton de algun simbolo se debe poner los numeros en otro campo o pasar los primeros numeros a otro campo para poder compararlos y hacer la operacion matemaatica listo 
    -Tomar los numeros como string de esa manera  será mas facil agregarlos a la pantalla y luego hacer los calculos matematicos listo 
     hacer una condicional que se active cuando se presione un simbolo (debe haber una condicion de que el digts>=1)
    */

  

const screenSpan=document.querySelector('#screenSpan');

const  deleter=document.getElementById('delete');
const  valor=document.getElementById('valor');
const  percentage=document.getElementById('percentage');
const  divider=document.getElementById('divider');
const  seven=document.getElementById('seven');
const  eight=document.getElementById('eight');
const  nine=document.getElementById('nine');
const  multiplier=document.getElementById('multiplier');
const  four=document.getElementById('four');
const  five=document.getElementById('five');
const  six=document.getElementById('six');
const  negative=document.getElementById('negative');
const  one=document.getElementById('one');
const  two=document.getElementById('two');
const  three=document.getElementById('three');
const  plus=document.getElementById('plus');
const  zero=document.getElementById('zero');
const  comma=document.getElementById('comma');
const  equal=document.getElementById('equal');
var digits=[];
var digit2=[];
var symbols=[];
var resultado=0;
var val=0; 
var numb=0;
var numb2=0;

deleter.addEventListener('click',borrador);
valor.addEventListener('click',operation);
percentage.addEventListener('click',operation);

seven.addEventListener('click',catcher);
eight.addEventListener('click',catcher);
nine.addEventListener('click',catcher);
four.addEventListener('click',catcher);
five.addEventListener('click',catcher);
six.addEventListener('click',catcher);
one.addEventListener('click',catcher);
two.addEventListener('click',catcher);
three.addEventListener('click',catcher);

zero.addEventListener('click',catcher);
comma.addEventListener('click',catcher); /* no se te olvide lo de la coma*/
equal.addEventListener('click',operation); /*falta esto*/
console.log('val '+val+ ' numb '+ numb +' numb2 '+ numb2 + ' resultado '+ resultado );
divider.addEventListener('click',function(){
    this.classList.add('active');
    if(this.classList.contains('active')){
        multiplier.classList.remove('active');
        negative.classList.remove('active');
        plus.classList.remove('active');
        symbols.push(1);
    }
    val=1;

});
multiplier.addEventListener('click',function(){
    
    this.classList.add('active');
    if(this.classList.contains('active')){
        divider.classList.remove('active');
        negative.classList.remove('active');
        plus.classList.remove('active');
        symbols.push(2);
    }
    
    val=1;
});
negative.addEventListener('click',function(){
    this.classList.add('active');
    if(this.classList.contains('active')){
        multiplier.classList.remove('active');
        divider.classList.remove('active');
        plus.classList.remove('active');
        symbols.push(3);
    }
    val=1;
});
plus.addEventListener('click',function(){
    this.classList.add('active');
    if(this.classList.contains('active')){
        multiplier.classList.remove('active');
        negative.classList.remove('active');
        divider.classList.remove('active');
        symbols.push(4);
    }
    val=1;
});


function catcher(){
    if (val==0){   
    var cal1='';
    digits.push(this.value);
    if(digits.length>=1){
        deleter.innerText='C'; 
    }
    
    for(let i=0; i<digits.length; i++) {
        cal1=cal1+digits[i];
        cal1*=1;
        numb=cal1;

      }
      screenSpan.innerText=cal1;
    }
    else if(val>=1){
        var cal2='';
        digit2.push(this.value);
        if(digit2.length>=1){
            deleter.innerText='C'; 
        }
        
        for(let i=0; i<digit2.length; i++) {
            cal2=cal2+digit2[i];
            cal2*=1;
            numb2=cal2;            
    
          }
          screenSpan.innerText=numb2;
    }
}


console.log('val '+val+ ' numb '+ numb +' numb2 '+ numb2 + ' resultado '+ resultado );

function operation(){
    
    if(this.value==='csymbol'){
        numb=numb*-1
        screenSpan.innerText=numb;
        
    }
    else if(this.value==='%'){
        numb=numb/100;
        screenSpan.innerText=numb;
    }
    else if(symbols.includes(1)==true){
       
        resultado=numb/numb2; 
        screenSpan.innerText=resultado
        
        resultado=numb;
        digits=[]
        digit2=[];
        symbols=[];
        val=1;
    }
    else if(symbols.includes(2)==true){
        resultado=numb*numb2;
        screenSpan.innerText=resultado
        
        resultado=numb;
        digits=[]
        digit2=[];
        symbols=[];
        val=1;
    }
    else if(symbols.includes(3)==true){
        resultado=numb-numb2;
        screenSpan.innerText=resultado
        
        resultado=numb;

        digits=[]
        digit2=[];
        symbols=[];
        val=1;
    }
    else if(symbols.includes(4)==true){
        resultado=numb+numb2;
        screenSpan.innerText=resultado;
        
        resultado=numb;
        if(resultado==numb && symbols.includes(4)==true){
           resultado=resultado+numb2; 
           screenSpan.innerText=resultado;
        }
        digits=[]
        digit2=[];
        symbols=[];
        val=1;
    }
    console.log('val '+val+ ' numb '+ numb +' numb2 '+ numb2 + ' resultado '+ resultado );
}

function borrador(){
    deleter.innerText='C';
    digits=[];
    digit2=[];
    symbols=[];
    val=0;
    screenSpan.innerText='0';
        plus.classList.remove('active');
        multiplier.classList.remove('active');
        negative.classList.remove('active');
        divider.classList.remove('active');
    if((screenSpan.innerText='0') && (deleter.innerText='C')){
        
        deleter.innerText='AC'
    }
    
}











