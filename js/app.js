/* var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(50, 50, 20, 0, Math.PI * 2);
ctx.stroke();
 */

/* const url = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=960';
fetch(url).then(response => console.log(response)); */

// const url = "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=997";
// fetch(url).then(response => console.log(response));

const numbersEle = document.querySelectorAll(".numbers");

/* lottoNum = new Array(45);
for (i = 0; i < 45; i++) {
    lottoNum[i] = i + 1;
}

var rNum;
myNum = new Array(6);
for (i = 0; i < 6; i++) {
    rNum = parseInt(Math.random() * lottoNum.length);
    myNum[i] = lottoNum[rNum];
    lottoNum.splice(rNum, 1);
} */

let myNum = [];

function makeNumber(numContain) {
    if (myNum.length < 6) {
        if (!myNum.includes(numContain)) {
            myNum.push(numContain)
        }
        makeNumber(Math.ceil(Math.random() * 45));
    }
}

makeNumber(Math.ceil(Math.random() * 45));


myNum = myNum.sort((a, b) => {
    return a - b;
});


for (i = 0; i < 6; i++) {
    const noBox = document.getElementById(`no${i}`);
    noBox.innerText = myNum[i];
    noBox.classList.add(`ball_645`);
    const noColor = Math.ceil(myNum[i] / 10);
    noBox.classList.add(`ball${noColor}`);
}

function wResize(event) {
    const wWidth = window.innerWidth;
    const spanScale = wWidth / 9;
    const spanTextScale = wWidth / 18;
    const spanElement = document.styleSheets[0].cssRules[0];
    spanElement.style.setProperty('width', `${spanScale}px`);
    spanElement.style.setProperty('height', `${spanScale}px`);
    spanElement.style.setProperty('font-size', `${spanTextScale}pt`);
}

window.addEventListener("resize", wResize);
wResize();