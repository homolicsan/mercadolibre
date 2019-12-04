import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'

import { actions } from '../store/store'

 
/** Pages Component */
const Pages = connect(['pages'], actions)(
	({ pages,  prev, next, jumpTo }) => (

		pages.map((item, index) =>
			<Fragment key={index} >
			<li><a class='paginator__page' onClick={() => jumpTo(item)} > {item} </a></li>
			</Fragment>
		)
	)
)

/** Pagination Component */
export const Pagination = connect(['page', 'total', 'last_page'], actions)(
	({ page, total, last_page,  prev, next, jumpTo }) => (
		 <Fragment>
			 <div>{total} resultados</div>
			<div>Página: {page} de {last_page} </div>
			
			<ul class='paginator'>
				<li><a  class='paginator__page'onClick={prev}> Prev </a></li>
				<Pages />
				<li><a class='paginator__page' onClick={next}> Next </a></li>
			</ul>

		</Fragment>
	)
)
