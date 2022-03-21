##Create a database using Atlas MongoDB

- Create a project
- Build a database using shared cluster (is a collection of datasets distributes across many servers)
- Add the admin user and password
- Deployment > Database >
  -- Browse collections > to create the database name and collection name. The new documents created will be added inside the database created.
  -- Connect > Connect your application > extract the credentials to be use on the .env file. Make sure you replace the password and database name.

  `mongodb+srv://drinobre:<password>@job-tracker-app.tyubb.mongodb.net/<myFirstDatabase>?retryWrites=true&w=majority`
