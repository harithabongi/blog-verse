let x=10,y=11
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x%y)
console.log(x/y)
console.log(x**y)
//assignment
let z=5;
z+=3;
console.log(z)
z-=3;
console.log(z)

z*=4
console.log(z)
z/=5
console.log(z)
z+="haritha"
console.log(z)
// comparision 
let a=10,b="10"
console.log(a==b)
console.log(a>b)
console.log(a!=b)
console.log(a===b)
console.log(a>=b)
console.log(a<=b)
// logical
let age=18
console.log(age>=18&&age<=20)
console.log(age>=18||age<=20)
console.log(!(age>18))
//string operator
let h="Haritha"
let P="Bongi"
let k=h+P
console.log(k)
let correctname=`hello${h} ${P},welcome to devastra`
console.log(correctname)
//TERNARY
let myage=19;
if (myage>=18)
{
    console.log("eligible for vote")
}
else{
    console.log("not eligible for vote")
}
let result=myage>=18 ? "eligible to vote":"not eligible to vote"
console.log(result)
//increment 
let count=5;
console.log(count++)
console.log(count)
console.log(++count)
//types of operators
console.log(typeof count)
console.log(typeof "haritha")
console.log(typeof 18)
