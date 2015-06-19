class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :signed_in?, :already_reviewed?

  private

    def add_book_shelves
      BookShelf.create(owner_id: current_user.id, title: "All")
      BookShelf.create(owner_id: current_user.id, title: "Read")
      BookShelf.create(owner_id: current_user.id, title: "To Read")
      BookShelf.create(owner_id: current_user.id, title: "Currently Reading")
    end

    # This is still not going to give you what you need.
    def already_reviewed?(reviews)
      reviews.any? do |review|
        review.author_id == current_user.id
      end
    end

    def current_user
      @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def sign_in(user)
      @current_user = user
      session[:session_token] = user.reset_session_token!
    end

    def sign_out
      current_user.reset_session_token!
      session[:session_token] = nil
    end

    def signed_in?
      !!current_user
    end

    def require_signed_in!
      redirect_to new_session_url unless signed_in?
    end
end
