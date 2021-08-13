import { Fatura } from "./fatura";

export interface Unidade {
    id?: number,
    nome: string,
    distribuidora: string,
    endereco: string,
    numero: string,
    faturas?: Fatura[]
}
