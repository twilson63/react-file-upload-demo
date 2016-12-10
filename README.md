# Simple React File Upload Demo

This is a simple react file upload demo project

The project uses the file reader and dataURL and the
fetch module to grab an image via the file input button
and then read the image using the file reader which will
put it in a data url string. Then uses the fetch module
to post a json object with the file string to a mock json
rest server.

Tools

React version 15.4.1

To run the api

```
cd api
yarn
npm start
```

To run the web demo

```
cd web
yarn
npm start
```
