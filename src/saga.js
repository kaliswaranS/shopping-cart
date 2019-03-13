import { saga as productList } from './shopping-cart';

export default function* indexSaga() {
    yield [
        productList(),
    ];
}
