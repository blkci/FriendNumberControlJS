let sum = 0;
function friendNums(x, y){
    for(let i = 1; i < x; i++){
        if(x % i == 0){
            sum = sum + i;
        }
    }
    if(sum == y){
        console.log("They are friend number.")
    }
    else{
        console.log("They are not friend number")
        console.log(sum)
    }
}

friendNums(1184,1210)