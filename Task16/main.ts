const list:string[]=["Hamza","Ali","Hassan"];

list.forEach(element=>{
    console.log(`Hi ${list}, You are invited to Dinner.`);
});

console.log(`Sorry, I can't come, ${list[2]} here.`);

list[2]="Zarar";

list.forEach(element=>{
    console.log(`Hi ${element}, You are invited to Dinner.`);
})

console.log("Hi, I am inviting more people because i have got a big dining table.");


list.unshift("Abubakar");
const index:number=Math.floor(list.length/2);
list.splice(index,0,"Anas");
list.push("Hammad");

list.forEach(elem=>{
    console.log(`${elem}, you are invited for dinner today.`); 
});