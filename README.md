# Sheno Butter

This is a React application created for Sheno Butter, an online platform selling traditional butter. The website integrates with PayPal for processing payments and uses email automation for order confirmation and notifications. 

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Features

- Butter Purchase Options: Users can purchase butter in two quantities - 0.8 lbs and 1.6 lbs.
- PayPal Integration: The website integrates with PayPal for secure and reliable payment processing.
- Email Automation: Order confirmations and notifications are automatically sent to users. The Sheno Butter team also receives detailed order information via email.
- About Us: A page dedicated to sharing the story and mission of Sheno Butter.
- Contact Us: A page with a contact form, using email automation to receive user queries or feedback directly to the Sheno Butter team's email.
- Origins: A page explaining the traditions and origins of the butter sold on the site.
- Interactive Homepage: Features a card slider showcasing the spices used in the butter, with each card containing a spice picture and description. The homepage also offers the two butter choices for adding to the cart.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/sheno-butter.git
```
2. Change to the project directory:

```bash
cd sheno-butter
```
3. Install dependencies:

```bash
npm install
```
## Usage
Start the development server:
```bash
npm start
```
The application should now be running on http://localhost:3000.


Build for production: (Don't use this unless it's for production)
```bash
npm run build
```

This command will create a build folder containing the optimized production build.

## Environment Variables
To keep your API keys and other sensitive information secure, create a .env file in the root folder of your project and add the following environment variables:

```bash
REACT_APP_PAYPAL_CLIENT_ID=''
REACT_APP_SERVICE_ID=''
REACT_APP_TEMPLATE_ID=''
REACT_APP_TEMPLATE_ID_M=''
REACT_APP_USER_ID=''
```
Replace the above placeholders with your actual values.

## Contributing
If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch with a descriptive name, e.g., feature-add-new-product
3. Make your changes on the new branch
4. Push your changes to your fork
5. Create a pull request
6. Please make sure your code follows best practices and is well-documented.
