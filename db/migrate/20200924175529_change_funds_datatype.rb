class ChangeFundsDatatype < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :available_funds, :float, :default => 200.00
  end
end
