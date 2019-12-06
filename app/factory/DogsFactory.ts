import { AnimalsAbstractFactory } from "../abstractFactory/AnimalsAbstractFactory";
import { Dog } from "../inheritance/Dog";

class DogsFactory implements AnimalsAbstractFactory {

    constructor(private name: string,
        private height: number,
        private weight: number,
        private isDocile: boolean,
        private owner: string) { }


    createAnimal(): Dog {
        return new Dog(this.name, this.height, this.weight, this.isDocile, this.owner)
    }
}

export { DogsFactory }