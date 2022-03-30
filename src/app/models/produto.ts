export class Produto {
    id? : string
    nome : string;
    preco : number;   /* private para encapsulamento */
    marca : string;
    hardware : string;
    estado : string;
    anolanc : string;
    rgb : string;

    constructor(nome : string, preco : number, marca : string, hardware : string, estado : string, anolanc : string, rgb : string)
    {
        this.nome= nome;            /* pegando nome de cima */
        this.preco=preco;
        this.marca=marca;
        this.hardware=hardware;
        this.estado=estado;
        this.anolanc=anolanc;
        this.rgb=rgb;
    }


}
