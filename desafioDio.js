class heroi{
    constructor(nome,idade,tipo,ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;

}
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let campeao = new heroi("Grogos",50,"guerreiro","espada");
let campeao2 = new heroi("Lee",60,"Monge","artes marciais");
let campeao3 = new heroi("Veigar",1000,"Mago","magia");
let campeao4 = new heroi("Akali",30,"Ninja","shuriken");

let campeoes =[campeao,campeao2,campeao3,campeao4]

for (let i=0; i < campeoes.length; i++ ){
    campeoes[i].atacar();
}

for(let i=0; i < campeoes.length;i++){
    console.log (`O nome do campeão numero ${[i+1]}) ${campeoes[i].nome}`);
}
    