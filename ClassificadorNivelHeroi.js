/*

1-Criar uma variável para armazenar:
   
nome e quantidade de xp de um herói

2- Utilizar uma estrutura de decisão para representar uma mensagem

*/


class heroi {
	constructor(nome, xp) {
		this.nome = nome
		this.xp = xp
	}

	calculaNivel() {
		let nivel 
		if(xp<1000)
			nivel= "Ferro"
		else if(xp>1001 && xp<2000)
			nivel = "Bronze"
		else if(xp>2001 && xp<5000 )
			nivel = "Prata"
		else if(xp>6001 && xp<7000 )
			nivel = "Ouro"
		else if(xp>7001 && xp<8000)
			nivel = "Platina"
		else if(xp>8001 && xp<9000 )
			nivel = "Ascendente"
		else if(xp>9001 && xp<10000 )
			nivel = "Imortal"
		else if(xp>10001){
			nivel = "Radiante"
		}

	   return nivel
	}
}


let nome = "Carlones"
let xp = 9002


let hero = new heroi(nome, xp)
console.log(`O herói de nome ${hero.nome} está no nível ${hero.calculaNivel()} `)

