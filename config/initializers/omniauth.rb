Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, ENV["twitter_api_key"], ENV["twitter_secret"]
end
