var customerName = 'bob';

function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'someone';


function changeLeastFavoriteCustomer() {
  
  leastFavoriteCustomer = 'new least favorite';
 
}
