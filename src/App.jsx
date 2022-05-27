import React from "react";
import './App.css';
import logoImg from "./assets/images/book-logo.png"
import cartImg from "./assets/images/cart.png"
import Cart from "./assets/pages/Cart"
import Home from "./assets/pages/Home";
import close from "./assets/images/close.svg"
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

export const cartContext = React.createContext();

function App() {
    const [find, setFind] = React.useState("");
    const [cartList, setCart] = React.useState([]);
    return (
        <cartContext.Provider value={{cartList, setCart}}>
            <div className="wrapper">
                <div className="header">
                    <div className="container">
                        <Link to="/" className="header__logo" onClick={()=>setFind("")}>
                            <img src={logoImg} alt="Book logo"/>
                            <h1>React-book</h1>
                        </Link>

                            <div className="find__line">
                            <input value={find} onChange={(e) => {
                                setFind(e.target.value)
                            }} placeholder="Строка поиска"/>

                            {find != "" ? (<img src={close} onClick={() => setFind("")}/>) : ""}

                        </div>
                        <div className="cart__button__container">
                            <Link className="cart__button" to="/cart" onClick={()=>setFind("")}>
                                <p>{cartList.map((x) => +(x.price)).reduce(
                                    (previousValue, currentValue) => previousValue + currentValue, 0)}
                                </p>
                                <div className="button__delimiter"/>
                                <img src={cartImg} alt="Cart"/>
                                <p>{cartList.length}</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home find={find}/>}/>
                        <Route path="/cart" element={<Cart find={find}/>}/>
                    </Routes>
                </div>
            </div>
        </cartContext.Provider>
    );
}

export default App;
