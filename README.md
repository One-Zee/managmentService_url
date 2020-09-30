# Managment Service_url

## Description

Management Service is one the services that are used for URL Shortening , another service is Redirection Service  : https://github.com/One-Zee/redirectionService_url .Management Service will have job of creating and deleting shorter versions of original url.MYSQL database will be used as persistance layer and RabbitMQ will be used for transferring messages between services.

## Installation

`npm install`

## Start

Run server with:
`npm run start`

or using nodemon for development run:
`npm run dev`

Development is running at `http://localhost:4444` by default.

## Docker

To run both services with DOCKER checkout:
- https://github.com/One-Zee/UrlShortening

API endpoints:

- Creation_route:
  - `http://localhost:4444/routes/url/cr_shortUrl`
- Deletion_route:
  - `http://localhost:4444/routes/url/:id`
  
  
  Insert Url:

- POST method
- `http://localhost:4444/routes/url/cr_shortUrl`
- expects JSON object from body:

Request example:

  ```
  {
    "real_url":"https://www.nsoft.com/job-application/?job_id=7661"
  }
  ```
 Response example:
  
   ```
  {
    "id": 1,
    "real_url": "https://www.nsoft.com/job-application/?job_id=7661",
    "short_url": "http://localhost:4444/U80mNPgts"
  }
  ```
  
  Delete short_url:

- DELETE method
- `http://localhost:4444/routes/url/:id`
- expects short_url id in url params
- removes short_url using id : `http://localhost:4444/routes/url/1`
