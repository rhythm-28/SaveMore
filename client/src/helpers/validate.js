const errorHelper = (obj, keys) => {
  const errors = {};
  for (let key of keys) {
    if (!obj[key]) {
      errors[key] = 'Required';
    }
  }
  return errors;
};
export function signupValidate(values) {
  const keys = ['username', 'password', 'lastName', 'email', 'firstName'];
  return errorHelper(values, keys);
}
export function loginValidate(values) {
  const keys = ['username', 'password'];
  return errorHelper(values, keys);
}

export function adminSignupValidate(values) {
  const keys = [
    'storeName',
    'category',
    'pinCode',
    'city',
    'country',
    'gstIn',
    'address',
    'state',
  ];
  return errorHelper(values, keys);
}
