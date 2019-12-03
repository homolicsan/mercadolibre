// TODO: duplicado
const formatPrice = (price) => {
    let result = {};

    price = price.toString();
    price = price.split('.');

    result.amount = price.length ? parseInt(price[0]) : null;
    result.decimals = price.length == 2? parseInt(price[1]) : 0;   

    return result;
}

const responseDetailMapping = (data_item, data_item_detail) => {

    data_item = JSON.parse(data_item);
    data_item_detail = JSON.parse(data_item_detail);

    let new_response = {
        author: {
            name: "Iván",
            lastname: "Homolicsan"
        },

        item : {}
    };

    if (data_item){
        let price =  formatPrice(data_item.price) ;

        new_response.item = {
                "id": data_item.id,
                "title": data_item.title,
                "price": {
                    "currency": data_item.currency_id,
                    "amount": price.amount,
                    "decimals": price.decimals
                },
                "picture": data_item.pictures[0].url,
                "condition": data_item.condition,
                "free_shipping": data_item.shipping.free_shipping,
                "sold_quantity": data_item.sold_quantity
            };
    }

    if (data_item_detail && data_item_detail.plain_text) {
        new_response.item.description = data_item_detail.plain_text;
    }

    return new_response;
};

export default responseDetailMapping;