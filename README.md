# Subscription Tracker
Application to help users track their subscriptions. It provides a web interface to manage subscription details, and sends email notifications for upcoming renewal payments.

## Features

- User authentication (signup/login)
- Create, read, update, and delete subscriptions
- Email notifications for subscription renewals

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd subscription-tracker
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Configuration

Create a `.env.development.local` file in the root directory and add the necessary environment variables. You can use `.env.development.local` as a template.

### Running the Application

To run the application in development mode (with automatic restarts), use:

```sh
npm run dev
```

To run the application in production mode, use:

```sh
npm start
```

The application will be available at `http://localhost:3000` (or the port specified in your environment variables).
