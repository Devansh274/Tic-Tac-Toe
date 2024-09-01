// JS
let turn = "X";
let check = true;
let count = 0
let resetbtn=document.querySelector('.reset')

const changeturn = (e) => {
  if (e === "X") {
    return "O";
  } else {
    return "X";
  }
};
const win = (turn) => {
  let arr = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 1, 15, 45],
    [2, 4, 6, 1, 15, 135],
  ];
  arr.forEach((e) => {
    let boxtext = document.getElementsByClassName("boxtext");
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.getElementsByClassName("info")[0].innerText = turn + " Won";
      check = false;
      document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      if(e[3]===1 && e[4]===15){document.querySelector('.line').style.width = '28vw'}
      else{document.querySelector('.line').style.width = '20vw'}
    }
  });
};
Array.from(document.getElementsByClassName("box")).forEach((element) => {
    let content = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
    if(count!==9){
    count += 1
    if(check){      
    content.innerText = turn;
    win(turn);
    // console.log(check);
    if (check) {
      turn = changeturn(content.innerText);
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
    if (count===9) {
      if(check){document.getElementsByClassName("info")[0].innerText = 'It\'s a Draw!'}
    }
    }
    else{alert('Game Over!')}
}});
});
resetbtn.addEventListener('click', ()=>{
    Array.from(document.getElementsByClassName('box')).forEach(element=>{
      let content = element.querySelector('.boxtext')
      content.innerText = ''
      document.querySelector('.line').style.width = '0vw'
      document.getElementsByClassName("info")[0].innerText = "Turn for X"
      check = true
      turn='X'
      count=0
    })
})
 