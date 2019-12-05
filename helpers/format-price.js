let currency_map = {
  'ARS' : '$'
};

const add_price_separator = (price) => {

  if (price) {
    price = price.toString();
    price = price.split('');
    price = price.reverse();

    price = price.map((item, index)=>{
      return ((index + 1)  % 3 === 0 && index < price.length-1) ? '.' +item : item
    });

    price = price.reverse().join('');
  }

  return price;
}

const format_price = (price, currency_id) => {
    let result = {
      amount : '',
      decimals: '',
      amount_formated: ''
    };
  
    if (price){
      price = price.toString();

      
      price = price.split('.');


    
      result.amount = price.length ? parseInt(price[0]) : null;
      result.decimals = price.length == 2? parseInt(price[1]) : 0;
      if(result.amount) {
        result.amount_formated = currency_map[currency_id] + ' ' + add_price_separator(result.amount);
      }
      
      
    }

    return result;
  }

export default format_price;
