USER
- User can signup with username and password
- User can login with username and password
- has_many :contacts
- has_many :groups

CONTACT
- belongs_to :user
- has_many :contact_groups
- has_many :groups, through: :contact_groups

GROUP
- has_many :contact_groups
- has_many :contacts, through: :contact_groups
- belongs_to :user

CONTACT GROUP
- belongs_to :contact
- belongs_to :group