# UpwardDog

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

UpwardDog is a web application inspired by Asana that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an Asana inspired site: Task creation, saving, editing, organized by project and by team member
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README

## Product Goals and Priorities

UpwardDog will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Create, read, edit, and delete tasks (MVP)
- [ ] Organize tasks by Projects (MVP)
- [ ] Assign team members to tasks and projects (MVP)
- [ ] Chat forum for tasks and projects (not necessary but expected)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Tasks Model, API, and basic APIUtil (1.5 days)

**Objective:** Tasks can be created, read, edited and destroyed through
the API.

- [ ] create `Task` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`TasksController`)
- [ ] jBuilder views for tasks
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Tasks can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each task component, building out the flux loop as needed.
  - [ ] `TasksIndex`
  - [ ] `TaskIndexItem`
  - [ ] `TaskForm`
- [ ] save Tasks to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Projects (1 day)

**Objective:** Tasks belong to Projects, and can be viewed by Project.

- [ ] create `Project` model
- build out API, Flux loop, and components for:
  - [ ] Project CRUD
  - [ ] adding tasks requires a project or is automatically assigned to the To-Do project
  - [ ] move tasks from project to project
  - [ ] viewing tasks by different user
- Use CSS to style new views

Phase 3 adds organization to the Tasks. Tasks belong to a Project,
which has its own `Index` view.

### Phase 6: Posts Conversation (1.5 days)

**Objective:** Team members can leave posts on tasks or projects and can be created, read, and destroyed

- [ ] create `Post` model
- build out API, Flux loop, and components for Posts
- [ ] jBuilder views for posts


### Phase 7: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Search through tasks
- [ ] Set calendar reminders
- [ ] File upload
- [ ] Audio attachment
- [ ] Likes

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
# downward-facing-dog
