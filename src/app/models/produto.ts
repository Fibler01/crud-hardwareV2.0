export class Produto {
    id? : string
    nome : string;
    preco : number;   /* private para encapsulamento */
    marca : string;
    hardware : string;
    estado : string;
    anolanc : string;
    rgb : string;
    name? : string;
    downloadURL? : String;

    constructor(nome : string, preco : number, marca : string, hardware : string, estado : string, anolanc : string, rgb : string, downloadURL : String)
    {
        this.nome= nome;            /* pegando nome de cima */
        this.preco=preco;
        this.marca=marca;
        this.hardware=hardware;
        this.estado=estado;
        this.anolanc=anolanc;
        this.rgb=rgb;
        this.downloadURL=downloadURL;
    }


}
