import RenderTarget from './render-target';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Greeting {

    hello() {

        ReactDOM.render(
            <RenderTarget />,
            document.getElementById('content')
        );
    }
};
