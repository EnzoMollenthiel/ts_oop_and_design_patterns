import { Weapon } from "./Weapon"

class Claws implements Weapon {
    
    readonly name: string = 'claws'

    attack(): string {
        return `I'll beat you with my ${this.name}!\n`
    }
}

export { Claws }