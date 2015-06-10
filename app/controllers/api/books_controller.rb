class Api::BooksController < ApplicationController
  def create
    @book = Book.new(book_params)
    if @book.save
      render :show
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy!
    render :show
  end

  def index
    @books = Book.all
    render :index
  end

  def show
    @book = Book.find(params[:id])
    render :show
  end

  def book_params
    params.require(:book).permit(:title, :author, :cover_image_url, :synopsis, :number_of_pages)
  end
end
