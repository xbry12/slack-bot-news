# WELCOME TO MY NEWS BOT : SLACK DAILY 

#### Description:

# About The Project

## 1. Intro
This is my final project submission for CS50. We were tasked with building something that is useful, and demonstrates what we've learned in the course. I decided to build a slack bot gives the user news information. The app returns the top 5 stories from the [News API](https://newsapi.org/docs/endpoints/top-headlines) in a given category. I believe this was a good way for me to return to my first coding language, JavaScript, while still trying something new and implementing my newfound cs50 knowledge.

## 2. Usage 
The app provides a slash command ("/news") that accepts a single parameter, the category of news that the user is interested in. If the user doesn't provide a category, a helpful message lists all available categories and prompts the user to try again. A potential enhancement could be to have the app open a modal with a category selector instead of the text prompt.  

## 3. Tech decisions
I decided to use JavaScript and NodeJS because this was what I was most comfortable with. I used [Slack's Bolt SDK](https://slack.dev/bolt-js/concepts#basic) to build the interaction with Slack, and [News API](https://newsapi.org/docs/endpoints/top-headlines) for the datasource." Since this is a slack bot, I used Slack's Bolt SDK as my baseline for the app, and added the functionality. I was glad that slack had so many options to make the app dynamic, specifically allowing me to implement a slash command for simplicity, while still allowing me to aggregate data comfortably. I used ``dotenv`` as well so that I would be able to store all of my keys. 

## 4. Conclusion:
Currently the bot is dynamic in usage, but I left room for improvement. The user experience can be improved, and so can the design. The intention was to build an app that would be easy to use for people who do not have a technical background, so I tried to write the help message in plain English and avoid CLI-style documentation. As more features are added, I intend to add a help command for more technical users. Since running the app currently requires a Slack workspace administrator to create a slack app in their workspace, I used the dotenv package to handle environment variables. When a slack app is created, the tokens it generates can simply be added to a .env file at the root of the project, and don't require any further configuration from the administrator. I am currently using a developer api key which I received from the News API, maybe in the future a premium api key can be purchased for further use. I enjoyed using Slack Bolt SDK. One thing I have a better understanding of after building this project is asynchronus and synchronus programming in JavaScript. Also...
## THIS IS CS50! 

## 5. Future Enhancements
* Category Selection Modal - When a user doesn't enter a category as a parameter to the slash command, open a modal with a pre-populated category selector.
* More options - Qllow user to specify country, category and additional search terms.
<hr>

### Built With:
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
     <img src="https://img.shields.io/badge/-node.js-green" />

</p>
<!-- GETTING STARTED -->

# Getting Started

Flesh this out more. Explain that you have to create the slack app in your workspace, then add the tokens to your .env file, and then run the javascript code locally

* To run this, a slack app must be created in the Slack workspace. Tokens must be added within our .env file, and then JavaScript will be ran locally.

https://slack.dev/bolt-js/tutorial/getting-started

<hr>

# Prerequisites 
For this project you will need 

* node version v19.3.0
#### Video Demo:  <URL HERE>
    






Contact
Bryant Pyram - bryant.pyram@gmail.com / BPyram@cvent.com

Ackowledgements 
Here are the resources used for the project. 
    
https://slack.dev/bolt-js/tutorial/getting-started - Slack Bolt SDK
https://newsapi.org/docs/endpoints/top-headlines - News API
