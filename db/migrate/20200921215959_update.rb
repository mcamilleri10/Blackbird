class Update < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :available_funds, :integer, :default => 100
  end
end
