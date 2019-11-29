import React from 'react';
import { connect } from 'react-redux';
import postCustomPricing from './postCustomPricing';

const Input = () => {
  return (
    <div>
      Input
    </div>
  )
}

export default connect(
  null,
  { postCustomPricing },
)(Input)
