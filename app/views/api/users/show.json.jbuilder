# json.extract! @user, :id, :username, :projects


json.id @user.id
json.username @user.username
json.projects @user.projects do |project|
  json.title project.title
  json.description project.description
  json.tasks project.tasks
  json.project_id project.id
end
