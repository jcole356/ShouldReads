class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      # TODO: this should be on the User model, not application controller
      add_book_shelves
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render json: {}
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private

    def user_params
      params.require(:user).permit(:username, :password)
    end
end
