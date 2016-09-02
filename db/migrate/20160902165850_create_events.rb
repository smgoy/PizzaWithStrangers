class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :host_id, null: false
      t.integer :city_id, null: false
      t.datetime :date, null: false
      t.string :address, null: false
      t.datetime :time, null: false
      t.string :image
      t.integer :seats, null: false

      t.timestamps null: false
    end

    add_index :events, :host_id
    add_index :events, :city_id
  end
end
