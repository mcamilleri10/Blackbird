class RemoveUserCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :companies, :name
  end
end
