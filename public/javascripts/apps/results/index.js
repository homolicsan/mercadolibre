import { h, render } from 'preact'
import { Provider } from 'unistore/preact'
import {App} from './App'
import createStore from './store/store'




const main = (data) =>{


    window.__STATE__.page =1;
    window.__STATE__.count =0;



    const store = createStore(window.__STATE__)

    const app = document.getElementById('app')

    render(
        <Provider store={store}>
            <App />
        </Provider>,
        app,
        app.lastChild
    )



}


// Update Store

if( window.ML.ajaxReady ){
    main();
}
else{
    document.addEventListener( 'ajaxReady', main)
}