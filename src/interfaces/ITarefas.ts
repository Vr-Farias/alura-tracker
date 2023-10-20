import IProjetos from "./IProjetos";

export default interface ITarefas {
    duracaoSegundos: number,
    descricao: string,
    projeto: IProjetos
}
