class Api::TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def show
    @task = Task.find(params[:id])
  end

  def new
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render :index
    end
  end

  def edit

  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render :index
    end
  end

  def destroy
    @task = Task.find(params[:id])
    if(@task.destroy)
      render :show
    end
  end

  private

  def task_params
    params.require(:task).permit(
      :title,
      :description,
      :manager_id,
      :assignee_id,
      :project_id,
      :completed
      )
  end
end
