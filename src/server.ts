import http from "http"

const server = http.createServer((request, response) => {


    if (request.url === "/" && request.method === "GET") {
        response.writeHead(200, { "Content-Type": "text/html" })
        response.end("<h1>Home</h1>")
        return
    }

    if (request.url === "/about" && request.method === "GET") {
        response.writeHead(200, { "Content-Type": "text/html" })
        response.end("<h1>About!</h1>")
        return
    }

    if (request.url === "/my-account" && request.method === "GET") {
        response.writeHead(403, { "Content-Type": "text/plain" })
        response.end("You have no access to this page")
        return
    }

    response.writeHead(404, { "Content-Type": "text/plain" })
    response.end("Page not found")
    return


})




const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server executing on ${PORT} `)
})