YouTube Video Search Engine with jQuery
================
It’s a simple jQuery script help you to search videos on YouTube you can search any video on YouTube publicly available. It’s a very simple and easy to configure jQuery snippet let’s make YouTube search engine site with jQuery.

How to use
-----------
First of all you need to create Google Project to get API Key.
- Create New Project [Google APIs](https://accounts.google.com/signin/v2/sl/pwd?service=cloudconsole&passive=1209600&osid=1&continue=https%3A%2F%2Fconsole.developers.google.com%2F%3Fref%3Dhttps%3A%2F%2Fwww.phpgang.com%2Fcreate-youtube-video-search-engine-with-jquery_4842.html%3Fdoing_wp_cron%253D1523620763.6901540756225585937500&followup=https%3A%2F%2Fconsole.developers.google.com%2F%3Fref%3Dhttps%3A%2F%2Fwww.phpgang.com%2Fcreate-youtube-video-search-engine-with-jquery_4842.html%3Fdoing_wp_cron%253D1523620763.6901540756225585937500&flowName=GlifWebSignIn&flowEntry=ServiceLogin)
- Select Creating New Project
- Search YouTube data API Service and enable it.
- Now Generate API Key.
- Finaly we got API Key now move to Coding.
- Now Add JavaScript Main code: ADD_YOUR_API_KEY_HERE replace your API Key with this (in /js/myscript.js file).

In JavaScript (/js/myscript.js) file do all works Request API’s and fetch data from YouTube ADD_YOUR_API_KEY_HERE replace your API Key.

searchYoutube() This function search all videos for given key

nextPage() Show next page of current result

prevPage() Show previous page of current result

getOutput(item) this function generate output data on given values.

getButtons(prevPageToken, nextPageToken) create buttons next and previous
