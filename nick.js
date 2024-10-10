let cor;
let  posicaoHorizontal;//x
let posicaovertical;//y

function setup() {
  
  createCanvas(400, 400);
 background('white');  
 cor = color ( random(0 , 255), random(0 , 255),random(0 , 255) );
 posicaoHorizontal = 200 ;
 posicaovertical = 200 ;
}

  function draw() {

   fill (cor);
  circle( posicaoHorizontal , posicaovertical , 50 );

     if( mouseX < posicaoHorizontal) {
     posicaoHorizontal =  posicaoHorizontal - 1 ;
   }
  
     if( mouseX < posicaoHorizontal) {
     posicaoHorizontal = posicaoHorizontal + 1;
   }
   
    if( mouseY < posicaoVertical )  {
      posicaoVertical--;
    }
   if( mouseY > posicaoVertical )  {
     posicaoVertical++;
   }
  

  }
