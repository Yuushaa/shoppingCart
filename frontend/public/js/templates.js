export const propertyTemplate = `<a href="/property/{id}" class="property">
<section>
    <img src="{imgSrc}">
    <footer>
        <div class="name">{name}</div>
        <div>
            <br />
            <div>
                <div><span>Ladrillos desde </span><span class="red-number"> $ {price}</span></div>
            </div>
        </div>
    </footer>
</section>
</a>`;

export const propertyDetailTemplate = `<a href="#" class="property">
<section>
    <img src="{imgSrc}">
    <footer>
        <div class="name">{name}</div>
        {bricks}
    </footer>
</section>
</a>`;

export const bricksTemplate = `<div>
    <br />
    <div>
        <div><span>Ladrillo {id}</span><span class="red-number"> $ {price}</span></div>
        <button onclick="javascript:cart.comprar({brickId}, {buyPrice});">Comprar</button>
    </div>
</div>`;

export const brickTemplate = `<div>
    <br />
    <div>
        <div><span>Ladrillo {id}</span><span class="red-number"> $ {price}</span></div>
    </div>
</div>`;