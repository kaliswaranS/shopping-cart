import _ from 'lodash';

function mapProductResponse(products = []) {
    return _.map(products, ({
        id,
        tagline,
        name,
        price,
        imageUrl,
        desc,
        planLink,
        gift,
    }) => ({
            id: id,
            tagline: tagline,
            name: name,
            price: price,
            imageUrl: imageUrl,
            desc: desc,
            planLink: planLink,
            gift: gift,
            quantity: 0,
        }));
}

export default mapProductResponse;
