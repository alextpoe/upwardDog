class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      @user.projects.create!(title: "My Tasks")
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
