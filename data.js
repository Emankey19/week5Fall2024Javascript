
// Aray of Objects(key : value pairs)
const data = [
    {name: "Loki", kind: "Cat"},
    {name: "Rumi", kind: "Dog"},
    {name: "Ragnar", kind: "Cat"},
    {name: "Blue", kind: "Dog"},

];

/*function PetToString(pet){
    return `
    PET NAME: ${pet.name}
    KIND: GOOD ${pet.kind}`;
} */

function printPet(pet){
    console.log(PetToString(pet) )
   ;
}

console.log(PetToString(data[0]));
console.log(PetToString(data[data.length - 1]));

// for (i= 0; i < data.length; i++) { // i is index}
// data.forEach(PetToString); // rubberstamp each function with named function

// data.forEach( pet => console.log(PetToString(pet))) ; 
 data.forEach(printPet); 