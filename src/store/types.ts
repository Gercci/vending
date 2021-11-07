export interface Product {
    name: string,
    category: string,
    price: number,
    id: number
}

export type Products = Product[]

type Total = number
type Bill = number

interface Bills {
    1?: Bill,
    2?: Bill,
    5?: Bill,
    10?: Bill,

}
interface Change {
    total: Total,
    bills: Bills
}

export interface State {
    products: Products,
    total: Total,
    change: Change,
    receivedGood: Product | null
}


type BuyProductPayload = Product | undefined

export interface BuyProduct {
    type: string,
    payload: BuyProductPayload
}