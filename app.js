function calcularMedia(arr) {
    let soma = 0
    arr.forEach(element => {
        soma+=element
    });
    return soma/arr.length
}

function aprovacao(med) {
    if (med >= 7) {
        console.log("aprovado");
    } else if (med < 6) {
        console.log("reprovado");
    } else {
        console.log("recuperação");
    }
}

let notas = [Number(process.argv[2]),Number(process.argv[3]), Number(process.argv[4]), Number(process.argv[5]), Number(process.argv[6])]

console.log(notas)

let media = calcularMedia(notas)
console.log(calcularMedia(notas))
aprovacao(media);