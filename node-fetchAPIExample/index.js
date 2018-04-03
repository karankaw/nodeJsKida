fetch = require('node-fetch')


uri = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(uri)
.then(response => {
			console.log(response)
			return response.json()//Its an async operation which is returned asyncly, so we use chained then
		})
.then(json => console.dir(json))