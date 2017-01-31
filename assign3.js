let arr2=[]
 loopArr(arr2)
 
 function loopArr(arr2){
     arr2.push(1,'dog','one')
     
     for(let i=0;i<arr2.length;i++)
     {
         console.log('Index Value '+ i +' :',arr2[i])
     }
     console.log(`Index Value of array Elements after Addition`,arr2)
 }