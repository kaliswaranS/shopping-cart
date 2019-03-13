import { watchFetchProduct } from './sagas/fetch-products';

export function* getProductSaga() {
    yield [
        watchFetchProduct(),
    ];
}
