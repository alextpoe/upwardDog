class Project < ActiveRecord::Base
  validates :title, presence: true

  has_many :project_users
  has_many :users, through: :project_users
  has_many(
    :tasks,
    class_name: "Task",
    foreign_key: :project_id,
    primary_key: :id
  )
end
