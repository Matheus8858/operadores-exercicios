// Parte1

console.log(5 > 20  && 5 < 2 );

console.log(5 === 5  || 5 === "5")

console.log(!(20 > 50));

console.log(!(20 > 50 || 50 > 60));

// Parte 2

const auxilioCreche = 45.50;
const comissao = 0.10;
const descontoInss = 0.05;
const salario = 2000;
const vendasJaneiro = 5784.50;
const vendasFevereiro = 3418.41;
const vendasMarco = 4124.10;
const vendasAbril = 1874.00;
const vendasMaio = 7000.00;
const vendasJunho = 9450.00;

const soma = salario + 2*auxilioCreche;
console.log("O salário fixo mais o auxílio creche:",soma);

const comissaoJaneiro = vendasJaneiro * comissao;
console.log("Comissão de janeiro:",comissaoJaneiro);

const salarioDescontoInssJaneiro = (salario + comissaoJaneiro) * descontoInss;
console.log("DescOnto do INSS em janeiro:",salarioDescontoInssJaneiro.toFixed(2));


const salarioJaneiro = salario + 2 * auxilioCreche + vendasJaneiro * comissao - (salario + vendasJaneiro * comissao ) * descontoInss;
console.log("Salário de janeiro:",salarioJaneiro.toFixed(2));

const salarioFevereiro = salario + 2 * auxilioCreche + vendasFevereiro * comissao - (salario + vendasFevereiro * comissao ) * descontoInss;
console.log("Salário de Fevereiro:",salarioFevereiro.toFixed(2));

const salarioMarco = salario + 2 * auxilioCreche + vendasMarco * comissao - (salario + vendasMarco * comissao ) * descontoInss;
console.log("Salário de Março:",salarioMarco.toFixed(2));

const salarioAbril = salario + 2 * auxilioCreche + vendasAbril * comissao - (salario + vendasAbril * comissao ) * descontoInss;
console.log("Salário de Abril:",salarioAbril.toFixed(2));

const salarioMaio = salario + 2 * auxilioCreche + vendasMaio * comissao - (salario + vendasMaio * comissao ) * descontoInss;
console.log("Salário de Maio:",salarioMaio.toFixed(2));

const salarioJunho = salario + 2 * auxilioCreche + vendasJunho * comissao - (salario + vendasJunho * comissao ) * descontoInss;
console.log("Salário de Junho:",salarioJunho.toFixed(2));

const mediaSalarial =(salarioJaneiro + salarioFevereiro + salarioMarco + salarioAbril + salarioMaio + salarioJunho) / 6;
console.log("A média salarial é:",mediaSalarial.toFixed(2));
