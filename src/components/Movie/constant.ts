import {Option} from "../SelectMenu/types";

export const genres: string[] = ['all', 'action', 'adventure', 'animation', 'biography', 'comedy', 'crime', 'documentary',
    'drama', 'family', 'fantasy', 'film-noir', 'game-show', 'history', 'horror', 'music', 'musical', 'mystery',
    'news', 'reality-tv', 'romance', 'sci-fi', 'short', 'sport', 'talk-show', 'thriller', 'war', 'western'];

export const genresOptions: Option[] = genres.map((genre: string): Option => <Option>({
    label: genre.charAt(0).toUpperCase() + genre.slice(1),
    value: genre
}));

export const top5 = {
    "id": "tt10366206",
    "title": "John Wick: Chapter 4",
    "type": "movie",
    "image_url": "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
    "year": 2023,
    "minutes": 169,
    "genres": [
        "Action",
        "Crime",
        "Thriller"
    ],
    "release": "2023-03-24",
    "rating": 8.2,
    "rating_count": 130980,
    "summary": "Condemned by the tyrannical High Table to be on the run for the rest of his life, deadly assassin maestro John Wick (2014) embarks on a Sisyphean mission of suicidal fury to decide his fate after the merciless carnage in John Wick: Chapter 3 - Parabellum (2019). At last, John's violent journey, fuelled by vengeance and grief, ultimately leads him to a fateful confrontation with his former employers, the crime masters that forced him into exile. And as the blood-stained vendetta to destroy those who pull the strings continues, old companions face the brutal consequences of friendship, and all-powerful, well-connected adversaries emerge to bring Wick's head on a platter. But talk is cheap--now guns have the final say. Can Baba Yaga, the grim messiah of death, make every bullet count in this bloody, once-and-for-all struggle for freedom?",
    "outline": "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    "cast": [
        "Keanu Reeves",
        "Laurence Fishburne",
        "George Georgiou",
        "Lance Reddick",
        "Clancy Brown"
    ],
    "director": [
        "Chad Stahelski"
    ],
    "producer": [
        "Christoph Fisser",
        "Basil Iwanyk",
        "Ilene Kim",
        "Erica Lee",
        "David Leitch",
    ],
    "writer": [
        "Shay Hatten",
        "Michael Finch",
        "Derek Kolstad"
    ]
}

export const top4 = {
    "id": "tt15326988",
    "title": "Ghosted",
    "type": "movie",
    "image_url": "https://m.media-amazon.com/images/M/MV5BNGMzYWZlYmYtNTcyMC00ZGVjLThjN2ItMjY4MjkwN2NlMjYwXkEyXkFqcGdeQXVyOTU0NjY1MDM@._V1_.jpg",
    "year": 2023,
    "minutes": 116,
    "genres": [
        "Action",
        "Adventure",
        "Comedy",
        "Romance"
    ],
    "release": "2023-04-21",
    "rating": 5.8,
    "rating_count": 18274,
    "summary": "In the enigmatic tale of \"Ghosted\", we are introduced to Cole, a kind individual residing with his family in a picturesque farm located outside of Washington. His life takes an unexpected turn when he encounters Sadie and embarks on a texting journey with her. But, as the days pass, Cole's mind is consumed with the fear of being abandoned and he becomes frantic in his attempts to reach her. Despite his family's warnings, Cole's desperation drives him to embark on a perilous journey to London in pursuit of his love interest. However, upon his arrival, he finds himself ensnared in a web of deceit, as he's mistaken for the notorious espionage specter, the Taxman. With a chillingly menacing criminal on his tail, Cole finds himself at the mercy of his captor's twisted whims, as he's subjected to unspeakable tortures with a hint of a Cold War Dracula accent. With each turn, the plot thickens and baffles, as viewers are left to ponder the mysterious forces at play, driving Cole further into the abyss of uncertainty.",
    "outline": "Cole falls head over heels for enigmatic Sadie, but then makes the shocking discovery that she's a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
    "cast": [
        "Chris Evans",
        "Ana de Armas",
        "Adrien Brody",
        "Mike Moh",
        "Tate Donovan"
    ],
    "director": [
        "Dexter Fletcher"
    ],
    "producer": [
        "Joe Anton",
        "Brian Bell",
        "Erin Charles",
        "Jules Daly",
        "Ana de Armas",
    ],
    "writer": [
        "Rhett Reese",
        "Paul Wernick",
        "Chris McKenna",
        "Erik Sommers",
        "Rhett Reese",
    ]
}

export const top3 = {
    "id": "tt15767808",
    "title": "The Last Kingdom: Seven Kings Must Die",
    "type": "movie",
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTlmNGE0ZGMtMzdkMC00MjQyLWI1ZjgtZTIxODAyNWJlZDFlXkEyXkFqcGdeQXVyNTQ4ODM2NjM@._V1_.jpg",
    "year": 2023,
    "minutes": 111,
    "genres": [
        "Action",
        "Drama",
        "History"
    ],
    "release": "2023-04-14",
    "rating": 7,
    "rating_count": 15452,
    "outline": "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
    "cast": [
        "Mark Rowley",
        "Pekka Strang",
        "Zoltan Andrasi",
        "Ingrid García Jonsson",
        "Agnes Born"
    ],
    "director": [
        "Edward Bazalgette"
    ],
    "producer": [
        "Mat Chaplin",
        "Alexander Dreymon",
        "Martha Hillier",
        "Nigel Marchant",
        "Gareth Neame",
    ],
    "writer": [
        "Martha Hillier",
        "Bernard Cornwell"
    ]
}

export const top2 = {
    "id": "tt13345606",
    "title": "Evil Dead Rise",
    "type": "movie",
    "image_url": "https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_.jpg",
    "year": 2023,
    "minutes": 97,
    "genres": [
        "Horror"
    ],
    "release": "2023-04-21",
    "rating": 7.6,
    "rating_count": 4367,
    "summary": "Moving the action out of the woods and into the city, \"Evil Dead Rise\" tells a twisted tale of two estranged sisters, played by Sutherland and Sullivan, whose reunion is cut short by the rise of flesh possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    "outline": "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    "cast": [
        "Mirabai Pease",
        "Richard Crouchley",
        "Anna-Maree Thomas",
        "Lily Sullivan",
        "Noah Paul"
    ],
    "director": [
        "Lee Cronin"
    ],
    "producer": [
        "Romel Adam",
        "Richard Brener",
        "Bruce Campbell",
        "Moira Grant",
        "Macdara Kelleher",
    ],
    "writer": [
        "Lee Cronin"
    ]
}

export const top1 = {
    "id": "tt6718170",
    "title": "The Super Mario Bros. Movie",
    "type": "movie",
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_.jpg",
    "year": 2023,
    "minutes": 92,
    "genres": [
        "Animation",
        "Adventure",
        "Comedy",
        "Family",
        "Fantasy"
    ],
    "release": "2023-04-05",
    "rating": 7.3,
    "rating_count": 77397,
    "summary": "A Brooklyn plumber named Mario travels through the Mushroom Kingdom with a princess named Peach and an anthropomorphic mushroom named Toad to find Mario's brother, Luigi, and to save the world from a ruthless fire-breathing Koopa named Bowser.",
    "outline": "The story of The Super Mario Bros. on their journey through the Mushroom Kingdom.",
    "cast": [
        "Kevin Michael Richardson",
        "Jack Black",
        "Khary Payton",
        "Chris Pratt",
        "Charlie Day"
    ],
    "director": [
        "Aaron Horvath",
        "Michael Jelenic",
        "Pierre Leduc",
        "Fabien Polack"
    ],
    "producer": [
        "Christelle Balcon",
        "Yusuke Beppu",
        "Brett Hoffman",
        "Kelly Lake",
        "Christopher Meledandri",
    ],
    "writer": [
        "Matthew Fogel"
    ]
}

export const top6 = {
    "id": "tt13521006",
    "title": "Beau Is Afraid",
    "type": "movie",
    "image_url": "https://m.media-amazon.com/images/M/MV5BYTNhNWRmMDctYzE4OS00MzczLWJkODgtNzYxZTQxM2Y1YmM3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    "year": 2023,
    "minutes": 179,
    "genres": [
        "Comedy",
        "Drama",
        "Horror"
    ],
    "release": "2023-04-21",
    "rating": 7.3,
    "rating_count": 6652,
    "outline": "Following the sudden death of his mother, a mild-mannered but anxiety-ridden man confronts his darkest fears as he embarks on an epic, Kafkaesque odyssey back home.",
    "cast": [
        "Joaquin Phoenix",
        "Patti LuPone",
        "Amy Ryan",
        "Nathan Lane",
        "Kylie Rogers"
    ],
    "director": [
        "Ari Aster"
    ],
    "producer": [
        "Elisa Alvares",
        "Timo Argillander",
        "Ari Aster",
        "Len Blavatnik",
        "Luca Borghese",
    ],
    "writer": [
        "Ari Aster"
    ]
}

export const top7 = {
    "id": "tt11358390",
    "title": "Renfield",
    "type": "movie",
    "image_url": "https://m.media-amazon.com/images/M/MV5BNDIwYjVjMDMtOGYxMy00ZTRiLWE0YzktMjIwYmNhOGE4NGQ4XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
    "year": 2023,
    "minutes": 93,
    "genres": [
        "Comedy",
        "Fantasy",
        "Horror"
    ],
    "release": "2023-04-14",
    "rating": 6.7,
    "rating_count": 10454,
    "summary": "R.M. Renfield (Nicholas Hoult) decides to leave his centuries-long line of work as a henchman and familiar to Count Dracula (Nicolas Cage) and finds a new lease on life in modern day New Orleans when he falls in love with a feisty but perennially aggressive traffic cop named Rebecca Quincy (Awkwafina).",
    "outline": "Renfield, Dracula's henchman and inmate at the lunatic asylum for decades, longs for a life away from the Count, his various demands, and all of the bloodshed that comes with them.",
    "cast": [
        "Nicholas Hoult",
        "Nicolas Cage",
        "Awkwafina",
        "Ben Schwartz",
        "Shohreh Aghdashloo"
    ],
    "director": [
        "Chris McKay"
    ],
    "producer": [
        "David Alpert",
        "Bryan Furst",
        "Sean Furst",
        "Gary Huckabay",
        "Robert Kirkman",
    ],
    "writer": [
        "Ryan Ridley",
        "Robert Kirkman"
    ]
}

export const top8 = {
    "id": "tt2906216",
    "title": "Dungeons & Dragons: Honor Among Thieves",
    "type": "movie",
    "image_url": "https://m.media-amazon.com/images/M/MV5BZjAyMGMwYTEtNDk4ZS00YmY0LThhZjUtOWI4ZjFmZmU4N2I3XkEyXkFqcGdeQXVyMTEyNzQ1MTk0._V1_.jpg",
    "year": 2023,
    "minutes": 134,
    "genres": [
        "Action",
        "Adventure",
        "Comedy",
        "Fantasy"
    ],
    "release": "2023-03-31",
    "rating": 7.6,
    "rating_count": 50326,
    "summary": "A former Harper named Edgin Darvis and his accomplice Holga Kilgore are imprisoned for two years. Upon their escape, they discover that their former ally, Forge Fitzwilliam, has become the Lord of Neverwinter. In an effort to clear their names and revive Edgin's wife, they plan to steal a valuable artifact from Forge's vault. They recruit the help of Simon Aumar and Doric, and together they embark on a perilous journey to retrieve a powerful relic. However, they soon discover that they are being pursued by dangerous enemies, including a Red Wizard named Sofina, who will stop at nothing to stop them.",
    "outline": "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    "cast": [
        "Chris Pine",
        "Michelle Rodriguez",
        "Regé-Jean Page",
        "Justice Smith",
        "Sophia Lillis"
    ],
    "director": [
        "John Francis Daley",
        "Jonathan Goldstein"
    ],
    "producer": [
        "John Francis Daley",
        "Zev Foreman",
        "Brian Goldner",
        "Jonathan Goldstein",
        "Jeremy Latcham",
    ],
    "writer": [
        "Jonathan Goldstein",
        "John Francis Daley",
        "Michael Gilio",
        "Chris McKay",
        "Michael Gilio"
    ]
}

export const top10 = {
    "id": "tt16419074",
    "title": "Air",
    "type": "movie",
    "image_url": "https://m.media-amazon.com/images/M/MV5BYmNlOTNlYjUtM2U3Yy00M2ZjLTkxZDQtN2NiNGZiZDI0ZjE3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    "year": 2023,
    "minutes": 111,
    "genres": [
        "Drama",
        "Sport"
    ],
    "release": "2023-04-05",
    "rating": 7.7,
    "rating_count": 22149,
    "summary": "The movie explores how Nike's basketball shoe division was struggling in 1984 due to low sales, and how the company's Marketing VP Rob Strasser and CEO Phil Knight tasked basketball talent scout Sonny Vaccaro to find a new spokesperson for their shoes. Although they considered third draft pick Michael Jordan off limits due to his preference for Adidas and Converse, Vaccaro convinced them that Jordan was a generational talent, and that Nike should pursue him and try to convince Jordan to sign with Nike.",
    "outline": "Follows the history of shoe salesman Sonny Vaccaro, and how he led Nike in its pursuit of the greatest athlete in the history of basketball, Michael Jordan.",
    "cast": [
        "Matt Damon",
        "Jason Bateman",
        "Ben Affleck",
        "Chris Messina",
        "Viola Davis"
    ],
    "director": [
        "Ben Affleck"
    ],
    "producer": [
        "Ben Affleck",
        "Madison Ainley",
        "Jason Michael Berman",
        "Alex Convery",
        "Matt Damon"
    ],
    "writer": [
        "Alex Convery"
    ]
}

export const top9 = {
    "id": "tt13375076",
    "title": "The Pope's Exorcist",
    "type": "movie",
    "image_url": "https://m.media-amazon.com/images/M/MV5BYjA0MGU4MzYtYTYxMy00MjRhLTlmMDYtZTVhZDc1Y2QwNWY2XkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg",
    "year": 2023,
    "minutes": 103,
    "genres": [
        "Horror",
        "Thriller"
    ],
    "release": "2023-04-14",
    "rating": 6.2,
    "rating_count": 9300,
    "summary": "Inspired by the actual files of Father Gabriele Amorth, Chief Exorcist of the Vatican, The Pope's Exorcist follows Amorth as he investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    "outline": "Follow Gabriele Amorth, the Vatican's leading exorcist, as he investigates the possession of a child and uncovers a conspiracy the Vatican has tried to keep secret.",
    "cast": [
        "Russell Crowe",
        "Daniel Zovatto",
        "Alex Essoe",
        "Franco Nero",
        "Peter DeSouza-Feighoney"
    ],
    "director": [
        "Julius Avery"
    ],
    "producer": [
        "Doug Belgrad",
        "Sophie Cassidy",
        "Jo Homewood",
        "Michael Patrick Kaczmarek",
        "Jeff Katz"
    ],
    "writer": [
        "Michael Petroni",
        "Evan Spiliotopoulos",
        "R. Dean McCreary",
        "Chester Hastings",
        "Jeff Katz",
        "Gabriele Amorth"
    ]
}