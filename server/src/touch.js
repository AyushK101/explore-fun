import e from 'express'
import cors from 'cors'
import fs from 'fs'
import { stringify } from 'querystring'

const app = e()

app.use(cors({
    origin: 'http://localhost:5173',
    // credentials: true
    allowedHeaders: ['h1','origin2'],
    methods: ['POST','TEMP'],
    maxAge: 5000,
    exposedHeaders: false
}))

app.get('/test', async (req,res)=>{
     fs.writeFile('./req.txt',stringify(req),{encoding: 'utf-8'},(err)=>[
        console.log(err)
    ])
    res.setHeader('testFromBackend','testing')
    return res.send("/test")
    
})

app.listen(3000,()=>{
    console.log('server is listening on port 3000')
})