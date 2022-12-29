# WELCOME TO MY NEWS BOT : SLACK DAILY 

#### Description:

# About The Project

## Intro
This is my final project submission for CS50. We were tasked with building something that is useful, and demonstrates what we've learned in the course. I decided to build a slack bot gives the user news information. The app returns the top 5 stories from [News API](https://newsapi.org/docs/endpoints/top-headlines) in a given category.

Currently the app returns news based on a set amount of categories, listed within the API. I believe this was a good way for me to return to my first coding language, JavaScript, while still trying something new and implementing my newfound cs50 knowledge.

## Usage choice
I decided to use JavaScript and NodeJS because this was what I was most comfortable with. Since this is a slack bot, I used Slack's Bolt SDK as my baseline for the app, and added the functionality. I was glad that slack had so many options to make the app dynamic. 

## Interactivity and what the app does 
To use the app, a user would go into slack, and type the slash command "/news" and a preset category. The API returns the "general" category automatically if just "/news" is typed, so I decided to have that not be an issue by adding the category to my list. If the user just types "/news" the bot will return a prompt, which tells the user to type "/news" and a category from the list. 

## Conclusion:

Currently the bot is dynamic in usage, but I left room for improvement. The user experience can be improved, and so can the design. The intention of the app was for ease of use for users who do not have a technical background, hence the prompts. I intend to add a help prompt as well. I had some issues with the developer environment variables for the app because the keys change constantly if the app is reinstalled. I am currently using a developer api key, maybe in the future a premium api key can be purchased for further use. I enjoyed using Slack Bolt SDK. One thing I have a better understanding of after building this project is asynchronus and synchronus programming in JavaScript. Also, THIS IS CS50! 

<hr>

### Built With:
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
     <img src="https://img.shields.io/badge/-node.js-green" />

</p>
<!-- GETTING STARTED -->

# Getting Started

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
https://slack.dev/bolt-js/tutorial/getting-started
