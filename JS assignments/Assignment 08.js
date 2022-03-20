function quest8(){
    let input = prompt("문자열을 입력하세요.");
    let arr = input.split(' ');
    let new_arr = [...new Set(arr)];;
    let list = new_arr.sort()

    for (word of list){
        if (word[-1]==(',' || '.')){
            word = word.slice(0, -1);
        }
        console.log(word);
    }
}