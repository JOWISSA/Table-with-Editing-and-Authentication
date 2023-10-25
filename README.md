Table with Editing and Authentication

DEMO[https://jowissa.github.io/Table-with-Editing-and-Authentication/]

This project implements a user authentication system and a dynamic table with editing functionality. Users can log in using credentials, and upon successful authentication, they can access a table displaying data fetched from the API. The table allows users to edit the data interactively.

Technologies Used:

    --Frontend: React, Redux, Redux Toolkit, TypeScript.
    --Styling: SCSS.

Features

1. Login Page

    --The login page consists of two input fields: one for the username and another for the password.
    --There is a single predefined user in the database: Username: testuser, Password: testpassword123.
    --Successful login redirects the user to the table page.
    --Invalid login attempts will display appropriate error messages.

2. Table Page

    --The table page displays data fetched from the API: 
      https://technical-task-api.icapgroupgmbh.com/api/table/.
    --The table supports editing functionality for all fields.
    --Fields have validation based on backend rules.
    --Implements pagination, error handling, and loading indicators for a seamless user experience.
    --Additional features such as filtering, sorting, and searching can be implemented as desired.
