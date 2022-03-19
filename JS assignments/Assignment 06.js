function quest6(){    
    while (true) {
        let input = Number(prompt("숫자를 입력하세요"));
        if (input<0) {
            console.log("끝!");
            break
        }
        else if (input%2==0) {
            continue;
        }
        else if (input%2!=0) {
            console.log(`${input}를 입력하셨네요.`);
        }
        }
}
