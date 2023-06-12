const btnEl = document.querySelector(".button");
// var canvas = document.getElementById('canvas');
// var context = canvas.getContext('2d');
// var W = window.innerWidth;
// var H = window.innerHeight;
// var fontSize = 1;
// var columns = Math.floor(W / fontSize*9);
// var drops = [];
// for(var i=0; i<columns; i++){
//     drops.push(0);
// }
// var str = "JavaS87{cript 76@uu!~%wtw ^ 2$^*^ hge%)[ggdg|\\|.,gh.,<kyuk\"Ef[]{fect";
// function draw(){
//     context.fillStyle="rgba(0,0,0,0.05)";
//     context.fillRect(0, 0, W, H);
//     context.fontSize =   "1px";
//     context.fillStyle = "#00cc33";
//     for(var i=0;i<columns;i++){
//          var index=Math.floor(Math.random()*str.length);
//          var x=i*fontSize*10;
//          var y=drops[i]*fontSize*10;
//          context.fillText(str[index],x,y);
//          if(y>=canvas.height&& Math.random()>0.99){
//             drops[i]=0;
//          }
//          drops[i]++;
//     }
// }
// draw()
// setInterval(draw,35);
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
speeed=60;
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const bin = '0fjk1cnc984yn$%64 7<y67*ikj!jk``~=+gr500(6= B+6:{ sTHejW04/0$&02:B:"<.[}w|A\\WAwRR73#T@^%32JI3'

const fontSize = 16
const columns = canvas.width / fontSize

const rainDrops = []
color1='#0f0'
color2='rgba(0,0,0,0.05)'
for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1
}
function changeSpeed(){
  speeed=document.getElementById('speed').value;
  console.log('changed')
  console.log(speeed)
}
function changeColorText(){
  opacity=1;
   color=`${document.getElementById('Text-input-palette').value}`;
   color1 = 'rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + opacity + ')';
  // console.log("yesagjwdek")
}

function changeColorBg(){
  opacity=0.05;
   color=`${document.getElementById('Bg-input-palette').value}`;
   color2 = 'rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + opacity + ')';
  //  btnEl.style.backgroundColor=color2;
  // console.log("yesagjwdek")
}
const draw = () => {
  // context.fillStyle=color;
  context.fillStyle = color2;
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = color1

  context.font = fontSize + 'px monospace'

  for (let i = 0; i < rainDrops.length; i++) {
    const text = bin.charAt(Math.floor(Math.random() * bin.length))
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize)

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0
    }
    rainDrops[i]++
  }
}
t=30;
var x = {Value1: 50,Value2:1};
multiple=0.000001;
// function speed(t,multiple){
//     t+=multiple;
//     if(t>=40 || t<=10){
//         multiple*=-1;
//     }
//     console.log(t)
// }
// function spd(obj){
//     if(obj.Value1>=60 || obj.Value1<=10){
//         obj.Value2*=-1;
//     }
//     obj.Value1+=obj.Value2;
//     console.log(obj.Value1)
// }
// function con(){
//   console.log("yess")
// }

// setInterval(()=>spd(x),1000)
// setInterval(conole,5)
// while(true){
//         t+=multiple;
//     if(t>=40 || t<=10){
//         multiple*=-1;
// }
// }

setInterval(draw, speeed)

// console.log(5);
btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
// function Converter() {
//   const valorElemento = document.getElementById('text')
//   const text = valorElemento.value
//   const novoValor = text
//   const convercao = []

//   const elementoValorConvertido = document.getElementById('valorConvertido')
//   const valorConvertido = novoValor.split('')
//   for (let a = 0; a < valorConvertido.length; a++) {
//     convercao[a] =
//       '(' +
//       valorConvertido[a] +
//       ')' +
//       valorConvertido[a].charCodeAt(0).toString(2)
//   }
//   elementoValorConvertido.innerHTML = convercao
// }

// window.onresize = function () {
//   location.reload()
// }