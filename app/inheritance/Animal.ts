import { Weapon } from "../strategy/Weapon";

abstract class Animal {

    constructor(private _name: string, private _height: number, private _weight:number, private _weapon: Weapon) {}

    get name(): string {
        return this._name
    }

    set name(newName: string) {
        this._name = newName;
    }

    get height(): number {
        return this._height
    }

    set height(newHeight: number) {
        this._height = newHeight
    }

    get weight(): number {
        return this._weight
    }

    set weight(newWeight: number) {
        this._weight = newWeight
    }

    getInfos(): string {
        
        return `Hey ! I'm ${this.name}, I'm ${this.height} tall and my weight's ${this.weight}`
    }

    attack(): string {
        return this._weapon.attack()
    }
}

export { Animal }