import {BuyProduct, State} from "store/types";
import {products} from "mocks/products";
import {createSlice} from "@reduxjs/toolkit";
import {splitChangeByBills} from "../../utils/splitChangByBills";

const initialState: State = {
    products: products,
    total: 0,
    change: {
        total: 0,
        bills: {}
    },
    receivedGood: null
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        insertMoney: (state, { payload }) => ({...state, total: state.total + payload}),
        buyProduct: (state, { payload }: BuyProduct) => {
            if(!payload) return state //TS Вынуждает прописывать это условие, хотя dispatch не произойдет при {..., payload: undefined}
            const changeTotal = +state.total - payload.price
            const splitedChangeTotalByBills = splitChangeByBills(changeTotal)
            return {...state, total: 0, receivedGood: payload, change: { total: changeTotal, bills: splitedChangeTotalByBills }}
        }
    }
})

export const { insertMoney, buyProduct } = rootSlice.actions

export default rootSlice.reducer