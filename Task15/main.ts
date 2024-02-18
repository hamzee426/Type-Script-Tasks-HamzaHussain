const list:string[]=["Hamza","Ali","Hassan"];

list.forEach(element=>{
    console.log(`Hi ${list}, You are invited to Dinner.`);
});

console.log(`Sorry, I can't come, ${list[2]} here.`);

list[2]="Zarar";

list.forEach(element=>{
    console.log(`Hi ${element}, You are invited to Dinner.`);
})

