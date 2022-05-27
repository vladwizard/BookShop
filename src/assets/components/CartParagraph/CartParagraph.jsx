import React from "react";
import styles from "./CartParagraph.module.css"
import {cartContext} from "../../../App.jsx"


function CartParagraph({book, indexes, count}) {
    const {cartList, setCart} = React.useContext(cartContext);
    return (


        <div className={styles.root}>
            <div className={styles.img__container}>
                <img src={book.image}/>
            </div>

            <div className={styles.content}>
                <div>
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                </div>

                <div className={styles.right__content}>
                    <p className={styles.count}>Количество: {count}</p>
                    <div >

                        <p className={styles.price}>Цена: <span>{book.price}</span></p>
                        <button className={styles.cart__button}
                                onClick={() => {
                                    let rezult = cartList.slice();
                                    rezult.splice(cartList.indexOf(book), 1);
                                    setCart(rezult);

                                }}
                        >Удалить <br/> из корзины
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartParagraph;