exports.calculateMode = function(arr) {
    let arrObj = {};
    // create object with array elements and number of times they occur	
    for (let i = 0; i < arr.length; i++){	
      if (arrObj[arr[i]] === undefined){	
        arrObj[arr[i]] = 1;	
      } else {	
        arrObj[arr[i]] = arrObj[arr[i]] + 1;	
      }	
    }	
    // iterate object and find maximum	
    let max = 0;	
    for (key in arrObj){	
      if (arrObj[key] > max){	
        max = arrObj[key];	
      }	
    }	
    let result = [];	
    //push any key that equal maximum into result array	
    for (key in arrObj){	
      if (arrObj[key] === max){	
        result.push(key);	
      }	
    }	
    return result;
}
//console.log(exports.calculateMode([1,1,2,2]))