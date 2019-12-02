import { h, render, Component } from 'preact';

export const Item = (props) => (
	<article>

		<h2>{props.value.title}</h2>
		<span> precio: {props.value.price.amount} </span>
		<img src={props.value.picture} />
	</article>
)
