//omit

// interface IPessoa {
//     nome: string;
//     idade: number;
//     nacionalidade: string;
// }

// interface IBrasileiro extends Omit<IPessoa, 'nacionalidade'>{}

// const brasileiro: IBrasileiro = {
//     nome:'José',
//     idade: 23
// }

// import

// import $ from 'jquery';

// $.fn.extend({
//     novaFuncao(){
//         console.log('Chamou');
//     }
// })

// $('body').novaFuncao();

// private

// interface ICachorro {
//     readonly nome: string;
//     readonly idade: number;
//     readonly parque?: string;
// }

// type CachorroSomenteLeitura = {
//     +readonly [K in keyof ICachorro] - ?: ICachorro[K];
// }

// class MeuCachorro implements CachorroSomenteLeitura {
//     nome: 'Carminha';
//     idade: 11;
//     parque: 'praia';

//     constructor(nome, idade, parque) {
//         this.idade = idade;
//         this.nome = nome;
//         this.parque = parque;
//     }
// }

// const cachorro = new MeuCachorro('Carminha', 11, 'praia');

// console.log(cachorro);





// variáveis opcionais

// interface IUsuario {
//     id: string,
//     email: string
//     cargo?: 'gerente'|'coodernador'|'supervisor'|'funcionario',
// }

// function redirecione(usuario: IUsuario) {
//     var func : boolean;
//     if (usuario.cargo) {
//         func = true;
//     }
//     func = false;
// }



// Condicionais

// interface IUsuario {
//     id: string,
//     email: string
// }

// interface IAdministrador {
//     cargo: 'gerente'|'coodernador'|'supervisor',
// }



// function redirecione(usuario: IUsuario | IAdministrador) {

//     var adm : boolean;

//     if('cargo' in usuario){
//         adm = true;
//     }

//     adm= false;
// }



// Generic types

// function adicionarApendiceALista<T>(array: T[], valor: T) {
//     return array.map(() => valor);
// }

// adicionarApendiceALista([1,2,3], 4);


//input

// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) => {
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);
// });


// interfaces

// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     executaRugido(decibeis: number): void,
// }

// interface IFelino extends IAnimal{
//     visaoNoturna: boolean;
// }

// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
//     executaRugido: (decibeis) => (`$(decibeis)dB`),
// }

// const felino: IFelino ={
//     nome:'Leão',
//     tipo:'terrestre',
//     visaoNoturna: true,
//     executaRugido: (decibeis) => (`$(decibeis)dB`),
// }

// types

// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     domestico: boolean;
// }

// interface IFelino extends IAnimal{
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal{
//     porte: 'pequeno' | 'médio' | 'grande';
// }

// type IDomestico = IFelino | ICanino;

// const animal: IDomestico = {
//     domestico: true,
//     porte: 'médio',
//     nome: 'cachorro',
//     tipo: 'terrestre',
// }

