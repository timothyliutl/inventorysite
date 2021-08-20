## Inventory React

### Description
The purpose of this project is to create a modern website to find items in the 5th floor lab in Stirling Hall. The goal of this project is to speed up development time and to make it easier for multiple developers to collaborate on the site, by using React and typescript.

### Technology used
This project uses React.JS for the frontend and a PHP api for the backend. Imports for this repository include MaterialUI, React-Player, and React-Bootstrap.

### How to use
1. clone the repository to computer of choice
2. cd into the repository directory
3. run `npm install` to install all dependencies
4. run `npm start` for a devlopment environment or run `npm run build` for a production build of the website

Currently the website is hosted using NGINX on uglabs.phy.queensu.ca server

### To be developed in the future

Not an exhaustive list, but a few things that should be worked on before fully deploying the website.

* Currently videos are hardcoded into the page. In the future, an api should be developed so that videos can be fetched from a database. Interfaces have been created in the tsx files to provide an idea of the data the website is expecting from the backend.
* An interface for admins. This would allow entries in the database to be edited without any programming experience and with less effort.
* Advanced search features. Interface and components has been created, but logic has not been implemented.

### Suggestions for future
* Depending on how much the website needs to call the database, the developer may consider using Node.JS as the backend instead of PHP. This would simplify development as only one programming language would be used for frontend and backend development.
