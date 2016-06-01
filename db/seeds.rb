# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create({ username: "apoe", password: "password"})
User.create({ username: "downward_dog", password: "password"})
User.create({ username: "happy", password: "password"})
User.create({ username: "asana", password: "password"})


Task.create({
  title: "Task1",
  description: "Complete this task.",
  manager_id: 1,
  assignee_id: 2,
  project_id: 1,
  completed: false})

Task.create({
  title: "Task2",
  description: "Complete this task as well.",
  manager_id: 1,
  assignee_id: 2,
  project_id: 1,
  completed: false})
