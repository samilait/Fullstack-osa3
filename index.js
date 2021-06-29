const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())

// //Create a new named format
// morgan.token('custom', ':http-version (:method) :url => :status')
// //use the new format by name
// app.use(morgan('custom'))

// morgan.token('json', (req, res) => {
//   return JSON.stringify({
//     url: req.url,
//     method: req.method,
//     httpVersion: req.httpVersion
//   })
// })

// app.use(morgan('json'))

//we are defining a new parameter called host
morgan.token('host', function(req, res) {
  if (req.method === 'POST') {
    return `{"name": "${req.body.name}", "number": "${req.body.number}"}`
  } else {
    return ''
  }
})

// we are using the host parameter
// app.use(morgan(':method :host :status :res[content-length] - :response-time ms'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :host'))


// morgan.token('test', function (req, res) {
//   return JSON.stringify ({
//     url: req.url,
//     method: req.method
//   })
// })

// app.use(morgan('tiny'))
// app.use(morgan('test'))

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  }
]

const generateId = () => {
  const rndId = Math.floor(Math.random() * 100000)
  return rndId
}

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => {
    return person.id !== id
  })
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({
      error: 'name missing'
    })    
  }
  if (!body.number) {
    return response.status(400).json({
      error: 'number missing'
    })    
  }

  const personExists = persons.find(person => person.name === body.name)
  if (personExists) {
    return response.status(400).json({
      error: 'name must be unique'
    })    
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(person)

  response.json(person)
})

app.get('/info', (request, response) => {
  const numberOfRecords = persons.length
  const timeNow = Date()
  response.send(
  `<p>Phonebook has info for ${numberOfRecords} people</p>
  <p>${timeNow}</p>`
  )
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)