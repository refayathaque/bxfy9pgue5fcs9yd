import React from 'react';
import { connect } from 'react-redux';

const Output = ({postCustomPricingReducer}) => {

  const renderResponse = () => {
    if (postCustomPricingReducer.status === "") {
      return (
        <div className="tile">
          <article className="tile is-child notification is-info">
            <p className="title">Quote</p>
            <p className="subtitle">Pricing:</p>
            <div className="content">
              Monthly:
            </div>
            <div className="content">
              Yearly:
            </div>
          </article>
        </div>
      )
    } else if (postCustomPricingReducer.status === "waiting") {
      return (
        <div className="tile">
          <article className="tile is-child notification is-info">
            <p className="title">Quote</p>
            <p className="subtitle">Pricing:</p>
            <div className="content">
              Monthly:
            </div>
            <div className="content">
              Yearly:
            </div>
          </article>
        </div>
      )
    } else if (postCustomPricingReducer.status === "received") {
      return (
        <div className="tile">
          <article className="tile is-child notification is-info">
            <p className="title">Quote</p>
            <p className="subtitle">{postCustomPricingReducer.response.data.structure}</p>
            <div className="content">
              Monthly: C$ {postCustomPricingReducer.response.data.quote_monthly}
            </div>
            <div className="content">
              Yearly: C$ {postCustomPricingReducer.response.data.quote_yearly}
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
