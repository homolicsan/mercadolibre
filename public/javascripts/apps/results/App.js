import { h, Fragment, Component } from 'preact'

import {Results} from './Results'
import {Pagination} from './components/Pagination'

export class App extends Component {

  constructor() {
    super();
    //this.state = { time: '' };
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
        <Results />
        <Pagination />    
      </Fragment>
    );
  }
}
