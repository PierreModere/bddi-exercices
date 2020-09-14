function getUsers() {
  return new Promise((resolve, reject) => {
    // We simulate an async xhr call with setTimeout
    setTimeout(() => {
      resolve(['Pierre', 'Paul', 'Jaques'])
    }, Math.round(Math.random() * 5000))
  })
}

function createUser(name) {
  return new Promise((resolve, reject) => {
    // We simulate an async xhr call with setTimeout
    setTimeout(() => {
      console.log(`${name} is created`)
      resolve(name)
    }, Math.round(Math.random() * 5000))
  })
}

function createUsers(users) {
  return users.map((user) => { // getUsers retourne une promesse retournant un tableau de string, createUsers utilise ce tableau de strings pour retourner un tableau de promesses createUser qui elle crée des les utilisateurs 
    return createUser(user)
  })
}

// Votre code ici (8 lignes)
getUsers()
  .then(createUsers)
  .then((users)=> {
    return Promise.all(users) //on peut donc utiliser le tableau de promesses avec promise.all
  })
  .then(()=> {
    console.log('All users created')
  })