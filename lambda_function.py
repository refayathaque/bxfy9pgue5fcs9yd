import json

event = {'quantity': '20', 'largeSizedItemQuantity': '', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'extraChargePerSqFt': '', 'sqFt': ''}

def lambda_handler(event):
    print(event)
    # {'quantity': '20', 'largeSizedItemQuantity': '', 'totalDiscountPercentage': '', 'totalDiscountValue': '', 'extraChargePerSqFt': '', 'sqFt': ''}
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }

lambda_handler(event)
