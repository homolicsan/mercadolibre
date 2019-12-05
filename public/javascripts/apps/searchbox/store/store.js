import createStore from 'unistore'


let ajax = (q, callback)=> {

  //window.ML_ajax('/api/autocomplete?q='+ q, callback)


  let url = '/api/autocomplete?q='+ q;

  var req = new XMLHttpRequest();

  req.open('GET', url, true);
  req.onreadystatechange = function (aEvt) {
    if (req.readyState == 4) {
      if(req.status == 200){
        callback(JSON.parse(req.responseText))     
      }
      else{
        error("Error loading page\n");
      }
    }
  }
  req.send(null);

  return req;
};

export let actions = store => ({

  sendForm(state, value) {

    setTimeout(()=>{

      let form = document.querySelectorAll('#searchbox form')[0];// ??
      form.submit();

    }, 100);
   
    return {
        value : value
    }
  },
  
  onInput(state,props) {

    let query = props.path[0].value;

    ajax(query, (data)=>{

      store.setState( { 
        value : props.path[0].value,
        suggested_queries : data.suggested_queries
      })

    });
    
  } 

})

export default initialState => createStore(initialState)
