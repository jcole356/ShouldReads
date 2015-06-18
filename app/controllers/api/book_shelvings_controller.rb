class Api::BookShelvingsController < ApplicationController
  def create
    @book_shelving = BookShelving.create(book_shelving_params)
    if @book_shelving.save
      render :show
    else
      render json: @book_shelving.errors, status: :unprocessable_entity
    end
  end

  # Pretty sure this isn't doing anything
  # def show
  #   @book_shelving = BookShelving.find(params[:id])
  #   render :show
  # end

  def index
    @book_shelvings = current_user.book_shelvings
    render :index
  end

  def destroy
    @book_shelving = BookShelving.find(params[:id])
    @book_shelving.destroy
    render json: {}
  end

  private

    def book_shelving_params
      params.require(:book_shelving).permit(:shelf_id, :book_id)
    end
end
