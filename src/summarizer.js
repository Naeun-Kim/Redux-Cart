import { createSelector } from 'reselect';

export default createSelector(
    state => (state.cart || []),
    cart => ({
        itemCount: cart.reduce((i, j) => i + j.quantity, 0),
        cost: cart.reduce((i, j) => i + (j.quantity * j.price), 0)
    })
)