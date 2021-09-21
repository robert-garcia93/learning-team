//Burbuja
const n = 5;

const fillTable = (dimension) => {
  let table=[];
    
  for(let i = 0 ; i < dimension ; i ++){
    
    let fillRow = [] , xChar = i%2==0 ? ['X','_']:['_','X'];
  
    for(let j=0;j< dimension ; j++){
      fillRow.push(j%2==0?xChar[0]:xChar[1])
    }
    table[i]=fillRow.join(' ');
  }
  
  return table.join("\n");
}

const fillTable2 = (dimension)=>{
  let result = "";
  let flag = true;
  let endLine = '';
  for(let i = 0 ; i < Math.pow(dimension,2);i++){
    
    if((dimension+(i+1))%dimension == 0  && i!= Math.pow(dimension,2) -1)endLine ='\n';
    
    let xChar = flag && (dimension%2 == 0)?['X','_']:['_','X'];
    
    result = (i%2==0)?result.concat(xChar[0]+endLine):result.concat(xChar[1]+endLine);
    
    if((dimension+i)%dimension == 0 && i !=0) flag = !flag;    
    endLine = ''
  }
  return result;
}

console.log(fillTable2(n))
