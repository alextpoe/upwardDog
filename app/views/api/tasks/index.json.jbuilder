
json.array! @tasks do |task|
  json.title task.title
  json.description task.description
  json.completed task.completed
end
