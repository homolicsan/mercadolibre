import {Item} from './components/Item'

import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'

import { actions } from './store/store'


export const Results = connect('items', actions)(

	({items, increment, decrement }) => (

      items.map(item => 
      // Without a key, Preact has to guess which items have
      // changed when re-rendering.
        <Fragment key={item.id}>
          <Item value={item} />
        </Fragment>
    )
    

	)
)
