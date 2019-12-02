import React from 'react';
import { connect } from 'react-redux';

const Output = ({postCustomPricingReducer}) => {

  const renderResponse = () => {
    if (postCustomPricingReducer.status === "") {
      return (
        <div class="tile">
          <article class="tile is-child notification is-info">
            <p class="title">Quote</p>
            <p class="subtitle">Pricing:</p>
            <div class="content">
              Monthly:
            </div>
            <div class="content">
              Yearly:
            </div>
          </article>
        </div>
      )
    } else if (postCustomPricingReducer.status === "waiting") {
      return (
        <div class="tile">
          <article class="tile is-child notification is-info">
            <p class="title">Quote</p>
            <p class="subtitle">Pricing:</p>
            <div class="content">
              Monthly:
            </div>
            <div class="content">
              Yearly:
            </div>
          </article>
        </div>
      )
    } else if (postCustomPricingReducer.status === "received") {
      return (
        <div class="tile">
          <article class="tile is-child notification is-info">
            <p class="title">Quote</p>
            <p class="subtitle">Pricing:</p>
            <div class="content">
              Monthly: {postCustomPricingReducer.response.data.body}
            </div>
            <div class="content">
              Yearly:
            </div>
          </article>
        </div>
      )
    }
  }

  return (
    <React.Fragment>
      {renderResponse()}
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
