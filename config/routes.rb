Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create] do
      resources :tasks
    end
    resource :session, only: [:create, :destroy, :show, :omni_auth]
    get '/auth/:provider/callback', to: 'sessions#omni_auth'
  end
end
