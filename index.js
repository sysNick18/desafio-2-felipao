
let resultado = victoryRanked(55, 6)
let nivel = ""

function victoryRanked (numVit, numDef) {
    let getQuantity = numVit - numDef;
    return getQuantity
}

if (resultado < 10) {
    nivel = "Ferro"


} else if (resultado >= 11 && resultado <= 20) {
    nivel =  "Bronze"


} else if ((resultado >= 21) && (resultado <= 30)) {
    nivel = "Prata"


} else if ((resultado >= 31) && (resultado <= 40)) {
    nivel = "Ouro"


} else if ((resultado >= 41) && (resultado <= 50)) {
    nivel = "Platina"


} else if ((resultado >= 51) && (resultado <= 60)) {
    nivel = "Diamante"


} else if ((resultado >= 61) && (resultado <= 70)) {
    nivel = "Lendário"


} else if ((resultado >= 71) && (resultado <= 80)) {
    nivel = "Imortal"
}

console.log("O Herói tem saldo de " + resultado + " vitórias" + 
" e está no nível de " + nivel)



