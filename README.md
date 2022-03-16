# Messages API
## _Kode Camp 2022_





To make use of the api, register by using the post method
URL can be the hosted api url or local environment
URL/api/register
- ✨Specify body of request as✨
{
    "name":"your-name",
    "age":"90",
    "password":"your-password"
}
- also you can specify message upon registration 
    {
    "name":"your-name",
    "age":"90",
    "password":"your-password",
    "message": "your-message"
}

- ✨To Update Your Message ✨
- specify your name, password, new message
    {
    "name":"your-name",
    "password":"your-message",
    "message":"your new message"
    }

## Features

- Specify Database in Environment Variable, .env file, using DATABASE

## Installation

Messages Api requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd into folder
npm i // yarn install
npm start-dev or yarn start-dev -development mode
```

For production environments...

```sh
npm start or yarn start - production mode
```




## Development





Verify the deployment by navigating to your server address in
your preferred browser.

```sh
localhost:8000/api
```

## License

**Free Software, Yeah! By Victor Maamaa**
