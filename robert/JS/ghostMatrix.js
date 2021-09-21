let matrix = [[1,2,4,7,8],[1,2,0,7,8],[0,2,4,7,8],[1,2,4,7,8]];

const printMatrix=(matrix)=>{
  for (i=0;i<matrix.length;i++){
    console.log(matrix[i]);
  }
}

const ghostMatrix=(matrix) =>{
  for(let i= 0 ; i < matrix.length ; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j]===0 && i<matrix.length-1){
        matrix[i+1][j]=0;
      }
    }
  }
  return matrix;
}

printMatrix(matrix);

printMatrix(ghostMatrix(matrix));