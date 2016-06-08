json.array! @tasks do |task|
  json.title task.title
  json.description task.description
  json.completed task.completed
  json.assignee_id task.assignee_id
  json.project_id task.project_id
  json.id task.id
end
