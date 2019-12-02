import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'

import { actions } from '../store/store'


export const Pagination = connect(['page', 'range_items', 'items_per_page'], actions)(

	({ page, range_items, items_per_page, prev, next }) => (

		<Fragment>
			<div>Page: {page} -- </div>
			<div>range_items  : {range_items}</div>
			<div> items_per_page : {items_per_page} </div>
	
			<ul>
				<li><button onClick={prev}> Prev </button></li>



				<li>1</li>

				<li>1</li>

				<li>1</li>

				<li>1</li>



				<li><button onClick={next}> Next </button> </li>

			</ul>

		</Fragment>
	)
)
