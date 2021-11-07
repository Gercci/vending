import {useAppSelector} from "store";
import {SmallTitle} from "Global";

export const ReceivedGood = () => {
    const receivedGood = useAppSelector(state => state.receivedGood)
    return receivedGood ? <SmallTitle>Полученный продукт: {receivedGood.name}</SmallTitle> : null
}