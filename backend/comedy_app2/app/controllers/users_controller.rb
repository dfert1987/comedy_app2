class UsersController < ApplicationController
    def index 
            @users = User.all
            render json: @users
            
        end


    def show
            @user = User.find(params[:id])
            render json: @user
        end
    
    


  
    def create
        @user = User.create(
            name:params[:name],
            password:[:password])
            # render json: @user

            redirect_to "http://localhost:3001"
    end
end



