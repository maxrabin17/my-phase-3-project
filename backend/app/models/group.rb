class Group < ActiveRecord::Base
    has_many :contact_groups
    has_many :contacts, through: :contact_groups
    belongs_to :user

    def group_contact_names
        self.contacts.map {|contact| contact.name}
    end
end