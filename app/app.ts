import { Cat } from "./inheritance/Cat";
import { Dog } from "./inheritance/Dog";

const pipo: Cat = new Cat("Pipo", 60, 1000, true)
const rex: Dog = new Dog('Rex', 150, 25, true, 'Gabrioche')

console.log(pipo.getInfos())
console.log(pipo.attack(), '\n')
console.log(rex.getInfos())
console.log(rex.attack())