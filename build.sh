#!/bin/bash

# Run the build command for your React app (assuming you are using create-react-app)
cd client && npm i && npm run build
cd ../server && npm i && npm start

# If you have other build steps or tasks, you can add them here.
# For example, if you need to install dependencies before building:
# npm install

# If you have other build scripts for backend services, you can include them here too.
# For example, if you have a backend server in a different directory:
# cd path/to/backend
# npm run build

# This script will be executed in the project's root directory, so you can use relative paths.

# Exit the script with a successful status code (0)
exit 0
