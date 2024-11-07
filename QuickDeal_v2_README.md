
# QuickDeal_v2

QuickDeal is a full-stack e-commerce application that provides functionalities for users to browse, purchase products, and manage orders. Built with the MERN stack (MongoDB, Express, React, and Node.js), it features both frontend and backend components, with state management using Redux Toolkit, pagination, and search functionality for an enhanced user experience.

## Features

- **User Authentication**: Allows users to create accounts, log in, and log out securely.
- **Product Management**: Users can view products, and admins can add, edit, or delete products.
- **Order Management**: Users can place orders, and admins can manage these orders.
- **File Uploads**: Support for product images and user profile uploads.
- **State Management**: Uses Redux Toolkit to handle global state effectively.
- **Pagination**: Implements pagination for product listings, providing a seamless browsing experience.
- **Search Functionality**: Enables users to search for products by name or category.

## Technologies Used

- **MongoDB**: Database to store user, product, and order information.
- **Express**: Backend framework for building the RESTful API.
- **React**: Frontend library to create a responsive and interactive user interface.
- **Node.js**: Server-side runtime to handle requests and data processing.
- **Redux Toolkit**: For efficient state management across the application.

## Project Structure

The project is organized into frontend and backend sections, each with distinct functionalities.

### Backend (Express & Node.js)

- **Configuration**: `config/Db.js` configures MongoDB connection.
- **Controllers**: API logic for handling requests, including:
  - `userController.js`: Manages user-related functionalities.
  - `productController.js`: Handles product management, including pagination and search.
  - `orderController.js`: Processes orders.
- **Middleware**: Contains authentication middleware.
- **Models**: Data models for users, products, and orders.
- **Routes**: Defines API endpoints for handling CRUD operations, pagination, and search functionality.
- **Utilities**: Additional helper functions, such as error handling.

### Frontend (React)

- **Components**: Reusable components for rendering product cards, order forms, pagination, and search.
- **Pages**: Main pages for different sections like Home, Product Detail, Login, and Checkout.
- **API Calls**: Integrates with the backend API for fetching, searching, and updating data.
- **State Management**: Utilizes Redux Toolkit for managing global state, such as user information, product lists, and order details.
- **Routing**: Uses React Router to navigate between pages.
- **Pagination**: Provides pagination controls for easy navigation through large product listings.
- **Search Bar**: Allows users to search for specific products.

## Installation

### Prerequisites

Ensure you have the following installed:
- **Node.js** (with npm)
- **MongoDB** (local instance or cloud service)

### Setup Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/QuickDeal_v2.git
   cd QuickDeal_v2
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Configure environment variables in `.env`:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React app:
     ```bash
     npm start
     ```

### Project Workflow

1. **Project Setup**: Set up the development environment and initialize the project.
2. **Backend Development**: Build a RESTful API with Node.js, Express, and MongoDB, including endpoints for search and pagination.
3. **Frontend Development**: Create a user-friendly interface using React.
4. **State Management with Redux Toolkit**: Implement Redux Toolkit for managing global state.
5. **Pagination and Search**: Add pagination controls and search functionality to improve user experience.
6. **Connecting Frontend and Backend**: Integrate the API with the React frontend to enable CRUD operations and real-time state updates.

### Usage

1. **User Authentication**: Sign up and log in to create a personalized session.
2. **Browse Products**: Users can view a paginated list of products.
3. **Search Products**: Search for products by name or category using the search bar.
4. **Manage Orders**: Place an order, view order details, and admins can manage all orders.
5. **File Uploads**: Add images for products and profile pictures for users.

## License

This project is licensed under the MIT License.
