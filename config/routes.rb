Rails.application.routes.draw do
  # root to: 'sessions#new'
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json}  do
    resources :books, only: [:create, :destroy, :index, :show]
  end
end
