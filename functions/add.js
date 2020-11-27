
  

const faunadb = require('faunadb'),
  q = faunadb.query;

exports.handler = async (event) => {
  try {

    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    let reqObj = JSON.parse(event.body);

    var adminClient = new faunadb.Client({ secret: 'fnAD6OD-QyACBcMFsavYmk2L8OkTxK5zWMj2r_Y9' });
        const result = await adminClient.query(
          q.Create(
            q.Collection('crud'),
            {
              data: {
                name: reqObj.name,
                email: reqObj.email,
                
              }
            },
          )
        )
    
   
    
    return {
      statusCode: 200,
      body: JSON.stringify({ id: `${result.ref.id}` }),
     
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
