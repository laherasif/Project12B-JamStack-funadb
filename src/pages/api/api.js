
const create =  (data) => {
    return fetch('/.netlify/functions/add', {
        body: JSON.stringify(data),
        method: 'POST'
    }).then(response => {
        return response.json()
    })
}


const getAll = () => {
    return fetch('/.netlify/functions/get').then(response => {
        return response.json()
    })
}


  const del = (data) => {
    return fetch('/.netlify/functions/delete', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      return response.json()
    })
  }


  const update = (data ) => {
    return fetch(`/.netlify/functions/update`, {
      body: JSON.stringify(data),
      method: 'POST'
    }).then(response => {
      return response.json()
    })
  }

//   const create = (data) => {
//     return fetch('/.netlify/functions/crudapp/todos-create', {
//       body: JSON.stringify(data),
//       method: 'POST'
//     }).then(response => {
//       return response.json()
//     })
//   }

//   const create = (data) => {
//     return fetch('/.netlify/functions/todos-create', {
//       body: JSON.stringify(data),
//       method: 'POST'
//     }).then(response => {
//       return response.json()
//     })
//   }


export default {
    create: create,
    update: update,
    del: del,
    getAll : getAll
}