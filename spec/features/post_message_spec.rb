require 'spec_helper'

feature 'Post a message', js: true do
  scenario 'and see it' do
    visit '/'
    fill_in('username', with: 'Ollie')
    fill_in('message', with: 'First message')
    click_on('Post')
    expect(page).to have_content('First message')
  end
end