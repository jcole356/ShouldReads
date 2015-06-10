Rails.application.routes.draw do
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json}  do
    resources :books, only: [:create, :destroy, :index, :show]
  end

  root to: 'sessions#new'
end
