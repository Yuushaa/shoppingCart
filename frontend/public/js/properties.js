import { default as config } from './config.js';
import { propertyTemplate } from './templates.js';

$(document).ready(function() {
    getProperties();
    const cartStr = sessionStorage.getItem('cart');
    const cart = JSON.parse(cartStr);
    if (cart) {
        $('#lblTotal').text('Total: $' + cart.total);
    }
});

function getProperties() {
    const endpoint = config.server + config.endpoints.getProperties;
    $.get(endpoint, function(properties) {
        for(let i = 0; i < properties.length; i++) {
            const property = propertyTemplate
                                .replace('{id}', properties[i].id)
                                .replace('{imgSrc}', properties[i].img)
                                .replace('{name}', properties[i].name)
                                .replace('{price}', properties[i].bricksPrice);
            
            $('.container').append($(property));
        }
    });
}
