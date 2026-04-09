
let valorH = prompt("Qual o valor da sua hora trabalhada")
let horasT= prompt("Quantas horas foram trabalhadas durante o mês")

let salarioB = valorH * horasT
alert(`O valor do seu salário bruto é ${salarioB}`)

let salarioL = salarioB - (salarioB * 0.08)
alert(`Como a dedução de impostos o seu salário é de ${salarioL}`)