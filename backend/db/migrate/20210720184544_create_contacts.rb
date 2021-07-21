class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :phone_number
      t.string :address
      t.integer :user_id
      t.boolean :is_favorite
    end
  end
end

