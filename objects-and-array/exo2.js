function reverseArray(array){
    let newArray = [];
    
    for(let i =0 ;i< array.length;i++){
      console.log(array[i]);
      newArray.unshift(array[i]);
    }
   
   return newArray;
  }
  
  function reverseArrayInPlace(array){
    let newArray = [];
  
    for(let i = 0;i< array.length;i++){
      newArray.unshift(array[i]);
    }
  
    for(let j = 0; j < newArray.length; j++){
      array.pop();
    }
  
    for(let k = 0; k < newArray.length; k++){
      array.push(newArray[k]);
    }
  
  
  }
  