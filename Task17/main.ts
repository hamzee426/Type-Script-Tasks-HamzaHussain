
const list:string[]=["Abubakar","Hamza","Anas","Ali","Zarar","Hammad"];
const size:number=list.length;
console.log("Sorry Guys, We can only invite two people.");


for(let i=0;i<size;++i){
    if(list.length <= 2){
        let name=list.pop();
        console.log(`${name}, you are invited.`);
        
    }else{
       let name=list.pop();
       console.log(`${name}, you are not invited.`);
    }
    
}
