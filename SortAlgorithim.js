function partition(arr,low,high){
    let pivot=arr[high];
    let i=low-1;
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++;
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    let temp=arr[i+1];
    arr[i+1]=arr[high];
    arr[high]=temp;
    return i+1;
}
function sort(arr,low,high){
if(low<high){
    let pi=partition(arr,low,high);
    sort(arr,low,pi-1);
    sort(arr,pi+1,high);
}
}
////////////////////////////////
let number=[20,30,10,3,5,14,65,5,35,3,14,54,98,87,25,14,35];
console.log(number.toString());
console.log('...................After Sorting.................');
sort(number,0,number.length-1);
console.log(number.toString());