const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const simsTownies = {
    'mortimer goth': {
        'age': 'Adult',
        'traits': 'Bookworm, Creative, Outgoing',
        'aspiration': 'Renaissance Sim',
        'career': 'Freelance Article Writer',
        'spouse': 'Bella Goth',
        'children': 'Cassandra Goth, Alexander Goth',
        'siblings': 'None',
        'parents': 'Unknown'
    },
    'bella goth': {
        'age': 'Adult',
        'traits': 'Good, Family-Oriented, Romantic',
        'aspiration': 'Party Animal',
        'career': 'Intelligence Researcher',
        'spouse': 'Mortimer Goth',
        'children': 'Cassandra Goth, Alexander Goth',
        'siblings': 'None',
        'parents': 'Unknown'
    },
    'cassandra goth': {
        'age': 'Teen',
        'traits': 'Gloomy, Creative',
        'aspiration': 'Musical Genius',
        'career': 'High School Student',
        'spouse': 'N/A',
        'children': 'N/A',
        'siblings': 'Alexander Goth',
        'parents': 'Mortimer Goth and Bella Goth'
    },
    'alexander goth': {
        'age': 'Child',
        'traits': 'Bookworm',
        'aspiration': 'Whiz Kid',
        'career': 'Grade School Student',
        'spouse': 'N/A',
        'children': 'N/A',
        'siblings': 'Cassandra Goth',
        'parents': 'Mortimer Goth and Bella Goth'
    },
    'bob pancakes': {
        'age': 'Young Adult',
        'traits': 'Gloomy, Slob, Loner',
        'aspiration': 'Master Chef',
        'career': 'Caterer',
        'spouse': 'Eliza Pancakes',
        'children': 'None',
        'siblings': 'None',
        'parents': 'Unknown'
    },
    'eliza pancakes': {
        'age': 'Young Adult',
        'traits': 'Neat, Perfectionist, Materialistic',
        'aspiration': 'Mansion Baron',
        'career': 'Unemployed',
        'spouse': 'Bob Pancakes',
        'children': 'None',
        'siblings': 'None',
        'parents': 'Unknown'
    },
    'unknown': {
        'age': 'unknown',
        'traits': 'unknown',
        'aspiration': 'unknown',
        'career': 'unknown',
        'spouse': 'unknown',
        'children': 'unknown',
        'siblings': 'unknown',
        'parents': 'Unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(simsTownies)
})

app.get('/api/:name', (request, response) =>{
    const townieName = request.params.name.toLowerCase()
    if(simsTownies[townieName]){
        response.json(simsTownies[townieName])
    }else{
        response.json(simsTownies['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on Port ${PORT}! Betta go catch it!`)
})