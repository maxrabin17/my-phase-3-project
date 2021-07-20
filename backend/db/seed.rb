require 'faker'

puts "Clearing old data..."
Contact.delete_all
Group.delete_all

puts "Seeding Categories..."

5.times do
    Contact.create(name: Faker::Name.name, phone_number: Faker::PhoneNumber.cell_phone, address: Faker::Address.full_address, user_id: rand(1..5))
end

puts "Done!"