import format_price from './format-price.js';

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
        let price =  format_price(data.price, data.currency_id);

        return {
          "id": data.id,
          "title": data.title,
          "price": {
              "currency": data.currency_id,
              "amount": price.amount,
              "decimals": price.decimals,

              "amount_formated": price.amount_formated // No estaba pedido pero decidi hacerlo en el servidor para no perder tiempo de proceso en el cliente
          },
          "picture": data.thumbnail.replace('I.jpg','X.webp'),
          "condition": data.condition,
          "free_shipping": data.shipping.free_shipping,


          // No estaba pedida en la respuesta de la api pero si en la maqueta
          "location": data.seller_address.state.name
        };

      }); 
    }

  return new_response;
};

export default make_response;
