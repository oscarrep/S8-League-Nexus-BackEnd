# League Nexus API

This is the backend API repository for the [League Nexus application](https://github.com/oscarrep/S8-League-Nexus). It provides database connectivity and CRUD operations for managing players and matches data in the League Nexus app.

## Project Overview

The League Nexus API serves as the data layer for the League Nexus application, handling all database operations and providing endpoints for the frontend to interact with the data.

## Functionalities

- **Database Connection**: Secure connection to MySQL database using Sequelize ORM
- **Player Management**: Create, read, update, and delete player data
- **Match Management**: Create, read, update, and delete match data
- **RESTful API**: Well-structured endpoints for frontend communication

## Technologies

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- CORS (Cross-Origin Resource Sharing)
- dotenv (Environment Variables)
- Postman
- Railway

## Requirements

- Node.js
- MySQL Server
- Visual Studio Code or similar IDE

## Installation Instructions

1. Clone the repository:
   ```
   git clone https://github.com/your-username/league-nexus-api.git
   cd league-nexus-api
   ```

2. Install dependencies:
   ```
   npm i express dotenv cors sequelize mysql2
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=league_nexus
   PORT=3000
   ```

4. Set up the database:
   ```
   npm run db:create
   npm run db:migrate
   ```

5. Start the server:
   ```
   npm start
   ```

## API Endpoints

### Players

- `GET /api/players` - Get all players
- `GET /api/players/:id` - Get a specific player
- `POST /api/players` - Create a new player
- `PUT /api/players/:id` - Update a player
- `DELETE /api/players/:id` - Delete a player

### Games

- `GET /api/games` - Get all matches
- `GET /api/games/:id` - Get a specific match
- `POST /api/games` - Create a new match
- `PUT /api/games/:id` - Update a match
- `DELETE /api/games/:id` - Delete a match

## Database Schema

### Player
- id (Primary Key)
- username
- name
- position
- age
- country
- city
- lat
- lon
- team
- team_short
- img

### Game
- id (Primary Key)
- title
- description
- start_date
- end_date
- league

## Development

For development purposes, you can run the server with nodemon:
```
nodemon dist/index.js
```

## License

Check out the Front End app here: `https://github.com/oscarrep/S8-League-Nexus`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
