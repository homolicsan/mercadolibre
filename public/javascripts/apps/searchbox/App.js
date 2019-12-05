import { h, Fragment, Component } from 'preact'

import {Form} from './components/Form'

export class App extends Component {

  constructor(props, state) {
    super();
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
       
       <Form />


      </Fragment>
    );
  }
}
