Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create] do
      resources :projects do
        resources :tasks
      end
    end
    get '/auth/:provider/callback', to: 'sessions#create'
    resource :session, only: [:create, :destroy, :show]
  end
end
