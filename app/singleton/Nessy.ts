import { Animal } from "../inheritance/Animal";
import { Love } from "../strategy/Love";

class Nessy extends Animal {

    private constructor() {
        super('Nessy', 1000, 1500, new Love())
    }

    private static instance: Nessy

    static getInstance(): Nessy {
        if(!Nessy.instance) {
            Nessy.instance = new Nessy()
        }

        return Nessy.instance
    }
}

export { Nessy }