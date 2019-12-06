import { AnimalsAbstractFactory } from "../abstractFactory/AnimalsAbstractFactory";
import { Animal } from "../inheritance/Animal";

class AnimalsFactory {

    static getAnimal(factory: AnimalsAbstractFactory): Animal {
        return factory.createAnimal()
    }
}

export { AnimalsFactory }