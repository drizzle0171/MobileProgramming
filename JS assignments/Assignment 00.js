function quest() {
    var input, min, sec;
    input = prompt("초 단위 시간을 입력하세요");
    min = parseInt(input/60);
    sec = input%60
    console.log(min + " 분 " + sec + " 초입니다.");
}