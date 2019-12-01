import json, os

event_1 = {'quantity': '11', 'totalDiscountPercentage': '2', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '3', 'sqFt': '4', 'extraChargeReason': '', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}

event_2 = {'quantity': '55', 'totalDiscountPercentage': '', 'totalDiscountValue': '67', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '8', 'sqFt': '99', 'extraChargeReason': '', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}

event_3 = {'quantity': '', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '', 'sqFt': '', 'extraChargeReason': '', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}

context = 'test'

def lambda_handler(event, context):
    # flat_fee = int(os.environ['flat_fee'])
    flat_fee = 20
    if event['quantity']:
        # standard pricing
        print(standard_pricing(event, flat_fee))
        return {
            'statusCode': 200,
            'body': json.dumps(standard_pricing(event, flat_fee))
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
    price_before_discounts = int(event['quantity']) * flat_fee
    if event['extraChargePerSqFt']:
        extra_charges = int(event['extraChargePerSqFt']) * int(event['sqFt'])
    else:
        extra_charges = 0
    final_price_before_discounts = price_before_discounts + extra_charges
    if event['totalDiscountPercentage'] or event['totalDiscountValue']:
        if event['totalDiscountPercentage']:
            final_price_after_discounts = final_price_before_discounts * (1 - (int(event['totalDiscountPercentage'])/100))
        if event['totalDiscountValue']:
            final_price_after_discounts = ((final_price_before_discounts) - int(event['totalDiscountValue']))
    else:
        final_price_after_discounts = final_price_before_discounts
    if event['conditionalDiscountTrigger']:
        if final_price_after_discounts >= event['conditionalDiscountTrigger']

    return round(final_price_after_discounts, 2)
    # https://tutorialdeep.com/knowhow/round-float-to-2-decimal-places-python/

lambda_handler(event_2, context)
