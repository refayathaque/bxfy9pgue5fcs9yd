import { POST_CUSTOM_PRICING_REQUESTED, POST_CUSTOM_PRICING_RECEIVED, POST_CUSTOM_PRICING_FAILED } from '../types';

const INITIAL_STATE = {
  response: {},
  status: '',
};

const postCustomPricingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_CUSTOM_PRICING_REQUESTED:
      console.log('action.payload: ', action.payload);
      return { ...state, response: action.payload, status: 'waiting' };
    case POST_CUSTOM_PRICING_RECEIVED:
      console.log('action.payload: ', action.payload);
      return { ...state, response: action.payload, status: 'received' };
    case POST_CUSTOM_PRICING_FAILED:
      console.log('action.payload: ', action.payload);
      return { ...state, response: action.payload, status: 'failed' };
    default:
      return state;
  }
};

export default postCustomPricingReducer;
