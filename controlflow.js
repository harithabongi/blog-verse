let marks=95;
if(marks>85)
{
    console.log("a+ grade")
}
else if(marks>60){
console.log("b+ grade")
}
else{
    console.log("c grade")
}
let day=2
switch(day){
 case 1:
        console.log("monday")
        break
case 2:
        console.log("tuesday")
        break
case 3:
        console.log("wednesday")
        break
default:
        console.log("invalid choice")
}
let n=10
for(i=0;i<n;i++)
{
console.log(i)

}
let j=0
while(j<5)
{
    console.log(j)
    j++
}
let k=8
do{
    console.log(k)
    k++
}
while(k<10)
    let colours=["pink","red","blue","yellow"]
for(i=0;i<colours.length;i++)
{
    console.log(colours[i])
}
for(colour of colours){
    console.log(colour)
}
let person = {
    name:"haritha",
    age:18,
    college:"jntu"
}
console.log(person.name)
for(key in person){
    console.log(`${key}:${person[key]}`)
}
for(let h=5;h>0;h--)
{
    if(h===2)
    {
        continue;
    }
    else if(h===4){
        break
    }
    
        console.log(h)
    
}




