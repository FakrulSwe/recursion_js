function sum(i){
    if(i == 1){
        return 1;
    }
    return i + sum(i-1);
}

const result = sum(5);
console.log(result);