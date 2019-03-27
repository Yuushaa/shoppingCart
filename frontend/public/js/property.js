import { default as config } from './config.js';
import {
    propertyDetailTemplate,
    bricksTemplate
} from './templates.js';

$(document).ready(function() {
    const url = window.location.pathname;
    const propertyId = url.substring(url.lastIndexOf('/') + 1);
    getProperty(propertyId);
    const cartStr = sessionStorage.getItem('cart');
    const cart = JSON.parse(cartStr);
    if (cart) {
        $('#lblTotal').text('Total: $' + cart.total);
    }
});

function getProperty(propertyId) {
    const endpoint = config.server + config.endpoints.getProperty.replace('{id}', propertyId);
    $.get(endpoint, function(property) {
        const propertyDetail = propertyDetailTemplate
                            .replace('{imgSrc}', property.img)
                            .replace('{name}', property.name);
        
        let brickStr = '';
        for(let i = 1; i < property.bricks.length; i++) {
            if (property.bricks[i].onSale) {
                brickStr += bricksTemplate
                                .replace('{id}', property.bricks[i].id)
                                .replace('{price}', property.bricks[i].price)
                                .replace('{buyPrice}', property.bricks[i].price)
                                .replace('{brickId}', property.bricks[i].id);
            }
        }
        $('.container').append($(propertyDetail.replace('{bricks}', brickStr)));
    });
}
