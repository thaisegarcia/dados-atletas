class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
    }
    calculaCategoria() {
      if (this.idade >= 9 && this.idade <= 11) {
        return "Infantil";
      } else {
        if (this.idade >= 12 && this.idade <= 13) {
          return "Juvenil";
        } else {
          if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
          } else {
            if (this.idade >= 16 && this.idade <= 30) {
              return "Adulto";
            } else {
              return "Sem Categoria";
            }
          }
        }
      }
    }
    calculaIMC() {
      return this.peso / (this.altura * this.altura);
    }
    calculaMediaValida() {
      let total = 0;
      let maiorNota = 0;
      let menorNota = 1000;
      this.notas.forEach(function (n) {
        total = total + n;
        if (maiorNota < n) {
          maiorNota = n;
        }
        if (menorNota > n) {
          menorNota = n;
        }
      });
      total = total - maiorNota - menorNota;
      let media = total / (atleta.notas.length - 2);
      return media;
    }
    obtemNomeAtleta() {
      return this.nome;
    }
    obtemIdadeAtleta() {
      return this.idade;
    }
    obtemPesoAtleta() {
      return this.peso;
    }
    obtemNotasAtleta() {
      return this.notas;
    }
    obtemCategoria() {
      return this.calculaCategoria();
    }
    obtemIMC() {
      return this.calculaIMC();
    }
    obtemMediaValida() {
      return this.calculaMediaValida();
    }
  }
  
  const atleta = new Atleta("Cesar Abascal", 30, 80, 1.7, [
    10,
    9.34,
    8.42,
    10,
    7.88
  ]);
  
  console.log("Nome: "+ atleta.obtemNomeAtleta());
  console.log("Idade: " + atleta.obtemIdadeAtleta());
  console.log("Peso: "+ atleta.obtemPesoAtleta());
  console.log("Altura: " + atleta.altura);
  console.log("Notas: " + atleta.notas);
  console.log("Categoria: " + atleta.obtemCategoria());
  console.log("IMC: " + atleta.obtemIMC());
  console.log("Média válida: "+atleta.obtemMediaValida());
