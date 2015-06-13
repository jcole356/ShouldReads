class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def edit

  end

  def show
    @review = Review.find(params[:id])

    render :show
  end

  def update

  end

  def destroy

  end

  private

    def review_params
      params.require(:review).permit(
        :author_id, :book_id, :rating, :title, :body
      )
    end
end
