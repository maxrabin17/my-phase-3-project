class CreateGroupsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :group
    end
  end
end
