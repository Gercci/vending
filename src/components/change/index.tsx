import {useAppSelector} from "../../store";
import React from "react";
import { Text } from './modules'
import {SmallTitle} from "Global";
export const Change: React.FC = () => {
    const { total, bills }  = useAppSelector(state => state.change)
    if (!total) return null
    // @ts-ignore
    return (
        <div>
            <SmallTitle>Сдача: {total}</SmallTitle>
            <SmallTitle>В следующих купюрах:</SmallTitle>
            <ul>
                {Object.entries(bills).map(([key, value]) => (
                    <li key={key}>
                        <Text>
                            {key}₽ x {value}
                        </Text>
                    </li>
                ))}
            </ul>
        </div>
    )
}