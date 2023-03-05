const area = document.querySelector(".area__9x9");
const step = document.querySelector(".step");
let player = "X"; //первым ходит Х

setStep();

// рисуем таблицу с помощью цикла
for (let i = 0; i <9 ; i++){
  area.innerHTML += "<div class='cage' pos= " + i + "></div>";
}

//определяем комбинации для победы
 let winCobmo = [
   [0,1,2],[3,4,5],[6,7,8],
   [0,3,6],[1,4,7],[2,5,8],
   [0,4,8],[2,6,4]
 ];
const cage = document.querySelectorAll(".cage");

//обрабатываем нажатия
for (let i = 0; i < cage.length; i++) {
  cage[i].addEventListener("click", cageClick, false);
}
// определяем занятые клетки или занимаем ее
function cageClick(){

  let data = []

  if(!this.innerHTML){
    this.innerHTML = player;
  }else {
    alert("Занято ");
    return;
  }

  for(let i in cage){
    if(cage[i].innerHTML === player)
      data.push(parseInt(cage[i].getAttribute('pos')))
  }

// определяем победителя
  if(checkWin(data)){
    restart("Поедил :"+ player);
  }else {
    let draw = true;
    for(let i in cage)
    if(cage[i].innerHTML === '') draw = false;
// ничья
  if(draw){
    restart("ПРО***ЛИ ОБА ХАХАХ");
  }
  }
  player = player === "X" ? "O" : "X";
  setStep();
}

function  checkWin(data){
  for (let i in winCobmo) {
    let win = true;
    for (let j in winCobmo[i]) {
      let id = winCobmo[i][j];
      let ind = data.indexOf(id);

      if (ind === -1) {
        win = false
      }
    }
    if(win) return true;
  }
      return false;
}
function restart(text){
  alert(text)
  for (let i = 0; i < cage.length; i++) {
    cage[i].innerHTML = '';
  }
}
// функция для определения чей ход
function setStep() {
  step.textContent = player;
}

