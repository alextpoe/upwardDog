class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render(
        json: {
          base: ["Incorrect username/password"]
        },
        status: 401
      )
    end
  end

  def omni_auth
    @user = User.find_or_create_from_auth_hash(auth_hash)
    @user.projects.create!(title: "My Tasks") if @user.projects.empty?
    login(@user)
    redirect_to root_url
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(
        json: {
          base: ["Nobody is signed in!"]
        },
        status: 404
      )
    end
  end

  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      render json: {}
    end
  end
  private

  def auth_hash
    request.env['omniauth.auth']
  end
end
