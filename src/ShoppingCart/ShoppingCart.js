import React from 'react';
import Total from './Total';
import Summary from './Summary';

function ShoppingCart(props){
    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,0);

        return(
            <section className="main_summary">
                <h2>Your Cart</h2>
                <Summary selected={props.selected}/>
                <Total total={total}/>
            </section>
        )
}

export default ShoppingCart;
