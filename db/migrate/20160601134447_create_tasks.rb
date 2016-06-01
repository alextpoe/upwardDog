class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description, null: false
      t.integer :manager_id, null: false
      t.integer :assignee_id, null: false
      t.integer :project_id, null: false
      t.boolean :completed, null: false, default: false
      t.timestamps null: false
    end
    add_index :tasks, :manager_id
    add_index :tasks, :assignee_id
    add_index :tasks, :project_id
  end
end
