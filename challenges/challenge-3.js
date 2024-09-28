'use strict'

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

        let tipoDeAtaque = "";
        switch (tipo) {
            case "mago":
                this.tipoDeAtaque = "magia"
                break;
            case "guerreiro":
                this.tipoDeAtaque = "espada"
                break;
            case "monge":
                this.tipoDeAtaque = "artes marciais"
                break;
            case "ninja":
                this.tipoDeAtaque = "shuriken"
                break;
            default:
                this.tipoDeAtaque = "espada"
                break;
        }
    }

    atacar() {
        console.log(`O tipo ${this.tipo} atacou usando ${this.tipoDeAtaque}`);
    }
}

const heroi = new Heroi("Gandalf", 1000, "mago");
heroi.atacar();

const heroi2 = new Heroi("Aragorn", 100, "guerreiro");
heroi2.atacar();

const heroi3 = new Heroi("Bruce Lee", 80, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Naruto", 50, "ninja");
heroi4.atacar();