# ElifTechTest

To start this application you need:

Go to the Command line and type these comands:
1. Clone this repo
```
git clone
```
2. Remove .git file => (Windows) 
```
rm .git
```
3. Initialize new repo => 
```
git init
``` 
4. Commit it => 
```
git commit -m "init"
```
> Create MongoDB cluster and get a connection string
6. Login to heroku
```
heroku login
```
5. Create heroku project
```
heroku create app-name
```
6. Setup a env variable
```
heroku config:set MONGO_URI="your connection string"
```
7. Push to heroku
``` 
git push heroku master
```
8. Go to your website
> app-name.herokuapp.com
