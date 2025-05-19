import express from 'express'
import userRouter from './modules/user/routes/userRouter'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(express.json())

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`)
})

app.use('/api/users', userRouter)
