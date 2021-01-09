import React from 'react';
import FeatureList from './FeatureList';


function FeaturesContainer (props){
  return (
    <section className="main__form" role="region">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {Object.keys(props.features)
            .map((key, index, title) => 
                <FeatureList
                    key={index}
                    index={index}
                    title={title[index]}
                    options={props.features[key]}
                    selected={props.selected}
                    onClick={props.onClick} 
                />
        )}
    </section>
);
        }
export default FeaturesContainer;