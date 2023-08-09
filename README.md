# Blogging Platform

Developed in July 2023, this Blogging Platform is a modern web application built with React, backed by a PostgreSQL database and utilizes Sequelize for ORM. This platform provides a robust system for bloggers, giving them the ability to manage and control their content seamlessly.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **PostgreSQL**: Powerful, open-source object-relational database system.
- **Sequelize**: Promise-based Node.js ORM for Postgres.

## Features

1. **CRUD Functionality**: Enables users to create, read, update, and delete blog posts with ease.

2. **Database Relationships**: Leveraging Sequelize, the platform establishes a solid relationship between Users, Posts, and Comments.

3. **User Authentication and Authorization**:
   - Implemented user authentication, ensuring the identity of users.
   - Authorization in place to protect routes, granting access only to authenticated users for certain CRUD functionalities.

4. **Testing with Postman**: Extensive testing has been performed using Postman to validate the application's endpoints.

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Sequelize CLI (optional, for running migrations and seeds)

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/Hfear/BloggingPlatform.git)https://github.com/Hfear/BloggingPlatform.git]
