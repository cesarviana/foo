// authentication & authorization

// transport encryption

// encryption at test



// authentication -> valid users
// authorization -> what users can do
// RBAC -> Role Based Access Control

// User needs to exist in mongodb server
// User needs to have some priviledges -> what can do, in which resource

// Different types of DB users
// - Administrator (manage db config, create users...)
// - Developer (CRUD)
// - Data Scientist (Only read)

// creating an user
// use admin

db.createUser(
  {
    user: 'myAdm',
    pwd: 'usrpasswrd',
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
);

// roles
// dbOwner, userAdmin, userAdminAnyDatabase, root <- can manage other users
// read, readWrite
// etc

// show users
const users = [
  {
    _id: 'udemyCourse.cesar',
    userId: UUID('953861d9-f3aa-4332-9749-98b932f64ea3'),
    user: 'cesar',
    db: 'udemyCourse',
    roles: [ { role: 'read', db: 'udemyCourse' } ],
    mechanisms: [ 'SCRAM-SHA-1', 'SCRAM-SHA-256' ]
  },
  {
    _id: 'udemyCourse.max',
    userId: UUID('cd82c37e-8849-4857-b5cb-de556153adaf'),
    user: 'max',
    db: 'udemyCourse',
    roles: [
      { role: 'read', db: 'alyneKickStartDB' },
      { role: 'readWrite', db: 'udemyCourse' }
    ],
    mechanisms: [ 'SCRAM-SHA-1', 'SCRAM-SHA-256' ]
  }
]

// dbAdmin -> create collections, indexes
// manage users
// developer -> read write data

// mongosh --username udemyAdm --password udemyAdm --authenticationDatabase udemyCourse --host localhost                                23-12-16 - 10:20:37