import { h } from 'preact'
import { connect } from 'unistore/preact'

import { actions } from './store/store'

import {Results} from './Results'

export const App = connect('count', actions)(
    ({ count, increment, decrement }) => (
      <div>
            <Results />
            <div class="count">
            <p>{count}</p>
            <button class="increment-btn" onClick={increment}>Increment</button>
            <button class="decrement-btn" onClick={decrement}>Decrement</button>
        </div>
      </div>
     
     
    )
  )