
import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'
import { actions } from '../store/store'

import {Autocomplete} from './Autocomplete'

export const Form = connect(['value', 'q', 'suggested_queries'], actions )(
	({value, q, suggested_queries, onSubmit, onInput }) => (

    <Fragment>
       
       <form class='col-9 searchbox' action="/items" method="get" onSubmit={onSubmit}>
          <label class='searchbox__label' for="q">buscar</label>
          
          <input class='searchbox__input' value={value} onInput={onInput}  type="text" name="q" id="q" placeholder="Nunca dejes de buscar" autocomplete="off" />
          <input class="searchbox__submit" type="submit" value="Buscar" />
          <Autocomplete />
        </form>

      </Fragment>
		
	)
)
