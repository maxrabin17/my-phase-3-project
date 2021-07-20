class Contact < ActiveRecord::Base
    has_many :contact_groups
    has_many :groups, through: :contact_groups
    belongs_to :user
end