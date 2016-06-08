class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
  end

  def create
    @project = current_user.projects.create!(project_params)
    if @project
      render :show
    end
  end

  def edit

  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render :show
    end
  end

  def destroy
    @project = Project.find(params[:id])
    if(@project.destroy)
      render :show
    end
  end

  private

  def project_params
    params.require(:project).permit(
      :title,
      :description,
      :manager_id
      )
  end
end
