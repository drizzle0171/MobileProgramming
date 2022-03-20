function quest9(longStr){
    let Str = longStr.replace(/ /g, ""); // 공백제거 완
    let lowerCase = Str.toLowerCase().split(''); // split -> list
    let new_arr = [...new Set(lowerCase)];

    let cnt_arr = [];
    let cnt = 0;
    for (let i=0; i<new_arr.length; i++){
        for (let j=0; j<lowerCase.length; j++){
            if (new_arr[i]==lowerCase[j]) {
                cnt++;
            }
        }
        cnt_arr.push(cnt);
        cnt = 0;
    }
    let result = {};
    for (let k=0; k<cnt_arr.length; k++){
        result.new_arr[k] = cnt_arr[k];
    }
    for (let key in result){
        console.log(`${key}:${result[key]}`);
    }
    console.log(new_arr, cnt_arr);
}