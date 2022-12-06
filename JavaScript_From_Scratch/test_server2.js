let express = require("express")

let ourApp = express()
ourApp.listen(3000)

ourApp.get('/', function(req, res) {

    res.send(`
    <form action="/answer" method="POST">
    
        <p>What color is the sky on a clear and sunny day?</P>
        
        <input name ="skyColor" autocomplete="off">
        
        <button>Submit Answer</button>
    
    </form>
    
    `)
})

ourApp.post('/answer', function(req, res) {
    res.send("Thank you for submitting the form.")
})

ourApp.get('/answer', function(req, res) {
    res.send("Are you lost? There is nothing to see here.")
})