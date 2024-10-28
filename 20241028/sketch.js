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
  translate(mouseX,mouseY) //把原點由視窗的左上角移到游標上
  stroke(255) //線條顏色
  //===========產生一個方形========================
  //rotate(angle)
  //rect(0,0,600,600,100) //原本的中心點為左上角，寬和高皆為600
  //angle = sin(frameCount)*100 //讓方形的旋轉角度為-100~100度的範圍內
  //===========產生十個方形=========================
  for(let i=0;i<15;i = i+1){
    //let r = ramdom(50,255) //抽一個亂數值，介於50(包含)到255(不包含)之間
    //let g = ramdom(50,255)
    //let b = ramdom(50,255)
    let r = map(sin(frameCount),-1,1,200,255) //sin的值是-1到1之間，對應到50到255
    let g = map(sin(frameCount/4),-1,1,70,255)
    let b = map(sin(frameCount/2),-1,1,30,255)
    stroke(r,g,b)
    rotate(angle)
    rect(0,0,600-i*3,600-i*3,30)  
    angle = sin(frameCount)*10
  }
}
