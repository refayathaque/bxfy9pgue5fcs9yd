import { POST_CUSTOM_PRICING_REQUESTED, POST_CUSTOM_PRICING_RECEIVED, POST_CUSTOM_PRICING_FAILED } from './types';
import axios from 'axios';

const postCustomPricing = (quantity, largeSizedItemQuantity = 0, totalDiscountPercentage = 0, totalDiscountValue = 0, extraChargePerSqFt = 0, sqFt) => {
  return async (dispatch) => {

    dispatch({
      type: POST_CUSTOM_PRICING_REQUESTED
    });

    const apiGatewayURL = 'https://g8ejf8xkz9.execute-api.us-east-1.amazonaws.com';
    const apiGatewayStage = 'dev';
    const apiGatewayResource = 'submit-data';

    const data = {
      quantity: quantity,
      largeSizedItemQuantity: largeSizedItemQuantity,
      totalDiscountPercentage: totalDiscountPercentage,
      totalDiscountValue: totalDiscountValue,
      extraChargePerSqFt: extraChargePerSqFt,
      sqFt: sqFt
    }

    console.log(data)

    try {
      const response = await axios.post(`${apiGatewayURL}/${apiGatewayStage}/${apiGatewayResource}`, data);
      console.log(response);
      dispatch({
        type: POST_CUSTOM_PRICING_RECEIVED,
        payload: response,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: POST_CUSTOM_PRICING_FAILED,
        payload: error,
      });
    }

  }
}

export default postCustomPricing;
