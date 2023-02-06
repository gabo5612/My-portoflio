/*  -Debe mostrar en pantalla cuando se presione un boton listo 
    -hacer la accion correspondiente dependiendo el boton 
    -Tomar los numeros del array, convertirlos en numeros y asignarlos a una variable listo 
    -cuando se seleccione el boton de algun simbolo se debe poner los numeros en otro campo o pasar los primeros numeros a otro campo para poder compararlos y hacer la operacion matemaatica 
    -Tomar los numeros como string de esa manera  será mas facil agregarlos a la pantalla y luego hacer los calculos matematicos

    -hacer que cuando se haga click en los simbolos se ponga background-color: #ffffff;
    color: #f6a20b; 
    -hacer que cuando se ponga un numero se cambie el ac a C listo */

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
var resultado=0;
var numb=0;

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
equal.addEventListener('click',catcher); /*falta esto*/

divider.addEventListener('click',function(){
    this.classList.add('active');
    if(this.classList.contains('active')){
        multiplier.classList.remove('active');
        negative.classList.remove('active');
        plus.classList.remove('active');
        
    }
    symbolOperation()
});
multiplier.addEventListener('click',function(){
    this.classList.add('active');
    if(this.classList.contains('active')){
        divider.classList.remove('active');
        negative.classList.remove('active');
        plus.classList.remove('active');
        
    }
    symbolOperation()
});
negative.addEventListener('click',function(){
    this.classList.add('active');
    if(this.classList.contains('active')){
        multiplier.classList.remove('active');
        divider.classList.remove('active');
        plus.classList.remove('active');
        
    }
    symbolOperation()
});
plus.addEventListener('click',function(){
    this.classList.add('active');
    if(this.classList.contains('active')){
        multiplier.classList.remove('active');
        negative.classList.remove('active');
        divider.classList.remove('active');
        
    }
    symbolOperation()
});

function symbolOperation(){
       
   
        
        var numb2='';
        digits.push(this.value);
        if(digits.length>=1){
            deleter.innerText='C'; 
        }
        
        for(let i=0; i<digits.length; i++) {
            numb2=cal1+digits[i];
            numb2*=1;
            
    
          }
          screenSpan.innerText=numb2;
    
   
}
function catcher(){
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




function borrador(){
    deleter.innerText='C';
    digits=[]
    screenSpan.innerText='0';
        plus.classList.remove('active');
        multiplier.classList.remove('active');
        negative.classList.remove('active');
        divider.classList.remove('active');
    if((screenSpan.innerText='0') && (deleter.innerText='C')){
        
        deleter.innerText='AC'
    }
    
}

function operation(){
    var numb2=0;
    if(this.value==='csymbol'){
        numb=numb*-1
        screenSpan.innerText=numb;
        
    }
    else if(this.value==='%'){
        numb=numb/100;
        screenSpan.innerText=numb;
    }
    else if(this.value==='÷'){
        numb=numb2
        catcher2(); 
        resultado=numb/numb2; 
        resultadoTotal()
    }
}

function resultadoTotal(){
    if(this.value==='='){
        screenSpan.innerText=resultado;
    }
}
    











