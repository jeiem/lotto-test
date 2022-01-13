/* var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(50, 50, 20, 0, Math.PI * 2);
ctx.stroke();
 */

/* const url = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=960';
fetch(url).then(response => console.log(response)); */

const url = "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=997";
fetch(url).then(response => console.log(response));

lottoNum = new Array(45);
for (i = 0; i < 45; i++) {
    lottoNum[i] = i + 1;
}

var rNum;
myNum = new Array(6);
for (i = 0; i < 6; i++) {
    rNum = parseInt(Math.random() * lottoNum.length);
    myNum[i] = lottoNum[rNum];
    lottoNum.splice(rNum, 1);
}

myNum = myNum.sort((a, b) => {
    return a - b;
});


for (i = 0; i < 6; i++) {
    const noBox = document.getElementById(`no${i}`);
    console.log('noBox', noBox);
    noBox.innerText = myNum[i];
    noBox.classList.add(`ball_645`);
    const noColor = Math.ceil(myNum[i] / 10);
    noBox.classList.add(`ball${noColor}`);
}