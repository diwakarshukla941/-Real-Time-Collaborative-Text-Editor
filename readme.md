# Real-Time Collaborative Text Editor

## Overview

This project is a real-time collaborative text editor built with Node.js. It enables multiple users to edit the same document simultaneously with updates synchronized in real-time using WebSockets. The frontend (located in the `client` directory) and the backend server (defined in `server.js`) work together to provide seamless collaboration. The project dependencies are managed via npm.

## Features

- Real-time collaboration with WebSocket-based communication.
- Backend server setup using Node.js.
- Client-side frontend application.
- Dependency management with npm.

## Prerequisites

Before installing and running this project, ensure you have the following installed:

- Node.js (version 14 or higher recommended)
- npm (Node Package Manager, comes with Node.js)
- Git

## Installation

Follow these steps to install and run the project on your local machine:

1. **Clone the repository**

   ```bash
   git clone https://github.com/diwakarshukla941/-Real-Time-Collaborative-Text-Editor.git
   cd pro
   ```

2. **Install dependencies** Navigate to the project directory and install both backend and client dependencies:

   ```bash
   npm install express socket.io cors ws
   cd client
   npm install react react-dom
   cd ..
   ```

3. **Run the server** Start the backend server:

   ```bash
   node server.js
   ```

4. **Run the client** If a separate setup is required for the client (e.g., running a development server), navigate to the `client` directory and run:

   ```bash
   npm start
   ```

## Usage

Start the application and open your browser to the specified address (e.g., `http://localhost:3000`) to interact with the application.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software in compliance with the terms of the license. See the LICENSE file for more details.

