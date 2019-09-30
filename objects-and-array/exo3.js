function deepEqual(obj1,obj2){
    // console.log(obj1,obj2)
    // base case 
    let typeofObj1 = typeof obj1;
    let tyepofObj2 = typeof obj2;
  
    if(
      (typeofObj1 !== tyepofObj2)
      ){
      return false
    }
    // recursion condition
    for(key in obj1){
      if(!(key in obj2)){
        return false;
      }
      
      let value1 = obj1[key];
      let value2 = obj2[key];
  
      let valueType1 = typeof value1;
      let valueType2 = typeof value2;
  
      if(valueType1!==valueType2){
        return false;
      }
  
      if(valueType1==="object" && valueType1!==null){
        deepEqual(value1,value2);
      }else if(value1!==value2){
        return false;
      }
  
  
    }
  return true;
  }