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

FullStack formula => Creates 1 user story, top to bottom, front to back.
1. What is the user story?
   => User can create an contact
2. What components do I need to create/use to make this user story possible?
   => Form that allows user to put in contact information
3. What will my communication to the backend look like?
   3a. What endpoint is being requested?
       => '/contacts'
   3b. What method(post, get, patch...)?
       => "POST"
   3c. How is data being sent?(url or body header)
       => object created in state by user input to form
4. What do we do when the request is received by our backend?
   4a. What type of request is being made?(get, post, patch, delete => this corresponds directly to what piece of CRUD is going to occur)
       => "POST"
   4b. What database interactions will be taking place?
       => Check to see if user already has an existing contact (READ)
       => if they do, send error message
       => if they do not, create a contact (CREATE)
   4c. What AR methods will I use to interact with the DB?
       => use .where to check existing contacts
       => use .find to find the user by there IDs
       => use .create to create the contact
   4d. Once all DB interactions have occurred, what will I send to the frontend?
       => send back the new contact that was saved in the database
5. How will I handle the response on the frontend? 
   => add contact to state ( should trigger update to dom and show the contact)