<h1 align="center">Simple Express.js Project</h1>

<p align="center">
  <strong>RESTful API built with Express.js framework that provides CRUD operations on Hospitals and Appointments.</strong>
  <br>
  This project was created as part of a software development practice course at a university.
</p>

## Installation

To get started with this project, you need to:

1. Clone this repository to your local machine
2. Install dependencies by running the following command: `npm install`
3. Create a `.env` file based on the example provided in `.env.example` file
4. Start the server with the following command: `npm start` 
Alternatively, if you want to run it in development mode, use: `npm run dev`


## API Endpoints

### Hospitals

- `GET /api/v1/hospitals`: Get all hospitals
- `GET /api/v1/hospitals/:id`: Get a hospital by id
- `POST /api/v1/hospitals`: Create a new hospital
- `PUT /api/v1/hospitals/:id`: Update a hospital by id
- `DELETE /api/v1/hospitals/:id`: Delete a hospital by id


### Vaccination Centers

- `GET /api/v1/hospitals/vacCenters`: Get all vaccination centers


### Appointments

- `GET /api/v1/appointments`: Get all appointments
- `GET /api/v1/appointments/:id`: Get an appointment by id
- `POST /api/v1/appointments`: Create a new appointment
- `PUT /api/v1/appointments/:id`: Update an appointment by id
- `DELETE /api/v1/appointments/:id`: Delete an appointment by id


### User Authentication

- `POST /api/v1/auth/register`: Register a new user
- `POST /api/v1/auth/login`: Login a user
- `GET /api/v1/auth/me`: Get current logged in user
- `GET /api/v1/auth/logout`: Logout current user

This API is protected by authentication middleware that requires a valid JWT token and user's role to access certain routes.


## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


