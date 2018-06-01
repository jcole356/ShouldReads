class Api::ReviewsController < ApplicationController
  before_action :require_signed_in!

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

  # TODO: consider removing
  def show
    render :show
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      render json: {}
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
