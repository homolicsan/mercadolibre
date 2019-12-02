import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'

import { actions } from '../store/store'


export const Pagination = connect(['count', 'author'], actions)(

	({ count, author, increment, decrement }) => (

		<Fragment>
			<div>{count}</div>
			<div>{author.name}</div>
	
			<ul>
				<li><button onClick={increment}> 1 </button></li>

				<li><button onClick={decrement}>2 </button> </li>

				<li>1</li>

				<li>1</li>

				<li>1</li>

				<li>1</li>
			</ul>

		</Fragment>
	)
)
