json.array! @projects do |project|
  json.title project.title
  json.description project.description
  json.users project.users
  json.tasks project.tasks
  json.id project.id
end
