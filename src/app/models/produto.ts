export class Produto {
    private _nome : string;
    private _preco : number;   /* private para encapsulamento */
    private _marca : string;
    private _hardware : string;
    private _estado : string;
    private _anolanc : string;
    private _rgb : string;

    constructor(nome : string, preco : number, marca : string, hardware : string, estado : string, anolanc : string, rgb : string)
    {
        this._nome= nome;            /* pegando nome de cima */
        this._preco=preco;
        this._marca=marca;
        this._hardware=hardware;
        this._estado=estado;
        this._anolanc=anolanc;
        this._rgb=rgb;
    }

    public getNome() : string{
        return this._nome;
    }

    public setNome(nome : string) : void{
        this._nome = nome;
    }

    public getMarca() : string{
        return this._marca;
    }

    public setMarca(marca : string) : void{
        this._marca = marca;
    }

    public getHardware() : string{
        return this._hardware;
    }

    public setHardware(hardware : string) : void{
        this._hardware = hardware;
    }

    public getEstado() : string{
        return this._estado;
    }

    public setEstado(estado : string) : void{
        this._estado = estado;
    }

    public getAnolanc() : string{
        return this._anolanc;
    }

    public setAnolanc(anolanc : string) : void{
        this._anolanc = anolanc;
    }

    public getRgb() : string{
        return this._rgb;
    }

    public setRgb(rgb : string) : void{
        this._rgb = rgb;
    }



    public getPreco() : number{
        return this._preco;
    }

    public setPreco(preco : number) : void{
        this._preco = preco;   /* recebendo novo valor  */
    }


}
