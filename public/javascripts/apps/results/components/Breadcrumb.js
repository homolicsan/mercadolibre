import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'

const BItem = connect(['categories'])(
	({ categories}) => (

		categories.map((item, index) =>
			<Fragment key={index} >
			<li class='result-breadcrumb__item'><a > {item} </a></li>
			</Fragment>
		)
	)
)

export const Breadcrumb = () => (
  (
    <Fragment>
     
      <div class='row'>
        <div class='col-10 offset-1'>
          <ul class='result-breadcrumb'>
            <BItem />
          </ul>
        </div>
      </div>
      
    </Fragment>
  )
)
