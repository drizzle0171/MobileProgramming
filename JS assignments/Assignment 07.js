function quest7(){
    let input = prompt("문자열을 입력해주세요.");
    let string_list = input.split(' ');  
    let result="";
    for (var word=0; word<(string_list.length); word++){
        result+=string_list[word][0].toUpperCase();
    } 
    console.log(result);
}