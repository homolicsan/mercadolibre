const formatPrice = (price) => {
    let result = {};

    price = price.toString();
    price = price.split('.');

    result.amount = price.length ? parseInt(price[0]) : null;
    result.decimals = price.length == 2 ? parseInt(price[1]) : 0;   

    return result;
}

const make_response = (data) => {
    data = JSON.parse(data);

    let new_response = {
      author: {
        name: "Iván",
        lastname: "Homolicsan"
      },
      categories: ["Categoria 1", "Sub categoria 2", "Subcategoria 3"] 
    };

    if (data && data.results){
      new_response.items = data.results.map((data) => {
        let price =  formatPrice(data.price) ;

        return {
          "id": data.id,
          "title": data.title,
          "price": {
              "currency": data.currency_id,
              "amount": price.amount,
              "decimals": price.decimals
          },
          "picture": data.thumbnail.replace('I.jpg','X.webp'),
          "condition": data.condition,
          "free_shipping": data.shipping.free_shipping 
        };

      }); 
    }

  return new_response;
};

export default make_response;
