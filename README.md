# CarPool

### CSIS-3380 final-project
(Live)[https://final-project-t6mw.onrender.com/]

## How to use
1. Clone the repo
    `git clone https://github.com/CSIS-3380-001/final-project`

### Backend
1. Install server dependencies
    `cd ./server && npm i`
2. Create `.env` file inside `./server` directory ( `./server/.env`)
3. Add following lines in the file
    ```
    PORT=8081

    DB_URI="mongodb+srv://root:VRPd3ICLK6juCQCa@cluster0.dg4ocjz.mongodb.net/?retryWrites=true&w=majority"
    ```
4. Start server using `npm start`

### Frontend
1. Install client dependencies
    `cd ./client && npm i`
2. Start server usign `npm start`

### How to deploy the client and server together on the render.com
1. Make sure both the client and server are in the same repository. Just like this one. 
```
/
 - client
 - server
```
2. Now make sure all the API calls from the client redirects to the server instance. For this, we will use a service where we will mention generic GET, POST, PUT and DELETE methods. Same like we have in this repo `/client/src/services/api.js`

The main benefit of using this service is that we can redirect all the client side requests to any server endpoint. All we need to do is just import this service in our code and use this service to hit the API. 
```
import API from 'services/api.js'   # Import the service

API.post()                          # Use the service 
```
 
3. On the server side, all we need to do is to make the build directory of the client is the root of the public directory. 
```
// Routes
app.use(router);
app.use('/cars', carRouter);

// Make sure its after all the routes imported i.e the last route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
```

4. We will build the project and deploy it on render.com. Check `./build.sh` for more details.