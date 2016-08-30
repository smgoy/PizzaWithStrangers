Rails.application.routes.draw do
  root to: 'static_pages#index'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [ :create, :destroy ]
    resources :users, only: [ :create ]
  end
end
