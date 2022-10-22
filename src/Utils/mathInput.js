function power(x,y){
    if(y===0){return 1}
    else if (y%2 ===0){
        return power(x,parseInt(y/2))*power(x,parseInt(y/2))
    }else{
        return x*power(x,parseInt(y/2))*power(x,parseInt(y/2))
    }
}

// console.log(power(3,2))