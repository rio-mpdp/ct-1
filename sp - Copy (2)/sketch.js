var bg1,clickhere,o,oo,s1,ch,s33,bg4,gamestate=0,bg2,c3,gs,sate,sb,co1,c1,sun,s,bg2,bg3,il1,gg,g
var t,tt,sbb,o1,oo1,g1,gg1,pb,qg,q,q1,qg1,pb1,td,e1,s22,q2,qg2
function preload(){
bg1=loadImage("mp1.jpg")
bg3=loadImage("bggg.png")
bg4=loadImage("hh.png")
ch=loadImage("ssp.png")
bg2=loadImage("l.png")
sbi=loadImage("c/Idle (1).png")
sb=loadAnimation("c/Run (1).png","c/Run (2).png","c/Run (3).png","c/Run (4).png","c/Run (5).png","c/Run (6).png")
c1=loadImage("i1.png")
c2=loadImage("i2.png")
c3=loadImage("ikm.png")
s2=loadImage("ki.png")
s22=loadImage("hc1.png")
s3=loadImage("bgii.jpg")
sbb=loadAnimation("c/Jump (1).png","c/Jump (2).png","c/Jump (3).png","c/Jump (4).png","c/Jump (5).png","c/Jump (6).png","c/Jump (8).png","c/Jump (7).png","c/Jump (9).png","c/Jump (10).png")
sbb1=loadAnimation("w1.png","w2.png","w3.png")
bb1=loadAnimation("pb1.png","pb2.png","pb3.png")
}
function setup (){
 createCanvas(1000,600)
 gs=createSprite(2000,530,100,100)
 gs.visible=false
 gs=createSprite(3500,490,6500,20)
 gs.visible=false
 gs2=createSprite(0,520,7750,20)
 gs2.visible=false
 
clickhere=createSprite(width-200,height-100,50,50)
clickhere.addImage(ch)
clickhere.scale=0.5
clickhere.visible=false
s=createSprite(350,450,50,50)
s.addAnimation("stop",sbi)
s.addAnimation("jump",sbb)
s.addAnimation("run",sb)
s.scale=0.2
s.visible=false
s1=createSprite(200,250,50,50)
s1.addAnimation("stop",sbi)
s1.addAnimation("jump",sbb)
s1.addAnimation("run",sb)
s1.scale=0.2
s1.visible=false
co1=createSprite(500,200,50,50)
co1.addImage(c1)
co1.scale=0.8
co1.visible=false
il1=createSprite(250,250,50,50)
il1.addImage(c2)
il1.scale=0.8
il1.visible=false
il2=createSprite(750,270,50,50)
il2.addImage(c3)
il2.scale=0.8
il2.visible=false
gg=new Group()
oo=new Group()
oo1=new Group()
tt=new Group()
gg1=new Group()
qg=new Group()
qg1=new Group()
qg2=new Group()
mgs1()
cg1()
cg2()
mgs()
makeGroundSprites()
}
function draw (){
if(gamestate==0){ 
 background(225)
 
 clickhere.visible=true
if(mousePressedOver(clickhere)){
gamestate=1
}
drawSprites ();
image(bg1,0,0,width,height)
fill("black")
textSize(50)      
textFont("algerian")
text("CASITA TRAIL",250,300)
drawSprites ();
}
if(gamestate==1){
  
 background(225)
 image(s3,0,0,width,height)

 clickhere.visible=false
 co1.visible=true
 il1.visible=true
 il2.visible=true

 if(mousePressedOver(co1)){
    gamestate=2
    }
    if(mousePressedOver(il2)){
      gamestate=4
      }
    if(mousePressedOver(il1)){
      gamestate=3
      }
 drawSprites ();
}
if(gamestate==2){
   background(225)
   image(bg2,0,0,6500,height)   

  co1.visible=false
 il1.visible=false
 il2.visible=false
   s.visible=true  
 clickhere.visible=false
  s.velocityX=0
 
 if(keyDown("left")){
   s.changeAnimation("run")
   s.velocityX=-8   
   }
   if(keyDown("right")){
   s.changeAnimation("run")
   s.velocityX=8   
    }
   if(keyDown("space")){
    s.changeAnimation("jump")
      s.velocityY=-10
   }
   if(s.x<5500)
   camera.position.x=s.x+400
  s.velocityY+=0.5
  s.collide(gs);
  //s.collide(qg1);
  s.collide(gg)
  s.collide(gg1)
  if (frameCount % 150 == 0){
   td()
     }

  if(s.x<5500)
  camera.position.x=s.x+430 
   drawSprites()
   fill("black")
   
  // text(s.x+","+s.y,s.x,s.y-100)
//text(mouseX+","+mouseY,mouseX,mouseY)
   }
     if(gamestate==3){
    background(225)
    image(bg3,0,0,6500,height)   
  
   co1.visible=false
  il1.visible=false
    s.visible=true
  clickhere.visible=false
  il2.visible=false
    s.velocityX=0
    
  if(keyDown("left")){
    s.changeAnimation("run")
    s.velocityX=-7    
    }
    if(keyDown("right")){
    s.changeAnimation("run")
    s.velocityX=7    
     }
    if(keyDown("space")){
      s.changeAnimation("jump")
       s.velocityY=-10    
      
    }
    s.velocityY+=0.5
    s.collide(gs2);
    s.collide(oo);
    s.collide(oo1);
   // s.collide(qg);
    if (frameCount % 150 == 0){
      pb()
     }
  
    fill("black")
   // text(s.x+","+s.y,s.x,s.y-100)
    if(s.x<5500)
    camera.position.x=s.x+430
      drawSprites()
    }
    if(gamestate==4){
      background(225)
      image(bg4,0,0,6500,height)   
      il2.visible=false
     co1.visible=false
    il1.visible=false
      s1.visible=true
    clickhere.visible=false
    
     s1.velocityX=0
  
    if(keyDown("left")){
      s1.changeAnimation("run")
      s1.velocityX=-7    
      }
      if(keyDown("right")){
      s1.changeAnimation("run")
      s1.velocityX=7    
       }
      if(keyDown("space")){
        s1.changeAnimation("jump") 
         s1.velocityY=-10  
       
      }
      s1.velocityY+=0.5
     
      if (frameCount % 150 == 0){
        pb1()
          }
      s1.collide(tt);
      //s1.collide(qg2);
      textSize(20)
      fill("black")
     //text(s1.x+","+s1.y,s1.x,s1.y-100)
      if(s1.x<5600)
      camera.position.x=s1.x+400
        drawSprites()
      }
}
function callback2(s1, s2) {
  s1.remove();
}
function pb() {
  q=createSprite(3200,470,30,30)
 q.addAnimation("run",sbb1)
 q.scale=0.5
 q.lifetime=250
 q.velocityX = -5;
  qg.add(q)
}
function pb1() {
  q2=createSprite(5200,430,30,30)
 q2.addImage(s22)
 q2.scale=0.2
 q2.lifetime=160
 q2.velocityX = -5;
  qg2.add(q2)
}
function td() {
  e1=createSprite(3200,450,30,30)
 e1.addImage(s2)
 e1.scale=0.3
 e1.lifetime=160
 e1.velocityX = -5;
  qg1.add(e1)
}

