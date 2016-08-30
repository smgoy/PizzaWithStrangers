class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :f_name, null: false
      t.string :l_name
      t.string :city, null: false
      t.text :description
      t.string :pofile_image
      t.boolean :host, null: false

      t.timestamps null: false
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
