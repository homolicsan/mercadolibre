

import { h } from "preact";
import render from "preact-render-to-string";
import { Provider } from 'unistore/preact'
import { App } from "./src/App";
import path from "path";

import createStore from './src/store/store'

const getString = (data ) => {
    const HTMLShell = (html, state) => `
   
            
    <div id="app">${html}</div>
    <script>window.__STATE__=${JSON.stringify(data).replace(/<|>/g, '')}</script>
    <script src="./app.js"></script>

    `


    const store = createStore({ count: 0, todo: [] })

    let state = store.getState()

    /** @jsx h */
    let html = render(
    <Provider store={store}>
    <App />
    </Provider>
    )


    return  decode(HTMLShell(html, state));

  
};

export default getString;