# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#       api_user_watchlists POST   /api/users/:user_id/watchlists(.:format)                                                 api/watchlists#create {:format=>:json}
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#              new_api_user GET    /api/users/new(.:format)                                                                 api/users#new {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#             api_companies POST   /api/companies(.:format)                                                                 api/companies#create {:format=>:json}
#               api_company GET    /api/companies/:id(.:format)                                                             api/companies#show {:format=>:json}
#                api_shares POST   /api/shares(.:format)                                                                    api/shares#create {:format=>:json}
#                 api_share GET    /api/shares/:id(.:format)                                                                api/shares#show {:format=>:json}
#                           PATCH  /api/shares/:id(.:format)                                                                api/shares#update {:format=>:json}
#                           PUT    /api/shares/:id(.:format)                                                                api/shares#update {:format=>:json}
#                           DELETE /api/shares/:id(.:format)                                                                api/shares#destroy {:format=>:json}
#             api_watchlist GET    /api/watchlists/:id(.:format)                                                            api/watchlists#show {:format=>:json}
#                           PATCH  /api/watchlists/:id(.:format)                                                            api/watchlists#update {:format=>:json}
#                           PUT    /api/watchlists/:id(.:format)                                                            api/watchlists#update {:format=>:json}
#                           DELETE /api/watchlists/:id(.:format)                                                            api/watchlists#destroy {:format=>:json}
#           new_api_session GET    /api/session/new(.:format)                                                               api/sessions#new {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:new, :create, :show, :update] do
      resources :watchlists, only: [:create]
    end

    resources :companies, only: [:create, :show] do
      # resources :shares, only: [:create]
    end
    
    resources :shares, only: [:show, :create, :update, :destroy]
    
    resources :watchlists, only: [:show, :update, :destroy]

    resource :session, only: [:new, :create, :destroy]
  end

end
