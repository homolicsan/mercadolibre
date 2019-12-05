import { h, render, Component, Fragment } from 'preact';

export const Item = (props) => {
	

	return (
            <Fragment>
                <li > {props.value.q}</li>
            </Fragment>
        )
}

