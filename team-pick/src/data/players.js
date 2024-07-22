const players = [
    {
        name: 'Manuel Neuer',
        country: 'Germany',
        position: 'Goalkeeper',
        price: 5
    },
    {
        name: 'Joshua Kimmich',
        country: 'Germany',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Nico Schlotterbeck',
        country: 'Germany',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Antonio Rudiger',
        country: 'Germany',
        position: 'Defender',
        price: 5
    },
    {
        name: 'David Raum',
        country: 'Germany',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Florian Wirtz',
        country: 'Germany',
        position: 'Midfielder',
        price: 8,
    },
    {
        name: 'Jamal Musiala',
        country: 'Germany',
        position: 'Midfielder',
        price: 8
    },
    {
        name: 'Kai Havertz',
        country: 'Germany',
        position: 'Midfielder',
        price: 7
    },
    {
        name: 'Robert Andrich',
        country: 'Germany',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Ilkay Gundogan',
        country: 'Germany',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Toni Kroos',
        country: 'Germany',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Leroy Sane',
        country: 'Germany',
        position: 'Forward',
        price: 7
    },
    {
        name: 'Nicolas Fullkrug',
        country: 'Germany',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Maximilian Beier',
        country: 'Germany',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Yann Sommer',
        country: 'Switzerland',
        position: 'Goalkeeper',
        price: 5
    },
    {
        name: 'Manuel Akanji',
        country: 'Switzerland',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Fabian Schar',
        country: 'Switzerland',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Ricardo Rodriguez',
        country: 'Switzerland',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Leonidas Stergiou',
        country: 'Switzerland',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Granit Xhaka',
        country: 'Switzerland',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Michel Aebischer',
        country: 'Switzerland',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Remo Freuler',
        country: 'Switzerland',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Ruben Vargas',
        country: 'Switzerland',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Dan Ndoye',
        country: 'Switzerland',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Fabian Rieder',
        country: 'Switzerland',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Xherdan Shaqiri',
        country: 'Switzerland',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Breel Embolo',
        country: 'Switzerland',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Kwadwo Duah',
        country: 'Switzerland',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Unai Simon',
        country: 'Spain',
        position: 'Goalkeeper',
        price: 6
    },
    {
        name: 'Robin Le Normand',
        country: 'Spain',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Marc Cucurella',
        country: 'Spain',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Daniel Carvajal',
        country: 'Spain',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Aymeric Laporte',
        country: 'Spain',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Rodri',
        country: 'Spain',
        position: 'Midfielder',
        price: 8
    },
    {
        name: 'Lamine Yamal',
        country: 'Spain',
        position: 'Midfielder',
        price: 7
    },
    {
        name: 'Pedri',
        country: 'Spain',
        position: 'Midfielder',
        price: 7
    },
    {
        name: 'Dani Olmo',
        country: 'Spain',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Fabian Ruiz',
        country: 'Spain',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Nico Williams',
        country: 'Spain',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Mikel Oyarzabal',
        country: 'Spain',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Ferran Torres',
        country: 'Spain',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Alvaro Morata',
        country: 'Spain',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Joselu',
        country: 'Spain',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Gianluigi Donnaruma',
        country: 'Italy',
        position: 'Goalkeeper',
        price: 6
    },
    {
        name: 'Alessandro Bastoni',
        country: 'Italy',
        position: 'Defender',
        price: 7
    },
    {
        name: 'Ricardo Calafiori',
        country: 'Italy',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Federico Dimarco',
        country: 'Italy',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Giovanni Di Lorenzo',
        country: 'Italy',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Matteo Darmian',
        country: 'Italy',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Nicolo Barellla',
        country: 'Italy',
        position: 'Midfielder',
        price: 7
    },
    {
        name: 'Mattia Zaccagni',
        country: 'Italy',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Federico Chiesa',
        country: 'Italy',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Davide Frattesi',
        country: 'Italy',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Lorenzo Pellegrini',
        country: 'Italy',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Jorginho',
        country: 'Italy',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Gianluca Scamacca',
        country: 'Italy',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Mateo Retegui',
        country: 'Italy',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Jordan Pickford',
        country: 'England',
        position: 'Goalkeeper',
        price: 6
    },
    {
        name: 'Trent Alexander-Arnold',
        country: 'England',
        position: 'Defender',
        price: 7
    },
    {
        name: 'Ezri Konsa',
        country: 'England',
        position: 'Defender',
        price: 6
    },
    {
        name: 'John Stones',
        country: 'England',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Marc Guehi',
        country: 'England',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Kyle Walker',
        country: 'England',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Kierran Trippier',
        country: 'England',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Jude Bellingham',
        country: 'England',
        position: 'Midfielder',
        price: 9
    },
    {
        name: 'Bukayo Saka',
        country: 'England',
        position: 'Midfielder',
        price: 9
    },
    {
        name: 'Phil Foden',
        country: 'England',
        position: 'Midfielder',
        price: 9
    },
    {
        name: 'Declan Rice',
        country: 'England',
        position: 'Midfielder',
        price: 8
    },
    {
        name: 'Cole Palmer',
        country: 'England',
        position: 'Midfielder',
        price: 7
    },
    {
        name: 'Kobbie Mainoo',
        country: 'England',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Harry Kane',
        country: 'England',
        position: 'Forward',
        price: 8
    },
    {
        name: 'Ollie Watkins',
        country: 'England',
        position: 'Forward',
        price: 7
    },
    {
        name: 'Kasper Schmeichel',
        country: 'Denmark',
        position: 'Goalkeeper',
        price: 5
    },
    {
        name: 'Andreas Christensen',
        country: 'Denmark',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Alexander Bah',
        country: 'Denmark',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Jannik Vestergaard',
        country: 'Denmark',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Morten Hjulmand',
        country: 'Denmark',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Pierre-Emile Hojbjerg',
        country: 'Denmark',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Thomas Delaney',
        country: 'Denmark',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Christian Eriksen',
        country: 'Denmark',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Andreas Skov Olsen',
        country: 'Denmark',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Jonas Wind',
        country: 'Denmark',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Yussuf Poulsen',
        country: 'Denmark',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Jacob Bruun Larsen',
        country: 'Denmark',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Jan Oblak',
        country: 'Slovenia',
        position: 'Goalkeeper',
        price: 6
    },
    {
        name: 'Jaka Bijol',
        country: 'Slovenia',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Vanja Drkusic',
        country: 'Slovenia',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Jure Balkovec',
        country: 'Slovenia',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Zan Karnicnik',
        country: 'Slovenia',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Jon Gorenc Stankovic',
        country: 'Slovenia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Adam Gnezda Cerin',
        country: 'Slovenia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Jan Mlakar',
        country: 'Slovenia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Benjamin Verbic',
        country: 'Slovenia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Timi Max Elsnik',
        country: 'Slovenia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Petar Stojanovic',
        country: 'Slovenia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Josip Ilicic',
        country: 'Slovenia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Benjamin Sesko',
        country: 'Slovenia',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Zan Celar',
        country: 'Slovenia',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Andraz Sporar',
        country: 'Slovenia',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Mike Maignan',
        country: 'France',
        position: 'Goalkeeper',
        price: 6
    },
    {
        name: 'William Saliba',
        country: 'France',
        position: 'Defender',
        price: 7
    },
    {
        name: 'Theo Hernandez',
        country: 'France',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Jules Counde',
        country: 'France',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Dayot Upamecano',
        country: 'France',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Aurelien Tchouameni',
        country: 'France',
        position: 'Midfielder',
        price: 8
    },
    {
        name: 'Eduardo Camavinga',
        country: 'France',
        position: 'Midfielder',
        price: 8
    },
    {
        name: 'Adrien Rabiot',
        country: 'France',
        position: 'Midfielder',
        price: 6
    },
    {
        name: "N'Golo Kante",
        country: 'France',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Kylian Mbappe',
        country: 'France',
        position: 'Forward',
        price: 9
    },
    {
        name: 'Marcus Thuram',
        country: 'France',
        position: 'Forward',
        price: 7
    },
    {
        name: 'Randal Kolo Muani',
        country: 'France',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Ousmane Dembele',
        country: 'France',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Antoine Griezmann',
        country: 'France',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Patrick Pentz',
        country: 'Austria',
        position: 'Goalkeeper',
        price: 5
    },
    {
        name: 'Kevin Danso',
        country: 'Austria',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Philipp Lienhart',
        country: 'Austria',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Stefan Posch',
        country: 'Austria',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Maximilian Wober',
        country: 'Austria',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Philipp Mwene',
        country: 'Austria',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Konrad Laimer',
        country: 'Austria',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Marcel Sabitzer',
        country: 'Austria',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Cristoph Baumgartner',
        country: 'Austria',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Nicolas Seiwald',
        country: 'Austria',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Alexander Prass',
        country: 'Austria',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Romano Schmid',
        country: 'Austria',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Michael Gregoritsch',
        country: 'Austria',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Marko Arnautovic',
        country: 'Austria',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Bart Verbruggen',
        country: 'Netherlands',
        position: 'Goalkeeper',
        price: 5
    },
    {
        name: 'Micky van de Ven',
        country: 'Netherlands',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Nathan Ake',
        country: 'Netherlands',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Virgil van Dijk',
        country: 'Netherlands',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Denzel Dumfries',
        country: 'Netherlands',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Stefan de Vrij',
        country: 'Netherlands',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Xavi Simons',
        country: 'Netherlands',
        position: 'Midfielder',
        price: 7
    },
    {
        name: 'Joey Veerman',
        country: 'Netherlands',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Tijjani Reijnders',
        country: 'Netherlands',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Jerdi Schouten',
        country: 'Netherlands',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Cody Gakpo',
        country: 'Netherlands',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Donyell Malen',
        country: 'Netherlands',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Steven Bergvijn',
        country: 'Netherlands',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Memphis Depay',
        country: 'Netherlands',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Koen Casteels',
        country: 'Belgium',
        position: 'Goalkeeper',
        price: 5
    },
    {
        name: 'Wout Faes',
        country: 'Belgium',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Timothy Castagne',
        country: 'Belgium',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Arthur Theate',
        country: 'Belgium',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Jan Vertongen',
        country: 'Belgium',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Jeremy Doku',
        country: 'Belgium',
        position: 'Midfielder',
        price: 7
    },
    {
        name: 'Kevin De Bruyne',
        country: 'Belgium',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Amadou Onana',
        country: 'Belgium',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Charles de Ketelare',
        country: 'Belgium',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Orel Mangala',
        country: 'Belgium',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Yannick Carrasco',
        country: 'Belgium',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Lois Openda',
        country: 'Belgium',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Romelu Lukaku',
        country: 'Belgium',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Dodi Lukebakio',
        country: 'Belgium',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Martin Dubravka',
        country: 'Slovakia',
        position: 'Goalkeeper',
        price: 5
    },
    {
        name: 'David Hancko',
        country: 'Slovakia',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Milan Skriniar',
        country: 'Slovakia',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Denis Vavro',
        country: 'Slovakia',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Norbert Gyomber',
        country: 'Slovakia',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Peter Pekarik',
        country: 'Slovakia',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Stanislav Lobotka',
        country: 'Slovakia',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Tomas Suslov',
        country: 'Slovakia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Laszlo Benes',
        country: 'Slovakia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Ondrej Duda',
        country: 'Slovakia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Matus Bero',
        country: 'Slovakia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Juraj Kucka',
        country: 'Slovakia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Robert Bozenik',
        country: 'Slovakia',
        position: 'Forward',
        price: 5
    },
    {
        name: 'David Strelec',
        country: 'Slovakia',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Ivan Schrantz',
        country: 'Slovakia',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Lubomir Tupta',
        country: 'Slovakia',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Florin Nita',
        country: 'Romania',
        position: 'Goalkeeper',
        price: 5
    },
    {
        name: 'Radu Dragusin',
        country: 'Romania',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Andrei Burca',
        country: 'Romania',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Bogdan Racovitan',
        country: 'Romania',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Andrei Ratiu',
        country: 'Romania',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Vasile Mogos',
        country: 'Romania',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Darius Olaru',
        country: 'Romania',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Nicolae Stanciu',
        country: 'Romania',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Alexandru Cicaldau',
        country: 'Romania',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Razvan Marin',
        country: 'Romania',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Ianis Hagi',
        country: 'Romania',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Marius Marin',
        country: 'Romania',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Dennis Man',
        country: 'Romania',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Denis Dragus',
        country: 'Romania',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Valentin Mihaila',
        country: 'Romania',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Denis Alibec',
        country: 'Romania',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Diogo Costa',
        country: 'Portugal',
        position: 'Goalkeeper',
        price: 6
    },
    {
        name: 'Ruben Dias',
        country: 'Portugal',
        position: 'Defender',
        price: 7
    },
    {
        name: 'Nuno Mendes',
        country: 'Portugal',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Joao Cancelo',
        country: 'Portugal',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Nelson Semedo',
        country: 'Portugal',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Pepe',
        country: 'Portugal',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Bruno Fernandes',
        country: 'Portugal',
        position: 'Midfielder',
        price: 7
    },
    {
        name: 'Bernardo Silva',
        country: 'Portugal',
        position: 'Midfielder',
        price: 7
    },
    {
        name: 'Joao Palhinha',
        country: 'Portugal',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Vitinha',
        country: 'Portugal',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Ruben Neves',
        country: 'Portugal',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Rafael Leao',
        country: 'Portugal',
        position: 'Forward',
        price: 7
    },
    {
        name: 'Diogu Jota',
        country: 'Portugal',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Joao Felix',
        country: 'Portugal',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Francisco Conceicao',
        country: 'Portugal',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Cristiano Ronaldo',
        country: 'Portugal',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Mert Gunok',
        country: 'Turkiye',
        position: 'Goalkeeper',
        price: 5
    },
    {
        name: 'Merih Demiral',
        country: 'Turkiye',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Abdulkerim Bardakci',
        country: 'Turkiye',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Kaan Ayhan',
        country: 'Turkiye',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Mert Muldur',
        country: 'Turkiye',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Samet Akaydin',
        country: 'Turkiye',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Hakan Calhanoglu',
        country: 'Turkiye',
        position: 'Midfielder',
        price: 6,
    },
    {
        name: 'Ferdi Kadioglu',
        country: 'Turkiye',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Arda Guler',
        country: 'Turkiye',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Salih Ozcan',
        country: 'Turkiye',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Okay Yokuslu',
        country: 'Turkiye',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Kenan Yildiz',
        country: 'Turkiye',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Baris Alper Yilmaz',
        country: 'Turkiye',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Kerem Akturkoglu',
        country: 'Turkiye',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Semih Kilicsoy',
        country: 'Turkiye',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Cenk Tosun',
        country: 'Turkiye',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Giorgi Mamardashvili',
        country: 'Georgia',
        position: 'Goalkeeper',
        price: 6
    },
    {
        name: 'Luka Lochoshvili',
        country: 'Georgia',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Lasha Dvali',
        country: 'Georgia',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Otar Kakabadze',
        country: 'Georgia',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Giorgi Gvelesiani',
        country: 'Georgia',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Guram Kashia',
        country: 'Georgia',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Otar Kiteishvili',
        country: 'Georgia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Giorgi Chakvetadze',
        country: 'Georgia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Giorgi Kochorashvili',
        country: 'Georgia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Sandro Altunashvili',
        country: 'Georgia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Nika Kvekveshiri',
        country: 'Georgia',
        position: 'Midfielder',
        price: 5
    },
    {
        name: 'Khvicha Kvaratskhelia',
        country: 'Georgia',
        position: 'Forward',
        price: 7
    },
    {
        name: 'Georges Mikautadze',
        country: 'Georgia',
        position: 'Forward',
        price: 6
    },
    {
        name: 'Zuriko Davitashvili',
        country: 'Georgia',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Budu Zivzivadze',
        country: 'Georgia',
        position: 'Forward',
        price: 5
    },
    {
        name: 'Georgiy Tsitaishvili',
        country: 'Georgia',
        position: 'Forward',
        price: 5
    }
];

export default players;