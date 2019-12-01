import json, os

event_1 = {'quantity': '11', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '3.23', 'sqFt': '4', 'extraChargeReason': '', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}

standard_pricing_event_2 = {'quantity': '55', 'totalDiscountPercentage': '12.34', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '8.9', 'sqFt': '94.34', 'extraChargeReason': '', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

standard_pricing_event_3 = {'quantity': '17', 'totalDiscountPercentage': '12.7', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '230', 'extraChargePerSqFt': '9', 'sqFt': '25', 'extraChargeReason': '', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

standard_pricing_event_4 = {'quantity': '121', 'totalDiscountPercentage': '', 'totalDiscountValue': '97', 'conditionalDiscountTrigger': '300', 'extraChargePerSqFt': '4.9', 'sqFt': '111', 'extraChargeReason': '', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

standard_pricing_event_5 = {'quantity': '11', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '', 'sqFt': '', 'extraChargeReason': '', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}

context = 'test'

def lambda_handler(event, context):
    # flat_fee = int(os.environ['flat_fee'])
    flat_fee = 20
    if event['quantity']:
        # standard pricing
        print('Standard Pricing Quote:', standard_pricing(event, flat_fee))
        return {
            'statusCode': 200,
            'body': json.dumps("Standard Pricing")
        }

    if event['stgPrcFirstQuantity']:
        # staggered pricing
        return {
            'statusCode': 200,
            'body': json.dumps("Staggered Pricing")
        }

    if event['valueBasedItemsTotal']:
        # value-based pricing
        return {
            'statusCode': 200,
            'body': json.dumps("Value-Based Pricing")
        }

def standard_pricing(event, flat_fee):
    fee = int(event['quantity']) * flat_fee
    print('Quantity * Flat Fee:', fee)
    if event['extraChargePerSqFt']:
        fee = fee + (float(event['extraChargePerSqFt']) * float(event['sqFt']))
    print('(Quantity * Flat Fee) + Extra Charges:', fee)
    if (event['totalDiscountPercentage'] or event['totalDiscountValue']) and (not event['conditionalDiscountTrigger']):
        print('No Conditional Discount Trigger')
        if event['totalDiscountPercentage']:
            fee = fee * (1 - (float(event['totalDiscountPercentage'])/100))
        if event['totalDiscountValue']:
            fee = ((fee) - float(event['totalDiscountValue']))
    if event['conditionalDiscountTrigger']:
        print('Conditional Discount Trigger')
        if fee >= float(event['conditionalDiscountTrigger']):
            if event['totalDiscountPercentage']:
                fee = fee * (1 - (float(event['totalDiscountPercentage'])/100))
            if event['totalDiscountValue']:
                fee = ((fee) - float(event['totalDiscountValue']))

    return round(fee, 2)
    # https://tutorialdeep.com/knowhow/round-float-to-2-decimal-places-python/

lambda_handler(standard_pricing_event_2, context)
