export function currencyFormat(value){
  if(!value && value!==0) return '';

  return new Intl.NumberFormat('en-IN',{
    style:'currency',
    currency:'INR',
    minimumFractionDigits:2
  }).format(value);
}



