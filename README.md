# Real Time Communication App


## ABOUT
---
This app makes use of the socket.io package to implement real time communication between clients(the front end) and the server. As shown in the video.

This web app contains two pages. A page on route ```/1``` and a page on route ```2```

The page on route ```/1```  consists of 
• 6 textboxes and a checkbox for each textbox. As a user of this web app you can type into a textbox and that text with automatically be updated on the corresponding textbox on the page in route ```/2```. When a user checks the checkbox associated with a textbox on the page in route ```1```, it appears on the page in ```2``` and the opposite effect occurs if a user unchecks it.

The page on route ```/2```  consists of 
• An empty page by default, which gets updated based on the possible actions taken in route. The

**You can visit the swagger docs on route ```/documentation```** 

**Please feel free to visit my Notion blog page where I elaborate on the project and share my thought process that informed its development.** 
# PROJECT SETUP

### Installation

_Follow these steps to setup the project locally on your computer_

1. Clone the repo
```
git clone https://github.com/aytheotaku/zigy-task
```

2. Install NPM Dependencies 
```
npm install
```
**_Note:_** If dependencies are deprecated at time of installation, then upgrade these packages by simplying running
```
npm audit fix --force
```


4. 
```
npm start

```

5. ``` localhost:'insert port here'/1``` serves first page
6. ``` localhost:'insert port here'/2``` : serves second paged
6. ``` localhost:'insert port here'/documentation``` : serves the Swagger documentation


