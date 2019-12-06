import { Cat } from "./inheritance/Cat";
import { Dog } from "./inheritance/Dog";
import { Nessy } from "./singleton/Nessy";
import { AnimalsFactory } from "./factory/AnimalsFactory";
import { CatsFactory } from "./factory/CatsFactory";
import { DogsFactory } from "./factory/DogsFactory";

// Classical instanciation
const pipo: Cat = new Cat("Pipo", 60, 1000, true)
const rex: Dog = new Dog('Rex', 150, 25, true, 'Gabrioche')

console.log(pipo.getInfos(), pipo.attack())
console.log(rex.getInfos(), rex.attack())


const instance1 = Nessy.getInstance();
const instance2 = Nessy.getInstance();

console.log(instance1 === instance2)

// Instanciate Animals through Abstact Factory pattern
const waina = AnimalsFactory.getAnimal(new CatsFactory("Waïna", 50, 900, true))
const cerberus = AnimalsFactory.getAnimal(new DogsFactory("Cerberus", 500, 10000, false, "Hades"))

console.log(waina.getInfos(), waina.attack())
console.log(cerberus.getInfos(), cerberus.attack())