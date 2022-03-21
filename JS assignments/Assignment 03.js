function operator(n1, operate, n2){
    let answer;
    switch(operate){
        case '+':
            answer = n1+n2;
            break;
        case '-':
            answer = n1-n2;
            break;
        case '*':
            answer = n1*n2;
        case '/':
            answer = n1/n2;
        case '%':
            answer = n1%n2;
    }
    return answer
}

function quest3(){
    let num1 = parseInt(prompt("첫 번재 숫자를 입력하세요"));
    let operate = prompt("연산자를 입력하세요");
    let num2 = parseInt(prompt("두 번째 숫자를 입력하세요"));
    answer = operator(num1, operate, num2);
    console.log(`정답은 ${answer}입니다.`);
}