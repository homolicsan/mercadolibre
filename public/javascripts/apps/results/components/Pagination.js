import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'

import { actions } from '../store/store'

 
/** Pages Component */
const Pages = connect(['pages'], actions)(
	({ pages,  prev, next, jumpTo }) => (

		pages.map((item, index) =>
			<Fragment key={index} >
			<li><button  onClick={() => jumpTo(item)} > {item} </button></li>
			</Fragment>
		)
	)
)

/** Pagination Component */
export const Pagination = connect(['page', 'range_items', 'items_per_page'], actions)(
	({ page, range_items, items_per_page,  prev, next, jumpTo }) => (
		 <Fragment>
			<div>Page: {page} -- </div>
			<div>range_itemsdfd  : {range_items}</div>
			<div> items_per_page : {items_per_page} </div>
	
			<ul>
				<li><button onClick={prev}> Prev </button></li>
				<Pages />
				<li><button onClick={next}> Next </button></li>
			</ul>

		</Fragment>
	)
)
