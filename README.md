# Bucket List

This is a simple app which allows users to create a bucket list. Written in Node.js on a Postgres database, it follows a simple MVC architectural framework. The goal of this app is to help users keep track of all the things they want to do but have never make time for. Users can perform basic CRUD operations for items within their list, as well as toggle each item as complete or incomplete. Items can also be tagged as either a life experience, a travel destination, or a local attraction.

This app is deployed and live. Click [here](https://nholden212-bucket-list.herokuapp.com/) to check out Bucket List!

### Built With

* Node.js
* Express
* PostgreSQL
* Passport (for authentication)

### Upcoming Features

Currently, the primary features of the app (creating an account and managing your personal bucket list) are fully functional. The following are plans for features of the app to be added in the future:

* Firstly, the client will be rewritten in React.js so that the page is more responsive
* Some abstractions within the client will be restructured to better support a React front-end
* Users will have the ability to create custom tags beyond the Life Exeperiences, Travel Destinations, or Local Attractions
* Users will have the ability to sort and filter their list by their tags
* Users will have the option to share their completed items to a feed that can be viewed by other users who follow their profile

Check back in soon to see how the app progresses!
