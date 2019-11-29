import React from 'react';
import { connect } from 'react-redux';

const Output = () => {
  return (
    <div>
      Output
    </div>
  )
}

const mapStateToProps = ({ postCustomPricingReducer }) => {
  console.log(postCustomPricingReducer)
  return {
    postCustomPricingReducer
  }
}

export default connect(
  mapStateToProps,
  null,
)(Output)
