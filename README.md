# Shop Project Full

This is a Node.js/Express REST API for managing a shop system, including categories, customers, orders, order details, and products.

## Project Structure

- `app.js`: Main application entry point
- `package.json`: Project metadata and dependencies
- `config/`: Database configuration
- `controllers/`: Business logic for each resource
- `models/`: Database models for each resource
- `routes/`: API route definitions for each resource

## Setup

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd shop_project_full
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure your environment variables in a `.env` file.
4. Start the application:
   ```sh
   npm start
   ```

## Scripts
- `npm start`: Start the server
- `npm run dev`: Start the server with nodemon (if configured)

## Notes
- Do not commit sensitive files or folders such as `node_modules`, `.env`, `build`, or IDE settings. See `.gitignore` for details.

## License
Specify your license here.
