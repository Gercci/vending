import { Total, Container } from './modules';
import React from "react";
import {validateInput} from "utils/validators/validateInput";
import {useAppSelector} from "store";
import { insertMoney } from "store/rootSlice";
import {Button, Error, Input, InputWrapper} from "Global";
import {ContextValue, withDefaultInputValues} from "hocs/InputHoc";

const unavailableBill = 'Данная купюра не принмается'

const CashBox: React.FC<ContextValue> = ({ dispatch, setData, data, onChange, onClick }) => {
    const total = useAppSelector(state => state.total)
    return (
        <Container>
            <Total>В банкомате: {total}</Total>
            <InputWrapper>
                <Input value={data.value} onChange={onChange} placeholder='Введите вносимую сумму' />
                <Button onClick={() => onClick(unavailableBill, insertMoney(+data.value), validateInput)}>Ввести деньги</Button>
            </InputWrapper>
            {<Error>{data.err || null}</Error>}
        </Container>
    )
}

export default withDefaultInputValues(CashBox)