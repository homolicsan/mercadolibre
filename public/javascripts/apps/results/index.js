import { h, render } from 'preact'
import { Provider } from 'unistore/preact'
import {App} from './App'
import createStore from './store/store'




const main = (data) =>{

    window.__STATE__.page =1;
    window.__STATE__.range_items = [1,4];
    window.__STATE__.items_per_page =4;
    window.__STATE__.last_page =Math.ceil(__STATE__.items.length / window.__STATE__.items_per_page) ;

    window.__STATE__.total = __STATE__.items.length;


    window.__STATE__.pages = [];

    for (var i =1; i <=window.__STATE__.last_page; i++ ) {
        window.__STATE__.pages.push( i);
    }
    

    console.log(window.__STATE__.pages);



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