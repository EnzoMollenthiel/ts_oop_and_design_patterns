import { Animal } from "../inheritance/Animal";

interface AnimalsAbstractFactory {

    createAnimal(): Animal
}

export { AnimalsAbstractFactory }