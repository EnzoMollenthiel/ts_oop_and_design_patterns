import { AnimalsAbstractFactory } from "../abstractFactory/AnimalsAbstractFactory";
import { Cat } from "../inheritance/Cat";

class CatsFactory implements AnimalsAbstractFactory {

    constructor(private name: string,
        private height: number,
        private weight: number,
        private isCuddle: boolean) { }

    createAnimal(): Cat {
        return new Cat(this.name, this.height, this.weight, this.isCuddle)
    }
}

export { CatsFactory }