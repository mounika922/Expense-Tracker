export function dateFormat(date){
  if(!date) return '';

  const d=new Date(date);

  return d.toLocaleDateString('en-IN',{
    year:'numeric',
    month:'short',
    day:'numeric'
  });
}