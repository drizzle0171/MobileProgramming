function quest9(longStr){
    let Str = longStr.replace(/ |;|[.]/g, ""); // 공백제거 완
    let Case = Str.split(''); // split -> list
    let new_arr= [...new Set(Case)];
    let cnt_arr = [];
    let cnt = 0;
    for (let i=0; i<new_arr.length; i++){
        for (let j=0; j<Case.length; j++){
            if (new_arr[i]==Case[j]) {
                cnt++;
            }
        }
        cnt_arr.push(cnt);
        cnt = 0;
    }

    let result = {};
    for (let k=0; k<cnt_arr.length; k++){
        result[new_arr[k]] = cnt_arr[k];
    }
    for (key in result){
        console.log(`${key}:${result[key]}`)
    }
}