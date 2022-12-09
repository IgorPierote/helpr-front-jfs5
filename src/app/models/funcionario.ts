export interface Funcionario {
    id?: number;
    nome: string;
    email: string;
    cpf: string;
    cargo:{
        id?:number,
        nome:string,
        descricao:string,
        salario:string
    }
    perfil?: string;
    senha?: string;
    foto?:string
}
