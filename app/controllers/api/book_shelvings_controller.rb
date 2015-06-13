class Api::BookShelvingsController < ApplicationController
  def create
    @book_shelving = BookShelving.create(book_shelving_params)
    if @book_shelving.save
      render :show
    else
      render json: @book_shelf.errors, status: :unprocessable_entity
    end
  end

  def show
    @book_shelving = BookShelving.find(params[:id])
    render :show
  end

  def destroy
    @book_shelving = BookShelving.find(params[:id])
    @book_shelving.destroy
  end

  private

    def book_shelving_params
      params.require(:book_shelving).permit(:shelf_id, :book_id)
    end
end
