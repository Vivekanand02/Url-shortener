# URL Shortener

A full-stack URL Shortener built with **Spring Boot**, **React**, and
**PostgreSQL**. It provides a simple interface for converting long URLs
into shorter links.

## Tech Stack

-   **Backend:** Java, Spring Boot
-   **Frontend:** React
-   **Database:** PostgreSQL
-   **Build tool:** Maven
-   **Frontend tooling:** npm

## Project Structure

``` text
Url Shortener/
├── Backend/    # Spring Boot application
└── Frontend/   # React application
```

## Prerequisites

Install the following before running the project:

-   Java (a version compatible with the backend configuration)
-   Node.js and npm
-   PostgreSQL
-   Git (optional, for cloning the repository)

## Run the Project

### 1. Configure the database

Make sure PostgreSQL is running and create/configure the database and
credentials expected by the backend. Check the backend configuration in
`Backend/src/main/resources/application.properties` (or the
corresponding configuration file) and update it for your local
environment.

### 2. Start the backend

Open a terminal in the project root and run:

``` powershell
cd Backend
.\mvnw.cmd spring-boot:run
```

The backend runs on `http://localhost:8080` unless configured otherwise.

### 3. Start the frontend

Open a second terminal in the project root and run:

``` powershell
cd Frontend
npm install
npm run dev
```

Open the local URL printed by Vite in the terminal (commonly
`http://localhost:5173`).

## Run Both with One Command (Optional)

If you have configured a root-level `package.json` with `concurrently`,
run this from the project root:

``` bash
npm run dev
```

The root scripts must start the Spring Boot backend and the React
frontend. This launcher is separate from the `package.json` inside
`Frontend`.

## API

The frontend communicates with the Spring Boot backend. The backend URL
used by the frontend should match the backend's configured address and
port.

## Notes

-   Do not commit database passwords, API secrets, or other local
    credentials.
-   If the frontend cannot reach the backend, check the API URL and
    backend CORS configuration.

## License

No license has been specified yet.
