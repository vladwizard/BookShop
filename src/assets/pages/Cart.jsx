import React from "react";
import CartParagraph from "../components/CartParagraph";

import {cartContext} from "../../App.jsx"


export default function Cart(props) {
    const {cartList} = React.useContext(cartContext);
    const cartMap = new Map();
    return (

        <div className="container">
            {
                cartList.forEach((x) => {
                    cartMap.has(x) ? cartMap.set(x, cartMap.get(x) + 1) : cartMap.set(x, 1)
                })
            }
            {
                new Array(...cartMap.keys()).filter((x) => (x.title.toLowerCase().includes(props.find.toLowerCase())) || (x.author.toLowerCase().includes(props.find.toLowerCase())))
                    .map((book, i) => {
                        return <CartParagraph book={book} key={i} count={cartMap.get(book)}/>
                    })
            }
        </div>
    )
}
