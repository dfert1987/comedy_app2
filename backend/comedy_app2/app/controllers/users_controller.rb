class UsersController < ApplicationController
    def index 
        begin
            authenticate
            @users = User.all
            render json: @users
        resclsue
            rescue_catch
        end
    end

    def show
        begin 
            authenticate
            @user = User.find(params[:id])
        rescue
            rescue_catch
        end
    end
    


  
    def create
        @user = User.create(user_pa rams)
        render json: @user
        #trying to git commit
    end


def user_params
   params.require(:user).permit(:name, :password)
end
end
