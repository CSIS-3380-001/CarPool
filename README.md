# Batmobile sharing
### CSIS-3380 final-project

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