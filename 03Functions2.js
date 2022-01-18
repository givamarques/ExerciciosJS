//Função = verbo + substantivo = resetaCor

let corSite = "Azul";
function resetaCor(){
  corSite="";
};

console.log(corSite); //vai printar a cor atual/Azul
resetaCor(); //vai executar a função resetaCor que atribui o valor " "
console.log(corSite); //vai printar a cor atual/" "

//aqui foi passada a varivael cor como parametro (entrada de dados) e abaixo como argumento da função (como serao usados esses dados)
function alteraCor(cor, tonalidade){
  corSite=cor + " " + tonalidade;
};

alteraCor("Vermelho", "Tijolo"); //vai executar a função alteraCor que (no caso) atribui o valor "Vermelho"
console.log(corSite); //vai printar a cor atual/Vermelho
