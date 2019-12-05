import { h, Fragment, Component } from 'preact'

import {Breadcrumb} from './components/Breadcrumb'
import {Results} from './components/Results'
import {Pagination} from './components/Pagination'

export class App extends Component {

  constructor(props, state) {
    super();

    let ini_state = state.store.getState();

    let items_per_page = 4;
    let last_page = Math.ceil(__STATE__.items.length / items_per_page);
    let total = ini_state.items.length;

    ini_state = {      
        current_page   : 1,
        range_items    : [1,4],
        items_per_page : items_per_page,
        last_page      : last_page,
        total          : total,
        pages          : []
    };

    for (var i =1; i <= last_page; i++ ) {
      ini_state.pages.push(i);
    }

    state.store.setState(ini_state);
  }
  // Lifecycle: Called whenever our component is created
  componentDidMount() {
   
  }

  // Lifecycle: Called just before our component will be destroyed
  componentWillUnmount() {
   
  }

  render(props, state) {
    return (
      <Fragment>
        <Breadcrumb />
        <Results />
        <Pagination />    
      </Fragment>
    );
  }
}
