import { Animal } from "./Animal";
import { DomesticAnimal } from "./DomecticAnimal";
import { Fangs } from "../strategy/Fangs";


class Dog extends Animal implements DomesticAnimal {

    constructor(name: string, height: number, weight: number, private _isDocile: boolean, private _owner: string) {
        super(name, height, weight, new Fangs())
    }

    get isDocile(): boolean {
        return this._isDocile
    }

    set isDocile(isDocile: boolean) {
        this._isDocile = isDocile
    }

    get owner(): string {
        return this._owner
    }

    set owner(newOwner: string) {
        this._owner = newOwner
    }

    getInfos(): string {
        
        return `Hi ! I'm ${this.name}, I'm ${this.height} tall and my weight's ${this.weight}! ` +
            `I'm ${this.isDocile ? 'very docile! I love you!': "not really docile, I'm gonna kill you son of a bitch!"} ` + 
            `My owner's ${this.owner} is a really good person.`
    }
}

export { Dog }