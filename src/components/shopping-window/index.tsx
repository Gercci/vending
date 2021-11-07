import React from "react";
import {Button, Error, Input} from "Global";
import {ContextValue, withDefaultInputValues} from "hocs/InputHoc";
import {useAppSelector} from "store";
import {AvailabilityChecker} from "utils/validators/validateInput";
import {Product} from "store/types";
import {buyProduct} from "store/rootSlice";

const invalidId = 'Товар не найден'
const noEnoughMoney = 'Недостаточно средств'

type TargetProduct = Product | undefined

let targetProduct: TargetProduct = undefined

const canBuy = (total: number, price: number) => total > price

const ShoppingWindow: React.FC<ContextValue> = ({ dispatch, data, setData, onChange, onClick, setErr }) => {
    const products = useAppSelector(state => state.products)
    const total = useAppSelector(state => state.total)
    const findProduct = (targetProductId: number) => {
        const searchedProduct = products.find(product => product.id === +targetProductId)
        targetProduct = searchedProduct
        return searchedProduct
    }
    const availabilityChecker: AvailabilityChecker = () => ({ isAvailable: !!targetProduct })
    const onClickLocal = () => {
        findProduct(+data.value)
        canBuy(total, targetProduct?.price || 0) ?
            onClick( invalidId, buyProduct(targetProduct), availabilityChecker ) :
            setErr(noEnoughMoney)
    }
    return (
        <div>
            <div>
                <Input value={data.value} onChange={onChange} placeholder='Введите код товара' />
                <Button onClick={onClickLocal}>Получить товар</Button>
            </div>
            <Error>{data.err}</Error>
        </div>
    )
}

export default withDefaultInputValues(ShoppingWindow)