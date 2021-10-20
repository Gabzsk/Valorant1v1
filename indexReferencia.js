const faker = require ('faker')
faker.locale = 'pt_BR'


const clients = []


function populateClients(amount){
    for (let index = 0; index < amount; index++){
        const client = {
            name: faker.name.findName(),
            birthday: faker.date.between(1910, 2019),
            genre: faker.name.gender(),
            lastPurchaseDate: faker.date.between(2019,2021),
            countPurchase: faker.datatype.number(50)
        }
        clients.push(client)
    }
}

function ClientsByInitialCharIn(char){
    return clients.filter((client) => client.name.startsWith(char));
}

function getClients(){
    return clients
}

function countClientsByInitialCharIn(char){
    return clients
    .filter((client) => client.name.startsWith(char))
    .reduce((acc,value) => (acc +=1), 0)
}

populateClients(5)


// console.log("Clients: ", getClients())
// console.log("Clients By Initial Char In(A): ", ClientsByInitialCharIn("A"))
// console.log("Clients Count: ", countClientsByInitialCharIn("A"))



// 5. Desenvolva uma função que retorne apenas os nomes dos clientes.
function nameClients(){
    return clients.map((client) => `${client.name}`)
}
// console.log(nameClients())


// 6. Desenvolva uma função que retorne apenas o primeiro nome dos clientes.
function firstName(){
    return clients.map((client) => `${client.name.split(" ")[0]}`)
}
// console.log(firstName())

// 7. Desenvolva uma função que retorne apenas o primeiro nome dos clientes cujo os nomes começam com o caractere de entrada da função.
function firstNameInitialChar(char){
    return clients
    .filter((client) => client.name.startsWith(char))
    .map((client) => `${client.name.split(" ")[0]}`)
}

// console.log(firstNameInitialChar("A"))

// 8. Desenvolva uma função que retorne todos os usuários que são maiores de idade.
function overEighteen(){
    const a = clients[0].birthday 
    const b = Date.now() - a.getTime() 
    const idade = new Date(b) 
    const ano = idade.getUTCFullYear()  
    const c = Math.abs(ano - 1970) 
    return clients.filter((clients) => overEighteen(clients.birthday))
}
// console.log(overEighteen)
/*
var dob = new Date('06/24/1989');
//calculate month difference from current date in time
var month_diff = Date.now() - dob.getTime();

//convert the calculated difference in date format
var age_dt = new Date(month_diff);

//extract year from date
var year = age_dt.getUTCFullYear();

//now calculate the age of the user
var age = Math.abs(year - 1970);
*/










// 9. Desenvolva uma função que, dado um nome de entrada, retorna se o nome está contido na lista.
function containedName(b) {
  const found =  clients.find((client) => client.name.split(' ')[0] == b) // array, método, item, propriedade do item e função
  return console.log(found)
}
// containedName("Ana")




// 10. Implemente uma função que retorna o total de vendas realizadas somando as compras de todos os clientes.
function totalSales () {
    const sum = clients.countPurchase
    .reduce((acc, next) => acc += next)
}

// console.log(totalSales())

// 11. Implemente uma função que retorne os dados dos clientes que não compram há mais de 1 ano.
/*
DICA:
Transformar em milissegundo a data última compra

const ultimaCompraEmMilis = dataUltimaCompra.getTime();
const umAnoEmMilis = 1000 * 60 * 60 *24 * 365;

const diferenca = new Date().getTime() - ultimaCompraEmMilis
if(diferenca > umAnoEmMilis)
*/

function oneYearIdle(){
    const oneYearMili = 1000 * 60 * 60 * 24 * 365 // Um ano em aproximadamente 31557600000 milissegundos
    const dataAtual = new Date()
    const filtro = clients.filter((client) => (dataAtual.getTime() - client.lastPurchaseDate.getTime()) >= oneYearMili )
    return console.log(filtro)
}
oneYearIdle()

// 12. Implemente uma função que retorne os dados dos clientes que já realizaram mais de 15 compras.
function fifteenPurchases() {
    const clientsFifteenP = clients.filter((client) => client.countPurchase >= 15)
    return console.log(clientsFifteenP)
}
// fifteenPurchases()
