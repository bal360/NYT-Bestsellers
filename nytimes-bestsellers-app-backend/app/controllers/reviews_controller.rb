class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

    def new
        @review = Review.new
    end

    def create
        @review = Review.create(review_params)
        render json: @review
    end

    def update
        if @review.update(review_params)
            render json: @review
        else
            render json: @review.errors, status: :unprocessable_entity
        end
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
    end

    private
        def review_params
            params.permit(:reviewer_name, :author, :book_title, :review, :id)
        end
end