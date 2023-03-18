function OpeningCeremony(score,callback){
    setTimeout(function(){
        console.log("Let the games begin");
        Race100M(score,callback)    
    },1000)
}

function Race100M(score,callback) {
    setTimeout(function () {
        const colors=Object.keys(score);
        const times={};
        colors.forEach(function (color) {
            times[color]=Math.floor(Math.random()*6)+10;
        })
        const sortTimes=Object.entries(times).sort((a, b)=>a[1]-b[1]);
        //console.log(sortTimes);
        score[sortTimes[0][0]]+=50;
        score[sortTimes[1][0]]+=25;
        console.log("Race 100M Results: ")
        console.log(score);
        LongJump(score);
    },3000);
}

function LongJump(score) {
    setTimeout(function () {
        console.log("Long Jump Results: ")
        const colors=Object.keys(score)
        const selectedColor=colors[Math.floor(Math.random()*4)];
        score[selectedColor]+=150;
        console.log(score);
        HighJump(score);
    },2000);
}

function HighJump(score) {
    const prompt=require("prompt-sync")({sigint:true});
    console.log("High Jump Results: ");
    const inputColor = prompt("Which color secured the highest jump?");
    if (inputColor==='red' || inputColor==='blue' || inputColor==='green' || inputColor==='yellow') {
      score[inputColor] += 100;
      console.log(score);
    } else {
      console.log("Event was cancelled");
    }
    AwardCeremony(score);
}

function AwardCeremony(score) {    
    console.log("Award Ceremony Begins: ");
    const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points`);
}



const initialScore={red:0,blue:0,green:0,yellow:0}
OpeningCeremony(initialScore,Race100M)