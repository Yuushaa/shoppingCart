import { default as config } from './config.js';
import { brickTemplate } from './templates.js';

window.cart = {};

window.cart.init = function() {
    const cartStr = sessionStorage.getItem('cart');
    const cart = JSON.parse(cartStr);
    if (cart) {
        let brickStr = '';
        for(let i = 0; i < cart.brickObjs.length; i++) {
            brickStr += brickTemplate
                            .replace('{id}', cart.brickObjs[i].id)
                            .replace('{price}', cart.brickObjs[i].price)
                            .replace('{buyPrice}', cart.brickObjs[i].price)
                            .replace('{brickId}', cart.brickObjs[i].id);
        }
        $('.container').html($(brickStr));
        $('#lblTotal').text('Total: $' + cart.total);
    }
}

window.cart.comprar = function(brickId, price) {
    const cartStr = sessionStorage.getItem('cart');
    let cart = JSON.parse(cartStr);
    if (!cart) {
        cart = {
            bricks: [],
            brickObjs: [],
            userId: 1,
            couponString: '',
            total: 0
        };
    }
    const brick = {
        id: brickId,
        price
    };
    cart.brickObjs.push(brick);
    cart.bricks.push(brickId);
    cart.total += price;
    sessionStorage.setItem('cart', JSON.stringify(cart));
    $('#lblTotal').text('Total: $' + cart.total);
}

window.cart.payment = function() {
    const cartStr = sessionStorage.getItem('cart');
    let cart = JSON.parse(cartStr);
    if (cart) {
        cart.couponString = $('#txtCupon').val();
        const endpoint = config.server + config.endpoints.submitProcess;
        $.post(endpoint, cart, function(data) {
            alert('Todo se procesó correctamente.');
            sessionStorage.clear();
        });
    }
}
