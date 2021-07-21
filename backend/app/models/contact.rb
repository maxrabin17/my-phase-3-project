class Contact < ActiveRecord::Base
    has_many :contact_groups
    has_many :groups, through: :contact_groups
    belongs_to :user

    def users_name
        self.user.username
    end
end