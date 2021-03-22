export default (state = {}, action = {}) => {
    switch (action.type) {
        case 'buy': {
            const cart = state.cart ? [...state.cart] : [];
            const existing = cart.findIndex(
                item => item.id === action.payload.id
            );

            if (existing !== -1) {
                cart[existing].quantity = cart[existing].quantity + 1;
            } else {
                cart.push({quantity: 1, ...action.payload})
            }

            return {
                ...state,
                cart
            };
        }

        case 'clearBasket': {
            return {
                ...state,
                cart: []
            }
        }

        default:
            return {...state};
    }
}