import { Container, HugeText, Text, Id } from './modules'
import {Product as Props} from "store/types";
import React from "react";

export const Product: React.FC<Props> = ({ price, category, name, id }) => (
    <Container>
        <HugeText>{name}</HugeText>
        <Text>{category}</Text>
        <HugeText>{price}</HugeText>
        <Id>{id}</Id>
    </Container>
)