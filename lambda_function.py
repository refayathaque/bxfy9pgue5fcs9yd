import json, os

standard_pricing_event_1 = {'quantity': '11', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '3.23', 'sqFt': '4', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

standard_pricing_event_2 = {'quantity': '55', 'totalDiscountPercentage': '12.34', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '8.9', 'sqFt': '94.34', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

standard_pricing_event_3 = {'quantity': '17', 'totalDiscountPercentage': '12.7', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '230', 'extraChargePerSqFt': '9', 'sqFt': '25', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

standard_pricing_event_4 = {'quantity': '121', 'totalDiscountPercentage': '', 'totalDiscountValue': '97', 'conditionalDiscountTrigger': '300', 'extraChargePerSqFt': '4.9', 'sqFt': '111', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

standard_pricing_event_5 = {'quantity': '11', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '', 'sqFt': '', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

standard_pricing_event_6 = {'quantity': '11', 'totalDiscountPercentage': '2.3', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '', 'sqFt': '', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

staggered_pricing_event_1 = {'quantity': '', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '', 'sqFt': '', 'stgPrcFirstQuantity': '12', 'stgPrcFirstPercentageDiscount': '5', 'stgPrcSecondQuantity': '45', 'stgPrcSecondPercentageDiscount': '2', 'stgPrcRemainingQuantity': '46', 'stgPrcRemainingPercentageDiscount': '17', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

staggered_pricing_event_1 = {'quantity': '', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '', 'sqFt': '', 'stgPrcFirstQuantity': '12', 'stgPrcFirstPercentageDiscount': '5', 'stgPrcSecondQuantity': '45', 'stgPrcSecondPercentageDiscount': '2', 'stgPrcRemainingQuantity': '46', 'stgPrcRemainingPercentageDiscount': '17', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

staggered_pricing_event_2 = {'quantity': '', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '', 'sqFt': '', 'stgPrcFirstQuantity': '12', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '45', 'stgPrcSecondPercentageDiscount': '6', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

staggered_pricing_event_3 = {'quantity': '', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '', 'sqFt': '', 'stgPrcFirstQuantity': '12', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '12', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '12', 'stgPrcRemainingPercentageDiscount': '12', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

staggered_pricing_event_4 = {'quantity': '', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '7', 'sqFt': '145', 'stgPrcFirstQuantity': '12', 'stgPrcFirstPercentageDiscount': '67', 'stgPrcSecondQuantity': '5', 'stgPrcSecondPercentageDiscount': '5', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

staggered_pricing_event_5 = {'quantity': '', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '3', 'sqFt': '2', 'stgPrcFirstQuantity': '78', 'stgPrcFirstPercentageDiscount': '12', 'stgPrcSecondQuantity': '95', 'stgPrcSecondPercentageDiscount': '2', 'stgPrcRemainingQuantity': '88', 'stgPrcRemainingPercentageDiscount': '0.8', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

staggered_pricing_event_6 = {'quantity': '', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '9', 'sqFt': '4', 'stgPrcFirstQuantity': '14', 'stgPrcFirstPercentageDiscount': '3', 'stgPrcSecondQuantity': '17', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '45', 'stgPrcRemainingPercentageDiscount': '32', 'valueBasedItemsTotal': '', 'valueBasedPercentageAsFee': '', 'valueBasedPercentageDiscount': ''}
# works

value_based_pricing_event_1 = {'quantity': '', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '', 'sqFt': '', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '779', 'valueBasedPercentageAsFee': '6', 'valueBasedPercentageDiscount': '4'}
# works

value_based_pricing_event_2 = {'quantity': '', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'conditionalDiscountTrigger': '', 'extraChargePerSqFt': '', 'sqFt': '', 'stgPrcFirstQuantity': '', 'stgPrcFirstPercentageDiscount': '', 'stgPrcSecondQuantity': '', 'stgPrcSecondPercentageDiscount': '', 'stgPrcRemainingQuantity': '', 'stgPrcRemainingPercentageDiscount': '', 'valueBasedItemsTotal': '19', 'valueBasedPercentageAsFee': '9', 'valueBasedPercentageDiscount': ''}
# works

context = 'test'

def standard_pricing(event, flat_fee):
    fee = float(event['quantity']) * flat_fee
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

def staggered_pricing(event, flat_fee):
    if event['extraChargePerSqFt']:
        extra_charge = (float(event['extraChargePerSqFt']) * float(event['sqFt']))
    else:
        extra_charge = 0

    fee_first = float(event['stgPrcFirstQuantity']) * flat_fee
    if event['stgPrcFirstPercentageDiscount']:
        fee_first = fee_first * (1 - (float(event['stgPrcFirstPercentageDiscount'])/100))
        print('First Set After Discount:', fee_first)
    if event['stgPrcSecondQuantity']:
        fee_second = float(event['stgPrcSecondQuantity']) * flat_fee
        if event['stgPrcSecondPercentageDiscount']:
            fee_second = fee_second * (1 - (float(event['stgPrcSecondPercentageDiscount'])/100))
            print('Second Set After Discount:', fee_second)
        if event['stgPrcRemainingQuantity']:
            fee_remaining = float(event['stgPrcRemainingQuantity']) * flat_fee
            if event['stgPrcRemainingPercentageDiscount']:
                fee_remaining = fee_remaining * (1 - (float(event['stgPrcRemainingPercentageDiscount'])/100))
                print('Remaining Set After Discount:', fee_remaining)

            return round(extra_charge + fee_first + fee_second + fee_remaining, 2)

        return round(extra_charge + fee_first + fee_second, 2)

    return round(extra_charge + fee_first, 2)

def value_based_pricing(event):
    print(float(event['valueBasedItemsTotal']))
    print(float(event['valueBasedPercentageAsFee'])/100)
    fee = float(event['valueBasedItemsTotal']) * (float(event['valueBasedPercentageAsFee'])/100)
    if event['valueBasedPercentageDiscount']:
        print('Percentage Discount')
        fee = fee * (1 - (float(event['valueBasedPercentageDiscount'])/100))

        return round(fee, 2)

    return round(fee, 2)


def lambda_handler(event, context):
    # flat_fee = float(os.environ['flat_fee'])
    flat_fee = 20
    if event['quantity']:
        # standard pricing
        print('Standard Pricing Quote:', standard_pricing(event, flat_fee))
        return {
            'statusCode': 200,
            'structure': json.dumps('Standard Pricing'),
            'quote_monthly': json.dumps(standard_pricing(event, flat_fee)),
            'quote_yearly': json.dumps(round(standard_pricing(event, flat_fee) * 12))
        }
    if event['stgPrcFirstQuantity']:
        # staggered pricing
        print('Staggered Pricing Quote:', staggered_pricing(event, flat_fee))
        return {
            'statusCode': 200,
            'structure': json.dumps('Staggered Pricing'),
            'quote_monthly': json.dumps(staggered_pricing(event, flat_fee)),
            'quote_yearly': json.dumps(round(staggered_pricing(event, flat_fee) * 12))
        }
    if event['valueBasedItemsTotal']:
        # value-based pricing
        print('Value-Based Pricing Quote:', value_based_pricing(event))
        return {
            'statusCode': 200,
            'structure': json.dumps('Value-Based Pricing'),
            'quote_monthly': json.dumps(value_based_pricing(event)),
            'quote_yearly': json.dumps(round(value_based_pricing(event) * 12, 2))
        }

lambda_handler(value_based_pricing_event_2, context)
