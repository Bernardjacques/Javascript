// ========= Shop ==========================================

weapon1 =
{
    title: "Épée",
    physic: 100,
    magic: 25,
    minLevel: 25,
    available: true
}
weapon2 =
{
    title: "Hache",
    physic: 200,
    magic: 5,
    minLevel: 18,
    available: false
}
weapon3 =
{
    title: "Sceptre",
    physic: 25,
    magic: 125,
    minLevel: 12,
    available: true
}
weapon4 =
{
    title: "Arc",
    physic: 80,
    magic: 30,
    minLevel: 8,
    available: false
}

let weapon = [{weapon1}, {weapon2}, {weapon3}, {weapon4}]

let display = () => {

    for(let key in weapon){
        console.log("Arme disponible", weapon[key])
    }
}
display()


let i
let display2 = () => {

    while(weapon.minLevel >= 10 & i < weapon.length, i++)
    {
        console.log(weapon[key])
    }
}
display2()


// =========== Personnage =========================================


let mainCharacter = 
{
    name: "Nhanar",
    level: 57,
    life: 23718,
    attack () 
        {
            console.log(mainCharacter.name, "attaque avec l'arme", mainCharacter.weapon,". les dégâts sont de", 
        }
}



let damageAtk = (mainCharacter.level * weapon.damage);
