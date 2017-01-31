let arr1=[]

arrAdd(arr1)

function arrAdd(arr1){
    arr1.push(11,22,33)
    console.log(`Initial Values of Array Elements`,arr1)
    for(let i=0;i<arr1.length;i++)
    
    {
        arr1[i]=arr1[i]+2
    }
    
    console.log(`Values of array Elements after Addition`,arr1)
}