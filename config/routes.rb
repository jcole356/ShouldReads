Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users, only: [:new, :create, :update]
  resources :users, only: [:show], defaults: {format: :json}
  resource :session, only: [:new, :create, :destroy]
  namespace :api, defaults: {format: :json}  do
    get 'book/:id/reviews', :to => 'books#reviews'
    resources :books, only: [:create, :destroy, :show]
    resources :book_shelves, only: [:create, :index, :show, :destroy]
    resources :book_shelvings, only: [:create, :index, :show, :destroy]
    resources :reviews, only: [:create, :index, :destroy, :update, :show]
  end
end
