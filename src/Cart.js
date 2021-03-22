import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';


const Cart = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 32px;
`;

const CartItem = styled.div `
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    padding: 9px;
    &:nth-child(even) {
        background-color: #ebebeb;
    }
`;

const CartItemPrice = styled.div `
    
`;

const CartItemName = styled.div `
    grid-row-start: 1;
    grid-column-start: 1;
    grid-column-end: 3;
`;

const CartItemProductId = styled.div `
    font-size: 12px;
    font-weight: lighter;
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 2;
`;

const CartItemPricing = styled.div `
    font-size: 16px;
    text-align: right;
    grid-row-start: 1;
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    flex-direction: row;
    justify-content: right;
`;

const CartItemQuantity = styled.div `
    &:after {
        content: ' x ';
    }
`;

const Button = styled.div `
    margin-top: 16px;
    width: 100px;
    float: right;
`;

export default () => {
    const cart = useSelector(state => state.cart);
    //const { itemCount, cost } = useSelector(summarizser);
    //const tax = useSelector(taxer);
    const dispatch = useDispatch();

    return (
        <Cart>
        <h2>Cart</h2>
        {(cart && cart.length) ? 
            <>
            { cart.map(item => 
            <CartItem>
                <CartItemName>{item.name}</CartItemName>
                <CartItemProductId>{item.id}</CartItemProductId>
                <CartItemPricing>
                    <CartItemQuantity>{item.quantity}</CartItemQuantity>
                    <CartItemPrice>{item.price}</CartItemPrice>
                </CartItemPricing>
            </CartItem>
            )}
            {/* <p>{itemCount} items</p> */}
            {/* <p>Total: ${cost.toFixed(2)}</p> */}
            <Button>Clear</Button>
            </>
         : '카트가 비어 있어요' }
        </Cart>
    )
}