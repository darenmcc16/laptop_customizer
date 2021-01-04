import React from 'react';
import './App.css';
import FeatureList from './FeatureList';


function FeaturesContainer (props){
    <section className="main__form">
    <h2>Customize your laptop</h2>
    <FeatureList
    features={props.features}
    selected={props.selected}
    handleUpdate={props.handleUpdate}
    />
  </section>
}

export default FeaturesContainer;