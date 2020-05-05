class CreateOpeners < ActiveRecord::Migration[6.0]
  def change
    create_table :openers do |t|
      t.string :name
      t.integer :length
      t.integer :political
      t.integer :controversial
      t.integer :dirty
      t.integer :opinionated
      t.references :headliner, null: false, foreign_key: true

      t.timestamps
    end
  end
end
