import { h, render, Component } from 'preact';

export const Item = (props) => {
	let link ='/items/' + props.value.id;

	return <article>
		<h2><a href={link}>{props.value.title} {props.value.id} </a></h2>
		<span> precio: {props.value.price.amount} </span>
		<img src={props.value.picture} />
	</article>
}
