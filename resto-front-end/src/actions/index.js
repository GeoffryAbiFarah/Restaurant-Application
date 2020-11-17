export const increment = (nb) => {
    return {
        type: 'INCREMENT',
        payload : nb
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
