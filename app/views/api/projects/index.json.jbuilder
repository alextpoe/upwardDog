json.array! @projects do |project|
  json.title project.title
  json.description project.description
  json.users project.users
  json.tasks project.tasks
  json.id project.id
end

# json.completed task.completed
# json.assignee_id task.assignee_id
