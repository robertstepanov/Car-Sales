import React from 'react';
import { connect } from 'react-redux';

import { buyItem } from '../actions/addFeatureActions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button key={props.id} className="button" onClick={() => props.buyItem(props.item)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  // return {
  //   key:state.additionalFeatures.id,
  //   name:state.additionalFeatures.name,
  //   price:state.additionalFeatures.price
  // }
  return {
    additionalFeatures: state.totalReducer
  }
}

export default connect(
  mapStateToProps,
  { buyItem }
)(AdditionalFeature);
