
// const things = []
// const entities = []
const spriteArray = []  //things that can move on screen 

function Position(px,py){
    return {
        x: px,
        y: py
    };
}

let p = Position(10, 5);
console.log(p.x, p.y)

function Sprite(nameParameter, kindParameter, positionParameter){
    return { 
            position: positionParameter,
            health: 100,
            name: nameParameter,
            kind: kindParameter
    };

}

spriteArray.push(Sprite("Serana", "Vampire", Position(10, 5)));
spriteArray.push(Sprite("Venom1", "parasite", Position(20, 10)));
spriteArray.push(Sprite("Venom2", "parasite", Position(15, 10)));
spriteArray.push(Sprite("Venom3", "parasite", Position(20, 15)));

for (let i = 0; i < spriteArray.length; i++){
    console.log(spriteArray)
}
