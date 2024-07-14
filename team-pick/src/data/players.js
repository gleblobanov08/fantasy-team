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
        name: 'Granit Xhaka',
        country: 'Switzerland',
        position: 'Midfielder',
        price: 6
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
        name: 'Robin Le Normand',
        country: 'Spain',
        position: 'Defender',
        price: 6
    },
    {
        name: 'Nacho Fernandez',
        country: 'Spain',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Dani Olmo',
        country: 'Spain',
        position: 'Midfielder',
        price: 6
    },
    {
        name: 'Lamine Yamal',
        country: 'Spain',
        position: 'Midfielder',
        price: 7
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
        name: 'Rodri',
        country: 'Spain',
        position: 'Midfielder',
        price: 8
    },
    {
        name: 'Mikel Merino',
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
        name: 'Pedri',
        country: 'Spain',
        position: 'Midfielder',
        price: 7
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
        name: 'Giovanni Di Lorenzo',
        country: 'Italy',
        position: 'Defender',
        price: 5
    },
    {
        name: 'Federico Dimarco',
        country: 'Italy',
        position: 'Defender',
        price: 6
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
        name: 'Rodri',
        country: 'Spain',
        position: 'Midfielder',
        price: 8
    },
    {
        name: 'Mikel Merino',
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
        name: 'Pedri',
        country: 'Spain',
        position: 'Midfielder',
        price: 7
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
];

export default players;