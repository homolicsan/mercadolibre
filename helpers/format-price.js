const format_price = (price) => {
    let result = {
      amount : '',
      decimals: ''
    };
  
    if (price){
      price = price.toString();
      price = price.split('.');
    
      result.amount = price.length ? parseInt(price[0]) : null;
      result.decimals = price.length == 2? parseInt(price[1]) : 0;   
    }

    return result;
  }

export default format_price;
