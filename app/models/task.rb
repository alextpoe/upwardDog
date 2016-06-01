class Task < ActiveRecord::Base
  validates :description, :manager_id, :assignee_id, :project_id, presence: true
  validates :completed, :inclusion: { in: [true, false] }

  belongs_to (
    :assignee,
    class_name: "User",
    foreign_key: :assignee_id,
    primary_key: :id
  )

  belongs_to (
    :manager,
    class_name: "User",
    foreign_key: :manager_id,
    primary_key: :id
  )

  belongs_to (
    :project,
    class_name: "Project",
    foreign_key: :project_id,
    primary_key: :id
  )
end
