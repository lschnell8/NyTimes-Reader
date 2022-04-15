# NY Times Reader

## Table of Contents

[Overview](#overview) | 
[Installation Instructions](#installation-instructions) | 
[Project Goals](#project-goals) | 
[Directions and Features](#directions-and-features) | 
[Code Architecture](#code-architecture) | 
[Technologies Used](#technologies-used) | 
[Testing](#testing) | 
[Project Challenges](#project-challenges) | 
[Project Wins](#project-wins) | 
[Future Iterations](#future-iterations) | 
[Author](#author)

### Overview 

This project was a Turing School of Software and Design take-home code challenge practice. Students were given 5 days to complete the challenge with a target goal of completion of around 8 hours total. 

- Project Specs here: 
  - [Take-Home Front End Prompt](https://mod4.turing.edu/projects/take_home/take_home_fe)
  - [Take-Home Rubric](https://mod4.turing.edu/projects/take_home/take_home_rubric)
  - [New York Times API Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview)

### Installation Instructions

1. Clone down [this repository](https://github.com/lschnell8/NyTimes-Reader.git)
2. Run `npm install`
3. Run `npm start` in your terminal
4. Go to http://localhost:3000/ and you should see the website
5. Enter `control + c` in your terminal to stop the server at any time.

### Project Goals

- A strong understanding of React JS and Front-End best practices
- Your ability to prioritize for MVP
- An understanding of basic usability practices and standards
- A clear hierarchy of information
- Clean, well thought out code

### Directions and Features

On the landing page, the user will see a list of topics as well as summaries for NY Times top stories.  

 - Click a topic and a new set of summaries is displayed. All stories are categorized within the topic selected.

![NYT-select-topic](https://user-images.githubusercontent.com/78449313/163577362-fdfe781e-6ef9-44f1-9618-8c1851255e55.gif)


  - Click an article summary and route to a new location to see extended information about the article as well as a link to the full article on the NYT site. 

![NYT-select-summary](https://user-images.githubusercontent.com/78449313/163577907-8071416f-5651-4ca7-abc2-f0883a150ff1.gif)

  - Click the Read Full Article button to open a new window and read the full article on the official NYT site.

![NYT-See-Full-Article](https://user-images.githubusercontent.com/78449313/163590061-a40e1948-ebbe-4e05-a88f-65eea4d22683.gif)


   
  - 100% Accessible

![accessibility-score](https://user-images.githubusercontent.com/78449313/163581291-cfa37de6-a22c-4504-a039-4e90d5a16c59.png)

## Code Architecture

This application utilizes React functional components and uses React Hooks to manage state and perform network requests. 

## Technologies Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React Hooks](https://img.shields.io/badge/React%20-Hooks-blue#:~:text=Hooks-,Hooks)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Miro](https://img.shields.io/badge/Miro-050038?style=for-the-badge&logo=Miro&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## Testing

Cypress was used for E2E and integration testing. To test the application: 
 1. Run `npm start`
 2. In a seperate terminal tab run `npm run cypress` and you will have a window open that gives you the ability to click on each test and see whether they pass. 

### Project Challenges

- Utlizing React Router V6 to make fetch calls via a selected topic
- Keeping to a very minimal MVP to satisfy code challenge time constraints

### Project Wins

- Built more confidence in understanding of React framework 
- Implemented React V18
- Implemented React Router V6 with nested Route and Outlet
- Continued to gain competency with Cypress E2E testing framework
- Fully mobile responsive
- 100% Accessibility Audit

### Future Iterations

- Searching and filtering articles based on story content and title within a topic
- Comments/discussion threads

### Author

  Lindsay Schnell (no pronoun preference)<br>
    <a href="https://github.com/lschnell8/"> 
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
    </a>
    <a href="https://www.linkedin.com/in/lindsay-schnell/"> 
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" />
    </a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).