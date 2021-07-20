class CreateContactGroupTable < ActiveRecord::Migration[5.2]
  def change
    create_table :contact_group do |t|
      t.integer :contact_id
      t.integer :group_id
    end
  end
end
