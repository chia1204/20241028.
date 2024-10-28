let angle = 0
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0) //原本的顏色
  rectMode(CENTER) //以中心點為座標點
  noFill() //方形內沒有填滿顏色
  angleMode(DEGREES) //設定角度的單位為0~360
  //frameRate(10)
}

function draw() {
  background(0); //後來蓋上去的顏色(黑)
  for(let y=0;y<height;y=y+120){
      for(let x=0;x<width;x=x+120){
         push() //重新設定格式，原點在(x,y)
         translate(x,y) //把原點由視窗的左上角移到(x,y)
         stroke(255) //線條顏色
            for(let i=0;i<10;i = i+1){
             let r = map(sin(frameCount),-1,1,200,255) //sin的值是-1到1之間，對應到50到255
             let g = map(cos(frameCount/4),-1,1,70,255)
             let b = map(sin(frameCount/2),-1,1,30,255)
             stroke(r,g,b)
             rotate(angle)
             rect(0,0,100-i*3,100-i*3,20)  
             angle = sin(frameCount)*20
             }
          pop()
        }
    }  
}