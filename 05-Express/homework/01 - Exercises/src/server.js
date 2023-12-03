const { cleanMessage } = require("@11ty/eleventy/src/EleventyErrorUtil");
const express = require("express");

let publications = [];

const server = express();

server.use(express.json());


server.post('/posts', function(req, res) {
    const { author, title, contents, id } = req.body

    if(author && title && contents) {
        publications.push({ author, title, contents, id })
        return res.json(publications)
        
    } else {
        return res.status(400).json({ error: "No se recibieron los parámetros necesarios para crear la publicación" })
    }
})


server.get('/posts', function(req, res) {
    const { author, title } = req.query

    const myPosts = publications.filter((post) => {
        post.author === author && post.title === title
    })

    if(myPosts.title === title && myPosts.author === author) {
        return res.json(myPosts)

    } else {
        return res.status(400).json({ error: "No existe ninguna publicación con dicho título y autor indicado" })
    }
})


server.get('/posts/:author', function(req, res) {
    const { author } = req.params

    const authorPublications = publications.filter(
        (post) => post.author === author
    )

    if(authorPublications.author === author) {
        return res.json(authorPublications)
        
    } else {
        return res.status(400).json({ error: "No existe ninguna publicación del autor indicado" })
    }
})


server.put('/posts/:id', function(req, res) {
    const { id } = req.params
    const { title, contents } = req.body

    if(!title || !contents) {
        return res.status(400).json({ error: "No se recibieron los parámetros necesarios para modificar la publicación" })
    }

    const filteredPost = publications.filter(
        (post) => post.id === id
    )

    if(filteredPost.id !== id) {
        return res.status(400).json({ error: "No se recibió el id correcto necesario para modificar la publicación" })

    } else {
        publications = publications.filter((post) => {
            if(post.id === filteredPost.id){
                post = { 
                    
                    title: title,
                    contents: contents
                }
            }

        })

        return res.json(post)
    }
})


server.delete('/posts/:id', function(req, res){
    const { id } = req.params
    console.log(id)
    const filteredPost = publications.filter(
        (post) => post.id === id
    )
    
    if(!id) {
        return res.status(400).json({ error: "No se recibió el id de la publicación a eliminar" })

    } else {
        if(filteredPost){

            publications = publications.filter(
                (post) => post.id !== id
            )

            return res.status(200).json({ success: true })

        } else {

            return res.status(400).json({ error: "No se recibió el id correcto necesario para eliminar la publicación" })
        }
    }
})


//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
