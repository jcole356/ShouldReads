class Api::BookShelvesController < ApplicationController
  before_action :require_signed_in!

  def create
    @book_shelf = BookShelf.new(book_shelf_params)
    if @book_shelf.save
      render :show
    else
      render json: @book_shelf.errors, status: :unprocessable_entity
    end
  end

  def index
    @book_shelves = current_user.book_shelves.includes(:books)
    render :index
  end

  def show
    @book_shelf = BookShelf.find(params[:id])
    render :show
  end

  def destroy
    @book_shelf = BookShelf.find(params[:id])
    @book_shelf.destroy
    render json: {}
  end

  private

    def book_shelf_params
      params.require(:book_shelf).permit(:title, :owner_id)
    end
end
