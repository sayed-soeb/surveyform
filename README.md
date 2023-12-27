Certainly! Here's a simplified version of the `README.md` file:

```markdown
# MERN Project

## Prerequisites

Make sure you have Node.js and MongoDB installed on your machine.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sayed-soeb/surveyform.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-mern-project
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=3001
MONGODB_URI=mongodb://localhost:27017/your-database-name
```

Adjust the values according to your preferences and local setup.

## Running the Application

1. **Start the MongoDB server:**

   ```bash
   mongod
   ```

2. **Start the backend server:**

   ```bash
   npm run server
   ```

3. **Start the frontend development server:**

   ```bash
   npm run client
   ```

   Open [http://localhost:3000](http://localhost:3000) to access the MERN application.

## Build for Production

To build the project for production:

```bash
npm run build
```

This will create a `build` folder in the project directory containing the optimized production build.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make changes and commit: `git commit -m "Description of changes"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## Issues

If you encounter issues or have suggestions, open an issue on the GitHub repository.

Happy coding!