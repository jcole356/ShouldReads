# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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
# b3 = Book.create(title: "Harry Potter and the Half Blood Prince",
#                  author: "JK Rowling",
#                  cover_image_url: "https://books.google.com/books/content?id=Ms8UmQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73queu7iJ94OKuwaC2STp5ILPEc9NDuOCWFu_l25UEdXZ0Hjllx54EyZFnFx6xvJWtpntOM2yJaZ2mjiUNaJZczUP-UTUNjV7BII3nr0X8Ee3s6bH88-AP5lP5I30D0DaA6b5R0",
#                  synopsis: "The war against Voldemort is not going well; even Muggle governments are noticing. Ron scans the obituary pages of the Daily Prophet, looking for familiar names. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses.",
#                  number_of_pages: 652)
# b4 = Book.create(title: "Harry Potter and the Half Blood Prince",
#                  author: "JK Rowling",
#                  cover_image_url: "https://books.google.com/books/content?id=Ms8UmQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73queu7iJ94OKuwaC2STp5ILPEc9NDuOCWFu_l25UEdXZ0Hjllx54EyZFnFx6xvJWtpntOM2yJaZ2mjiUNaJZczUP-UTUNjV7BII3nr0X8Ee3s6bH88-AP5lP5I30D0DaA6b5R0",
#                  synopsis: "The war against Voldemort is not going well; even Muggle governments are noticing. Ron scans the obituary pages of the Daily Prophet, looking for familiar names. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses.",
#                  number_of_pages: 652)
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
