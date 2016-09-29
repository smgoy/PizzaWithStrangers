Rails.application.routes.draw do
  root to: 'static_pages#index'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [ :create, :destroy ]
    resources :users, only: [ :create, :update ]
    resources :attendances, only: [ :create, :destroy ]
    resources :cities, only: [ :index, :show ] do
      resources :events, only: [ :index ]
    end
    resources :events, only: [ :create, :update, :destroy, :user_events ]
    get 'events/user_events', :to => 'events#user_events'
    get 'attendances/event_attendees/:id', :to => 'attendances#event_attendees'
  end
end
