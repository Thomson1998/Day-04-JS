//a)odd number in arrow function
let numbArray = [5,6,7,8,9,10,11,12];

let odd=numbArray.filter((x) => {

return x % 2 !== 0;
});
console.log(odd);
//output=>[5,7,9,11]

//b)convert all strings to title caps in srting array
let  str = ["He","is","an","engineer"];

 let strCaps = str.map((item) => {

    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

});
console.log( strCaps.join(' '));
//output=> He Is An Engineer

//c) sum of all numbers in an array
var arr=[9,7,6,8,4,3,2,1];
const add1=arr.reduce((a,b)=>a+b);
console.log([add1]);
//output=>40


//d)Return all the prime numbers in the array
let primeNum= (arr) => {
    return arr.filter((n) => {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    });
  };
  console.log(primeNum([1,2,3,4,5]));
  //output=>[2,3,5]

  //e) Return all the palindromes in an array
  var arr=["radar","level" ,"jack","madam"];
arr = arr.filter((s) =>{
let len = s.length;
for (var i = 0; i<len / 2; i++) {
if (s[i] == s[len - i - 1]){
return true;
}
else{
return false;
}
}
});
console.log(arr);

//output=> ['radar', 'level', 'madam']