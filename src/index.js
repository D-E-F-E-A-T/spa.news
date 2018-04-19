import React from 'react';
import ReactDOM from 'react-dom';
import { Store, Provider } from '@gik/redux-factory';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import { Reducers as ReducersItems } from '~/stores/items';
import registerServiceWorker from '~/utils/registerServiceWorker';
import Pages from '~/pages';

const store = Store({
    items: ReducersItems,
}, {});

ReactDOM.render(
    <Provider store={store}>
        <LocaleProvider locale={enUS}>
            <Pages/>
        </LocaleProvider>
    </Provider>,
    document.getElementsByTagName('main')[0],
);

registerServiceWorker();
