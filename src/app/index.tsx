import React from 'react';
import CashBox from "components/cashbox";
import {DefaultInputProvider} from "hocs/InputHoc";
import ShoppingWindow from "components/shopping-window";
import {ReceivedGood} from "components/received-good";
import {Change} from "components/change";
import {Products} from "components/products";

export const App: React.FC = () => (
    <>
        <DefaultInputProvider>
            <CashBox />
        </DefaultInputProvider>
        <DefaultInputProvider>
            <ShoppingWindow />
        </DefaultInputProvider>
        <ReceivedGood />
        <Change />
        <Products />
    </>
)
