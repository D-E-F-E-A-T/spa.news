import React from 'react';
import ReactDOM from 'react-dom';
import { Store, Provider } from '@gik/redux-factory';

import { Reducers as ReducersItems } from '~/stores/items';
import registerServiceWorker from '~/utils/registerServiceWorker';
import Pages from '~/pages';

const store = Store({
    items: ReducersItems,
}, {});

ReactDOM.render(
    <Provider store={store}>
        <Pages/>
    </Provider>,
    document.getElementsByTagName('main')[0],
);

registerServiceWorker();
