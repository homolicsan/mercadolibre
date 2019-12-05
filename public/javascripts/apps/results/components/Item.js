import { h, render, Component } from 'preact';

export const Item = (props) => {
	let link ='/items/' + props.value.id;

	return (
    <article class='row'>
      <div class='col-8 offset-1 result-item'>
        <div class='result-item__main-content'>
          <h2 class='result-item__title'>
            <a href={link} class='result-item__title-link'>{props.value.title}</a>
            </h2>
          <span class='result-item__price'>{props.value.price.amount_formated} </span>
          
        </div>
        <a href={link} class='result-item__image-link'>
          <img src={props.value.picture} class='result-item__image' alt={props.value.title}  />
        </a>
      </div>
      <span class='col-3 result-item__location'> {props.value.location} </span>
      
    </article>)
}

