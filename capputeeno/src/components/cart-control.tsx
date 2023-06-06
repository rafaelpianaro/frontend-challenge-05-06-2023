
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import { styled } from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    font-size: 10px;
    background-color: var(--delete-color);
    color: white;
    position: absolute;
    margin-left: -10px;
    top: 50%;
`

const Container = styled.div`
    position: relative;
`

export function CartControl() {

    const { value } = useLocalStorage('cart-items', [])
    // console.log('value', value)

     return (
        <Container>
            <CartIcon/>
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
     )
}