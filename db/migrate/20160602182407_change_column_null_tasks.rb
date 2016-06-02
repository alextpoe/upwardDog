class ChangeColumnNullTasks < ActiveRecord::Migration
  def change
    change_column_null(:tasks, :description, true)
    change_column_null(:tasks, :manager_id, true)
    change_column_null(:tasks, :project_id, true)
  end
end
