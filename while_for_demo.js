/* let i = 0;
const LIMIT = 5;

console.log("BEGIN")

while(i < LIMIT){
    console.log(i)
    i++;
}

console.log("END", i);

// classic for
for(j=0;j<5;j++){
    console.log("J", j);
} */

let i = 0;
let num = 1;

while(i < 5){
    console.log("i and num:", i, num);
    i++;
    num = num * 2;
}

console.log("END", i);

// better use of while 
let count = 10;
    while( count > 0){
        console.log(count);
        count = count -1;

}

console.log("BLAST OFF!!!");