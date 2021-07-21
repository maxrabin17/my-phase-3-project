require "bundler/setup"
require 'active_record'

Bundler.require
require_all 'app'

ENV["SINATRA_ENV"] ||= 'development'
ActiveRecord::Base.establish_connection(ENV["SINATRA_ENV"].to_sym)