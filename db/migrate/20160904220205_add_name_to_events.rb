class AddNameToEvents < ActiveRecord::Migration
  def change
    add_column :events, :name, :string
    remove_column :users, :city
    add_column :users, :city_id, :integer
    add_index :users, :city_id
  end
end
