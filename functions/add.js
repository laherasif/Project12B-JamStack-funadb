
  

const faunadb = require('faunadb'),
  q = faunadb.query;

exports.handler = async (event, context) => {
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
    
    console.log("Entry Created and Inserted in Container: " + result.ref.id);
   
    
    return {
      statusCode: 200,
      body: JSON.stringify({ id: `${result.ref.id}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
