
import { h, render, Component, Fragment } from 'preact';
import { connect } from 'unistore/preact'

import { actions } from '../store/store'
//import {Item} from './Item'


export const Autocomplete = connect(['suggested_queries'], actions)(

	({suggested_queries, sendForm}) => {

   

  return (
    <Fragment>
        <div class='autocomplete'>
          <ul>
          {(() => {
            return suggested_queries.map((item=>{
              return (<li class='autocomplete__item'><a class='autocomplete__item-link' onClick={() => sendForm(item.q)} >{item.q}</a></li>)
            }))           
          }
        )()}
        </ul> 
      </div>

    </Fragment>
    )
   
  }
)
