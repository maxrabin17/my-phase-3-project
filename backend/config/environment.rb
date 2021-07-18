require "bundler/setup"
require 'active_record'
# require_all 'app/models'

Bundler.require

ENV["SINATRA_ENV"] ||= 'development'
ActiveRecord::Base.establish_connection(ENV["SINATRA_ENV"].to_sym)