class Api::TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def show
    @task = Task.find_by(params[:task][:id])
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
    @task = Task.find_by(task_params)
  end

  def destroy
    @task = Task.find_by(task_params)
  end
end
