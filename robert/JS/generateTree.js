//return array with tree base

const baseTree = (levelTree) => {
  
    let baseArray = [];
    
    if(levelTree <= 1){
      
      baseArray[0]=[''];
      
    }else{
      
      let hightBase = levelTree <= 3 ? parseInt(levelTree/2):parseInt(levelTree/3);
      let widthBase = levelTree <=3 ? 1 : parseInt(levelTree/4);
      widthBase = widthBase % 2 == 0 ? widthBase + 1 : widthBase;
      
      let treeArrayBase = Array((levelTree)+parseInt(widthBase/2)).fill(' ');
      
      for(let i = 0 ; i < hightBase; i++){
        
        let newArrayBase = treeArrayBase.map((el,index)=>{
          return index+1 >= levelTree - parseInt(widthBase/2) ? '*':' ';
        });
        baseArray[i]=newArrayBase;
      }
      
    }
    
      return baseArray;
    
  }
  
  //return array with tree top segment
  
  const generateTree = (levelTree) =>{
    
      let mainTreeArray = [];
      let treeArray = Array((levelTree*2)-1).fill(' ');
  
          for(let i = 0; i <levelTree ; i++){
            
            let rigthLimit = (levelTree-1) + i;
            let leftLimit = (levelTree-1) - i;
            let newArray = treeArray.map((el,index)=>{
              return index >= leftLimit && index <=rigthLimit ? '*':' ';
            });
            
            mainTreeArray[i] = newArray;
            
          }
        
    return [...mainTreeArray,...baseTree(levelTree)];
  }
  
  
  //print tree
  
  const printTree = (levelTree) =>{
    if(levelTree > 0){
       const tree = generateTree(levelTree);
        for(let i= 0;i <tree.length; i++){
          console.log(tree[i].join(''));
        }
      }else{
        console.log('');
      } 
  }
  
  printTree(10);