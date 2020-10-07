let arr=[];
arr.push(10,20,30,40,50);
console.log(arr.length);//5
//////////////
arr.pop();
console.log(arr);//[10,20,30,40]
//////////////
arr.shift()
console.log(arr);//[20,30,40]
//////////////
console.log(arr[arr.length-1]);//40
//////////////
let remove=arr.pop();
console.log(arr);//[20,30]
console.log(remove);//40
//////////////
arr.unshift(60);
console.log(arr);//[60,20,30]
//////////////
let ind=arr.indexOf(20);
console.log(ind);//1
//////////////
arr.splice(1,2);//remove 2 elements starting from index 1
console.log(arr);//60
//////////////
let a=arr.slice();//how coppy array like [...arr]
console.log(a);//60
//////////////
arr[4]=50;
console.log(arr);//[60,<3 empty items>,50]
console.log(Object.keys(arr));//['0','4']
let inde=Object.keys(arr);
console.log(arr.length);//5
console.log(arr[1]===undefined);//true
let str='';
for (let index = 0; index < inde.length; index++) {
    str+=arr[inde[index]]+',';
}
console.log(str);//60,50
//////////////
let al=new Array(10);
console.log(al.length)//10
console.log(al);
//////////////
let a1=[10,20,30,40,];
let a2=[50,60,70,80];
let a3=[...a1,...a2];
console.log(a3);
console.log(Array.isArray(a3));//true
console.log(a3.toString());
//////////////////////////////////////////////String///////////////////////////////////////////////////
let arr1=Array.from('Allam')
console.log(arr1);//['A','l','l','a','m']
arr1=Array.from('aLLAm',x=>x.charCodeAt(0)<97?
                String.fromCharCode(x.charCodeAt(0)+32)
                :String.fromCharCode(x.charCodeAt(0)-32));
console.log(arr1);
arr1=Array.from([10,20,30,30],x=>x*x);
console.log(arr1);//[100,200,300,300]
///////////////////
let name="Allam";
let char=name.charAt(0);
console.log(char);//A
///////////////////
let str1="Hello World";
console.log(str1.includes('Hello'));//true
///////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////
let aa=[10,50,30,2,33,44,33,2,3,60,5];
console.log(aa.sort((a,b)=>a-b));
////////////////
const summ=aa.map(c=>c+1);
console.log(summ);
/////////
console.log(summ.filter(c=>c>10));
console.log(summ.find(c=>c>11));
console.log(summ.findIndex(c=>c==1));
sumation=0
summ.forEach(c=>sumation+=c);
console.log(sumation);
//////////////////////////////





