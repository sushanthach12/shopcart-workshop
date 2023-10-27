
export const saveCart = async (item) => {
    let localStore = localStorage.getItem('cart')
    console.log(JSON.parse(localStore))

    // TODO : check if item already pressent in cart if not add to cart, if yes show item already present in cart
    
    if(localStore !== null) {
        localStorage.setItem('cart', JSON.stringify([...JSON.parse(localStore), item]));
    }else {
        const store = new Array(item)
        localStorage.setItem('cart', JSON.stringify(store))
    }

    alert("Item added Succesfully!")
}