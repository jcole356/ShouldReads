Rails.application.routes.draw do
  resources :users
  resource :session
  root to: 'sessions#new'
end
