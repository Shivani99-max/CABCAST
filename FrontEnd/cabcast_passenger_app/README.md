# FrontEnd - CabCast Passenger App - README

# Project Local Setup

Please follow the below steps to create your local dev workspace for the frontend passenger app in mac. 
Please refer the respective official documentation for other operating system environments.

  1. First, you need to install Node.js and npm if they are not already installed. You can check if they are installed by running the following commands in your terminal:
     ### `node -v`
     ### `npm -v`
     If Node.js and npm are not installed, you can install them using Homebrew:
     ### `brew install node`

  3. Once Node.js and npm are installed, you can create a new Create React App project by running the following command in your terminal.
     Replace my-app with the name of your project:
     ### `npx create-react-app my-app`

  4. After the project is created, navigate into the project directory:
     ### `cd my-app`

   5. Now, you can start the development server:
      ### `npm start`

   6. Your new Create React App project is now set up and running. 
      Validate the setup by accessing the app by opening **http://localhost:3000** in your web browser.
      ### `http://localhost:3000`

   7. Clone and copy the contents of cabcast_passenger_app to your dev react workspace **my-app**

   8. Check the below dependecies in your dev react workspace 
      * [react-fontawesome](https://docs.fontawesome.com/web/use-with/react/)
      * ### `npm install react-router-dom`

   9. if all is well, you should see the cabcast app running your browser **http://localhost:3000**

# Deployment

  1. **Install Firebase CLI:** First, you need to install the Firebase CLI (Command Line Interface) if you haven't done so already.
     You can do this using npm (Node Package Manager). Open your terminal and run the following command:
     ### `npm install -g firebase-tools`

  2. **Login to Firebase:** After installing the Firebase CLI, you need to log in to your Firebase account. Run the following command and follow the prompts:
      ### `firebase login`
     
  4. **Initialize Firebase in your project:** Navigate to your project's directory using the cd command. Once you're in your project's directory, initialize Firebase by running:
     ### `firebase init`

  5. This will start a series of prompts:
      * Select the Hosting option by navigating with arrow keys and pressing the space bar to select, then press enter.
      * Select the Firebase project you want to link to your app.
      * Specify the build as your public directory.
      * Choose Yes to configure as a single-page app.
      * Choose whether or not to overwrite existing index.html file.
    
  6. Build your project: Before you can deploy your project, you need to build it. If you're using a tool like Create React App, you can build your project by running:
     ### `npm run build`

  7. Deploy to Firebase: After building your project, you can deploy it to Firebase using the following command:
     ### `firebase deploy`
     This will upload your project to Firebase and give you a URL where you can access your live project.
  
  Note: Remember to replace build with the name of your output directory if it's different. 
  The firebase init and firebase deploy commands should be run in the root directory of your project.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Getting Started with Google Firebase

This project was hosted with **Google Firebase**

* [Firebase Build Features](https://firebase.google.com/products-build)
* [Firebase Run Features](https://firebase.google.com/products-run)
* [Firebase Usecase and Solutions](https://firebase.google.com/solutions)

To learn Firebase, check out the [Firebase documentation](https://firebase.google.com/docs/guides).

