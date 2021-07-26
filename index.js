require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('person', function(req, res) {
  if (req.method === 'POST') {
    return `{"name": "${req.body.name}", "number": "${req.body.number}"}`
  } else {
    return ''
  }
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'))

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
  Person.find({}).then(persons => {
    response.json(persons)
  })
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

  const person = new Person({
    name: body.name,
    number: body.number,
    // id: generateId()
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })

  // persons = persons.concat(person)

  // response.json(person)
})

app.get('/info', (request, response) => {
  const numberOfRecords = persons.length
  const timeNow = Date()
  response.send(
  `<p>Phonebook has info for ${numberOfRecords} people</p>
  <p>${timeNow}</p>`
  )
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// const port = 3001
// app.listen(port)
// console.log(`Server running on port ${port}`)