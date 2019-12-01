import React from 'react';
import { connect } from 'react-redux';

const Output = ({postCustomPricingReducer}) => {

  const renderResponse = () => {
    if (postCustomPricingReducer.status === "") {
      return (
        <div>
          I have nothing to show you
        </div>
      )
    } else if (postCustomPricingReducer.status === "waiting") {
      return (
        <div>
          I ALMOST have something to show you
        </div>
      )
    } else if (postCustomPricingReducer.status === "received") {
      return (
        <div>
          I have something to show you {postCustomPricingReducer.response.data.body}
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
