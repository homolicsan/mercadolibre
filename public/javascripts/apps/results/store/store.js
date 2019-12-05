import createStore from 'unistore'


import {load_resources} from '../utils/load-resources'

const make_range = (current_page, items_per_page) => {
  let _range_items = [ ] ;
  let minus =  items_per_page - 1;
  
  let last_item = current_page * items_per_page;
  let first_item = last_item - minus;

  _range_items.push(first_item);
  _range_items.push(last_item);

  return _range_items;
}

let load_next_images = (_current_page, state) => {
  let  range = make_range(_current_page + 1, state.items_per_page);
 
  let images_resources = state.items.slice(range[0]-1, range[1]);

  images_resources = images_resources.map((item) => item.picture);

  load_resources(images_resources, 'image', range[0], range[1]);
} 



export let actions = store => ({
  prev(state) {
    let _current_page = (state.current_page > 1) ? state.current_page - 1 : 1;

    return { 
      current_page: _current_page,
      range_items :  make_range(_current_page, state.items_per_page)
    }
  },
  next(state) {
    let _current_page = (state.current_page < state.last_page ) ? state.current_page + 1 : state.last_page;

    load_next_images(_current_page, state);

    return {
      current_page : _current_page,
      range_items : make_range(_current_page, state.items_per_page)
    }
  },

  jumpTo(state, pageTo) {
    let _current_page = pageTo;

    load_next_images(pageTo, state);

    return {
      current_page : _current_page,
      range_items : make_range(_current_page, state.items_per_page)
    }
  },

})

export default initialState => createStore(initialState)
