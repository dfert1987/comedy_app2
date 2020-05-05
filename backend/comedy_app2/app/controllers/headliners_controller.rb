class HeadlinersController < ApplicationController
    def index 
        @headliners = Headliner.all
        render json: @headliners
    end

    def show
        @headliner = Headliner.find(params[:id])
        render json: @headliner
    end
end
