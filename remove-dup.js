let names = ["abul", "bablul", "kablu", "sablul", "ablul", "kablul", "gablul", "ablul", "kablul"];

function removeDup(names){
   const unique = [];
   for(let i = 0; i < names.length; i++){
    const name = names[i];
    if(unique.includes(name) == false){
        unique.push(name);
    }
   }
   return unique;
}

let cutName = removeDup(names);
console.log(cutName);

console.log(names.length)
console.log(cutName.length)