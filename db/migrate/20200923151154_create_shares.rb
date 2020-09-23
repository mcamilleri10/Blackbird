class CreateShares < ActiveRecord::Migration[5.2]
  def change
    create_table :shares do |t|
      t.integer :user_id, null: false
      t.integer :company_id, null: false
      t.integer :num_shares_owned, null: false
      t.integer :total_cost, null: false

      t.timestamps
    end
    add_index :shares, :user_id
    add_index :shares, :company_id
    add_index :shares, [:user_id, :company_id], unique: true
  end
end
