export default function currensyFilter (value, currency =  'RUB') {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency
  }).format(value)
}
