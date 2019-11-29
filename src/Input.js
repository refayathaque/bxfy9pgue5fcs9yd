import React, { useState } from 'react';
import { connect } from 'react-redux';
import postCustomPricing from './postCustomPricing';

const Input = ({ postCustomPricing, postCustomPricingReducer }) => {

  const [standardSizedItemQuantity, setStandardSizedItemQuantity] = useState('');
  const [standardSizedItemQuantityValid, setStandardSizedItemQuantityValid] = useState(true);

  const [largeSizedItemQuantity, setLargeSizedItemQuantity] = useState(false);
  const [largeSizedItemQuantityValid, setLargeSizedItemQuantityValid] = useState(true);

  const [totalDiscountPercentage, setTotalDiscountPercentage] = useState('');
  const [totalDiscountPercentageValid, setTotalDiscountPercentageValid] = useState(true);

  const [totalDiscountValue, setTotalDiscountValue] = useState('');
  const [totalDiscountValueValid, setTotalDiscountValueValid] = useState(true);

  const [largeItemExtraCharge, setLargeItemExtraCharge] = useState('');
  const [largeItemExtraChargeValid, setLargeItemExtraChargeValid] = useState(true);

  const [largeItemExtraChargeArea, setLargeItemExtraChargeArea] = useState('');
  const [largeItemExtraChargeAreaValid, setLargeItemExtraChargeAreaValid] = useState(true);
  
  const [pristine, setPristine] = useState(true);

  return (
    <div>
      Input
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
  // https://react-redux.js.org/api/connect#object-shorthand-form
  { postCustomPricing },
)(Input)
