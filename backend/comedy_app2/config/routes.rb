Rails.application.routes.draw do
  resources :openers, only: [:index, :show, :create]
  resources :headliners, only: [:index, :show]
  resources :users, only: [:index, :show, :create]

  post "/login", to: "authenticate#login"


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
