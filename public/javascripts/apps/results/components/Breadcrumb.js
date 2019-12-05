import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'

const BItem = connect(['categories'])(
	({ categories}) => (

		categories.map((item, index) =>
			<Fragment key={index} >
			<li><a class='result-breadcrumb'> {item} </a></li>
			</Fragment>
		)
	)
)

export const Breadcrumb = () => (
  (
    <Fragment>
      <ul class='result-breadcrumb'>
        <BItem />
      </ul>
    </Fragment>
  )
)
