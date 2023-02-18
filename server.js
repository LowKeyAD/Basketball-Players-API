const express = require('express')
const app = express()
const PORT = 3000

const myHallofFamePlayers = {
    'lebron james': {
        'name': "Lebron James",
        'age': 38,
        'birthLocation': "Clevland, Ohio",
        'College': "None",
        'yearDrafed': 2003,
        'currentTeam': "Los Angeles Lakers",
        'position': "Small Forward",
    },

    'dwayne wade': {
        'name': "Dwayne Wade",
        'age': 41,
        'birthLocation': "Chicago, Illinois",
        'College': "Marquette University",
        'yearDrafed': 2003, 
        'currentTeam': "Miami Heat",
        'position': "Shooting Guard",
    },

    'carmelo anthony': {
        'name': "Carmelo Anthony",
        'age': 38,
        'birthLocation': "Baltimore, Maryland",
        'College': "Syracuse Univeristy",
        'yearDrafed': 2003,
        'currentTeam': "Denver Nuggets",
        'position': "Small Forward",
    },

    'allen iverson': {
        'name': "Allen Iverson",
        'age': 47,
        'birthLocation': "Hampton, Virginia",
        'College': "Georgetown University",
        'yearDrafed': 1996,
        'currentTeam': "Retired",
        'position': "Point Guard",
    },

    'unknown':{
        'name': "none",
        'age': 0,
        'birthLocation': "unknown",
        'College': "unknown",
        'yearDrafed': "unknown",
        'currentTeam': "unknown",
        'position': "unknown",
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
    console.log("We working")
})

app.get('/api/:name', (request, response) =>{
    const hallOfFamer = request.params.name.toLowerCase()

    if(myHallofFamePlayers[hallOfFamer]){
        response.json(myHallofFamePlayers[hallOfFamer])
    }else{
        response.json(myHallofFamePlayers['unknown'])
    }
   
   
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! You better go catch it.`)
})