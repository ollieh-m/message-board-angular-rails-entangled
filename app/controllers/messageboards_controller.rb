class MessageboardsController < ApplicationController
  include Entangled::Controller

  def index
    broadcast do
      @messageboards = Messageboard.all
    end
  end
  
  def show
    broadcast do
      @messageboard = Messageboard.find(params[:id])
    end
  end

  def create
    broadcast do
      @messageboard = Messageboard.create(messageboard_params)
    end
  end

private
  def messageboard_params
    params.require(:messageboard).permit(:name,:description)
  end
end