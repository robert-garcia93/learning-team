

const merge = (matrix,init,n1,n2) =>{
  let buffer = [];
  let temp = 0;
  let temp1  = init ; 
  let temp2 = n1;
  
  while((temp1 <= n1) && (temp2 <= n2)){
    if(matrix[temp1] < matrix[temp2]){
      buffer[temp] = matrix[temp1]
      temp++;
      temp1++;
    }else{
      buffer[temp] = matrix[temp2];
      temp++;
      temp2++;
    }
    
    while(temp1 <= n1){
      buffer[temp] = matrix[temp1];
      temp++;
      temp1++;
    }
    
    while (temp2 <= n2){
      buffer[temp]= matrix[temp2];
      temp++;
      temp2++;
    }
    
    for (let i = 0; i < n1+n2;i++){
      matrix[i] = buffer[i-init];
    } 
  }

}
