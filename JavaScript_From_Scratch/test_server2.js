let express = require("express")

let ourApp = express()
ourApp.get
ourApp.listen(3000)

ourApp.get('/', function(req, res) {

    res.send(`
    <form action=”/answer” method=”POST”>
    
        <p>What color is the sky on a clear and sunny day?</P>
        
        <input name =”skyColor” autocomplete=”off”>
        
        <button>Submit Answer</button>
    
    </form>
    
    `)
    
    })