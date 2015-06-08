# Phase 2: Viewing Books and Shelves

## Rails
### Models
Book
BookShelf
BookShelvings

### Controllers
Api::BooksController (create, destroy, index, show)
Api::BookShelvesController (create, destroy, index, show)
Api::BookShelvingsController (create, destroy)

### Views
* books/show.json.jbuilder
* book_shelves/show.json.jbuilder

## Backbone
### Models
* Book

### Collections
* Books
* BookShelves

### Views
* BookShow (composite view, will contain ReviewShow subview)
* BookIndex
* BookShelvesIndex (composite view, contains BookShelfShow subview)

## Gems/Libraries
* composite_view
