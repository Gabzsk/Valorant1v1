export class Personagem {
    constructor(
        public nome: string,
        public vida: 100,
        public arma: Armas,
        public escudo: number){}
        
        perdemo (): void {
            if (this.vida <= 0){
                console.log("Perdemo (foto do vegeta)")
            }
        }

            dados (): void {
                console.log("Nome: ", this.nome)
                console.log("Vida: ",this.vida)
                console.log("Escudo: ",this.escudo)
                console.log("Arma: ",this.arma)
            }

            estatisticas (): void {
                console.log("===== Dano Phantom =====")
                console.log("===== 0 - 15m: Cabeça - 156 Corpo - 39 Perna - 33 =====")
                console.log(`===== 15 - 30m: Cabeça - 140 Corpo - 35 Perna - 30 =====`)
                console.log("===== 30 - 50m: Cabeça - 124 Corpo - 31 Perna - 26 =====")
            }
            roundJ (): void {
                const tirosJ = [1,2,3,4,5]
                const qntosTirosJ = Math.floor(Math.random() * tirosJ.length)
                const parteCorpoJ = Math.floor(Math.random() * Armas.length)
                const danoJ = qntosTirosJ * parteCorpoJ
                console.log(`${this.nome} atira ${qntosTirosJ} vez(es) na ${parteCorpoJ}, causando ${danoJ} de dano!`)
               // this.vida = this.vida - danoJ 

                // Randomizar quantos tiros, Randomizar onde será atirado, calcular o dano
                // Atualizar vida
            }
    }
        
export class Armas {
    constructor(
        public nome: string,
        public cabeca: number,
        public corpo: number,
        public perna: number){}
} 


export class random {
    constructor(
        public nome: string,
        public vida: 100,
        public escudo: number,
        public arma: Armas){}
       
        ganhamo (): void {
            if (this.vida <= 0){
                console.log("Ganhamo (foto do vegeta)")
            }
        }

        roundI(): void {
            const tirosI = [1,2,3,4,5]
            const qntosTirosI = Math.floor(Math.random() * tirosI.length)
            const parteCorpoI = Math.floor(Math.random() * Armas.length)
            const danoI = qntosTirosI * parteCorpoI
            console.log(`${this.nome} atira ${qntosTirosI} vez(es) na ${parteCorpoI}, causando ${danoI} de dano!`)
        }
}

