## API Interview Question V2 - Refayat Haque - "Senior Backend Engineer" candidate - Toronto, Ontario, Canada

### Files:
- `lambda_function.py`
  - Backend logic carrying out quote processing based on requests made from client (requests to lambda function are in the form of `event` objects/dictionaries)
  - I.e., the lambda function is what calculates the quote based on the data coming in from the forms in the client
- Input.js
  - Frontend logic and data capture done here, frontend logic does things like ensure that the user cannot fill out more than one `Pricing` form (e.g., cannot fill out both `Standard Pricing` and `Staggered Pricing`)
    - Other frontend logic example include blocking out the flat fee discount if % discount is specified, and vice versa, in the `Standard Pricing` form
  -

### Documentation:
- "The flat fee for storing a single item is $20."
  - AWS Lambda (lambda_function.py) has this value assigned to variable `flat_fee`
- "Customer A will receive a 10% discount."
  - Use either `Standard Pricing` or `Staggered Pricing` and submit form with % discount and number of items
- "Customer B stores large items, and will be charged at $1 per square foot."
  - Use either `Standard Pricing` or `Staggered Pricing` and submit form with number of items and `Sq. ft. - Area occupied by large and/or fragile item(s)` and `$ - Cost per sq. ft.`
- "Customer C is to be charged 5% of the value of the item being stored."
  - Use `Value-Based Pricing` and submit form with `% of item(s) value as storage fee` and `Total value of item(s)`
- "Client D would like a 5% discount for the first 100 items stored, 10% discount for the next 100, and 15% when they store over 200 items, and be charged at $2 per square foot."
  - Use `Staggered Pricing` and submit form with `Sq. ft. - Area occupied by large and/or fragile item(s)` and `$ - Cost per sq. ft.`
- "For example, another customer could receive a flat $200 discount when their monthly bill reaches $400."
  - Use `Standard Pricing` and submit form with `Discount on monthly storage fee (flat)`, `Conditional discount trigger` and `Total number of items stored`
