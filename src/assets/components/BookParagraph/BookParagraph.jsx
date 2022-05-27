import React from "react";
import styles from "./BookParagraph.module.css"
import {cartContext} from "../../../App.jsx"


function BookParagraph({book}) {
    const {cartList, setCart} = React.useContext(cartContext);
    return (
        <div className={styles.root}>
            <div className={styles.img__container}>
                <img src={book.image}/>
            </div>

            <div className={styles.description}>
                <div className={styles.top}>
                    <div>
                        <h2>{book.title}</h2>
                        <h3>{book.author}</h3>
                    </div>
                    <div>
                        <p className={styles.price}>Цена: <span>{book.price}</span></p>
                        <button className={styles.cart__button}
                                onClick={() => {
                                    setCart(cartList.concat(book))
                                }}
                        >Добавить <br/> в корзину
                        </button>

                    </div>
                </div>

                <p className={styles.text__description}> {book.description}</p>
                <p className={styles.pages}>Страниц: {book.pages}</p>
            </div>

        </div>
    );
}

export default BookParagraph;