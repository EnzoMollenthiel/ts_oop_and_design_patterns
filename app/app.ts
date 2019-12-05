import { Cat } from "./inheritance/Cat";
import { Dog } from "./inheritance/Dog";
import { Nessy } from "./singleton/Nessy";

const pipo: Cat = new Cat("Pipo", 60, 1000, true)
const rex: Dog = new Dog('Rex', 150, 25, true, 'Gabrioche')

console.log(pipo.getInfos())
console.log(pipo.attack(), '\n')
console.log(rex.getInfos())
console.log(rex.attack(), '\n')


const instance1 = Nessy.getInstance();
const instance2 = Nessy.getInstance();

console.log(instance1 === instance2)