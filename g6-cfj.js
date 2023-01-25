document.addEventListner('DOMContentLoded', () => {
const squares=document.querySelectorAll('.grid div')
const result=document.querySelector('#result')
const displayCurrentPLayer=document.querySelector('#current-player')
let currentPLayer = 1

const winningArray=[
]

function checkBoard(){
for(let y=0; y<winningArray.length; y++){
const square1 = squares[winningArrays[y][0]]
const square2 = squares[winningArrays[y][1]]
const square3 = squares[winningArrays[y][2]]
const square4 = squares[winningArrays[y][3]]

if( 
square1.classList.contains('player-one')&&
square2.classList.contains('player-one')&&
square3.classList.contains('player-one')&&
square4.classList.contains('player-one')
{
result.innerHTML = 'Player One Wins!'
}

if( 
square1.classList.contains('player-two')&&
square2.classList.contains('player-two')&&
square3.classList.contains('player-two')&&
square4.classList.contains('player-two'))
{
result.innerHTML = 'Player Two Wins!'
}
}



}

for (let i=0; i<squares.length; i++){
squares[i].onclick=> {
if(square[i+7].classList.contain('taken')&&!squares[i].classList.contains('taken')){
if(currentPlayer==1){
squares[i].classList.add('taken')
squares[i].calssLIst.add('player-one')
currentPlayer=2
displayCurrentPlayer.innerHTML=currentPlayer

} else if(currentPlayer==2){
squares[i].classList.add('taken')
squares[i].calssLIst.add('player-two')
currentPlayer=1
displayCurrentPlayer.innerHTML=currentPlayer

} 

}else alert('cant go here')
checkBoard()
}

}

})