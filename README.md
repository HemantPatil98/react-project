# README

//Food delivery app
Header
logo
nav links => Home, offers, Helps, Sign in, cart
Main Body
search bar & Button
Restaurant cards => 4 in a row, 4 rows
Footer
logo and copyright
Social media links

# Setting up testing in app

    - Install React Testing library
    - Install jest
    - Install babel dependencies(Check use with babel section in jest docs)
    - Configure babel
    - Configure Parcel Config file to disable dafault Babel transpilation in Parcel and use our babel     config done on above step to be able to use jest with Parcel.
    - Configure jest (Use npx jest --init)
    - install jsdom library
    - Install @babel/preset-react library - to make JSX work in test cases (convert JSX to normal HTML)
    - Include @babel/preset-react inside my babel.config.js configurations
    - Install @testing-library/jest-dom
    - npm i jest-fixed-jsdom (to avoid ReferenceError: TextEncoder is not defined)
    - change to testEnvironment: "jest-fixed-jsdom" in jest.config.js.
