person={
    name:"haritha",
    age:18
}
console.log(person.name)
console.log(person["age"])
const{name,age}=person;
console.log(name)
console.log(age)
let names=["haritha","sweety","vyshnavi"]
console.log(names[0])
let numbers=[1,2,3,4]
let square=numbers.map((num)=>num*num)
console.log(square)
let even=numbers.filter(num=>(num)%2==0)
console.log(even)
let sum=numbers.reduce((present,num)=>present+num,10)
console.log(sum)
let person1=[{
    name:"haritha",
    marks:100
},
{
    name:"vyshu",
    marks:30
},
{
    name:"sweety",
    marks:50
},
]
console.log(person1)
let max=0
let h
for( person of person1)
{

    if (max<person.marks)
    {
        max=person.marks
        h=person.name
        console.log(h)
    }

}
console.log(`topper is ${h} and got ${max}`)



