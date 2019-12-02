import { POST_CUSTOM_PRICING_REQUESTED, POST_CUSTOM_PRICING_RECEIVED, POST_CUSTOM_PRICING_FAILED } from './types';
import axios from 'axios';

const postCustomPricing = (
  quantity,
  totalDiscountPercentage,
  totalDiscountValue,
  conditionalDiscountTrigger,
  extraChargePerSqFt,
  sqFt,
  stgPrcFirstQuantity,
  stgPrcFirstPercentageDiscount,
  stgPrcSecondQuantity,
  stgPrcSecondPercentageDiscount,
  stgPrcRemainingQuantity,
  stgPrcRemainingPercentageDiscount,
  valueBasedItemsTotal,
  valueBasedPercentageAsFee,
  valueBasedPercentageDiscount
) => {
  return async (dispatch) => {

    dispatch({
      type: POST_CUSTOM_PRICING_REQUESTED
    });

    const apiGatewayURL = 'https://g8ejf8xkz9.execute-api.us-east-1.amazonaws.com';
    const apiGatewayStage = 'dev';
    const apiGatewayResource = 'submit-data';

    const data = {
      quantity: quantity,
      totalDiscountPercentage: totalDiscountPercentage,
      totalDiscountValue: totalDiscountValue,
      conditionalDiscountTrigger: conditionalDiscountTrigger,
      extraChargePerSqFt: extraChargePerSqFt,
      sqFt: sqFt,
      stgPrcFirstQuantity: stgPrcFirstQuantity,
      stgPrcFirstPercentageDiscount: stgPrcFirstPercentageDiscount,
      stgPrcSecondQuantity: stgPrcSecondQuantity,
      stgPrcSecondPercentageDiscount: stgPrcSecondPercentageDiscount,
      stgPrcRemainingQuantity: stgPrcRemainingQuantity,
      stgPrcRemainingPercentageDiscount: stgPrcRemainingPercentageDiscount,
      valueBasedItemsTotal: valueBasedItemsTotal,
      valueBasedPercentageAsFee: valueBasedPercentageAsFee,
      valueBasedPercentageDiscount: valueBasedPercentageDiscount
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
