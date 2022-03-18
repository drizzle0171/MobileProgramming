function myReverse(sentence){
    let result = "";
    for (let i=sentence.length-1; i>=0; i--){
        result += sentence[i];
    }
    return result;
}

function quest5(){
    let sentence = String(prompt("문자열을 입력하세요"));
    console.log(myReverse(sentence));
}