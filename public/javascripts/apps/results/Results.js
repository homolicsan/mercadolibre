import {Item} from './components/Item'

import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'

import { actions } from './store/store'

const showItemPerPage = (index, range_items) => {
  index = index + 1;

  return (index >= range_items[0] && index <=  range_items[1]  )
};

export const Results = connect(['items', 'range_items'], actions)(

	({items, range_items, increment, decrement }) => (

      items.filter( (item, index)=> {
        return showItemPerPage(index, range_items)
      }).map(item => 
      // Without a key, Preact has to guess which items have
      // changed when re-rendering.
        <Fragment key={item.id}>
          <Item value={item} />
        </Fragment>
    )
    

	)
)
