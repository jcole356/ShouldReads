class Api::BooksController < ApplicationController
  before_action :require_signed_in!

  def create
    title = book_params['title']
    @book = Book.find_by_title(title)
    if @book
      render :show
    else
      @book = Book.new(book_params)
      if @book.save
        render :show
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end
  end

  def show
    @book = Book.find(params[:id])
    render :show
  end

  private

    def book_params
      params.require(:book).permit(:title, :author, :cover_image_url,
        :synopsis, :number_of_pages)
    end
end
