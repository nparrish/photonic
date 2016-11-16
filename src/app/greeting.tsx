import RenderTarget from './render-target';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Greeting {

    hello() {

        ReactDOM.render(
            <RenderTarget />,
            document.getElementById('content')
        );
    }
};
