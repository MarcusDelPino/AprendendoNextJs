export default class Moeda {
    static formatarValor(valor: number){
        return new Intl.NumberFormat(
            'pt-br', {
                style: 'currency',
                currency: 'BRL'
            }
        ).format(valor)
    }
}