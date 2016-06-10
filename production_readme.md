# upwardDog

[upwardDog live][heroku] **NB:** This should be a link to your production site

[heroku]: http://upward-dog.herokuapp.com

upwardDog is a full-stack web application inspired by Asana.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation


### Single-Page App w/ Authorization

upwardDog is a single-page app which means that all content is delivered onto a single static page.  This is accomplished through using React.js and the Flux architectural framework.  For security, upwardDog uses BCrypt in the Ruby on Rails backend in combination with the frontend.  In order to achieve security on the front end, upwardDog's root page listens to a `SessionStore`.  Whenever a potential user enters a page on the app, the root page decides whether to render content based on the "user" status of the potential user.  The app makes a call to `SessionStore.currentUser()` which checks to see if there is a current user and, if there is one, whether or not the session tokens match.  If the tokens match, the page is rendered.  The session token is assigned when the user logs in.  Upon sign up or log in, the username and password information is sent to the Ruby on Rails backend where the password is encrypted with BCrypt so that no actual password is stored in the database, which further enhances security.  Additionally, users may use Twitter to sign up or log in.

```ruby
class Api::SessionsController < ApplicationController
    def get_user
      if current_user
        render :current_user
      else
        render json: errors.full_messages
      end
    end
 end
  ```

### Tasks Rendering and Editing
  Currently, upwardDog supports tasks and projects.  The tasks are stored in a single table in the database which contains multiple columns, including columns for future features.  The columns are for `id`, `title`, `description`, `project_id`, `completed`, `assignee_id`, `manager_id`, `created_at`, and `updated_at`.  Tasks are retrieved from the database upon user log-in through an API call.  The API call takes the current user after log-in, moves through the user/projects join table (`project_user` table) and filters the tasks through the projects association.  These tasks are then held in the `TasksStore`.

  Tasks are rendered in the `TasksIndex` and `TasksEdit` components.  The `TasksIndex` component lists only the individual task titles and renders the individual tasks as subcomponents.  The `TasksEdit` component shows the `project_id`, `title` and `description` and all three fields are able to be edited.  As upwardDog continues to be developed, `manager_id` and `assignee_id` will be added to this field and users will be able to change who tasks are assigned to, who assigned the task, and users will also be able to filter comments by whether or not they are completed.

### Projects

Projects were implemented after tasks were completed.  Due to the organizational structure of upwardDog, this required a reorganization of the tasks to accommodate projects.  Projects began with a projects table and was joined with users in a join table, because projects have many users (employees) and users have many projects.   Because of the join table, projects can now be created through a user.  The projects table contains columns for `title`, `description`, `manager_id`.  
The React component structure is similar to that of tasks.  The `ProjectsIndex` is the index route and shows the project titles on the sidebar.  The main part of the page has a `ProjectsShow` that shows the title of the currently displayed project.  Projects can be edited through the `ProjectsEdit` component.


## Future Directions for the Project

I plan to continue with this project as I feel I have only scratched the surface of the possibilities.  Below are the features that I plan to implement.

### Teams

I plan to incorporate teams into upwardDog.  Individual users will belong to teams and teams will have many users.  The current user will be able to see the tasks of all the team members in a given project.  

### Comments

Users will be able to leave comments on tasks and projects.  

### Due Dates

Tasks and projects will be assigned due dates.

### Notifications

When tasks are completed, when comments are posted, and when due dates are upcoming, the user will receive a notification.
