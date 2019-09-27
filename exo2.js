for (let i = 0; i < 99; i++) {
    let num = i;
    num++;
    if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0){
        console.log("Buzz");
    }else{
      console.log(num);
    }
}