import { Animal } from "./Animal";
import { Claws } from "../strategy/Claws";

class Cat extends Animal {

    constructor(name: string, height: number, weight: number, private _isCuddle: boolean) {
        super(name, height, weight, new Claws())
    }

    get isCuddle(): boolean {
        return this._isCuddle
    }

    set isCuddle(isCuddle: boolean) {
        this._isCuddle = isCuddle
    }

    getInfos(): string {
        return `Hi... I'm ${this.name}, I'm ${this.height} tall and my weight's ${this.weight}. ` +
            `Seems like i'm ${ this.isCuddle ? 'very cuddle' : 'not cuddle at all'}. I don't really care about you...`
    }
}

export { Cat }