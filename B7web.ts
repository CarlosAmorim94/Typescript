// Types

let isLoading: boolean = true
let isNumber: number = 999
let isString: string = 'Teste'
let qualquerCoisa: any = 'tudo' // type: any pode receber qualquer valor.
// um valor ou outro
let teste: string | number = 33


// Array de numbers
let list: number[] // ou usar "let list: Array<number>"
list = [1, 2, 3]
list.push('quatro') // Vai informar um erro, pois 'quatro' é string
list.push(4)

// Array diversos
let info: [string, number]
info = ['Carlos', 27]

// Array "ilimitado" com qualquer valor
let info2: any[]
info2 = ['teste', 234, true, false]

// após o "(...): string" o retorno da função deverá ser string.
// Se não retorna nada utilizar o "(...): void"
function bemVindo(nome: string, idade: number):string {
return `Olá ${nome}, você tem ${idade} anos`
}

