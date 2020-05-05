# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_05_192038) do

  create_table "headliners", force: :cascade do |t|
    t.string "name"
    t.integer "length"
    t.integer "political"
    t.integer "controversial"
    t.integer "dirty"
    t.integer "opinionated"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "openers", force: :cascade do |t|
    t.string "name"
    t.integer "length"
    t.integer "political"
    t.integer "controversial"
    t.integer "dirty"
    t.integer "opinionated"
    t.integer "headliner_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["headliner_id"], name: "index_openers_on_headliner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "openers", "headliners"
end
