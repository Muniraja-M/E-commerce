import React, { useState } from 'react';

const Quantity = ({ price }) => {
    const [quantity, setQuantity] = useState(1);

    const incNum = () => {
        setQuantity(quantity + 1);
    };
    const DcrNum = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        } else {
            setQuantity(0);
        }
    };
    return (
        <>
            Price:${price * quantity}
            <div className='wrapper'>
                <button
                    onClick={DcrNum}
                    disabled={quantity === 1 ? true : false}
                >
                    -
                </button>
                <span>{quantity}</span>
                <button onClick={incNum}>+</button>
            </div>
        </>
    );
};

export default Quantity;
