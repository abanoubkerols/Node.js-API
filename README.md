# Node.js-API
Coding Exercise with NODE.js


## The main URL for show data live in JSON is :  

## [link live](https://node-js-api-4.onrender.com/users)


## The main URL for show front end is :  

## [link live](https://abanoubkerols.github.io/Node.js-API/)


## To pull docker Container copy this command 
```bash
docker pull 1222623186/abanoubkerols_nodetask0.0.1
```


# PROJECT FEATURES

- Filter Users: Filter users based on (e.g., age, active status).
-  Data Aggregation: Calculate the average age of users, and count the number of active and inactive users.
- Sort Users: Sort the users by their last login date.
- Search Functionality: Implement a simple search functionality to - find users by name 
- API Endpoint:  an endpoint that accepts filter parameters and returns the filtered list of users.


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd your-project-name
```

Install dependencies

```bash
  npm install
```

```bash
  npm start
```



## The main URL for the API is 




```http
http://localhost:3000/users
```


# **API Reference**

## **User search by name**
### the data will retrun is sorted by default

```http
GET users/
```

| QUERY            | Type       | Required |
| :--------------- | :------- | :------- |
| `name`           | `string`     | yes       |


### Example request url:

```http
http://localhost:3000/users?name=john Doe
```


## **get active users**

```http
GET users/
```

| QUERY        | Type      | Required |
| :--------------- | :------- |  :------- |
| `active`        | `string`         |  yes      |


### Example request url:

```http
http://localhost:3000/users?active=true
```
## **get get inactive users**

```http
GET users/
``` 

### Example request url:

```http
http://localhost:3000/users?active=false
```


## **get age of user**

```http
GET users/
```

| QUERY        | Type      | Required |
| :--------------- | :------- |  :------- |
| `age`        | `number`         |  yes      |


### Example request url:

```http
http://localhost:3000/users?age=28
```