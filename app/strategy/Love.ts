import { Weapon } from "./Weapon";

class Love implements Weapon {
    
    readonly name: string = 'love'
    
    attack(): string {
        return `I'll beat you with my ${this.name}!\n`
    }
}

export { Love }