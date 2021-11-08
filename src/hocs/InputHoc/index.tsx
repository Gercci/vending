import React, {FormEvent, useContext, useState} from "react";
import {useAppDispatch} from "store";
import {AnyAction, Dispatch} from "redux";
import {validateInput} from "utils/validators/validateInput";

interface InitialState {
    value: string,
    err: boolean | string
}

const initialState: InitialState = {
    value: '',
    err: false
}

type InputType = FormEvent<HTMLInputElement>
type OnChange = (value: InputType) => any
type OnClick = (err: string, action: AnyAction, availabilityChecker: any) => any

type SetErr = (err: string) => any


export interface ContextValue {
    data: InitialState,
    setData: any,
    dispatch: Dispatch<AnyAction>,
    onChange: OnChange,
    onClick: OnClick,
    setErr: SetErr
}

const Context = React.createContext<Partial<ContextValue>>({})

export const DefaultInputProvider = ({ children }: any) => {
    const [data, setData] = useState(initialState)
    const dispatch = useAppDispatch()
    const onChange: OnChange = ({ currentTarget: { value } }) => {
        const { isCorrect } = validateInput(value)
        if(!isCorrect) return value ? null : setData({ ...data, value })
        setData({ ...data, value, err: false })
    }
    const setErr: SetErr = (err) => setData({ ...data, err })
    const onClick: OnClick = (err, action, availabilityChecker) => {
        const { isAvailable } = availabilityChecker(data.value)
        if(!isAvailable) return  setData({ ...data, err })
        setData({ ...data, err: false })
        dispatch(action)
    }
    return (
        <Context.Provider value={{ data, onClick, setData, dispatch, onChange, setErr }} >
            {children}
        </Context.Provider>
    )
}

export const withDefaultInputValues = (Component: React.FC<ContextValue>) => (props: any) => {
    const context = useContext(Context)
    return (
        <Component {...context} {...props} />
    )
}