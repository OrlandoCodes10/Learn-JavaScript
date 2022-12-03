let http = require("http")

let ourApp = http.createServer(function(req, res){
    if (res.url == "/") {
        res.end("Hello, and welcome to our webiste")
    }

    if (req.url == "/about") {
        res.end("Thank you for the interest in our company")
    }
})
ourApp.listen(3000)

