package sorting;

public class SortingClass {

    public int[] randomArray(int size, int bottomLimit, int topLimit){
       int[] array =new int[size];
       for(int i = 0 ; i < size ; i++ ){
           array[i] = (int) (bottomLimit + (Math.random() * topLimit));
       }
       return array;
    }

    public void printArray(int[] array){
        String arrayString = "[ ";

        for(int i=0; i< array.length;i++){
            if(i!= array.length-1){
                arrayString  = arrayString + array[i]+", ";
            }else{
                arrayString  = arrayString+array[i] ;
            }
        }
        arrayString  = arrayString +" ]";
        System.out.println(arrayString);
    }

    public int[] burbleSort(int[] array){
        int temp = 0;
        for(int i = 0; i < array.length; i++){
            for(int index = array.length - 1 ; index > 0; index -- ){
                if(array[index]< array[index-1]){
                    temp = array[index];
                    array[index]= array[index-1];
                    array[index-1] = temp;
                }
            }
        }
        return array;
    }

    public int[] shakerSort(int[] array){
        int acc = 0,temp = 0;
        int arrayLength = array.length;

        for(int index = 0; index < arrayLength/2;index++){

            Boolean swapped = false;

            for(int i = 0 ; i < arrayLength-1 ; i++){
                if(array[i] > array[i+1]){
                    temp = array[i];
                    array[i] = array[i+1];
                    array[i+1] = temp;
                    swapped = true;
                }
            }

            for(int j = arrayLength - 2 - index ; j > index; j-- ){
                if(array[j] < array[j-1]){
                    temp = array[j];
                    array[j] = array[j-1];
                    array[j-1] = temp;
                    swapped = true;
                }
            }

            if(!swapped) break;

        }

        return array;
    }

    public int[] directSelection(int[] array){

        int temp = 0,menor = array[0];
        for(int i = 0; i< array.length ; i++){
            for(int index = i+1; index < array.length ;index++ ){
                if(array[index]< menor){
                    temp = array[index];
                    array[index] = menor;
                    array[i] = temp;
                }
                menor = array[i];
            }
        }

        return array;
    }

    public int[] directInsertion(int[] array){
        int temp = 0;
        for(int i = 1 ; i < array.length ; i++){
            Boolean swapped = false;
            for(int index = i  ; index > 0 ; index --){
                if(array[index] < array[index-1]){
                    temp = array[index];
                    array[index] = array[index-1];
                    array[index-1] = temp;
                    swapped = true;
                }
                if(!swapped) break;
            }
        }

        return array;
    }

    public int[] binarySorting(int[] array){
        for (int i = 1; i < array.length; i ++){
            int aux = array[i];
            int first = 0;
            int last = i;
            while (first <= last){
                int middle = (int) (first+last)/2;
                if(aux <= array[middle]){
                    last = middle-1;
                }else{
                    first = middle+1;
                }
            }

            for(int index = i-1 ; index >=first ; index--){
                array[index+1] = array[index];
            }

            array[first] = aux;
        }
        return array;
    }

    public void mergesort(int[] matrix, int init, int n){

        int n1,n2;
        if(n>1){
            n1 = n/2;
            n2= n-n1;
            mergesort(matrix,init,n1);
            mergesort(matrix,init+n1,n2);
            merge(matrix,init,n1,n2);
        }
    }

    private void merge(int[] matrix, int init, int n1, int n2){

        int[] buffer = new int[n1+n2];
        int temp=0;
        int temp1=0;
        int temp2=0;
        int i;

        while((temp1 < n1) && (temp2 <n2)){

            if(matrix[init+temp1]< matrix[init + n1 + temp2]){
                buffer[temp] = matrix[init + (temp1)];
                temp++;
                temp1++;
            }else{
                buffer[temp] = matrix[init + n1+ (temp2)];
                temp++;
                temp2++;
            }

        }

        while(temp1 < n1){
            buffer[temp] = matrix[init + (temp1)];
            temp++;
            temp1++;
        }
        while(temp2 < n2){
            buffer[temp] = matrix[init + n1 + (temp2)];
            temp++;
            temp2++;
        }

        for(i = 0; i< n1 + n2; i++ ){
            matrix[init+ i] = buffer[i];
        }

    }

    public int[] quicksort(int[] matrix, int a, int b){

        int from = a;
        int to = b;
        int buffer;
        int pivot = matrix[(from+to)/2];

        do{
            while(matrix[from] < pivot){
                from++;
            }
            while(matrix[to] > pivot){
                to--;
            }
            if(from <= to){
                buffer = matrix[from];
                matrix[from]=matrix[to];
                matrix[to] = buffer;
                from++;to--;
            }

        }while (from <= to);

        if(a < to){
            quicksort(matrix,a,to);
        };
        if(from < b ){
            quicksort(matrix,from,b);
        };

        return matrix;

    }


}
