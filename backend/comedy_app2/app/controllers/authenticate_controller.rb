class AuthenticateController < ApplicationController
    def login
        
        @user = User.find_by(name: params[:name])

        if @user 
            if @user.authenticate(params[:password])
                payload = {user_id: @user.id}
                
                secret = Rails.application.secrets.secret_key_base
                token = JWT.encode(payload, secret)



                render json: { token: token }
            else 
                render json: "nice try", status: :unauthorized
            end
    #         payload = { user_id: @user.id }
    #         byebug

    #         secret = Rails.application.secrets.secret_key_base
    #         token = JWT.encode(payload, secret)


    #             render json: { token: token}
            else
                render json: "Nice try, funny guy!", status: :unauthorized
            end
    
    # else  
    #     render json: "Nice try, funny guy!"  
    # end
    end

end