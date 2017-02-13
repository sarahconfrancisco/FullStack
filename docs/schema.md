# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fname           | string    | not null
lname           | string    | not null
email           | string    | not null, indexed, unique
zip             | integer   | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
birthday        | string    |

has_many :reviews
has_many :restaurants
has_many :photos

## restaurants
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users)
name         | string    | not null
address      | string    | not null
city         | string    | not null
state        | string    | not null
zip          | integer   | not null, indexed
phone        | integer   | not null
website      | string    |
hours        | text      | not null
delivery     | boolean   | not null, default: false
pick_up      | boolean   | not null, default: false
reservations | boolean   | not null, default: false
parking      | boolean   | not null, default: false
outdoor      | boolean   | not null, default: false
credit       | boolean   | not null, default: false
bar          | boolean   | not null, default: false
byob         | boolean   | not null, default: false
price        | integer   | minimum 1, maximum 4

belongs_to: user
has_many :reviews
has_many :types, through: restaurants_types
has_many :photos, as: imageable

## reviews
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users)
restaurant_id| integer   | not null, foreign key (references restaurants), indexed, unique [user_id]
body         | text      | not null
rating       | integer   | not null, minimum 1, maximum 5
date         | string    | not null

belongs_to :user
belongs_to :restaurant
has_many :photos, as: imageable

## types
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

has_many :restaurants, through: restaurants_types

## restaurants_types
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
restaurant_id| integer   | not null, foreign key (references restaurants), indexed, unique [type_id]
type_id      | integer   | not null, foreign key (references types), indexed

## photos
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
image_data    | varbinary | not null
imageable_id  | integer   | not null, indexed
imageable_type| string    | not null, indexed
user_id       | integer   | not null, foreign key (references users)

belongs_to :user
belongs_to :imageable
