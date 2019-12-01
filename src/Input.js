import React, { useState } from 'react';
import { connect } from 'react-redux';
import postCustomPricing from './postCustomPricing';

const Input = ({ postCustomPricing, postCustomPricingReducer }) => {

  const [quantity, setQuantity] = useState('');
  const [quantityValid, setQuantityValid] = useState(true);
  const [totalDiscountPercentage, setTotalDiscountPercentage] = useState('');
  const [totalDiscountPercentageValid, setTotalDiscountPercentageValid] = useState(true);
  const [totalDiscountValue, setTotalDiscountValue] = useState('');
  const [totalDiscountValueValid, setTotalDiscountValueValid] = useState(true);
  const [conditionalDiscountTrigger, setConditionalDiscountTrigger] = useState('');
  const [conditionalDiscountTriggerValid, setConditionalDiscountTriggerValid] = useState(true);

  const [extraChargePerSqFt, setExtraChargePerSqFt] = useState('');
  const [extraChargePerSqFtValid, setExtraChargePerSqFtValid] = useState(true);
  const [sqFt, setSqFt] = useState('');
  const [sqFtValid, setSqFtValid] = useState(true);
  const [extraChargeReason, setExtraChargeReason] = useState('');
  const [extraChargeReasonValid, setExtraChargeReasonValid] = useState(true);

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

  const [valueBasedItemsTotal, setValueBasedItemsTotal] = useState('')
  const [valueBasedItemsTotalValid, setValueBasedItemsTotalValid] = useState(true);
  const [valueBasedPercentageAsFee, setValueBasedPercentageAsFee] = useState('')
  const [valueBasedPercentageAsFeeValid, setValueBasedPercentageAsFeeValid] = useState(true);
  const [valueBasedPercentageDiscount, setValueBasedPercentageDiscount] = useState('')
  const [valueBasedPercentageDiscountValid, setValueBasedPercentageDiscountValid] = useState(true);

  const handleQuantity = value => {
    setQuantity(value)
    if (/^[1-9]([0-9]{0,2}$)/g.test(value)) {
      // Regex ^ ensures value is a valid number less than 1000
      setQuantityValid(true);
    } else {
      setQuantityValid(false);
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

  const handleConditionalDiscountTrigger = value => {
    setConditionalDiscountTrigger(value)
    if (/^[1-9]([0-9]{0,2}$)/g.test(value) || !value) {
      // Regex ^ ensures value is a valid number less than 1000
      setConditionalDiscountTriggerValid(true);
    } else {
      setConditionalDiscountTriggerValid(false);
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
    if (/^[1-9]([0-9]{0,1}$)/g.test(value) || !value) {
      // Regex ^ ensures value is a valid number less than 100
      setStgPrcFirstPercentageDiscountValid(true);
    } else {
      setStgPrcFirstPercentageDiscountValid(false);
    }
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
    if (/^[1-9]([0-9]{0,1}$)/g.test(value) || !value) {
      // Regex ^ ensures value is a valid number less than 100
      setStgPrcSecondPercentageDiscountValid(true);
    } else {
      setStgPrcSecondPercentageDiscountValid(false);
    }
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
    if (/^[1-9]([0-9]{0,1}$)/g.test(value) || !value) {
      // Regex ^ ensures value is a valid number less than 100
      setStgPrcRemainingPercentageDiscountValid(true);
    } else {
      setStgPrcRemainingPercentageDiscountValid(false);
    }
  }

  const handleValueBasedItemsTotal = value => {
    setValueBasedItemsTotal(value)
    if (/^[1-9]([0-9]{0,5}$)/g.test(value) || !value) {
      // Regex ^ ensures value is a valid number less than 1000000 (1 million)
      setValueBasedItemsTotalValid(true);
    } else {
      setValueBasedItemsTotalValid(false);
    }
  }

  const handleValueBasedPercentageAsFee = value => {
    setValueBasedPercentageAsFee(value)
    if (/^[1-9]([0-9]{0,1}$)/g.test(value) || !value) {
      // Regex ^ ensures value is a valid number less than 100
      setValueBasedPercentageAsFeeValid(true);
    } else {
      setValueBasedPercentageAsFeeValid(false);
    }
  }

  const handleValueBasedPercentageDiscount = value => {
    setValueBasedPercentageDiscount(value)
    if (/^[1-9]([0-9]{0,1}$)/g.test(value) || !value) {
      // Regex ^ ensures value is a valid number less than 100
      setValueBasedPercentageDiscountValid(true);
    } else {
      setValueBasedPercentageDiscountValid(false);
    }
  }

  const handleSubmit = () => {
    postCustomPricing(quantity, extraChargeReason, totalDiscountPercentage, totalDiscountValue, extraChargePerSqFt, sqFt)
  }

  const renderExtraChargeSqFt = () => {
    return (
      <React.Fragment>
        <div className="is-italic">* You can only apply these <u>extra charges</u> to <span className="has-text-weight-bold">standard</span> and <span className="has-text-weight-bold">staggered</span> pricing</div>
        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">$ - Per sq. ft. item(s) occupy</label>
            <input className={extraChargePerSqFtValid ? 'input' : 'input is-danger'} type="text" name="" value={extraChargePerSqFt} onChange={event => handleExtraChargePerSqFt(event.target.value)} />
            {extraChargePerSqFtValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than $10</p>}
          </div>

          <div className="control is-expanded">
            <label className="label">Sq. ft.</label>
            <input className={sqFtValid ? 'input' : 'input is-danger'} type="text" name="" value={sqFt} onChange={event => handleSqFt(event.target.value)} />
            {sqFtValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1,000</p>}
          </div>

          <div className="control is-expanded">
            <label className="label">Reason</label>
            <input className={extraChargeReasonValid ? 'input' : 'input is-danger'} type="text" placeholder="e.g., large or heavy item" name="" value={extraChargeReason} onChange={event => handleExtraChargeReason(event.target.value)} />
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
        <h4 className="subtitle is-4">Staggered Pricing</h4>

        <fieldset disabled={(quantity && quantityValid) || (valueBasedItemsTotal && valueBasedItemsTotalValid)}>
          <div className="is-italic">First set of items</div>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <label className="label">#</label>
              <input className={stgPrcFirstQuantityValid ? 'input' : 'input is-danger'} type="text" name=""  value={stgPrcFirstQuantity} onChange={event => handleStgPrcFirstQuantity(event.target.value)} />
              {stgPrcFirstQuantityValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1,000</p>}
            </div>
            <div className="control is-expanded">
              <label className="label">% discount</label>
              <input className={stgPrcFirstPercentageDiscountValid ? 'input' : 'input is-danger'} type="text" name="" value={stgPrcFirstPercentageDiscount} onChange={event => handleStgPrcFirstPercentageDiscount(event.target.value)} />
              {stgPrcFirstPercentageDiscountValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 100</p>}
            </div>
          </div>

          <div className="is-italic">Second set of items</div>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <label className="label">#</label>
              <input className={stgPrcSecondQuantityValid ? 'input' : 'input is-danger'} type="text" name="" value={stgPrcSecondQuantity} onChange={event => handleStgPrcSecondQuantity(event.target.value)} />
              {stgPrcSecondQuantityValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than the first set of items</p>}
            </div>
            <div className="control is-expanded">
              <label className="label">% discount</label>
              <input className={stgPrcSecondPercentageDiscountValid ? 'input' : 'input is-danger'} type="text" name="" value={stgPrcSecondPercentageDiscount} onChange={event => handleStgPrcSecondPercentageDiscount(event.target.value)} />
              {stgPrcSecondPercentageDiscountValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 100</p>}
            </div>
          </div>

          <div className="is-italic">Remaining items</div>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <label className="label">#</label>
              <input className={stgPrcRemainingQuantityValid ? 'input' : 'input is-danger'} type="text" name="" value={stgPrcRemainingQuantity} onChange={event => handleStgPrcRemainingQuantity(event.target.value)} />
              {stgPrcRemainingQuantityValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than the sum of the first and second set of items</p>}
            </div>
            <div className="control is-expanded">
              <label className="label">% discount</label>
              <input className={stgPrcRemainingPercentageDiscountValid ? 'input' : 'input is-danger'} type="text" name="" value={stgPrcRemainingPercentageDiscount} onChange={event => handleStgPrcRemainingPercentageDiscount(event.target.value)} />
              {stgPrcRemainingPercentageDiscountValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 100</p>}
            </div>
          </div>
        </fieldset>
      </React.Fragment>
    )
  }

  const renderStandardPricing = () => {
    return (
      <React.Fragment>
        <h4 className="subtitle is-4">Standard Pricing</h4>

        <fieldset disabled={(stgPrcFirstQuantity && stgPrcFirstQuantityValid) || (valueBasedItemsTotal && valueBasedItemsTotalValid)}>
          <div className="is-italic">Total number of items stored</div>
          <div className="field">
            <label className="label">#</label>
            <div className="control">
              <input className={quantityValid || stgPrcFirstQuantity || stgPrcSecondQuantity || stgPrcRemainingQuantity ? 'input' : 'input is-danger'} type="text" name="" value={quantity} onChange={event => handleQuantity(event.target.value)} />
            </div>
            {quantityValid || stgPrcFirstQuantity || stgPrcSecondQuantity || stgPrcRemainingQuantity ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 1,000</p>}
          </div>

          <div className="is-italic">Discount on total storage fee</div>
          <div className="field">
            <label className="label">%</label>
            <div className="control">
              <input className={totalDiscountPercentageValid ? 'input' : 'input is-danger'} type="text" name="" value={totalDiscountPercentage} onChange={event => handleTotalDiscountPercentage(event.target.value)} />
            </div>
            {totalDiscountPercentageValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 100</p>}
          </div>

          <div className="is-italic">Discount on total storage fee (flat)</div>
          <div className="field">
            <label className="label">$</label>
            <div className="control">
              <input className={totalDiscountValueValid ? 'input' : 'input is-danger'} type="text" name="" value={totalDiscountValue} onChange={event => handleTotalDiscountValue(event.target.value)} />
            </div>
            {totalDiscountValueValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than $1,000</p>}
          </div>

          <div className="is-italic has-text-justified">Conditional discount trigger, i.e., when the monthly storage fee hits this amount a % or $ (flat) discount (specified above) is applied</div>
          <div className="field">
            <label className="label">$</label>
            <div className="control">
              <input className={conditionalDiscountTriggerValid ? 'input' : 'input is-danger'} type="text" name="" value={conditionalDiscountTrigger} onChange={event => handleConditionalDiscountTrigger(event.target.value)} />
            </div>
            {conditionalDiscountTriggerValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than $1,000</p>}
          </div>
        </fieldset>
      </React.Fragment>
    )
  }

  const renderValueBasedPricing = () => {
    return (
      <React.Fragment>
        <h6 className="subtitle is-6">__________________________________</h6>
        <h4 className="subtitle is-4">Value-Based Pricing</h4>

        <fieldset disabled={(stgPrcFirstQuantity && stgPrcFirstQuantityValid) || (quantity && quantityValid) || (extraChargePerSqFt && extraChargePerSqFtValid)}>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <label className="label">Total value of item(s)</label>
              <input className={valueBasedItemsTotalValid ? 'input' : 'input is-danger'} type="text" name="" value={valueBasedItemsTotal} onChange={event => handleValueBasedItemsTotal(event.target.value)} />
              {valueBasedItemsTotalValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than $1,000,000</p>}
            </div>

            <div className="control is-expanded">
              <label className="label">% of item(s) value as storage fee</label>
              <input className={valueBasedPercentageAsFeeValid ? 'input' : 'input is-danger'} type="text" name="" value={valueBasedPercentageAsFee} onChange={event => handleValueBasedPercentageAsFee(event.target.value)} />
              {valueBasedPercentageAsFeeValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 100</p>}
            </div>

            <div className="control is-expanded">
              <label className="label">% discount</label>
              <input className={valueBasedPercentageDiscountValid ? 'input' : 'input is-danger'} type="text" name="" value={valueBasedPercentageDiscount} onChange={event => handleValueBasedPercentageDiscount(event.target.value)} />
              {valueBasedPercentageDiscountValid ? <React.Fragment></React.Fragment> : <p className="help is-danger">Must be a valid number and an amount less than 100</p>}
            </div>
          </div>
        </fieldset>
      </React.Fragment>
    )
  }

  const renderButton = () => {
    return (
      <React.Fragment>
        <h6 className="subtitle is-6">__________________________________</h6>
        <button className="button is-info is-outlined is-fullwidth" disabled={(quantity && quantityValid) || (stgPrcFirstQuantity && stgPrcFirstQuantityValid) || (valueBasedItemsTotal && valueBasedItemsTotalValid) ? '' : 'disabled'} onClick={handleSubmit}>
          Provide quote
        </button>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div>Submit the form below to receive both monthly and yearly quotes for your prospective customer:</div>
      <h6 className="subtitle is-6 is-italic">* You can only use <u>either</u> standard, staggered or value-based pricing structures, you cannot combine them</h6>
      <div className="columns">
        <div className="column is-5">
          {renderStandardPricing()}
        </div>
        <div className="column is-7">
          {renderStaggeredPricing()}
        </div>
      </div>
      {renderExtraChargeSqFt()}
      {renderValueBasedPricing()}
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
