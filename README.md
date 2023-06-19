# Dallas Mavericks Roster Building App
A web page for the Dallas Mavericks front office to use for roster building purposes.

## Installation
Make sure to have the latest version of node.js installed on your computer. Next, clone the repository onto your computer. Run an ```npm install``` to install all the dependencies in the package.json file.

## How to Use
After following the steps from the installation phase. Run the following command to start the local server
```
npm start
```

## Figma Design File
https://www.figma.com/file/iHUnyfjoXQOTsB5P5hd1rO/Dallas-Mavericks-App?type=design&node-id=0%3A1&t=yZ0XQCn5YauCAR2Q-1

## Notes
Currently the web page is primarily meant to be viewed on desktops with mobile adaptations coming soon. The json files provided are in a folder title data under the src folder. The webpage can work with other json files and not just oladipo.json and miamiHeat.json. Currently the data is passed through the url as a parameter through an encoding. The data is then decoded. In the future, the json file will then be fetched or loaded into the profile component. Right now that file path is manually imported.