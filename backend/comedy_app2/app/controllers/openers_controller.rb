class OpenersController < ApplicationController
    def index
        @openers = Opener.all
        render json: @openers, include: [:headliner]
    end

    def show
        @opener = Opener.find(params[:id])
        render json: @opener, include: [:headliner]
    end

    def create
        @opener = Opener.create(
            name: params[:name],
            length: params[:length],
            political: params[:political],
            controversial: params[:controversial],
            dirty: params[:dirty],
            opinionated: params[:opinionated],
            headliner_id: params[:headliner_id]
            ) 
            # render json: @opener
            redirect_to "http://localhost:3001/openershow.html?#{params[:headliner_id]}"
    end
end
