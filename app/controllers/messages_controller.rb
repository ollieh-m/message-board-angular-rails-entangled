class MessagesController < ApplicationController
  include Entangled::Controller

  def index
    broadcast do
      @messages = Message.all
    end
  end
  
  def show
    broadcast do
      @message = Message.find(params[:id])
    end
  end

  def create
    broadcast do
      @message = Message.create(message_params)
    end
  end

private
  def message_params
    params.require(:message).permit(:username,:content)
  end
end