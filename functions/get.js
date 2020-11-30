require("dotenv").config({
  path: `.env`,
})
  

const faunadb = require('faunadb'),
q = faunadb.query;

exports.handler = async () => {
try {



  var adminClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET_KY });
  const result = await adminClient.query(
    q.Map(
      q.Paginate(q.Match(q.Index('data'))),
      q.Lambda(x => q.Get(x))
    )
  )

  return {
    statusCode: 200,
    body: JSON.stringify(result.data),
  }

} catch (err) {
  return { statusCode: 500, body: err.toString() }
}
}
