
import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'

import { actions } from '../store/store'
import {Item} from './Item'

const showItemPerPage = (index, range_items) => {
  index = index + 1;

  return (index >= range_items[0] && index <=  range_items[1]  )
};

export const Results = connect(['items', 'range_items'], actions)(

	({items, range_items, increment, decrement }) => (

      items.filter( (item, index)=> {
        return showItemPerPage(index, range_items)
      }).map(item => 
        <Fragment key={item.id}>
          <Item value={item} />
        </Fragment>
    )
	)
)
