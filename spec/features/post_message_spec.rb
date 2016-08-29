require 'spec_helper'

feature 'Post a message', js: true do
  scenario 'and see it' do
    visit '/'
    expect(page).to have_content('Messageboard')
  end
end