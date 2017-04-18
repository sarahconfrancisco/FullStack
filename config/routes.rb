Rails.application.routes.draw do
    
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:create, :show, :update, :index]
    resources :reviews, only: [:create, :show, :update, :index]
	resources :images, except: [:new, :edit]
  end
  root "static_pages#root"

end
