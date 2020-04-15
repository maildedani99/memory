

var cartaN; //  Numero de carta  pasado por: girar(cartaN, imgN) con onclick.

var imgN;   // Numero de la imagen pasado por:  girar(cartaN, imgN) con onclick.

var cartaSel;  // Div  sobre el que actuar para girar.

var imgSel;  //  Valor de scr para comparar las img's

var giro1;

var primerGiro = true;

var cartaDos = false;

var cartaUnoImg;

var cartaGirada1;

var cartaGirada2;

var imgGirada1;

var imgGirada2;

var carta2;




var x;

var n;

var parejas = 0;

posiciones = new Array();

compararCartas = new Array();




// Variables para imagenes de cartas

var   tigre = "img/tigre.jpg";
var   buo = "img/buo.jpg";
var   jaguar = "img/jaguar.jpg";
var   koala = "img/koala.jpg";
var   leon = "img/leon.jpg";
var   lobo = "img/lobo.jpg";
var   panda = "img/panda.jpg";
var   suricat = "img/suricat.jpg";
var   zorro   = "img/zorro.jpg";


//var animales = ["tigre", "buo", "jaguar", "koala", "leon", "lobo", "panda", "suricat", "zorro"];


//array con las variables que corresponden a una imagen. (estan por duplicado)

var animales2 = [tigre, buo, jaguar, koala, leon, lobo, panda, suricat,
     zorro, tigre, buo, jaguar, koala, leon, lobo, panda, suricat, zorro];


// esta funcion realiza el giro de la carta y vuelve a la posicion original. a traves de un settimeout retrasa el retorno

function girar(cartaN, imgN){

    
    cartaSel = document.getElementById(cartaN);

    console.log(cartaN, cartaSel);

    imgSel = document.getElementById(imgN).src;
    
    cartaSel.style.cssText = "transform: rotateY(180deg);transform-style: preserve-3d; transition: all 0.3s linear;";

   

    if (primerGiro == true){

        cartaGirada1 = cartaSel;
        
        imgGirada1 = imgSel;

    }else{

        cartaGirada2 = cartaSel;
        
        imgGirada2 = imgSel;

        if (imgGirada1 == imgGirada2){

                coinciden();
        }else{

        setTimeout('girar2(cartaGirada1, cartaGirada2)',1000);
            
        }
     }

        primerGiro = !primerGiro;
};  
    
function girar2(cartaGirada1, cartaGirada2 ){

         cartaGirada1.style.cssText = "transform-style: preserve-3d; transition: all 0.3s linear; ";
        cartaGirada2.style.cssText = "transform-style: preserve-3d; transition: all 0.3s linear; ";
    }


 function coinciden() {

    parejas++;

    if (parejas == 9){
        
        setTimeout('alert("Enhorabuena!! Has conseguido las " + parejas+ ".")',1500);
    }else{

        
        setTimeout('alert("coinciden..  lLevas: " + parejas + "parejas")', 1500);
    }

 }


   
function inicio(){

    aleatorio();
    repartir();
}



//La funcion repartir entrega una imagen a cada carta 

function repartir(){

        let i = 0;
        let n = 0;
    
    do{    
        foto = animales2[i];
        console.log(foto);
        idCarta = posiciones[n];
        console.log(idCarta);                                                   
        cartaN = document.getElementById(idCarta);
        cartaN.src = (foto);
        i++;
        n++;
    }while (i < 18);
    cartaDos = false;
    alert("Empieza el Juego");
}

/*La funcion aleatorio devuelve un array de 18 elementos (numeros enteros)
 entre 0 y 17 y desordenados, para llenar las cartas diferente cada partida */


function aleatorio(){
    
     

        do{
        x = Math.floor((Math.random()*100)+1);
        console.log(x);
        
        let coinciden = posiciones.includes(x);
            if (x < 19   &&   coinciden == false) {
                posiciones.push(x);

            }
        }while (posiciones.length < 18);

        return posiciones;
    }

    


