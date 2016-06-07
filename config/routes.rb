Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create] do
      # resources :projects do
        resources :tasks
      # end
    end
    resource :session, only: [:create, :destroy, :show, :omni_auth]
  end
  get '/auth/:provider/callback', to: 'api/sessions#omni_auth'
end
