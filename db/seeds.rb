# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create(username: "reader", password: "foobar")
u2 = User.create(username: "josh", password: "foobar")

b1 = Book.create(title: "Harry Potter and the Half Blood Prince",
                 author: "JK Rowling",
                 cover_image_url: "https://books.google.com/books/content?id=Ms8UmQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73queu7iJ94OKuwaC2STp5ILPEc9NDuOCWFu_l25UEdXZ0Hjllx54EyZFnFx6xvJWtpntOM2yJaZ2mjiUNaJZczUP-UTUNjV7BII3nr0X8Ee3s6bH88-AP5lP5I30D0DaA6b5R0",
                 synopsis: "The war against Voldemort is not going well; even Muggle governments are noticing. Ron scans the obituary pages of the Daily Prophet, looking for familiar names. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses.",
                 number_of_pages: 652)
b2 = Book.create(title: "Slaughterhouse-five",
                 author: "Kurt Vonnegut",
                 cover_image_url: "https://books.google.com/books/content?id=gMcab1F-IL4C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71IJzBpHLIoTG3ZxrR8lunxyOj6kFoSFfwM2D1mi3juKljhz2rPmp5ITSZsAM3wW0TjlI2s0XZb6JTTlHfYH3bMne3QVmRoOpU-reUEPj1vL4z3GtpSaJbiORpVA6pGC-E2Wro3",
                 synopsis: "Prisoner of war, optometrist, time-traveller - these are the life roles of Billy Pilgrim, hero of this miraculously moving, bitter and funny story of innocence faced with apocalypse. Slaughterhouse 5 is one of the world's great anti-war books. Centring on the infamous fire-bombing of Dresden in the Second World War, Billy Pilgrim's odyssey through time reflects the journey of our own fractured lives as we search for meaning in what we are afraid to know.",
                 number_of_pages: 157)
b3 = Book.create(title: "The Stand",
                 author: "Stephen King",
                 cover_image_url: "https://books.google.com/books/content?id=1xhLQ7F1_CsC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70lTKOaA1BIAyiL5Ivs5F8XNBUssW6JX6S6W8gukXcmbGyHPT8aeQ2TJmHVa_q-fd5IS3_DgxSKWdIGhQi_KyHuRlBi3J3GbzWWFoHqyakvzR-4dMJh4fEkNFTHxL6Pk099yRsl",
                 synopsis: "A patient escapes from a biological testing facility, unknowingly carrying a deadly weapon: a mutated strain of super-flu that will wipe out 99 percent of the world's population within a few weeks. Those who remain are scared, bewildered, and in need of a leader. Two emerge--Mother Abagail, the benevolent 108-year-old woman who urges them to build a peaceful community in Boulder, Colorado; and Randall Flagg, the nefarious \"Dark Man,\" who delights in chaos and violence. As the dark man and the peaceful woman gather power, the survivors will have to choose between them--and ultimately decide the fate of all humanity.",
                 number_of_pages: 1153)
b4 = Book.create(title: "The Catcher in the Rye",
                 author: "J. D. Salinger",
                 cover_image_url: "https://books.google.com/books/content?id=JCdFCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73fMzkHOn2-7KmJno2x2GrqMo7RrAr3D1Z-w8H9a5Zgm7yD0zEMc6MBY5mBv1eSXc0kZ84BGSwi8Du4jRNTdIWO-u7_1xPQ9lzDKDZ_aXn9MbSTf5f5tpKxOIIqd2d5SY26PY1-",
                 synopsis: "Since his debut in 1951 as The Catcher in the Rye, Holden Caulfield has been synonymous with \"cynical adolescent.\" Holden narrates the story of a couple of days in his sixteen-year-old life, just after he's been expelled from prep school, in a slang that sounds edgy even today and keeps this novel on banned book lists.",
                 number_of_pages: 288)
# b5 = Book.create(title: "Harry Potter and the Half Blood Prince",
#                  author: "JK Rowling",
#                  cover_image_url: "https://books.google.com/books/content?id=Ms8UmQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73queu7iJ94OKuwaC2STp5ILPEc9NDuOCWFu_l25UEdXZ0Hjllx54EyZFnFx6xvJWtpntOM2yJaZ2mjiUNaJZczUP-UTUNjV7BII3nr0X8Ee3s6bH88-AP5lP5I30D0DaA6b5R0",
#                  synopsis: "The war against Voldemort is not going well; even Muggle governments are noticing. Ron scans the obituary pages of the Daily Prophet, looking for familiar names. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses.",
#                  number_of_pages: 652)
# b6 = Book.create(title: "Harry Potter and the Half Blood Prince",
#                  author: "JK Rowling",
#                  cover_image_url: "https://books.google.com/books/content?id=Ms8UmQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73queu7iJ94OKuwaC2STp5ILPEc9NDuOCWFu_l25UEdXZ0Hjllx54EyZFnFx6xvJWtpntOM2yJaZ2mjiUNaJZczUP-UTUNjV7BII3nr0X8Ee3s6bH88-AP5lP5I30D0DaA6b5R0",
#                  synopsis: "The war against Voldemort is not going well; even Muggle governments are noticing. Ron scans the obituary pages of the Daily Prophet, looking for familiar names. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses.",
#                  number_of_pages: 652)

s1 = BookShelf.create(title: "Read", owner_id: 1)
s1 = BookShelf.create(title: "To Read", owner_id: 1)
s1 = BookShelf.create(title: "Currently Reading", owner_id: 1)
