import { h, Component, render } from './vendor/preact.module.js';

class App extends Component {
    render() {
      return <h1>Hello, world! aaaaaaa 2</h1>;
    }
 }

 const main = ()=>{
  render(<App />, document.getElementById('app'));
 };
 

 main();
