import { POST_CUSTOM_PRICING_REQUESTED, POST_CUSTOM_PRICING_RECEIVED, POST_CUSTOM_PRICING_FAILED } from './types';
import axios from 'axios';

const postCustomPricing = () => {
  return async (dispatch) => {

    dispatch({
      type: POST_CUSTOM_PRICING_REQUESTED
    });

    const apiGatewayURL = '';
    const apiGatewayStage = '';
    const apiGatewayResource = '';

    const data = {

    }

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
