import {Personagem, random} from './Character'
import {Armas} from './Character'
import prompt from 'prompt-sync';
const clr = () => {
    console.clear()
}
let teclado = prompt()
let option: number = 0
var jogador: Personagem
var inimigo: random


   console.log('========== BATALHA MORTÍFERA PIU PIU BANG BANG DE VALORANT =========')
   console.log()
   console.log('===== Duelistas =====')
   console.log('1. Jett: Ela corre em círculos ao redor de cada conflito, cortando os inimigos antes mesmo que eles saibam o que os atingiu.')
   console.log('2. Reyna: Forjada no coração do México, Reyna domina o combate individual.')
   console.log('3. Yoru: abre buracos na realidade para se infiltrar nas linhas inimigas sem ser visto.')
   console.log('4. Raze: ela se destaca em eliminar inimigos com uma dose generosa de "boom".')
   console.log('5. Phoenix: Quer ele tenha reforços ou não, ele se precipitará para uma luta em seus próprios termos.')
   
   let nomeEscolhido = teclado("Digite seu Personagem: ")

   if (nomeEscolhido == 'Jett'){
       clr()
    console.log('"Legal. Vamo lá!"')
    console.log(`Você escolheu Jett! `)
   }
    
   if (nomeEscolhido =='Reyna'){
       clr()
    console.log('"Eu sempre faço das tripas coração c:<"')
    console.log(`Você escolheu Reyna! `)
   }
    
   if (nomeEscolhido =='Yoru'){
       clr()
    console.log('"Eu vou lutar com QUALQUER UM. Eu vou lutar com TODOS. "')
    console.log(`Você escolheu Yoru! `)
   }
    
   if (nomeEscolhido =='Raze'){
       clr()
    console.log('"Massa, vou brocar!"')
    console.log(`Você escolheu Raze! `)
   }
    
   if (nomeEscolhido =='Phoenix'){
       clr()
    console.log('"Relaxa... eu cuido disso!"')
    console.log(`Você escolheu Phoenix! `)
   }
   console.log()
   console.log(`Agora ${nomeEscolhido} tem uma phantom!`)
   console.log()
   
   console.log('===== Escudos =====')
   console.log('1. Escudo Leve: Absorve até 25 de dano  ')
   console.log('2. Escudo Leve: Absorve até 50 de dano  ')
   console.log()

   let escudoEscolhido = +teclado("Digite 1 para Escudo Leve e 2 para Escudo Pesado: ")
   
   if (escudoEscolhido == 1){
   escudoEscolhido = 25
   } else if (escudoEscolhido == 2){
   escudoEscolhido = 50
   }

   console.log()
   console.log(`Agora ${nomeEscolhido} está equipado(a) com um escudo!`)
   console.log()

   const phantom = new Armas ('Phantom',140,35,30)
   let armaEscolhida = phantom
   let IarmaEscolhida = phantom

   var jogador: Personagem =  new Personagem(nomeEscolhido, 100, armaEscolhida, escudoEscolhido)
   var inimigo: random = new random ('Phoenix', 100, 50, IarmaEscolhida)
   
   while(option != 4){
       console.log()
       console.log('====================================================================')
       console.log('|                      1. Seus dados                               |') 
       console.log('|                      2. COMBATER ATÉ O FALECIMENTO               |')
       console.log('|                      3. Estatísticas para Nerds                  |') 
       console.log('|                      4. Sair                                     |') 
       console.log('====================================================================')
       option = +teclado('Escolha uma opção: ')
       console.log()

                if (option == 1){
                    jogador.dados()
                } else if (option == 2){
                    console.log("========== QUE COMEÇE O X1! ==========")
                    
                    jogador.roundJ()

                    jogador.perdemo()
                    inimigo.ganhamo()

                    inimigo.roundI()
                    
                    jogador.perdemo()
                    inimigo.ganhamo()
                } else if (option == 3){
                   jogador.estatisticas()
                } else {
                    break
                }
            }