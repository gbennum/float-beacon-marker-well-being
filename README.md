This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).  
Additonally, a full stack with PostgreSQL, Sequelize, and Express was added using [Create React App Fullstack](https://github.com/ekatzenstein/create-react-app-fullstack).  


## Running

In the project directory, run:

`npm install`

Assuming you have some sort of postgreSQL server installed: 
`createdb float-beacon-marker-well-being`

If you don't, hopefully you're managing packages with homebrew:
`brew install postgresql`

If you're not, this may be unpleasant- you might consider just installing homebrew:
[https://postgresapp.com/documentation/cli-tools.html](https://postgresapp.com/documentation/cli-tools.html)

Finally, 
`npm seed`
`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## Other Commands

To run API tests, have a server running, then run:

`npm test`

<dl>
	<dt>These tests are supposed to handle:</dt>
	<br>
	<dd>Good and bad API calls</dd>
	<dd>Good and bad inputs</dd>
	<dd>Good and bad API calls</dd>
	<dd>Check the data for some basic quality metrics</dd>
	<dd>Make sure all fields are being returned</dd>
	<dd>Ensure the fields are not null and populated with data</dd>
	<dd>Determine whether the correct incrementation actions are occurring on the server</dd>
</dl>

<br>

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!


## API Documentation

This is a lightweight API, not all of the general CRUD operations were requested for this project.  Sample requests in a variety of languages and documentation courtesy of [Postman](https://documenter.getpostman.com/view/5002799/RWTfy1MJ).

