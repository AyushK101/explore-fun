import e from 'express'
import cors from 'cors'
import fs from 'fs'
import { stringify } from 'querystring'
import cookieParser from 'cookie-parser'
const app = e()

app.use(cookieParser())
app.use(e.urlencoded({ extended: true }))
app.use(e.json())
app.use(cors({
  origin: ['http://localhost:5173', 'http://vercel.com'],
  // credentials: true
  allowedHeaders: ['h1', 'origin2', 'Authorization', 'Content-Type'],
  methods: ['POST', 'TEMP'],
  credentials: true,
  maxAge: 0,
  // maxAge: 3600, // sets age of preflight request , means after first success preflight , will not req preflight for next <time> duration.
  optionsSuccessStatus: 200,
  exposedHeaders: true
}))

app.get('/test', async (req, res) => {
  //  fs.writeFile('./req.txt',stringify(req),{encoding: 'utf-8'},(err)=>[
  //     console.log(err)
  // ])
  // console.dir(req)
  res.setHeader('test-From-Backend', 'testing')
  res.cookie('test', 'value', {
    expires: new Date( Date.now() + 24 * 60 * 60 * 1000), // 1 day expiry 
    domain: 'localhost',
    secure: true,
    sameSite: 'none',
    path: '/',

  })
  // res.setHeader('Expires',new Date().getTime())
  res.setHeader('Cache-Control', 'no-store no-cache, must-revalidate, max-age=0');
  res.setHeader('Expires', new Date(new Date() + (60 * 60 * 1000)).toUTCString())
  return res.send("/test")
  // res.setHeader('Location','http://localhost:5173/redirecting')
  // return res.status(301).send('redirecting to google...')

})

app.post('/search', async (req, res) => {
  const { input } = req.body
  console.log(input)
  res.send(input)
})

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})