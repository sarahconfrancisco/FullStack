# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170220164507) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "restaurant_types", force: :cascade do |t|
    t.integer  "restaurant_id", null: false
    t.integer  "type_id",       null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "restaurant_types", ["restaurant_id", "type_id"], name: "index_restaurant_types_on_restaurant_id_and_type_id", unique: true, using: :btree

  create_table "restaurants", force: :cascade do |t|
    t.integer  "user_id",                      null: false
    t.string   "name",                         null: false
    t.string   "address",                      null: false
    t.string   "city",                         null: false
    t.string   "state",                        null: false
    t.string   "zip",                          null: false
    t.string   "phone",                        null: false
    t.string   "website"
    t.boolean  "delivery",     default: false
    t.boolean  "pick_up",      default: false
    t.boolean  "reservations", default: false
    t.boolean  "parking",      default: false
    t.boolean  "outdoor",      default: false
    t.boolean  "credit",       default: false
    t.boolean  "bar",          default: false
    t.boolean  "byob",         default: false
    t.text     "hours",                        null: false
    t.float    "latitude",                     null: false
    t.float    "longitude",                    null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.integer  "price"
  end

  add_index "restaurants", ["bar"], name: "index_restaurants_on_bar", using: :btree
  add_index "restaurants", ["byob"], name: "index_restaurants_on_byob", using: :btree
  add_index "restaurants", ["credit"], name: "index_restaurants_on_credit", using: :btree
  add_index "restaurants", ["delivery"], name: "index_restaurants_on_delivery", using: :btree
  add_index "restaurants", ["hours"], name: "index_restaurants_on_hours", using: :btree
  add_index "restaurants", ["latitude"], name: "index_restaurants_on_latitude", using: :btree
  add_index "restaurants", ["longitude"], name: "index_restaurants_on_longitude", using: :btree
  add_index "restaurants", ["name"], name: "index_restaurants_on_name", using: :btree
  add_index "restaurants", ["outdoor"], name: "index_restaurants_on_outdoor", using: :btree
  add_index "restaurants", ["parking"], name: "index_restaurants_on_parking", using: :btree
  add_index "restaurants", ["pick_up"], name: "index_restaurants_on_pick_up", using: :btree
  add_index "restaurants", ["reservations"], name: "index_restaurants_on_reservations", using: :btree
  add_index "restaurants", ["user_id"], name: "index_restaurants_on_user_id", using: :btree
  add_index "restaurants", ["zip"], name: "index_restaurants_on_zip", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.integer  "restaurant_id", null: false
    t.text     "body",          null: false
    t.integer  "rating",        null: false
    t.string   "date",          null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "reviews", ["restaurant_id"], name: "index_reviews_on_restaurant_id", using: :btree
  add_index "reviews", ["user_id", "restaurant_id"], name: "index_reviews_on_user_id_and_restaurant_id", unique: true, using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "types", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "types", ["name"], name: "index_types_on_name", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "fname",           null: false
    t.string   "lname",           null: false
    t.string   "email",           null: false
    t.string   "zip",             null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "birthday"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
