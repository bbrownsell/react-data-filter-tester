import React from 'react'

const ShoppingList = ({shoppingItems}) => {
    return (
        <>
            {shoppingItems.map((item) => {
                const {id, title, category, price, img, desc} = item;
                return (
                    <div className="item" key={id}>
                        <h3>{title}</h3>
                        <img src={img} alt={title} className="image"/>
                        <h4>{category}</h4>
                        <h5>${price}</h5>
                        <p>{desc}</p>
                    </div>
                )

            })}
        </>
    )
}

export default ShoppingList
