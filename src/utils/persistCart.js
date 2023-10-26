import { useState } from "react";

export const saveCart = async (item) => {
    let localStore = localStorage.getItem('cart')
    console.log(JSON.parse(localStore))
    if(localStore !== null) {
        localStorage.setItem('cart', JSON.stringify([...JSON.parse(localStore), item]));
    }else {
        const store = new Array(item)
        localStorage.setItem('cart', JSON.stringify(store))
    }

    alert("Item added Succesfully!")
}