import React from 'react';
import { connect } from 'react-redux';

const Output = () => {
  return (
    <React.Fragment>
      Output
    </React.Fragment>
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
