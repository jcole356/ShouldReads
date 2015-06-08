# Schema Information

## book_shelves
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
title       | string    | not null

## books
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
title              | string    | not null
author             | string    | not null
number_of_pages    | integer   | not null
synopsis           | text      |
cover_image        | string    |

## book_shelvings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
shelf_id    | integer   | not null, foreign key (references book_shelves)
book_id     | integer   | not null, foreign key (references books)

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
book_id     | integer   | not null, foreign key (references books)
rating      | integer   | not null
title       | text      |
review      | text      |

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## friend_requests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
proposer_id | integer   | not null, foreign key (references users)
target_id   | integer   | not null, foreign key (references users)

## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
friend_id   | integer   | not null, foreign key (references users)
