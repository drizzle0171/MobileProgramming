function getDist(x1, y1, x2, y2){
    return Math.sqrt((x2-x1)**2+(y2-y1)**2);  
}
function quest1(){
    let x1 = Number(prompt("첫 번째 점의 x좌표를 입력하세요"));
    let y1 = Number(prompt("첫 번째 점의 y좌표를 입력하세요"));
    let x2 = Number(prompt("두 번째 점의 x좌표를 입력하세요"));
    let y2 = Number(prompt("두 번째 점의 y좌표를 입력하세요"));   
    let first ={
        x:x1,
        y:y1
    }
    let second ={
        x:x2,
        y:y2
    }
    console.log("Getting distance using getDist() func");
    let distance = getDist(first.x, first.y, second.x, second.y);
    return distance
}
