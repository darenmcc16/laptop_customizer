import React from 'react';


function FeatureItem(props){
    return(
        <div className="feature_item">
            <input
            id={props.item.name}
            type="radio"
            name={props.feature}
            className={props.featureClass}
            checked={props.featureClass.includes('feature_selected') ? true:false}
            onChange={e => props.handleUpdate(props.feature, props.item)}
            />

            <label htmlFor={props.item.name} className="feature_label">
                {props.item.name}
                ({new Intl.NumberFormat('en-Us', {style: 'currency', currency: 'USD'}).format(props.item.cost)})
            </label>
        </div>
    )
}

export default FeatureItem;