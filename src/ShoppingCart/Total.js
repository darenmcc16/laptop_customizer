import React from 'react';


function Total(props){
    return(
        <div className="summary_total">
            <div className="summary_total_label">Total</div>
            <div className="summary_total_value">
                { new Intl.NumberFormat('en-US', {style: 'currency', currency:'USD'})
                .format(props.total)}
            </div>
        </div>
    )
}

export default Total;