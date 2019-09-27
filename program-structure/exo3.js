let size = 8;

for (let i = 1; i <= size; i++) {
    let character = ""
    for (let j = 1; j <= size; j++) {
      if (i % 2 === 0) {
        character+= j% 2=== 0 ? "#" : " ";
      }else{
        character+= j% 2!== 0 ? "#" : " ";
      }
    }
    console.log(character + "\n");
  }