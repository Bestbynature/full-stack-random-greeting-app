# frozen_string_literal: true

Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index] do
      end
    end
  end
end
