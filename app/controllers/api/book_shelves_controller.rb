class Api::BookShelvesController < ApplicationController
  def create
    @book_shelf = BookShelf.new(book_shelf_params)
    if @book_shelf.save
      render :index
    else
      render json: @book_shelf.errors, status: :unprocessable_entit
    end
  end

  def index
    @book_shelves = BookShelf.all
    render :index
  end

  def destroy
    @book_shelf = Bookshelf.find(params[:id])
    @book_shelf.destroy
  end

  private

    def book_shelf_params
      params.require(:book_shelf).permit(:title)
    end
end
