All files in this folders are just for routing. Cluttering every routes and reqeusts in a single index.js file will be bad.
So this was used.

in the index file, app.use("/create") ... will send the request to this file
then, depending on get or post and what exactly the route is, the create.js file
will send the request and data to controller/create.js file for all the create routes