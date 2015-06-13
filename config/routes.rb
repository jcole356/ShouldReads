Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resources :users, only: [:show], defaults: {format: :json}

  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json}  do
    resources :books, only: [:create, :destroy, :index, :show]
    resources :book_shelves, only: [:create, :index, :show, :destroy]
    resources :book_shelvings, only: [:create, :show, :destroy]
    resources :reviews, only: [:create, :index, :show, :destroy, :edit, :update]
  end
end
