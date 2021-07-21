class ContactGroup < ActiveRecord::Base
    belongs_to :contact
    belongs_to :group

    def group_name
        self.group.category
    end
end