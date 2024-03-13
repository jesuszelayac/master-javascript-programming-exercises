let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';

  // Check if the customer is in the customerData object
  if (customerData.hasOwnProperty(firstName)) {
    const visitCount = customerData[firstName].visits;
    
    // Check the number of visits and adjust the greeting accordingly
    if (visitCount === 1) {
      greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    } else if (visitCount > 1) {
      greeting = `Welcome back, ${firstName}! So glad to see you again!`;
    }
  } else {
    // The customer is not in the customerData object
    greeting = 'Welcome! Is this your first time?';
  }

  return greeting;
}

console.log(greetCustomer('Joe')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
console.log(greetCustomer('Terrance')); // --> 'Welcome! Is this your first time?'
