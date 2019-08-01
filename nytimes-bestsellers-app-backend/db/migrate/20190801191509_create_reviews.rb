class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :reviewer_name
      t.string :author
      t.string :book_title
      t.text :review

      t.timestamps
    end
  end
end
