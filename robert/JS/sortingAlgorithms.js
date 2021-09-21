//Burbuja
let array=[9,20,25,15,7,8,20,12];
let array2=[10,9,8,7,6,5,4,3,2,1,0];

let arrayTest = () => {
  let array = [];
  for(let i  = 0 ; i< 1000 ; i ++){
    array[i]= Math.floor(Math.random() * 100);
  }
  return array;
}



const burbleSort = (array) => {
  let temp = 0;
  let acc = 0;
  while(acc<= array.length){
    let index = array.length;
    
    for(index; index>acc;index--){
      if(array[index]<array[index-1]){
        temp = array[index];
        array[index]=array[index-1];
        array[index-1]=temp
      }
    }
    acc++;
  }
  return array;
}


const shakerSort = (array)=>{
  let temp  = 0 ;
  let acc = 0;
  const arrayLength = array.length;
  
  while(acc < arrayLength/2){
    
    let swapped = false;
    
    for(let index=0 ;index < arrayLength ; index++){
        
      if(array[index]>array[index+1]){
          temp = array[index];
          array[index]=array[index+1];
          array[index+1]=temp;
          swapped = true;
          
      }
      
    }
    
    for(let index = arrayLength - 2 -acc;index> acc;index--){
      
      if(array[index] < array[index-1]){
        temp = array[index];
        array[index]=array[index-1];
        array[index-1]=temp;
        swapped = true;
      }
      
    }
    
    acc++;
    if(!swapped) break;
    
  }
  
  return array;
}

const arrayTestValue = arrayTest();
console.log(arrayTestValue)

console.time("t1");
console.log(shakerSort(arrayTestValue));
console.timeEnd("t1");

console.time("t1");
console.log(burbleSort(arrayTestValue));
console.timeEnd("t1");