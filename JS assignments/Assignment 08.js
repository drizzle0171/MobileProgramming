function quest8(){
    let input = prompt("문자열을 입력하세요.");
    let words = input.replace(/,|[.]/gi, " ");
    let arr = words.split(' ');
    let new_arr = [...new Set(arr)];;
    let list = new_arr.sort()

    for (let word=1; word<list.length; word++){
        console.log(list[word])
        }
}