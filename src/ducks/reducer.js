const initialState = {
    products: [],
    orders: [],
    //auth
    user: {}
}
const EDIT_PRODUCTS = 'EDIT_PRODUCTS';
const REMOVE_PRODUCTS = 'REMOVE_PRODUCTS';
const REMOVE_ORDERS = 'REMOVE_ORDERS';
const ADD_PRODUCT = 'ADD_PRODUCT';
//auth
const USER_DATA = 'USER_DATA';

export default function reducer(state = initialState, action){
    switch(action.type){
        case EDIT_PRODUCTS:
            return Object.assign({}, state, {products: action.payload})
        case REMOVE_PRODUCTS:
            return Object.assign({}, state, {products: action.payload})
        case REMOVE_ORDERS:
            return Object.assign({}, state, {orders: action.payload})
        case ADD_PRODUCT:
            let newProducts = state.products.slice()
            newProducts.push(action.payload)
            return Object.assign({}, state, {products: newProducts})
        //auth
        case USER_DATA:
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }
}

export function editProducts(products){
    return{
        type: EDIT_PRODUCTS,
        payload: products
    }
}
export function removeProducts(products){
    return{
        type: REMOVE_PRODUCTS,
        payload: products
    }
}
export function removeOrders(orders){
    return{
        type: REMOVE_ORDERS,
        payload: orders
    }
}
export function addProduct(products){
    return{
        type: ADD_PRODUCT,
        payload: products
    }
}
//auth
export function getUserData(user){
    return {
        type: USER_DATA,
        payload: user
    }
}
