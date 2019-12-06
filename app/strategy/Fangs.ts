import { Weapon } from "./Weapon"

class Fangs implements Weapon {

    readonly name: string = 'fangs'

    attack(): string {
        return `I'll beat you with my ${this.name}!\n`
    }
}

export { Fangs }