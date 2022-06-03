# Gramody Task 
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/b1b986570c974552aadd?action=collection%2Fimport)
## <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" width="32" height="32"> Getting Started
To get a local copy up and running follow these simple steps.
### Prerequisites
In order to get a copy of the project you will require you to have Node.js (v14+) and the NPM package manager installed. If you don't have it, you can download the latest version of Node.js from the [official website](https://nodejs.org/en/download/) which also installs the NPM package manager by default.
### Installation
- Open the terminal in the folder in which you wish to clone the repository and enter the following command:
``` 
git clone https://github.com/prasoonsoni/Gramoday-Task.git
cd Gramoday-Task
```
- Install all the NPM packages:
```
npm i
```
- Install Dev Dependencies
```
npm i -D nodemon
```
> **Note that you will have to add your own `.env` and file at the root directory and add your own environment variables.**

- Create `.env` file at the root directory and add the following content to it.
```
MONGO_URI = mongodb+srv://prasoon:prasoon123@data.a8czv.mongodb.net/data
```
### BASE_URL = ``` http://localhost:3000 ```

### Routes
#### 1. createreport [POST Request]
- URL = ```BASE_URL/reports```
- Data to send in body of request
```json
      {
        "reportDetails": {
            "userID": "userID",
            "marketID": "marketID",
            "marketName": "marketName",
            "cmdtyID": "cmdtyID",
            "cmdtyName": "cmdtyName",
            "priceUnit": "priceUnit",
            "convFctr": "convFctr",
            "price": "price"
        }
      }
```
- Response 
```json
{
    "status": "status",
    "reportID": "reportID"
}
```
- Example Body
```json
{
    "reportDetails": {
        "userID": "user-1",
        "marketID": "market-1",
        "marketName": "Vashi Navi Mumbai",
        "cmdtyID": "cmdty-1",
        "cmdtyName": "Potato",
        "priceUnit": "Pack",
        "convFctr": 50,
        "price": 700
    }
}
```
```json
{
    "reportDetails": {
        "userID": "user-2",
        "marketID": "market-1",
        "marketName": "Vashi Navi Mumbai",
        "cmdtyID": "cmdty-1",
        "cmdtyName": "Potato",
        "priceUnit": "Quintal",
        "convFctr": 100,
        "price": 1600
    }
}
```
- Example Response
```json
{
    "status": "success",
    "reportID": "5ec6a570-e348-11ec-887f-317043d1bb44"
}
```
#### 2. getaggregatedreport [GET Request]
- URL = ```BASE_URL/reports?reportID=reportID```
- Example Request URL = ```BASE_URL/reports?reportID=5ec6a570-e348-11ec-887f-317043d1bb44```
- Example Response
```json
{
    "_id": "5ec6a570-e348-11ec-887f-317043d1bb44",
    "cmdtyName": "Potato",
    "cmdtyID": "cmdty-1",
    "marketID": "market-1",
    "marketName": "Vashi Navi Mumbai",
    "users": [
        "user-1",
        "user-2"
    ],
    "timestamp": 1654266666228,
    "priceUnit": "Kg",
    "price": 15
}
```
### API Tests
## ```POST /reports```
#### 1. When Data sent in Body is correct. marketID and cmdtyID is already present same reportID will be assigned to the report.

Body
```json
{
    "reportDetails": {
        "userID": "user-1",
        "marketID": "market-1",
        "marketName": "Vashi Navi Mumbai",
        "cmdtyID": "cmdty-1",
        "cmdtyName": "Potato",
        "priceUnit": "Pack",
        "convFctr": 50,
        "price": 700
    }
}
```
Response
```json
{
    "status": "success",
    "reportID": "5ec6a570-e348-11ec-887f-317043d1bb44"
}
```
#### 2. When Data sent in Body is correct. marketID and cmdtyID is not present new reportID will be assigned to the report.

Body
```json
{
    "reportDetails": {
        "userID": "user-1",
        "marketID": "market-2",
        "marketName": "Vashi Navi Mumbai",
        "cmdtyID": "cmdty-2",
        "cmdtyName": "Potato",
        "priceUnit": "Pack",
        "convFctr": 50,
        "price": 700
    }
}
```
Response
```json
{
    "status": "success",
    "reportID": "5e82c830-e354-11ec-8da8-b9d83f7b60b6"
}
```
#### 3. When there is an error in request

Body
```json
{
    "repotDetails": {
        "userID": "user-1",
        "marketID": "market-1",
        "marketName": "Vashi Navi Mumbai",
        "cmdtyID": "cmdty-1",
        "cmdtyName": "Potato",
        "priceUnit": "Pack",
        "convFctr": 50,
        "price": 700
    }
}
```
Response
```json
{
    "status": "error",
    "message": "Some internal server error occured."
}
```
## ```GET /reports?reportID=yourReportID```
#### 1. When report with report ID exists
URL
```
http://localhost:3000/reports?reportID=5ec6a570-e348-11ec-887f-317043d1bb44
```
Response
```json
{
    "_id": "5ec6a570-e348-11ec-887f-317043d1bb44",
    "cmdtyName": "Potato",
    "cmdtyID": "cmdty-1",
    "marketID": "market-1",
    "marketName": "Vashi Navi Mumbai",
    "users": [
        "user-1",
        "user-2"
    ],
    "timestamp": 1654271479028,
    "priceUnit": "Kg",
    "price": 15
}
```
#### 2. When report does not exist with reportID
URL
```
http://localhost:3000/reports?reportID=5ec6a570-e348-11ec-887f-317043d1bb45
```
Response
```json
{
    "status": "error",
    "message": "No reports found."
}
```
