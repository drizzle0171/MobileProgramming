function quest4(){
    let computer = (Math.random()*9);
    if (0<=computer&&computer<3) {
        computer = '가위';
    }
    else if (3<=computer&&computer<6) {
        computer = '바위';
    }
    else if (7<=computer&&computer<10) {
        computer = '보';
    }
    let user = prompt('가위 바위 보!');
    console.log(`컴퓨터: ${computer}`);
    
    let result;
    if (computer==user){
        result = '비겼습니다.';
    }
    else if (computer=='바위'&&user=='보'){
        result = '사용자 승리!'
    }
    else if (computer=='가위'&&user=='바위'){
        result = '사용자 승리!'
    }
    else if (computer=='보'&&user=='가위'){
        result = '사용자 승리!'
    }
    else {
        result = '컴퓨터 승리!'
    }

    console.log(result)
}