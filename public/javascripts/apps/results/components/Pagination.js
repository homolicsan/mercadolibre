import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'
import { actions } from '../store/store'

/** Pages Component */
const Pages = connect(['current_page', 'pages'], actions)(
	({ current_page, pages,  prev, next, jumpTo }) => (

		pages.map((item, index) =>
			<Fragment key={index} >
			<li><a class='paginator__page' onClick={() => jumpTo(item)} > {item} </a></li>
			</Fragment>
		)
	)
)

/** Pagination Component */
export const Pagination = connect(['current_page', 'total', 'last_page'], actions)(
	({ current_page, total, last_page,  prev, next, jumpTo }) => (
		<Fragment>
		  <div>{total} resultados | Página: {current_page} de {last_page} </div>
			
			<ul class='paginator'>
				<li><a  class='paginator__page'onClick={prev}> Anterior</a></li>
				<Pages />
				<li><a class='paginator__page' onClick={next}> Siguiente</a></li>
			</ul>

		</Fragment>
	)
)
