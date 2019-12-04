import createStore from 'unistore'

const make_range = (current_page, items_per_page) => {
  let _range_items = [ ] ;
  let minus =  items_per_page - 1;
  
  let last_item = current_page * items_per_page;
  let first_item = last_item - minus;

  _range_items.push(first_item);
  _range_items.push(last_item);

  return _range_items;
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
    let _current_page = (state.page < state.last_page ) ? state.page + 1 : state.last_page;

    return {
      current_page : _current_page,
      range_items : make_range(_current_page, state.items_per_page)
    }
  },

  jumpTo(state, pageTo) {
    let _current_page = pageTo;

    return {
      current_page : _current_page,
      range_items : make_range(_current_page, state.items_per_page)
    }
  },

})

export default initialState => createStore(initialState)
