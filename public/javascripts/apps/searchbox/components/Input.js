import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'

const BItem = connect(['categories'])(
	({ categories}) => (

		categories.map((item, index) =>
			<Fragment key={index} >
			<li class='breadcrumb__item'><a > {item} </a></li>
			</Fragment>
		)
	)
)

export const Breadcrumb = () => (
  (
    <Fragment>
      <input value={text} onInput={this.updateText} />;
    </Fragment>
  )
)
