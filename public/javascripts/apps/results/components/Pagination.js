import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'
import { actions } from '../store/store'

/** Pages Component */
const Pages = connect(['current_page', 'pages'], actions)(
	({ current_page, pages,  prev, next, jumpTo }) => (

		pages.map((item, index) =>{
			let class_name = 'paginator__page';

	

			if (index + 2 === current_page) {
				class_name += ' paginator__page--previous-current';
			}

			if (index + 1 === current_page) {
				class_name += ' paginator__page--current';
			}

			return (
				<Fragment key={index} >
					<li class={class_name}><a class='paginator__page_link' onClick={() => jumpTo(item)} > {item} </a></li>
				</Fragment>
				)
			}
			
		)
	)
)

/** Pagination Component */
export const Pagination = connect(['current_page', 'total', 'last_page'], actions)(
	({ current_page, total, last_page,  prev, next, jumpTo }) => (		
	

		 <Fragment>
			<div class='row'>
				<div class='col-10 offset-1'>
					<div class='paginator_detail'>{total} resultados | Página: {current_page} de {last_page} </div>
					
					<ul class='paginator'>
						{(() => 
								 ( (current_page === 1)? '' : <li class='paginator__page paginator__previous-next '><a class='paginator__page_link' onClick={prev}>Anterior</a></li>)
						)()}
						<Pages />
						{(() => 
								 ((current_page === last_page)? '' : <li class='paginator__page paginator__previous-next'><a class='paginator__page_link' onClick={next}>Siguiente</a></li>)
							)()}
					</ul>
				</div>
			</div>

		</Fragment>
)
)
