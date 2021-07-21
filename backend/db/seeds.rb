require 'faker'

puts "Clearing old data..."
Contact.delete_all
Group.delete_all
User.delete_all
ContactGroup.delete_all

puts "Seeding Categories..."


# User.create(username: "Johnnyboy", password: "Happy123!")
# User.create(username: "MaximusPrime", password: "Sad123!")
# User.create(username: "Billybob", password: "Coding123!")
# User.create(username: "JimmyChoo", password: "Coding123!")
# User.create(username: "MikeySlice", password: "Coding123!")

# 5.times do
#     Contact.create(name: Faker::Name.name, phone_number: Faker::PhoneNumber.cell_phone, address: Faker::Address.full_address, user_id: rand(1..5), is_favorite: rand(2) == 1)
# end

# Group.create(category: "Family")
# Group.create(category: "Friends")
# Group.create(category: "")
# Group.create(category: "Friends")
# Group.create(category: "Friends")

# ContactGroup.create(contact_id: 1, group_id: 1)
# ContactGroup.create(contact_id: 2, group_id: 2)
# ContactGroup.create(contact_id: 3, group_id: 3)
# ContactGroup.create(contact_id: 4, group_id: 4)
# ContactGroup.create(contact_id: 5, group_id: 5)

puts "Done!"