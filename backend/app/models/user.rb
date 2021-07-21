require 'pry'

class User < ActiveRecord::Base
    has_many :contacts
    has_many :groups

    def contact_names
        self.contacts.map do |contact|
            contact.name
        end
    end
end