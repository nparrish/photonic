import { PhotonicLayout } from './components';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers';

let store = createStore(reducers);

export class Photonic {

    public init() : void {

        ReactDOM.render(
            <Provider store={store}>
                <PhotonicLayout />
            </Provider>,
            document.getElementById('content')
        );
    }
};
