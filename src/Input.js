import React, { useState } from 'react';
import { connect } from 'react-redux';
import postCustomPricing from './postCustomPricing';

const Input = ({ postCustomPricing, postCustomPricingReducer }) => {

  const [quantity, setQuantity] = useState('');
  const [quantityValid, setQuantityValid] = useState(true);
  const [extraChargeReason, setExtraChargeReason] = useState('');
  const [extraChargeReasonValid, setExtraChargeReasonValid] = useState(true);
  const [totalDiscountPercentage, setTotalDiscountPercentage] = useState('');
  const [totalDiscountPercentageValid, setTotalDiscountPercentageValid] = useState(true);
  const [totalDiscountValue, setTotalDiscountValue] = useState('');
  const [totalDiscountValueValid, setTotalDiscountValueValid] = useState(true);
  const [extraChargePerSqFt, setExtraChargePerSqFt] = useState('');
  const [extraChargePerSqFtValid, setExtraChargePerSqFtValid] = useState(true);
  const [sqFt, setSqFt] = useState('');
  const [sqFtValid, setSqFtValid] = useState(true);
  // const [conditionalDiscount, setConditionalDiscount] = useState({
  //   monthlyBillTarget: '',
  //   discountValue: '',
  //   discountPercentage: ''
  // })
  // const [conditionalDiscountValid, setConditionalDiscountValidValid] = useState(true);
  const [stgPrcFirstQuantity, setStgPrcFirstQuantity] = useState('')
  const [stgPrcFirstQuantityValid, setStgPrcFirstQuantityValid] = useState(true);
  const [stgPrcFirstPercentageDiscount, setStgPrcFirstPercentageDiscount] = useState('')
  const [stgPrcFirstPercentageDiscountValid, setStgPrcFirstPercentageDiscountValid] = useState(true);
  const [stgPrcSecondQuantity, setStgPrcSecondQuantity] = useState('')
  const [stgPrcSecondQuantityValid, setStgPrcSecondQuantityValid] = useState(true);
  const [stgPrcSecondPercentageDiscount, setStgPrcSecondPercentageDiscount] = useState('')
  const [stgPrcSecondPercentageDiscountValid, setStgPrcSecondPercentageDiscountValid] = useState(true);
  const [stgPrcRemainingQuantity, setStgPrcRemainingQuantity] = useState('')
  const [stgPrcRemainingQuantityValid, setStgPrcRemainingQuantityValid] = useState(true);
  const [stgPrcRemainingPercentageDiscount, setStgPrcRemainingPercentageDiscount] = useState('')
  const [stgPrcRemainingPercentageDiscountValid, setStgPrcRemainingPercentageDiscountValid] = useState(true);

  const handleQuantity = value => {
    setQuantity(value)
    if (/^[1-9]([0-9]{0,2}$)/g.test(value)) {
      // Regex ^ ensures value is a valid number less than 1000
      setQuantityValid(true);
    } else {
      setQuantityValid(false);
    }
  }

  const handleExtraChargeReason= value => {
    setExtraChargeReason(value)
    if (/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g.test(value)) {
      // https://www.regextester.com/93960
      // Regex ^ ensures value is a valid set of words and numbers with no symbols
      setExtraChargeReasonValid(true);
    } else {
      setExtraChargeReasonValid(false);
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

  const handleStgPrcFirstQuantity = value => {
    setStgPrcFirstQuantity(value)
    if (/^[1-9]([0-9]{0,2}$)/g.test(value) || !value) {
      // Regex ^ ensures value is a valid number less than 1000
      setStgPrcFirstQuantityValid(true);
    } else {
      setStgPrcFirstQuantityValid(false);
    }
  }

  const handleStgPrcFirstPercentageDiscount = value => {
    setStgPrcFirstPercentageDiscount(value)
  }

  const handleStgPrcSecondQuantity = value => {
    setStgPrcSecondQuantity(value)
    if (/^[1-9]([0-9]{0,2}$)/g.test(value) && (parseInt(value) <= (999 - parseInt(stgPrcFirstQuantity))) || !value) {
      // Regex ^ ensures value is a valid number less than 1000
      setStgPrcSecondQuantityValid(true);
    } else {
      setStgPrcSecondQuantityValid(false);
    }
  }

  const handleStgPrcSecondPercentageDiscount = value => {
    setStgPrcSecondPercentageDiscount(value)
  }

  const handleStgPrcRemainingQuantity = value => {
    setStgPrcRemainingQuantity(value)
    if (/^[1-9]([0-9]{0,2}$)/g.test(value) && (parseInt(value) <= (999 - (parseInt(stgPrcFirstQuantity) + parseInt(stgPrcSecondQuantity)))) || !value) {
      // Regex ^ ensures value is a valid number less than 1000
      setStgPrcRemainingQuantityValid(true);
    } else {
      setStgPrcRemainingQuantityValid(false);
    }
  }

  const handleStgPrcRemainingPercentageDiscount = value => {
    setStgPrcRemainingPercentageDiscount(value)
  }

  const renderExtraChargeSqFt = () => {
    return (
      <React.Fragment>
        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">Per square foot charge</label>
            <input className={extraChargePerSqFtValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={extraChargePerSqFt} onChange={event => handleExtraChargePerSqFt(event.target.value)} />
            {extraChargePerSqFtValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than $10</p>}
          </div>

          <div className="control is-expanded">
            <label className="label">Square footage</label>
            <input className={sqFtValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={sqFt} onChange={event => handleSqFt(event.target.value)} />
            {sqFtValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
          </div>

          <div className="control is-expanded">
            <label className="label">Reason for extra charge</label>
            <input className={extraChargeReasonValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={extraChargeReason} onChange={event => handleExtraChargeReason(event.target.value)} />
            {extraChargeReasonValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid set of words and numbers with no symbols</p>}
          </div>
        </div>
      </React.Fragment>
    )
  }

  const renderStaggeredPricing = () => {
    console.log(quantity)
    return (
      <React.Fragment>
        <h6 className="subtitle is-6">______________________________</h6>
        <h4 className="subtitle is-4">Staggered Pricing</h4>

        <div className="is-size-5 is-italic">First set of items</div>
        <fieldset disabled={quantity && quantityValid}>
          {/* !!! */}
          <div className="field is-grouped">
            <div className="control is-expanded">
              <label className="label">Storage quantity</label>
              <input className={stgPrcFirstQuantityValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity"  value={stgPrcFirstQuantity} onChange={event => handleStgPrcFirstQuantity(event.target.value)} />
              {stgPrcFirstQuantityValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
            </div>
            <div className="control is-expanded">
              <label className="label">Percentage discount</label>
              <input className={stgPrcFirstPercentageDiscountValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={stgPrcFirstPercentageDiscount} onChange={event => handleStgPrcFirstPercentageDiscount(event.target.value)} />
              {stgPrcFirstPercentageDiscountValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
            </div>
          </div>

          <div className="is-size-5 is-italic">Second set of items</div>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <label className="label">Storage quantity</label>
              <input className={stgPrcSecondQuantityValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={stgPrcSecondQuantity} onChange={event => handleStgPrcSecondQuantity(event.target.value)} />
              {stgPrcSecondQuantityValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
            </div>
            <div className="control is-expanded">
              <label className="label">Percentage discount</label>
              <input className={stgPrcSecondPercentageDiscountValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={stgPrcSecondPercentageDiscount} onChange={event => handleStgPrcSecondPercentageDiscount(event.target.value)} />
              {stgPrcSecondPercentageDiscountValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
            </div>
          </div>

          <div className="is-size-5 is-italic">Remaining items</div>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <label className="label">Storage quantity</label>
              <input className={stgPrcRemainingQuantityValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={stgPrcRemainingQuantity} onChange={event => handleStgPrcRemainingQuantity(event.target.value)} />
              {stgPrcRemainingQuantityValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
            </div>
            <div className="control is-expanded">
              <label className="label">Percentage discount</label>
              <input className={stgPrcRemainingPercentageDiscountValid ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={stgPrcRemainingPercentageDiscount} onChange={event => handleStgPrcRemainingPercentageDiscount(event.target.value)} />
              {stgPrcRemainingPercentageDiscountValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
            </div>
          </div>
        </fieldset>
      </React.Fragment>
    )
  }

  const renderForm = () => {
    return (
      <React.Fragment>
        <div className="field">
          <label className="label">Storage quantity</label>
          <div className="control">
            <input className={quantityValid || stgPrcFirstQuantity || stgPrcSecondQuantity || stgPrcRemainingQuantity ? 'input' : 'input is-danger'} type="text" name="Standard Sized Item Quantity" value={quantity} onChange={event => handleQuantity(event.target.value)} />
          </div>
          {quantityValid || stgPrcFirstQuantity || stgPrcSecondQuantity || stgPrcRemainingQuantity ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1000</p>}
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

        {renderExtraChargeSqFt()}
        {renderStaggeredPricing()}
      </React.Fragment>
    )
  }

  const handleSubmit = () => {
    postCustomPricing(quantity, extraChargeReason, totalDiscountPercentage, totalDiscountValue, extraChargePerSqFt, sqFt)
  }

  const renderButton = () => {
    return (
      <React.Fragment>
        <h6 className="subtitle is-6">______________________________</h6>
        <button className="button is-info is-outlined is-fullwidth" disabled={quantity ? '' : 'disabled'} onClick={handleSubmit}>
          Provide quote
        </button>
      </React.Fragment>
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
