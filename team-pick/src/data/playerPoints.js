const playerPoints = {
    //ger
    "Manuel Neuer": 8,
    "Joshua Kimmich": 10,
    "Nico Schlotterbeck": 9,
    "Antonio Rudiger": 6,
    "David Raum": 6,
    "Florian Wirtz": 7,
    "Jamal Musiala": 11,
    "Kai Havertz": 11,
    "Robert Andrich": 4,
    "Ilkay Gundogan": 4,
    "Toni Kroos": 6,
    "Leroy Sane": 4,
    "Nicolas Fullkrug": 3,
    "Maximilian Beier": 0,
    //sui
    "Yann Sommer": 8,
    "Manuel Akanji": 8,
    "Fabian Schar": 7,
    "Ricardo Rodriguez": 8,
    "Leonidas Stergiou": 1,
    "Granit Xhaka": 10,
    "Michel Aebischer": 10,
    "Remo Freuler": 11,
    "Ruben Vargas": 13,
    "Dan Ndoye": 4,
    "Fabian Rieder": 5,
    "Xherdan Shaqiri": 1,
    "Breel Embolo": 8,
    "Kwadwo Duah": 1,
    //esp
    "Unai Simon": 8,
    "Robin Le Normand": 4,
    "Marc Cucurella": 11,
    "Daniel Carvajal": 3,
    "Aymeric Laporte": 8,
    "Rodri": 14,
    "Lamine Yamal": 23,
    "Pedri": 2,
    "Dani Olmo": 25,
    "Fabian Ruiz": 17,
    "Nico Williams": 24,
    "Mikel Oyarzabal": 12,
    "Ferran Torres": 1,
    "Alvaro Morata": 10,
    "Joselu": 1,
    //ita
    "Gianluigi Donnaruma": 1,
    "Alessandro Bastoni": 2,
    "Ricardo Calafiori": 0,
    "Federico Dimarco": 0,
    "Giovanni Di Lorenzo": 2,
    "Matteo Darmian": 1,
    "Nicolo Barella": 1,
    "Mattia Zaccagni": 1,
    "Federico Chiesa": 2,
    "Davide Frattesi": 1,
    "Lorenzo Pellegrini": 1,
    "Jorginho": 0,
    "Gianluca Scamacca": 2,
    "Mateo Retegui": 1,
    //eng
    "Jordan Pickford": 8,
    "Trent Alexander-Arnold": 1,
    "Ezri Konsa": 4,
    "John Stones": 6,
    "Marc Guehi": 7,
    "Kyle Walker": 7,
    "Kierran Trippier": 4,
    "Jude Bellingham": 17,
    "Bukayo Saka": 12,
    "Phil Foden": 8,
    "Declan Rice": 15,
    "Cole Palmer": 12,
    "Harry Kane": 16,
    "Ollie Watkins": 6,
    //den
    "Kasper Schmeichel": 1,
    "Andreas Christensen": 1,
    "Alexander Bah": 1,
    "Jannik Vestergaard": 1,
    "Morten Hjulmand": 0,
    "Pierre-Emile Hojbjerg": 2,
    "Thomas Delaney": 2,
    "Christian Eriksen": 3,
    "Andreas Skov Olsen": 2,
    "Jonas Wind": 1,
    "Yussuf Poulsen": 1,
    "Jacob Bruun Larsen": 1,
    //svn
    "Jan Oblak": 13,
    "Jaka Bijol": 5,
    "Vanja Drkusic": 5,
    "Jure Balkovec": 5,
    "Zan Karnicnik": 5,
    "Jon Gorenc Stankovic": 1,
    "Adam Gnezda Cerin": 4,
    "Jan Mlakar": 3,
    "Benjamin Verbic": 1,
    "Timi Max Elsnik": 3,
    "Petar Stojanovic": 3,
    "Josip Ilicic": 2,
    "Benjamin Sesko": 3,
    "Zan Celar": 1,
    "Andraz Sporar": 1,
    //fra
    "Mike Maignan": 15,
    "William Saliba": 12,
    "Theo Hernandez": 13,
    "Jules Counde": 13,
    "Dayot Upamecano": 13,
    "Aurelien Tchouameni": 8,
    "Eduardo Camavinga": 3,
    "Adrien Rabiot": 5,
    "N'Golo Kante": 10,
    "Kylian Mbappe": 11,
    "Marcus Thuram": 3,
    "Randal Kolo Muani": 4,
    "Ousmane Dembele": 3,
    "Antoine Griezmann": 7,
    //ned
    "Patrick Pentz": 2,
    "Kevin Danso": 2,
    "Philipp Lienhart": 1,
    "Stefan Posch": 5,
    "Maximilian Wober": 1,
    "Philipp Mwene": 2,
    "Konrad Laimer": 2,
    "Marcel Sabitzer": 3,
    "Cristoph Baumgartner": 3,
    "Nicolas Seiwald": 3,
    "Alexander Prass": 1,
    "Romano Schmid": 1,
    "Michael Gregoritsch": 6,
    "Marko Arnautovic": 3,
    //ned
    "Bart Verbruggen": 9,
    "Micky van de Ven": 3,
    "Nathan Ake": 8,
    "Virgil van Dijk": 7,
    "Denzel Dumfries": 8,
    "Stefan de Vrij": 15,
    "Xavi Simons": 17,
    "Joey Veerman": 3,
    "Tijjani Reijnders": 8,
    "Jerdi Schouten": 8,
    "Cody Gakpo": 17,
    "Donyell Malen": 14,
    "Steven Bergvijn": 3,
    "Memphis Depay": 8,
    //bel
    "Koen Casteels": 2,
    "Wout Faes": 2,
    "Timothy Castagne": 2,
    "Arthur Theate": 2,
    "Jan Vertongen": 1,
    "Jeremy Doku": 3,
    "Kevin De Bruyne": 3,
    "Amadou Onana": 3,
    "Charles de Ketelare": 1,
    "Orel Mangala": 1,
    "Yannick Carrasco": 2,
    "Lois Openda": 1,
    "Romelu Lukaku": 2,
    "Dodi Lukebakio": 1,
    //svk
    "Martin Dubravka": 2,
    "David Hancko": 3,
    "Milan Skriniar": 2,
    "Denis Vavro": 2,
    "Norbert Gyomber": 0,
    "Peter Pekarik": 1,
    "Stanislav Lobotka": 3,
    "Tomas Suslov": 1,
    "Laszlo Benes": 1,
    "Ondrej Duda": 2,
    "Matus Bero": 1,
    "Juraj Kucka": 2,
    "Robert Bozenik": 2,
    "David Strelec": 5,
    "Ivan Schrantz": 6,
    "Lubomir Tupta": 1,
    //rom
    "Florin Nita": 1,
    "Radu Dragusin": 2,
    "Andrei Burca": 2,
    "Bogdan Racovitan": 2,
    "Andrei Ratiu": 2,
    "Vasile Mogos": 1,
    "Darius Olaru": 1,
    "Nicolae Stanciu": 1,
    "Alexandru Cicaldau": 1,
    "Razvan Marin": 1,
    "Ianis Hagi": 2,
    "Marius Marin": 1,
    "Dennis Man": 3,
    "Denis Dragus": 2,
    "Valentin Mihaila": 1,
    "Denis Alibec": 1,
    //por
    "Diogo Costa": 14,
    "Ruben Dias": 12,
    "Nuno Mendes": 12,
    "Joao Cancelo": 9,
    "Nelson Semedo": 4,
    "Pepe": 11,
    "Bruno Fernandes": 4,
    "Bernardo Silva": 5,
    "Joao Palhinha": 7,
    "Vitinha": 7,
    "Ruben Neves": 2,
    "Rafael Leao": 4,
    "Diogu Jota": 1,
    "Joao Felix": 1,
    "Francisco Conceicao": 2,
    "Cristiano Ronaldo": 4,
    //tur
    "Mert Gunok": 4,
    "Merih Demiral": 14,
    "Abdulkerim Bardakci": 4,
    "Kaan Ayhan": 3,
    "Mert Muldur": 4,
    "Samet Akaydin": 6,
    "Hakan Calhanoglu": 3,
    "Ferdi Kadioglu": 4,
    "Arda Guler": 11,
    "Salih Ozcan": 4,
    "Okay Yokuslu": 2,
    "Kenan Yildiz": 3,
    "Baris Alper Yilmaz": 5,
    "Kerem Akturkoglu": 2,
    "Semih Kilicsoy": 1,
    "Cenk Tosun": 0,
    //geo
    "Giorgi Mamardashvili": 2,
    "Luka Lochoshvili": 1,
    "Lasha Dvali": 2,
    "Otar Kakabadze": 2,
    "Giorgi Gvelesiani": 1,
    "Guram Kashia": 2,
    "Otar Kiteishvili": 2,
    "Giorgi Chakvetadze": 2,
    "Giorgi Kochorashvili": 3,
    "Sandro Altunashvili": 2,
    "Nika Kvekveshiri": 1,
    "Khvicha Kvaratskhelia": 3,
    "Georges Mikautadze": 2,
    "Zuriko Davitashvili": 0,
    "Budu Zivzivadze": 1,
    "Georgiy Tsitaishvili": 1
}

export default playerPoints;