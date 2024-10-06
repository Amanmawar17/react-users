# User Management Application

## Overview

This React-based application allows users to manage a list of users fetched from the JSONPlaceholder API. It includes functionalities for creating, updating, and deleting users, with validation and toast notifications for success or failure feedback.

## Features

- **User List**: Display a table of users with edit and delete options.
- **Create User**: Add a new user with a form and validation.
- **Update User**: Edit existing user data using a pre-filled form.
- **Delete User**: Remove a user with a confirmation modal.
- **Form Validation**: Uses Zod for schema validation.
- **Toast Notifications**: Displays notifications for all API interactions.
- **Responsive Design**: The UI adapts for both desktop and mobile views.

## Folder Structure

```bash
src/
├── api/               # API interaction functions for user management
│   ├── createUser.ts  # Function to create a user with toast notifications
│   ├── deleteUser.ts  # Function to delete a user with confirmation and toast
│   ├── updateUser.ts  # Function to update user details
│   └── fetchUsers.ts  # Function to fetch all users and display them
├── components/        # Reusable UI components
│   ├── UserForm.tsx   # Form component for creating and updating users
│   ├── DeleteModal.tsx# Modal for confirming user deletion
│   └── Navbar.tsx     # Navbar component for navigation
├── pages/             # Pages for displaying users and their details
│   ├── UserList.tsx   # Page to display the list of users
│   └── UserDetails.tsx# Page to display detailed information about a user
├── schema/            # Zod schemas for form validation
│   ├── types.ts       # Type definitions for user data
│   └── userSchema.ts  # Zod schema for validating user forms
├── utils/             # Utility functions
│   └── mappingUserData.ts # Function to map user data into form values
└── App.tsx            # Main application component with routes and navbar
```


## Table of Contents
- [Usage](#usage)
  - [Fetch Users](#fetch-users)
  - [Create User](#create-user)
  - [Update User](#update-user)
  - [Delete User](#delete-user)
  - [Validation Rules](#validation-rules)
- [Deployment](#deployment)
- [License](#license)

## Usage

### Fetch Users
- Navigate to the homepage to see a list of users displayed in a table format.
- Each row provides basic user information.

### Create User
- Click the "Add User" button to open the form.
- Fill out the required fields and submit to add a new user.
- A toast notification will appear upon success or failure.

### Update User
- Click the "Edit" button next to a user to modify their details.
- The modal will open with the user's information pre-filled.
- Submit the updated form to save the changes.

### Delete User
- Click the "Delete" button next to a user to open the confirmation modal.
- Confirm the action to remove the user from the list.

### Validation Rules
- **Name**: Required, minimum 3 characters.
- **Email**: Required, must be in a valid email format.
- **Phone**: Required, must be a valid phone number.
- **Username**: Auto-filled as "USER-name" and non-editable.
- **Address (Street, City)**: Required.
- **Company Name**: Optional, must be at least 3 characters if provided.
- **Website**: Optional, but must be a valid URL if provided.

## Deployment
To deploy the application, follow these steps:

1. Push your code to GitHub:
    ```bash
    git push origin main
    ```

2. Deploy the app using a service like Vercel or Netlify by linking your GitHub repository.

## License
This project is open-source and available under the MIT License.