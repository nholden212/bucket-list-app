# Bucket List

This is a simple app to help users create a bucket list. Written in Node.js on a Postgres database, it follows a simple MVC architectural framework.

The goal of this app is to inspire activity and help users keep track of all the things they want to do but never make time for! Users are authenticated by providing a valid email. Their list is saved to their profile, and users have the ability to perform basic CRUD operations for items within their list, as well as to toggle each item as complete or incomplete. Each item is marked as either a life experience (something you want to do), a travel destination (somewhere you want to go), or a local attraction (something you want to check out).

Currently, the primary features of the app (creating an account and managing your personal bucket list) are fully functional. There are several plans for the future of the app:

* Firstly, the client will be rewritten in React.js so that the page is more responsive
* Some abstractions within the client will be restructured to better support a React front-end
* Users will have the ability to create custom tags beyond the Life Exeperiences, Travel Destinations, or Local Attractions
* Users will have the ability to sort and filter their list by their tags
* Users will have the option to share their completed items to a feed that can be viewed by other users who follow their profile

Check back in soon to see how the app progresses!
