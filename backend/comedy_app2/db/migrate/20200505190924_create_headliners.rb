class CreateHeadliners < ActiveRecord::Migration[6.0]
  def change
    create_table :headliners do |t|
      t.string :name
      t.integer :length
      t.integer :political
      t.integer :controversial
      t.integer :dirty
      t.integer :opinionated
      t.string :image

      t.timestamps
    end
  end
end
