import { h, render, Component } from 'preact';

export const Item = (props) => {
	let link ='/items/' + props.value.id;

	return (
    <article class='result-item'>
      <div class='result-item__main-content'>
        <h2 class='result-item__title'>
          <a href={link}>{props.value.title}</a>
          </h2>
        <span> precio: {props.value.price.amount} </span>
        <span class='result-item__location'> {props.value.location} </span>
      </div>
      <img src={props.value.picture} class='result-item__image' />
      
    </article>)
}
