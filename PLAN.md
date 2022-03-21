## Create a database using Atlas MongoDB

- Create a project
- Build a database using shared cluster (is a collection of datasets distributes across many servers)
- Add the admin user and password
- Add the network access to anywhere (0.0.0.0/0). Otherwise Heroku would be able to deploy the database.
- Deployment > Database >
  -- Browse collections > to create the database name and collection name. The new documents created will be added inside the database created.
  -- Connect > Connect your application > extract the credentials to be use on the .env file. Make sure you replace the password and database name.

## Connect the database to HEROKU

- Add the credentials on the HEROKU > Settings > Config Vars
- The key is DATABASE_URL and the value as defined on the .env file.

## Best practice

- Have 2 separate files to connect to the db (app.js) and other to connect the server (server.js).

## How does it work

### When you create a Post request (Postman):

1. server.js => Start the server
2. app.js
   <br>
   -- Connect to MongoDB using the credentials (.env) and check connection.
   ? Why we use mongoose.connection.on (error) vs mongoose.connection.once (tell users it's connected to DB)?
   <br>
   -- npm express `.use` adds a middleware. The common types are:

   - express.json() => This middleware is responsible for parsing the request body and setting the req.body property.
   - cors() => attaches CORS headers to your Express HTTP responses
   - ("/", "<routerName>") => define the main route for the HTTP responses rather than have to copy it in each individual request.

3. Based on the router and the type of the request, the server will check the database Schema (all required fields and types) and create the model, which will be a copy of the Schema and the name of the collection will be the first argument (in lower case and plural).
