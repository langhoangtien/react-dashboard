Install NodeJs from NodeJs Official Page
Open Terminal
Go to your file project
Run in terminal npm install
Then run npm start
(Optional) You can create a new react application like this
Run in terminal npm install -g create-react-app
Go to the folder where you want to create your app
Run in terminal create-react-app your-app-name
Navigate to your-app-name
Run in terminal npm start
More information → create-react-app
Navigate to http://localhost:3000
More information → react
Live Production on Heroku
Open terminal
Go to your file project
Run in terminal one by one: (Replace $APP_NAME with a name for your unique app.)
git init
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "Start with create-react-app"
git push heroku master
heroku open
More info → here
