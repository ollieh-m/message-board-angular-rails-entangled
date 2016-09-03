class Messageboard < ActiveRecord::Base
  
  include Entangled::Model
  entangle
  
  has_many :messages
end
