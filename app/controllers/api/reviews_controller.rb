class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def index
    @reviews = Review.all

    render :index
  end

  def show
    @review = Review.find(params[:id])

    render :show
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      render :show
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy()
    render json: {}
  end

  private

    def review_params
      params.require(:review).permit(
        :author_id, :book_id, :rating, :title, :body
      )
    end
end
