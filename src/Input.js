import React, { useState } from 'react';
import { connect } from 'react-redux';
import postCustomPricing from './postCustomPricing';

const Input = ({ postCustomPricing, postCustomPricingReducer }) => {

  const [quantity, setQuantity] = useState('');
  const [quantityValid, setQuantityValid] = useState(true);
  const [largeSizedItemQuantity, setLargeSizedItemQuantity] = useState('');
  const [largeSizedItemQuantityValid, setLargeSizedItemQuantityValid] = useState(true);
  const [totalDiscountPercentage, setTotalDiscountPercentage] = useState('');
  const [totalDiscountPercentageValid, setTotalDiscountPercentageValid] = useState(true);
  const [totalDiscountValue, setTotalDiscountValue] = useState('');
  const [totalDiscountValueValid, setTotalDiscountValueValid] = useState(true);
  const [extraChargePerSqFt, setExtraChargePerSqFt] = useState('');
  const [extraChargePerSqFtValid, setExtraChargePerSqFtValid] = useState(true);
  const [sqFt, setSqFt] = useState('');
  const [sqFtValid, setSqFtValid] = useState(true);
  const [conditionalDiscount, setConditionalDiscount] = useState({
    monthlyBillTarget: '',
    discountValue: '',
    discountPercentage: ''
  })
  const [conditionalDiscountValid, setConditionalDiscountValidValid] = useState(true);
  const [staggeredPricing, setStaggeredPricing] = useState({
    hundredItems: {
      discountValue: '',
      discountPercentage: '',
      extraChargePerSqFt: ''
    },
    twoHundredItems: {
      discountValue: '',
      discountPercentage: '',
      extraChargePerSqFt: ''
    },
    overTwoHundredItems: {
      discountValue: '',
      discountPercentage: '',
      extraChargePerSqFt: ''
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
    if ((/^[1-9]([0-9]{0,2}$)/g.test(value) && (parseInt(value) <= parseInt(quantity))) || !value) {
      // Regex ^ ensures value is a valid number less than 1000
      setLargeSizedItemQuantityValid(true);
    } else {
      setLargeSizedItemQuantityValid(false);
    }
  }

  const handleTotalDiscountPercentage = value => {
    setTotalDiscountPercentage(value)
    if (/^[1-9]([0-9]{0,1}$)/g.test(value) || !value) {
      // Regex ^ ensures value is a valid number less than 100
      setTotalDiscountPercentageValid(true);
    } else {
      setTotalDiscountPercentageValid(false);
    }
  }

  const handleTotalDiscountValue = value => {
    setTotalDiscountValue(value)
    if (/^[1-9]([0-9]{0,2}$)/g.test(value) || !value) {
      // Regex ^ ensures value is a valid number less than 1000
      setTotalDiscountValueValid(true);
    } else {
      setTotalDiscountValueValid(false);
    }
  }

  const handleExtraChargePerSqFt = value => {
    setExtraChargePerSqFt(value)
    if (/^[1-9]([0-9]{0,0}$)/g.test(value) || !value) {
      // Regex ^ ensures value is a valid number less than 10
      setExtraChargePerSqFtValid(true);
    } else {
      setExtraChargePerSqFtValid(false);
    }
  }

  const handleSqFt = value => {
    setSqFt(value)
    if (/^[1-9]([0-9]{0,2}$)/g.test(value) || !value) {
      // Regex ^ ensures value is a valid number less than 1000
      setSqFtValid(true);
    } else {
      setSqFtValid(false);
    }
  }

  const renderForm = () => {
    return (
      <React.Fragment>
        <div className="field">
          <label className="label">Storage quantity</label>
          <div className="control">
            <input className={quantityValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={quantity} onChange={event => handleQuantity(event.target.value)} />
          </div>
          {quantityValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
        </div>

        <div className="field">
          <label className="label">If any of the items above are considered 'Large', specify their quantity</label>
          <div className="control">
            <input className={largeSizedItemQuantityValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={largeSizedItemQuantity} onChange={event => handleLargeSizedItemQuantity(event.target.value)} />
          </div>
          {largeSizedItemQuantityValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than or equal to the 'Quantity' above</p>}
        </div>

        <div className="field">
          <label className="label">Apply a percentage discount on the entire quote</label>
          <div className="control">
            <input className={totalDiscountPercentageValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={totalDiscountPercentage} onChange={event => handleTotalDiscountPercentage(event.target.value)} />
          </div>
          {totalDiscountPercentageValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 100</p>}
        </div>

        <div className="field">
          <label className="label">Apply a flat dollar amount discount on the entire quote</label>
          <div className="control">
            <input className={totalDiscountValueValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={totalDiscountValue} onChange={event => handleTotalDiscountValue(event.target.value)} />
          </div>
          {totalDiscountValueValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than $1,000</p>}
        </div>

        <div className="field">
          <label className="label">Apply a per square foot charge for items</label>
          <div className="control">
            <input className={extraChargePerSqFtValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={extraChargePerSqFt} onChange={event => handleExtraChargePerSqFt(event.target.value)} />
          </div>
          {extraChargePerSqFtValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than $10</p>}
        </div>

        <div className="field">
          <label className="label">Square footage</label>
          <div className="control">
            <input className={sqFtValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={sqFt} onChange={event => handleSqFt(event.target.value)} />
          </div>
          {sqFtValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
        </div>

        <h4 className="subtitle is-4">Staggered Pricing</h4>

        <h5 className="subtitle is-5">First set of items</h5>
        <div className="field is-grouped">
          <div className="control">
            <label className="label">Storage quantity</label>
            <input className={sqFtValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={sqFt} onChange={event => handleSqFt(event.target.value)} />
          </div>
          {sqFtValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
          <div className="control">
            <label className="label">Percentage discount</label>
            <input className={sqFtValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={sqFt} onChange={event => handleSqFt(event.target.value)} />
          </div>
          {sqFtValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
        </div>

        <h5 className="subtitle is-5">Second set of items</h5>
        <div className="field is-grouped">
          <div className="control">
            <label className="label">Storage quantity</label>
            <input className={sqFtValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={sqFt} onChange={event => handleSqFt(event.target.value)} />
          </div>
          {sqFtValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
          <div className="control">
            <label className="label">Percentage discount</label>
            <input className={sqFtValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={sqFt} onChange={event => handleSqFt(event.target.value)} />
          </div>
          {sqFtValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
        </div>

        <h5 className="subtitle is-5">Remaining items</h5>
        <div className="field is-grouped">
          <div className="control">
            <label className="label">Storage quantity</label>
            <input className={sqFtValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={sqFt} onChange={event => handleSqFt(event.target.value)} />
          </div>
          {sqFtValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
          <div className="control">
            <label className="label">Percentage discount</label>
            <input className={sqFtValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={sqFt} onChange={event => handleSqFt(event.target.value)} />
          </div>
          {sqFtValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
        </div>
      </React.Fragment>
    )
  }

  const handleSubmit = () => {
    postCustomPricing(quantity, largeSizedItemQuantity, totalDiscountPercentage, totalDiscountValue, extraChargePerSqFt, sqFt)
  }

  const renderButton = () => {
    return (
      <button className="button is-primary is-pulled-right" disabled={quantity ? '' : 'disabled'} onClick={handleSubmit}>
        Provide quote
      </button>
    )
  }

  return (
    <React.Fragment>
      <h4 className="subtitle is-4">Submit the form below to receive both monthly and yearly quotes for your prospective customer:</h4>
      {renderForm()}
      {renderButton()}
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
