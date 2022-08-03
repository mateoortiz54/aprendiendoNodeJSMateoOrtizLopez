var axios = require('axios');
var data = JSON.stringify({
    "collection": "APRENDICES",
    "database": "FakeStore",
    "dataSource": "ClusterADSI2364481",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-ophup/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '8ltBKNJvwaQcoUj8O4FCdzi2956m3fo2JF2b05VcWlgPQeGZQewVLZWXXIlpmkLB',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
