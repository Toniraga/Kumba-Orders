import { ORDERS_FETCHED } from './orders.actions'

const INITIAL_STATE = {
    order_id: '',
    items: [],
    restaurant: {},
    user: {},
    createdAt: ''
};

export const orderReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ORDERS_FETCHED:
            const { order_id, items, restaurant, user, createdAt } = action.payload
            return {
                ...state,
                order_id,
                items,
                restaurant,
                createdAt,
                user
            }

        default:
            return state
    }
}