class MessagesController < ApplicationController
  include Entangled::Controller

  def index
    broadcast do
      @messages = Message.where(messageboard_id: params[:messageboard_id])
    end
  end
  
  def show
    broadcast do
      @message = Message.find(params[:id])
    end
  end

  def create
    broadcast do
      @message = Message.new(message_params)
      @message.messageboard = Messageboard.find(params[:messageboard_id])
      @message.save
    end
  end

private
  def message_params
    params.require(:message).permit(:username,:content)
  end
end