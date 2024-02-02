export const validateOrder = (order) => {
  const errors = {};

  // Validate timer (assuming a basic time format)
  if (!order.timer || order.timer.includes("_")) {
    errors.timer = "Invalid time format";
  }

  // Validate status
  if (!order.status) {
    errors.status = "Status is required";
  }
  if (!order.orderType) {
    errors.orderType = "Status is required";
  }
  if (!order.orderTariff) {
    errors.orderTariff = "Status is required";
  }
  if (!order.address) {
    errors.address = "Status is required";
  }
  if (!order.home) {
    errors.home = "Status is required";
  }
  if (!order.apartment) {
    errors.apartment = "Status is required";
  }
  if (!order.branch) {
    errors.branch = "Status is required";
  }
  if (!order.floor) {
    errors.floor = "Status is required";
  }

  // ... add more validations for other fields

  // Validate client name
  if (!order.client.name) {
    errors.clientName = "Client name is required";
  }
  if (!order.client.surname) {
    errors.clientSurName = "Client surname is required";
  }

  // Validate phone numbers
  const invalidPhones = order.client.phones.some(
    (phone) => !phone.phone || phone.phone.includes("_")
  );
  if (invalidPhones) {
    errors.phone = "All phone numbers must be provided";
  }

  // Validate products
  const invalidProducts = order.products.some(
    (product) => !product.title || !product.price || !product.count
  );
  if (invalidProducts) {
    errors.products = "All products must have a title, price, and count";
  }

  // Validate payment
  if (!order.payment.paymentType) {
    errors.paymentType = "Payment type is required";
  }
  if (!order.payment.courier) {
    errors.courier = "Payment type is required";
  }
  if (!order.payment.operator) {
    errors.operator = "Payment type is required";
  }

  return errors;
};
