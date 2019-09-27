for (let i = 1; i <= 8; i++) {
    let character = ""
    for (let j = 1; j <= 8; j++) {
      if (i % 2 === 0) {
        character+= j% 2=== 0 ? "#" : " ";
      }else{
        character+= j% 2!== 0 ? "#" : " ";
      }
    }
    console.log(character + "\n");
  }