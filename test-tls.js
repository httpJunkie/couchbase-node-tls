// const couchbase = require('couchbase')

// const cluster = new couchbase.Cluster('couchbases://localhost', {
//   username: 'Administrator', password: 'password'
// })
// const bucket = cluster.bucket('blog')
// const collection = bucket.defaultCollection()

// console.log(bucket)

var couchbase = require('couchbase');
let runSampleCode = async() => {
  var cluster = await couchbase.connect('couchbases://127.0.0.1?truststorePath=ca.pem', {
    username: 'Administrator',
    password: 'password',
    bucketName: 'travel-sample'//,
    // trustStorePath: "./ca.pem"
})
var bucket = cluster.bucket('travel-sample');
var collection = bucket.defaultCollection();
  let getResult = await collection.get('airline_10')
  console.log("Get Result: \n", getResult)
}
runSampleCode()
  .then(() => {
    console.log("Exiting app...");
    process.exit(1);  
  })
  .catch(e => {
    console.log(e);
    console.log("Exiting app...");
    process.exit(1);
  })