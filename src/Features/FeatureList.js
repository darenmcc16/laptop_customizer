import React from 'react';
import FeatureItem from './FeatureItem';


function FeatureList (props){
    return (
        <section className="main__form">
            <div className="feature__name">{props.title}</div>
            <ul className="feature__list">
                {props.options && props.options.map((key, index, options,) =>
                    <FeatureItem
                        key={index}
                        title={props.title}
                        parts={options[index]}
                        selected={props.selected}
                        name={key.name}
                        cost={key.cost}
                        onClick={props.onClick}
                        bgColor={props.bgColor}
                        change={props.change}                   
                    />
                )}
            </ul>
        </section>
    );
}

export default FeatureList;