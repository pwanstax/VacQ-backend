## Simple Express.js Project

This project is a RESTful API built with Express.js framework that provides CRUD operations on Hospitals and Appointments. It was created as part of a software development practice course at a university.

## Installation

To get started with this project, you need to:

- Clone this repository to your local machine
- Install dependencies by running `npm install` in the root directory of the project
- Create a `.env` file based on the example provided in `.env.example` file
- Start the server with `npm start` or `npm run dev` if you want to run it in development mode

## Usage

This API supports the following endpoints:

- `/api/v1/hospitals` - GET all hospitals, POST a new hospital
- `/api/v1/hospitals/:id` - GET a hospital by id, PUT update a hospital by id, DELETE a hospital by id
- `/api/v1/hospitals/vacCenters` - GET all vaccination centers
- `/api/v1/hospitals/:hospitalId/appointments` - GET all appointments for a specific hospital, POST a new appointment for that hospital
- `/api/v1/appointments` - GET all appointments, POST a new appointment
- `/api/v1/appointments/:id` - GET an appointment by id, PUT update an appointment by id, DELETE an appointment by id
- `/api/v1/auth/register` - POST register a new user
- `/api/v1/auth/login` - POST login a user
- `/api/v1/auth/me` - GET current logged in user
- `/api/v1/auth/logout` - GET logout current user

This API is protected by authentication middleware that requires a valid JWT token and user's role to access certain routes.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
