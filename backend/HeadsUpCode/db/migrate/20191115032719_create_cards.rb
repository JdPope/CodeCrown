class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.text :prompt
      t.text :explanation

      t.timestamps
    end
  end
end
