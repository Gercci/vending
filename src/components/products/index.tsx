import {useAppSelector} from "store";
import {Product} from "./product";
import {Grid} from "./modules";

export const Products = () => {
    const products = useAppSelector(state => state.products)
    return (
        <Grid>
            {products?.map(product => <Product {...product} />)}
        </Grid>
    )
}