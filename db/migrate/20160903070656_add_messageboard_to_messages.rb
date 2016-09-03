class AddMessageboardToMessages < ActiveRecord::Migration
  def change
    add_reference :messages, :messageboard, index: true, foreign_key: true
  end
end
