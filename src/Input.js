import React, { useState } from 'react';
import { connect } from 'react-redux';
import postCustomPricing from './postCustomPricing';

const Input = ({ postCustomPricing, postCustomPricingReducer }) => {

  const [quantity, setQuantity] = useState('');
  const [quantityValid, setQuantityValid] = useState(true);
  const [largeSizedItemQuantity, setLargeSizedItemQuantity] = useState('');
  const [largeSizedItemQuantityValid, setLargeSizedItemQuantityValid] = useState(true);
  const [totalDiscountPercentage, setTotalDiscountPercentage] = useState(0);
  const [totalDiscountPercentageValid, setTotalDiscountPercentageValid] = useState(true);
  const [totalDiscountValue, setTotalDiscountValue] = useState(0);
  const [totalDiscountValueValid, setTotalDiscountValueValid] = useState(true);
  const [extraChargePerSqFt, setExtraChargePerSqFt] = useState(0);
  const [extraChargePerSqFtValid, setExtraChargePerSqFtValid] = useState(true);
  const [sqFt, setSqFt] = useState(0);
  const [sqFtValid, setSqFtValid] = useState(true);
  const [conditionalDiscount, setConditionalDiscount] = useState({
    monthlyBillTarget: 0,
    discountValue: 0,
    discountPercentage: 0
  })
  const [conditionalDiscountValid, setConditionalDiscountValidValid] = useState(true);
  const [staggeredPricing, setStaggeredPricing] = useState({
    hundredItems: {
      discountValue: 0,
      discountPercentage: 0,
      extraChargePerSqFt: 0
    },
    twoHundredItems: {
      discountValue: 0,
      discountPercentage: 0,
      extraChargePerSqFt: 0
    },
    overTwoHundredItems: {
      discountValue: 0,
      discountPercentage: 0,
      extraChargePerSqFt: 0
    }
  })
  const [staggeredPricingValid, setStaggeredPricingValid] = useState(true);
  const [pristine, setPristine] = useState(true);

  const handleQuantity = value => {
    setPristine(false);
    setQuantity(value)
    if (/^[1-9]([0-9]{0,2}$)/g.test(value)) {
      // Regex ^ ensures value is a valid number less than 1000
      setQuantityValid(true);
    } else {
      setQuantityValid(false);
    }
  }

  const handleLargeSizedItemQuantity= value => {
    setLargeSizedItemQuantity(value)
    if ((/^[1-9]([0-9]{0,2}$)/g.test(value) && (value <= quantity)) || !value) {
      // Regex ^ ensures value is a valid number less than 1000
      setLargeSizedItemQuantityValid(true);
    } else {
      setLargeSizedItemQuantityValid(false);
    }
  }

  const renderForm = () => {
    return (
      <React.Fragment>
        <div className="field">
          <label className="label">Quantity</label>
          <div className="control">
            <input className={quantityValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={quantity} onChange={event => handleQuantity(event.target.value)} />
          </div>
          {quantityValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number less than 1000</p>}
        </div>

        <div className="field">
          <label className="label">If any of the items are considered 'Large', specify their quantity</label>
          <div className="control">
            <input className={largeSizedItemQuantityValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={largeSizedItemQuantity} onChange={event => handleLargeSizedItemQuantity(event.target.value)} />
          </div>
          {largeSizedItemQuantityValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number less than or equal to the 'Quantity' above</p>}
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <h4 className="subtitle is-4">Submit the form below to receive both monthly and yearly quotes for your customer:</h4>
      {renderForm()}
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
  // https://react-redux.js.org/api/connect#object-shorthand-form
  { postCustomPricing },
)(Input)
