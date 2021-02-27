export const formatPrice = (price: string, quantity: number) => {
  let value = price.split('.')[0];
  return parseInt(value) * quantity;
};
