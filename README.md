# Sneakers-Frontend-Challenge

This is a test for a Front-End Engineer position at Trustly. You'll need to develop a simple checkout process of an e-commerce application in which the user will be able to buy one
single product and pay using Trustly as the payment method.

## Run the project
1. git clone https://github.com/JohnOliver23/Sneakers-Frontend-Challenge.git
2. yarn install
3. yarn start

# Pages
### Step 1, Sneakers: 

- User can search sneaker filtering by name
- User select only one sneaker
- When user to click "Add to cart" he will be redirected to the next step

#### Desktop
![Step1](https://github.com/JohnOliver23/Sneakers-Frontend-Challenge/blob/main/images/step1.png?raw=true)

#### Mobile
![Step1](https://github.com/JohnOliver23/Sneakers-Frontend-Challenge/blob/main/images/step1mobile.png?raw=true)

### Step 2, Checkout:

- This page has a beautiful component indicating the step the user is currently
- It shows information about the selected product and also allows the user to select the payment method.
- Online Banking is already selected
- When user click "Continue" with "Online Banking" selected, the Trustly integration will be called.

#### Desktop
![Step2](https://github.com/JohnOliver23/Sneakers-Frontend-Challenge/blob/main/images/step2.png?raw=true)

#### Mobile
![Step2](https://github.com/JohnOliver23/Sneakers-Frontend-Challenge/blob/main/images/step2mobile.png?raw=true)

### Step 2.1, Checkout, (Select the bank):

- User can use any bank to complete her transaction, the screen of sign in  will be called

#### Desktop
![Step2.1](https://github.com/JohnOliver23/Sneakers-Frontend-Challenge/blob/main/images/step2.1.png?raw=true)

#### Mobile
![Step2.1](https://github.com/JohnOliver23/Sneakers-Frontend-Challenge/blob/main/images/step2.1mobile.png?raw=true)

### Step 2.2, Checkout, ( Sign in to your bank):

- The user will enter with her credentials
- if the transaction is concluded, the user will be redirected to the final step
- if the transaction is canceled, one toast will alert the user that a transaction has been canceled

#### Desktop
![Step2.2](https://github.com/JohnOliver23/Sneakers-Frontend-Challenge/blob/main/images/step2.2.png?raw=true)

#### Mobile
![Step2.2](https://github.com/JohnOliver23/Sneakers-Frontend-Challenge/blob/main/images/step2.2mobile.png?raw=true)

### Step 3, Receipt : 

- The user can read the order details
- Payment method selected
- Placer order button not implemented

#### Desktop
![Step3](https://github.com/JohnOliver23/Sneakers-Frontend-Challenge/blob/main/images/step3.png?raw=true)

#### Mobile
![Step3](https://github.com/JohnOliver23/Sneakers-Frontend-Challenge/blob/main/images/step3mobile.png?raw=true)

## Technologies:
- Typescript
- HTML
- CSS

## Framework
### React FC with hooks
- useState and useReducer for state control
- useStep for page control
- useEffect for lifecicle control

## Libraries
- Styled components
- Formik
- material-UI
- React Bootstrap
- axios
- React Router DOM
- React toastify


