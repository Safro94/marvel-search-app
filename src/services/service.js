import axios from '../helpers/axios';

export default class Service {
  static GetCharacters = async (name) => {
    // const res = await axios().get(
    //   `${process.env.REACT_APP_MARVEL_URL}/characters?ts=${process.env.REACT_APP_MARVEL_API_TS}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_HASH}&nameStartsWith=${name}`
    // );

    const res = {
      status: 200,
      data: {
        code: 200,
        status: 'Ok',
        copyright: '© 2020 MARVEL',
        attributionText: 'Data provided by Marvel. © 2020 MARVEL',
        attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2020 MARVEL</a>',
        etag: 'a34a99f0f193a1141fd92560b58e99cb3a4ac2b3',
        data: {
          offset: 0,
          limit: 20,
          total: 1493,
          count: 20,
          results: [
            {
              id: 1011334,
              name: '3-D Man',
              description: '',
              modified: '2014-04-29T14:18:17-0400',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
              comics: {
                available: 12,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
                    name: 'Avengers: The Initiative (2007) #14',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/24571',
                    name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/21546',
                    name: 'Avengers: The Initiative (2007) #15',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/21741',
                    name: 'Avengers: The Initiative (2007) #16',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/21975',
                    name: 'Avengers: The Initiative (2007) #17',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/22299',
                    name: 'Avengers: The Initiative (2007) #18',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/22300',
                    name: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/22506',
                    name: 'Avengers: The Initiative (2007) #19',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/8500',
                    name: 'Deadpool (1997) #44',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
                    name: 'Marvel Premiere (1972) #35',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/10224',
                    name: 'Marvel Premiere (1972) #36',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/10225',
                    name: 'Marvel Premiere (1972) #37',
                  },
                ],
                returned: 12,
              },
            },
            {
              id: 1017100,
              name: 'A-Bomb (HAS)',
              description:
                "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
              modified: '2013-09-18T15:54:04-0400',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017100',
              comics: {
                available: 3,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/40632',
                    name: 'Hulk (2008) #53',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/40630',
                    name: 'Hulk (2008) #54',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/40628',
                    name: 'Hulk (2008) #55',
                  },
                ],
                returned: 3,
              },
            },
            {
              id: 1009144,
              name: 'A.I.M.',
              description: 'AIM is a terrorist organization bent on destroying the world.',
              modified: '2013-10-17T14:41:30-0400',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009144',
              comics: {
                available: 49,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009144/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/36763',
                    name: 'Ant-Man & the Wasp (2010) #3',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17553',
                    name: 'Avengers (1998) #67',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/7340',
                    name: 'Avengers (1963) #87',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/4214',
                    name: 'Avengers and Power Pack Assemble! (2006) #2',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/63217',
                    name: 'Avengers and Power Pack (2017) #3',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/63218',
                    name: 'Avengers and Power Pack (2017) #4',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/63219',
                    name: 'Avengers and Power Pack (2017) #5',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/63220',
                    name: 'Avengers and Power Pack (2017) #6',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/64790',
                    name: 'Avengers by Brian Michael Bendis: The Complete Collection Vol. 2 (Trade Paperback)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/1170',
                    name: 'Avengers Vol. 2: Red Zone (Trade Paperback)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/1214',
                    name: 'Avengers Vol. II: Red Zone (Trade Paperback)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/12787',
                    name: 'Captain America (1998) #28',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/7513',
                    name: 'Captain America (1968) #132',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/7514',
                    name: 'Captain America (1968) #133',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/65466',
                    name: 'Captain America by Mark Waid, Ron Garney & Andy Kubert (Hardcover)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/20367',
                    name: 'Defenders (1972) #57',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/31068',
                    name: 'Incredible Hulks (2010) #606 (VARIANT)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/46168',
                    name: 'Indestructible Hulk (2012) #3',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/43944',
                    name: 'Iron Man (2012) #1',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/9544',
                    name: 'Iron Man (1968) #295',
                  },
                ],
                returned: 20,
              },
            },
            {
              id: 1010699,
              name: 'Aaron Stack',
              description: '',
              modified: '1969-12-31T19:00:00-0500',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010699',
              comics: {
                available: 14,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010699/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/40776',
                    name: 'Dark Avengers (2012) #177',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/40773',
                    name: 'Dark Avengers (2012) #179',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/40774',
                    name: 'Dark Avengers (2012) #180',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/40778',
                    name: 'Dark Avengers (2012) #181',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/40787',
                    name: 'Dark Avengers (2012) #182',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/40786',
                    name: 'Dark Avengers (2012) #183',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/38073',
                    name: 'Hulk (2008) #43',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/11910',
                    name: 'Universe X (2000) #6',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/11911',
                    name: 'Universe X (2000) #7',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/11912',
                    name: 'Universe X (2000) #8',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/11913',
                    name: 'Universe X (2000) #9',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/11903',
                    name: 'Universe X (2000) #10',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/11904',
                    name: 'Universe X (2000) #11',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/11905',
                    name: 'Universe X (2000) #12',
                  },
                ],
                returned: 14,
              },
            },
            {
              id: 1009146,
              name: 'Abomination (Emil Blonsky)',
              description:
                'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
              modified: '2012-03-20T12:32:12-0400',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009146',
              comics: {
                available: 53,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009146/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17547',
                    name: 'Avengers (1998) #61',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17548',
                    name: 'Avengers (1998) #62',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/1098',
                    name: 'Avengers Vol. 1: World Trust (Trade Paperback)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/8557',
                    name: 'Earth X (1999) #7',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/4241',
                    name: 'Earth X (New (Trade Paperback)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/20863',
                    name: 'Hulk (2008) #3',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/2499',
                    name: 'Hulk: Destruction (2005) #4',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14424',
                    name: 'Hulk (1999) #24',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14425',
                    name: 'Hulk (1999) #25',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14428',
                    name: 'Hulk (1999) #28',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14450',
                    name: 'Hulk (1999) #50',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14451',
                    name: 'Hulk (1999) #51',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14453',
                    name: 'Hulk (1999) #53',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14454',
                    name: 'Hulk (1999) #54',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/8948',
                    name: 'Incredible Hulk (1962) #137',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/8982',
                    name: 'Incredible Hulk (1962) #171',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/9005',
                    name: 'Incredible Hulk (1962) #194',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/9006',
                    name: 'Incredible Hulk (1962) #195',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/9007',
                    name: 'Incredible Hulk (1962) #196',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/9011',
                    name: 'Incredible Hulk (1962) #200',
                  },
                ],
                returned: 20,
              },
            },
            {
              id: 1016823,
              name: 'Abomination (Ultimate)',
              description: '',
              modified: '2012-07-10T19:11:52-0400',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1016823',
              comics: {
                available: 2,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1016823/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/40638',
                    name: 'Hulk (2008) #50',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/15717',
                    name: 'Ultimate X-Men (2000) #26',
                  },
                ],
                returned: 2,
              },
            },
            {
              id: 1009148,
              name: 'Absorbing Man',
              description: '',
              modified: '2013-10-24T14:32:08-0400',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009148',
              comics: {
                available: 91,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009148/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/43507',
                    name: 'A+X (2012) #8',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/7045',
                    name: 'Avengers (1963) #183',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/7046',
                    name: 'Avengers (1963) #184',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/7142',
                    name: 'Avengers (1963) #270',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/36481',
                    name: 'Avengers Academy (2010) #16',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/36480',
                    name: 'Avengers Academy (2010) #17',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/36479',
                    name: 'Avengers Academy (2010) #18',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/36484',
                    name: 'Avengers Academy (2010) #19',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17776',
                    name: 'Avengers Annual (1967) #20',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/63662',
                    name: 'Black Bolt (2017) #3',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/64278',
                    name: 'Black Bolt (2017) #4',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/66533',
                    name: 'Black Bolt (2017) #11',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/65327',
                    name: 'Black Bolt Vol. 1: Hard Time (Trade Paperback)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/12783',
                    name: 'Captain America (1998) #24',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/20427',
                    name: 'Dazzler (1981) #18',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/20428',
                    name: 'Dazzler (1981) #19',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/8499',
                    name: 'Deadpool (1997) #43',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/15541',
                    name: 'Fantastic Four (1998) #22',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/13151',
                    name: 'Fantastic Four (1961) #330',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/41433',
                    name: 'Fear Itself (2010) #2 (3rd Printing Variant)',
                  },
                ],
                returned: 20,
              },
            },
            {
              id: 1009149,
              name: 'Abyss',
              description: '',
              modified: '2014-04-29T14:10:43-0400',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009149',
              comics: {
                available: 8,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009149/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/13943',
                    name: 'Uncanny X-Men (1963) #402',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/13945',
                    name: 'Uncanny X-Men (1963) #404',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/13946',
                    name: 'Uncanny X-Men (1963) #405',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/13947',
                    name: 'Uncanny X-Men (1963) #406',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/13970',
                    name: 'Uncanny X-Men (1963) #429',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/13972',
                    name: 'Uncanny X-Men (1963) #431',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/12386',
                    name: 'X-Men: Alpha (1995) #1',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/2539',
                    name: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)',
                  },
                ],
                returned: 8,
              },
            },
            {
              id: 1010903,
              name: 'Abyss (Age of Apocalypse)',
              description: '',
              modified: '1969-12-31T19:00:00-0500',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010903',
              comics: {
                available: 3,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010903/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/18099',
                    name: 'Weapon X (1995) #1',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/12386',
                    name: 'X-Men: Alpha (1995) #1',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/2539',
                    name: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)',
                  },
                ],
                returned: 3,
              },
            },
            {
              id: 1011266,
              name: 'Adam Destine',
              description: '',
              modified: '1969-12-31T19:00:00-0500',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011266',
              comics: {
                available: 0,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011266/comics',
                items: [],
                returned: 0,
              },
            },
            {
              id: 1010354,
              name: 'Adam Warlock',
              description:
                'Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.',
              modified: '2013-08-07T13:49:06-0400',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010354',
              comics: {
                available: 188,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010354/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/62151',
                    name: 'All-New Guardians of the Galaxy Vol. 3: Infinity Quest (Trade Paperback)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17271',
                    name: 'Annihilation: Conquest (2007) #1',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17405',
                    name: 'Annihilation: Conquest (2007) #2',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17645',
                    name: 'Annihilation: Conquest (2007) #3',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/20686',
                    name: 'Annihilation: Conquest (2007) #4',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/20885',
                    name: 'Annihilation: Conquest (2007) #5',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/21016',
                    name: 'Annihilation: Conquest (2007) #6',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/12412',
                    name: 'Avengers Forever (1998) #9',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/1033',
                    name: 'Avengers Legends Vol. I: Avengers Forever (Trade Paperback)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/20731',
                    name: 'CLANDESTINE CLASSIC PREMIERE HC (Hardcover)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/20187',
                    name: 'Doctor Strange, Sorcerer Supreme (1988) #27',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/20193',
                    name: 'Doctor Strange, Sorcerer Supreme (1988) #32',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/20197',
                    name: 'Doctor Strange, Sorcerer Supreme (1988) #36',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/8552',
                    name: 'Earth X (1999) #2',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/8550',
                    name: 'Earth X (1999) #11',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/4241',
                    name: 'Earth X (New (Trade Paperback)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/12975',
                    name: 'Fantastic Four (1961) #172',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/13195',
                    name: 'Fantastic Four (1961) #370',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/25305',
                    name: 'Guardians of the Galaxy (2008) #17',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/65547',
                    name: 'All-New Guardians of the Galaxy (2017) #150',
                  },
                ],
                returned: 20,
              },
            },
            {
              id: 1010846,
              name: 'Aegis (Trey Rollins)',
              description: '',
              modified: '1969-12-31T19:00:00-0500',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d',
                extension: 'gif',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010846',
              comics: {
                available: 0,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010846/comics',
                items: [],
                returned: 0,
              },
            },
            {
              id: 1011297,
              name: 'Agent Brand',
              description: '',
              modified: '2013-10-24T13:09:30-0400',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
              comics: {
                available: 17,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011297/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/5477',
                    name: 'Astonishing X-Men (2004) #19 (Variant)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/6120',
                    name: 'Astonishing X-Men (2004) #21',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/6309',
                    name: 'Astonishing X-Men (2004) #22',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/16119',
                    name: 'Astonishing X-Men (2004) #23',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17353',
                    name: 'Astonishing X-Men (2004) #24',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/24503',
                    name: 'Astonishing X-Men (2004) #32',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/24504',
                    name: 'Astonishing X-Men (2004) #33',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/38318',
                    name: 'Astonishing X-Men (2004) #38',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/38319',
                    name: 'Astonishing X-Men (2004) #40',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/40024',
                    name: 'Astonishing X-Men (2004) #40 (I Am Captain America Variant)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/45950',
                    name: 'Cable and X-Force (2012) #8',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/39890',
                    name: 'Heralds (Trade Paperback)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/26232',
                    name: 'S.W.O.R.D. (2009) #2',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/26233',
                    name: 'S.W.O.R.D. (2009) #3',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/26234',
                    name: 'S.W.O.R.D. (2009) #4',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/30518',
                    name: 'S.W.O.R.D. (2009) #5',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/61430',
                    name: 'The Mighty Captain Marvel (2017) #5',
                  },
                ],
                returned: 17,
              },
            },
            {
              id: 1011031,
              name: 'Agent X (Nijo)',
              description:
                "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother.",
              modified: '1969-12-31T19:00:00-0500',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011031',
              comics: {
                available: 18,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011031/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17702',
                    name: 'Agent X (2002) #1',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17709',
                    name: 'Agent X (2002) #2',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17710',
                    name: 'Agent X (2002) #3',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17711',
                    name: 'Agent X (2002) #4',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17712',
                    name: 'Agent X (2002) #5',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17713',
                    name: 'Agent X (2002) #6',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17714',
                    name: 'Agent X (2002) #7',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17715',
                    name: 'Agent X (2002) #8',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17716',
                    name: 'Agent X (2002) #9',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17703',
                    name: 'Agent X (2002) #10',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17704',
                    name: 'Agent X (2002) #11',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17705',
                    name: 'Agent X (2002) #12',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17706',
                    name: 'Agent X (2002) #13',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/17707',
                    name: 'Agent X (2002) #14',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/394',
                    name: 'Agent X (2002) #15',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/1649',
                    name: 'Cable & Deadpool (2004) #12',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/21845',
                    name: 'Cable & Deadpool (2004) #46 (Zombie Variant)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/5761',
                    name: 'Cable & Deadpool Vol. 2: The Burnt Offering (Trade Paperback)',
                  },
                ],
                returned: 18,
              },
            },
            {
              id: 1009150,
              name: 'Agent Zero',
              description: '',
              modified: '1969-12-31T19:00:00-0500',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009150',
              comics: {
                available: 28,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009150/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/18082',
                    name: 'Weapon X (2002) #2',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/18092',
                    name: 'Weapon X (2002) #3',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/18074',
                    name: 'Weapon X (2002) #12',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/246',
                    name: 'Weapon X (2002) #13',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/2204',
                    name: 'Weapon X: Days of Future Now (2005) #1',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/2324',
                    name: 'Weapon X: Days of Future Now (2005) #2',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/2438',
                    name: 'Weapon X: Days of Future Now (2005) #3',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/2439',
                    name: 'Weapon X: Days of Future Now (2005) #4',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/3016',
                    name: 'Weapon X: Days of Future Now (2005) #5',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/3357',
                    name: 'Weapon X: Days of Future Now (Trade Paperback)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/18408',
                    name: 'WEAPON X: THE DRAFT - AGENT ZERO 1 (2002) #1',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14182',
                    name: 'Wolverine (1988) #60',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14183',
                    name: 'Wolverine (1988) #61',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14184',
                    name: 'Wolverine (1988) #62',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14185',
                    name: 'Wolverine (1988) #63',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14186',
                    name: 'Wolverine (1988) #64',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14189',
                    name: 'Wolverine (1988) #67',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14190',
                    name: 'Wolverine (1988) #68',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14211',
                    name: 'Wolverine (1988) #87',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/14107',
                    name: 'Wolverine (1988) #163',
                  },
                ],
                returned: 20,
              },
            },
            {
              id: 1011198,
              name: 'Agents of Atlas',
              description: '',
              modified: '2016-02-03T10:25:22-0500',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011198',
              comics: {
                available: 43,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011198/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/77001',
                    name: 'Agents of Atlas (2019) #1',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/23659',
                    name: 'Agents of Atlas (2009) #1',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/4801',
                    name: 'Agents of Atlas (2006) #1',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/23660',
                    name: 'Agents of Atlas (2009) #1 (50/50 COVER)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/5089',
                    name: 'Agents of Atlas (2006) #2',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/23825',
                    name: 'Agents of Atlas (2009) #2',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/27402',
                    name: 'Agents of Atlas (2009) #2 (BACHALO 2ND PRINTING VARIANT)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/23824',
                    name: 'Agents of Atlas (2009) #2 (MCGUINNESS VARIANT)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/5241',
                    name: 'Agents of Atlas (2006) #3',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/24015',
                    name: 'Agents of Atlas (2009) #3',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/24017',
                    name: 'Agents of Atlas (2009) #3 (Wolverine Art Appreciation Variant)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/24016',
                    name: 'Agents of Atlas (2009) #3 (MCGUINNESS VARIANT)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/24219',
                    name: 'Agents of Atlas (2009) #4',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/5404',
                    name: 'Agents of Atlas (2006) #4',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/5665',
                    name: 'Agents of Atlas (2006) #5',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/24221',
                    name: 'Agents of Atlas (2009) #5',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/24222',
                    name: 'Agents of Atlas (2009) #5 (MCGUINNESS VARIANT)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/5842',
                    name: 'Agents of Atlas (2006) #6',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/24360',
                    name: 'Agents of Atlas (2009) #6',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/24361',
                    name: 'Agents of Atlas (2009) #7',
                  },
                ],
                returned: 20,
              },
            },
            {
              id: 1011175,
              name: 'Aginar',
              description: '',
              modified: '1969-12-31T19:00:00-0500',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011175',
              comics: {
                available: 0,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011175/comics',
                items: [],
                returned: 0,
              },
            },
            {
              id: 1011136,
              name: 'Air-Walker (Gabriel Lan)',
              description: '',
              modified: '1969-12-31T19:00:00-0500',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011136',
              comics: {
                available: 4,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011136/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/4108',
                    name: 'Annihilation: Silver Surfer (2006) #1',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/5589',
                    name: 'Heroes Reborn: Iron Man (Trade Paperback)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/16330',
                    name: 'Iron Man (1996) #11',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/16331',
                    name: 'Iron Man (1996) #12',
                  },
                ],
                returned: 4,
              },
            },
            {
              id: 1011176,
              name: 'Ajak',
              description: '',
              modified: '1969-12-31T19:00:00-0500',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011176',
              comics: {
                available: 4,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011176/comics',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/21175',
                    name: 'Incredible Hercules (2008) #117',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/21324',
                    name: 'Incredible Hercules (2008) #118',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/21505',
                    name: 'Incredible Hercules (2008) #119',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/comics/21707',
                    name: 'Incredible Hercules (2008) #120',
                  },
                ],
                returned: 4,
              },
            },
            {
              id: 1010870,
              name: 'Ajaxis',
              description: '',
              modified: '1969-12-31T19:00:00-0500',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/70/4c0035adc7d3a',
                extension: 'jpg',
              },
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010870',
              comics: {
                available: 0,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010870/comics',
                items: [],
                returned: 0,
              },
            },
          ],
        },
      },
    };

    return res && res.status === 200 ? res.data.data.results : [];
  };

  static GetCharacterByExactName = async (name) => {
    const res = await axios().get(
      `${process.env.REACT_APP_MARVEL_URL}/characters?ts=${process.env.REACT_APP_MARVEL_API_TS}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_HASH}&name=${name}`
    );

    // const res = {
    //   status: 200,
    //   data: {
    //     data: {
    //       offset: 0,
    //       limit: 20,
    //       total: 1,
    //       count: 1,
    //       results: [
    //         {
    //           id: 1009610,
    //           name: 'Spider-Man',
    //           description:
    //             'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.',
    //           modified: '2020-03-19T14:50:52-0400',
    //           thumbnail: {
    //             path:
    //               'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b',
    //             extension: 'jpg',
    //           },
    //           resourceURI:
    //             'http://gateway.marvel.com/v1/public/characters/1009610',
    //           comics: {
    //             available: 3928,
    //             collectionURI:
    //               'http://gateway.marvel.com/v1/public/characters/1009610/comics',
    //             items: [
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/62304',
    //                 name:
    //                   'Spider-Man: 101 Ways to End the Clone Saga (1997) #1',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/78503',
    //                 name: '2099 Alpha (2019) #1',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/60151',
    //                 name: 'A YEAR OF MARVELS TPB (Trade Paperback)',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/43501',
    //                 name: 'A+X (2012) #4',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/76012',
    //                 name: 'Absolute Carnage (2019) #1',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/76014',
    //                 name: 'Absolute Carnage (2019) #2',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/78960',
    //                 name: 'Absolute Carnage (2019) #5',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/77071',
    //                 name: 'Absolute Carnage: Symbiote Spider-Man (2019) #1',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/320',
    //                 name:
    //                   'Actor Presents Spider-Man and the Incredible Hulk (2003) #1',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/76863',
    //                 name: 'Adventures of Spider-Man (1996) #1',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/76864',
    //                 name: 'Adventures of Spider-Man (1996) #2',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/76865',
    //                 name: 'Adventures of Spider-Man (1996) #3',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/76866',
    //                 name: 'Adventures of Spider-Man (1996) #4',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/76867',
    //                 name: 'Adventures of Spider-Man (1996) #5',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/76868',
    //                 name: 'Adventures of Spider-Man (1996) #6',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/76869',
    //                 name: 'Adventures of Spider-Man (1996) #7',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/76870',
    //                 name: 'Adventures of Spider-Man (1996) #8',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/76871',
    //                 name: 'Adventures of Spider-Man (1996) #9',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/76872',
    //                 name: 'Adventures of Spider-Man (1996) #10',
    //               },
    //               {
    //                 resourceURI:
    //                   'http://gateway.marvel.com/v1/public/comics/76873',
    //                 name: 'Adventures of Spider-Man (1996) #11',
    //               },
    //             ],
    //             returned: 20,
    //           },
    //         },
    //       ],
    //     },
    //   },
    // };

    return res && res.status === 200 ? res.data.data.results : [];
  };

  static GetComics = async (characterId) => {
    const res = await axios().get(
      `${process.env.REACT_APP_MARVEL_URL}/characters/${characterId}/comics?ts=${process.env.REACT_APP_MARVEL_API_TS}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_HASH}&orderBy=-onsaleDate`
    );
    // const res = {
    //   status: 200,
    //   data: {
    //     code: 200,
    //     status: 'Ok',
    //     copyright: '© 2020 MARVEL',
    //     attributionText: 'Data provided by Marvel. © 2020 MARVEL',
    //     attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2020 MARVEL</a>',
    //     etag: '196de7805e8cc68d7a8868273771ffafa5d11990',
    //     data: {
    //       offset: 0,
    //       limit: 20,
    //       total: 17,
    //       count: 17,
    //       results: [
    //         {
    //           id: 61430,
    //           digitalId: 45087,
    //           title: 'The Mighty Captain Marvel (2017) #5',
    //           issueNumber: 5,
    //           variantDescription: '',
    //           description:
    //             'SECRET EMPIRE TIE-IN! The Chitauri fleet has nearly reached Earth space and it’s up to Captain Marvel to stop it. Taking on an entire armada of alien spacecraft is a tall order for Carol and the crew of Alpha Flight Space Station. Luckily they’ve got some help from their Sisters (and brothers) in arms.',
    //           modified: '2017-05-19T12:14:24-0400',
    //           isbn: '',
    //           upc: '75960608606100511',
    //           diamondCode: 'MAR170930',
    //           ean: '',
    //           issn: '',
    //           format: 'Comic',
    //           pageCount: 32,
    //           textObjects: [
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 'SECRET EMPIRE TIE-IN! The Chitauri fleet has nearly reached Earth space and it’s up to Captain Marvel to stop it. Taking on an entire armada of alien spacecraft is a tall order for Carol and the crew of Alpha Flight Space Station. Luckily they’ve got some help from their Sisters (and brothers) in arms.',
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/61430',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/61430/the_mighty_captain_marvel_2017_5?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'purchase',
    //               url:
    //                 'http://comicstore.marvel.com/The-Mighty-Captain-Marvel-5/digital-comic/45087?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=45087&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'inAppLink',
    //               url:
    //                 'https://applink.marvel.com/issue/45087?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/22551',
    //             name: 'The Mighty Captain Marvel (2017 - 2018)',
    //           },
    //           variants: [],
    //           collections: [],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2017-05-24T00:00:00-0400',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '2017-05-01T00:00:00-0400',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2017-11-27T00:00:00-0500',
    //             },
    //             {
    //               type: 'digitalPurchaseDate',
    //               date: '2017-05-24T00:00:00-0400',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 3.99,
    //             },
    //             {
    //               type: 'digitalPurchasePrice',
    //               price: 3.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/591c9b3e3a069',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/591c9b3e3a069',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 5,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/61430/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/11841',
    //                 name: 'Sana Amanat',
    //                 role: 'editor',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
    //                 name: 'Vc Joe Caramagna',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/12981',
    //                 name: 'Michael Garland',
    //                 role: 'colorist',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/12948',
    //                 name: 'Margaret Stohl',
    //                 role: 'writer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/12832',
    //                 name: 'Elizabeth Torque',
    //                 role: 'penciler (cover)',
    //               },
    //             ],
    //             returned: 5,
    //           },
    //           characters: {
    //             available: 3,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/61430/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010338',
    //                 name: 'Captain Marvel (Carol Danvers)',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011299',
    //                 name: 'Guardians of the Galaxy',
    //               },
    //             ],
    //             returned: 3,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/61430/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/133289',
    //                 name: 'cover from Captain Marvel (2016) #5',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/133290',
    //                 name: 'story from Captain Marvel (2016) #5',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/61430/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 45950,
    //           digitalId: 29481,
    //           title: 'Cable and X-Force (2012) #8',
    //           issueNumber: 8,
    //           variantDescription: '',
    //           description:
    //             '<ul><li>Cable and his team go into space facing down an armada!</li><li>Will this put them face-to-face with the UNCANNY AVENGERS, who are still hot in pursuit?</li></ul>',
    //           modified: '2014-05-15T18:00:44-0400',
    //           isbn: '',
    //           upc: '75960607915500811',
    //           diamondCode: 'MAR130665',
    //           ean: '',
    //           issn: '',
    //           format: 'Comic',
    //           pageCount: 32,
    //           textObjects: [
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 '<ul><li>Cable and his team go into space facing down an armada!</li><li>Will this put them face-to-face with the UNCANNY AVENGERS, who are still hot in pursuit?</li></ul>',
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/45950',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/45950/cable_and_x-force_2012_8?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'purchase',
    //               url:
    //                 'http://comicstore.marvel.com/Cable-and-X-Force-8/digital-comic/29481?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=29481&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'inAppLink',
    //               url:
    //                 'https://applink.marvel.com/issue/29481?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/16907',
    //             name: 'Cable and X-Force (2012 - 2014)',
    //           },
    //           variants: [
    //             {
    //               resourceURI: 'http://gateway.marvel.com/v1/public/comics/47460',
    //               name: 'Cable and X-Force (2012) #8 (X-&#8203;Men 50th Anniversary Variant)',
    //             },
    //           ],
    //           collections: [],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2013-05-15T00:00:00-0400',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '2013-05-01T00:00:00-0400',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2013-11-11T00:00:00-0500',
    //             },
    //             {
    //               type: 'digitalPurchaseDate',
    //               date: '2013-05-15T00:00:00-0400',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 3.99,
    //             },
    //             {
    //               type: 'digitalPurchasePrice',
    //               price: 1.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/c0/5b2a5186398ed',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/c0/5b2a5186398ed',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 6,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/45950/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/11901',
    //                 name: 'Dennis "Hopeless" Hallum',
    //                 role: 'writer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/8504',
    //                 name: "Frank D'ARMATA",
    //                 role: 'colorist',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/11737',
    //                 name: 'Daniel Ketchum',
    //                 role: 'editor',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
    //                 name: 'Nick Lowe',
    //                 role: 'editor',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/11757',
    //                 name: 'Salvador Larroca',
    //                 role: 'penciller (cover)',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/8775',
    //                 name: 'Joe Sabino',
    //                 role: 'letterer',
    //               },
    //             ],
    //             returned: 6,
    //           },
    //           characters: {
    //             available: 9,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/45950/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010366',
    //                 name: 'Boom Boom',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009214',
    //                 name: 'Cable',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
    //                 name: 'Colossus',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009277',
    //                 name: 'Domino',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009309',
    //                 name: 'Forge',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011428',
    //                 name: 'Hope Summers',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011086',
    //                 name: 'Nemesis',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009724',
    //                 name: 'X-Force',
    //               },
    //             ],
    //             returned: 9,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/45950/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/103418',
    //                 name: 'Cable and X-Force (2012) #8',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/103419',
    //                 name: 'story from Cable and X-Force (2012) #8',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/45950/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 40024,
    //           digitalId: 0,
    //           title: 'Astonishing X-Men (2004) #40 (I Am Captain America Variant)',
    //           issueNumber: 40,
    //           variantDescription: 'I Am Captain America Variant',
    //           description:
    //             '"MEANWHILE" Part 2 (of 3). The Brood are terrorizing the X-Men again, but wiping out the terrifying parasitic aliens isn\'t an option as they are an Endangered Species. Oh, and Agent Brand has been infected. Christos Gage (AVENGERS ACADEMY) and Juan Bobillo (SHE-HULK) bring you part 2 of the alternating story arc of the most thought-provoking X-Book!',
    //           modified: '2011-07-22T16:53:37-0400',
    //           isbn: '',
    //           upc: '5960605543-04021',
    //           diamondCode: '',
    //           ean: '',
    //           issn: '1549-8638',
    //           format: 'Comic',
    //           pageCount: 32,
    //           textObjects: [
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 '"MEANWHILE" Part 2 (of 3). The Brood are terrorizing the X-Men again, but wiping out the terrifying parasitic aliens isn\'t an option as they are an Endangered Species. Oh, and Agent Brand has been infected. Christos Gage (AVENGERS ACADEMY) and Juan Bobillo (SHE-HULK) bring you part 2 of the alternating story arc of the most thought-provoking X-Book!',
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/40024',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/40024/astonishing_x-men_2004_40_i_am_captain_america_variant/i_am_captain_america_variant?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
    //             name: 'Astonishing X-Men (2004 - 2013)',
    //           },
    //           variants: [
    //             {
    //               resourceURI: 'http://gateway.marvel.com/v1/public/comics/38319',
    //               name: 'Astonishing X-Men (2004) #40',
    //             },
    //           ],
    //           collections: [],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2011-07-27T00:00:00-0400',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '2011-07-13T00:00:00-0400',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 3.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/00/4e298227dc944',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/00/4e298227dc944',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 4,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/40024/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/239',
    //                 name: 'Juan Bobillo',
    //                 role: 'penciller',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/11765',
    //                 name: 'Christos Gage',
    //                 role: 'writer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
    //                 name: 'Nick Lowe',
    //                 role: 'editor',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/649',
    //                 name: 'Ed Mcguinness',
    //                 role: 'penciller (cover)',
    //               },
    //             ],
    //             returned: 4,
    //           },
    //           characters: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/40024/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
    //                 name: 'X-Men',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/40024/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/90818',
    //                 name: 'Cover #90818',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/90819',
    //                 name: 'Interior #90819',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/40024/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 38319,
    //           digitalId: 22856,
    //           title: 'Astonishing X-Men (2004) #40',
    //           issueNumber: 40,
    //           variantDescription: '',
    //           description:
    //             "The Brood are terrorizing the X-Men again, but wiping out the terrifying parasitic aliens isn't an option as they are an endangered species. Also, Agent Brand has been infected!",
    //           modified: '2012-07-25T12:16:54-0400',
    //           isbn: '',
    //           upc: '5960605543-04011',
    //           diamondCode: '',
    //           ean: '',
    //           issn: '1549-8638',
    //           format: 'Comic',
    //           pageCount: 32,
    //           textObjects: [
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 '"MEANWHILE" Part 2 (of 3). The Brood are terrorizing the X-Men again, but wiping out the terrifying parasitic aliens isn\'t an option as they are an Endangered Species. Oh, and Agent Brand has been infected. Christos Gage (AVENGERS ACADEMY) and Juan Bobillo (SHE-HULK) bring you part 2 of the alternating story arc of the most thought-provoking X-Book!',
    //             },
    //             {
    //               type: 'issue_preview_text',
    //               language: 'en-us',
    //               text:
    //                 "The Brood are terrorizing the X-Men again, but wiping out the terrifying parasitic aliens isn't an option as they are an endangered species. Also, Agent Brand has been infected!",
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/38319',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/38319/astonishing_x-men_2004_40?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=22856&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
    //             name: 'Astonishing X-Men (2004 - 2013)',
    //           },
    //           variants: [
    //             {
    //               resourceURI: 'http://gateway.marvel.com/v1/public/comics/40024',
    //               name: 'Astonishing X-Men (2004) #40 (I Am Captain America Variant)',
    //             },
    //           ],
    //           collections: [],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2011-07-27T00:00:00-0400',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '2011-07-13T00:00:00-0400',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2012-05-16T00:00:00-0400',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 3.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/00/56e6e5a2abd14',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/00/56e6e5a2abd14',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 7,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/38319/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/239',
    //                 name: 'Juan Bobillo',
    //                 role: 'penciller',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
    //                 name: 'Vc Joe Caramagna',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/11765',
    //                 name: 'Christos Gage',
    //                 role: 'writer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/11757',
    //                 name: 'Salvador Larroca',
    //                 role: 'penciller (cover)',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
    //                 name: 'Nick Lowe',
    //                 role: 'editor',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/240',
    //                 name: 'Marcelo Sosa',
    //                 role: 'inker',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/500',
    //                 name: 'Christopher Sotomayor',
    //                 role: 'colorist',
    //               },
    //             ],
    //             returned: 7,
    //           },
    //           characters: {
    //             available: 7,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/38319/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
    //                 name: 'Beast',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
    //                 name: 'Colossus',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009508',
    //                 name: 'Kitty Pryde',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009629',
    //                 name: 'Storm',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
    //                 name: 'Wolverine',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
    //                 name: 'X-Men',
    //               },
    //             ],
    //             returned: 7,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/38319/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/90853',
    //                 name: ' Interior  Astonishing X-Men (2004) #40',
    //                 type: 'interiorStory',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/90944',
    //                 name: 'ASTONISHING X-MEN (2004) #40',
    //                 type: 'cover',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/38319/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 38318,
    //           digitalId: 21093,
    //           title: 'Astonishing X-Men (2004) #38',
    //           issueNumber: 38,
    //           variantDescription: '',
    //           description:
    //             'Cyclops, Emma, Wolverine and Armor are off in Japan dealing with giant monsters. Meanwhile, something dire happens that demands the attention of the X-Men. Storm, Colossus and Kitty Pryde join Beast and Agent Brand to take on the Brood.',
    //           modified: '2012-07-25T12:16:20-0400',
    //           isbn: '',
    //           upc: '5960605543-03811',
    //           diamondCode: 'MAR110721',
    //           ean: '',
    //           issn: '1549-8638',
    //           format: 'Comic',
    //           pageCount: 32,
    //           textObjects: [
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 '"MEANWHILE"\nCyclops, Emma, Wolverine and Armor are off in Japan dealing with giant monsters. Meanwhile, something dire happens that demands the attention of the X-Men. With their leaders away, should the X-Men deny their help? HELL NO! Storm, Colossus and Kitty Pryde join Beast and Agent Brand to take on the Brood. But when intergalactic law prevents the destruction of an enemy who can only be defeated by extermination, the X-Men have a problem. Are Storm and her crew up to the task? And what is Cyclops going to say when he learns of this? This adventure takes place at the same time as the MONSTROUS arc concurrently happening in Astonishing X-Men in a way never before seen!',
    //             },
    //             {
    //               type: 'issue_preview_text',
    //               language: 'en-us',
    //               text:
    //                 'Cyclops, Emma, Wolverine and Armor are off in Japan dealing with giant monsters. Meanwhile, something dire happens that demands the attention of the X-Men. Storm, Colossus and Kitty Pryde join Beast and Agent Brand to take on the Brood.',
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/38318',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/38318/astonishing_x-men_2004_38?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'purchase',
    //               url:
    //                 'http://comicstore.marvel.com/Astonishing-X-Men-38/digital-comic/21093?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=21093&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'inAppLink',
    //               url:
    //                 'https://applink.marvel.com/issue/21093?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
    //             name: 'Astonishing X-Men (2004 - 2013)',
    //           },
    //           variants: [],
    //           collections: [],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2011-05-18T00:00:00-0400',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '2011-05-04T00:00:00-0400',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2013-01-07T00:00:00-0500',
    //             },
    //             {
    //               type: 'digitalPurchaseDate',
    //               date: '2012-08-21T00:00:00-0400',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 3.99,
    //             },
    //             {
    //               type: 'digitalPurchasePrice',
    //               price: 1.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/56e6e4c095cdf',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/56e6e4c095cdf',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 6,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/38318/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/239',
    //                 name: 'Juan Bobillo',
    //                 role: 'penciller',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
    //                 name: 'Vc Joe Caramagna',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/11765',
    //                 name: 'Christos Gage',
    //                 role: 'writer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
    //                 name: 'Nick Lowe',
    //                 role: 'editor',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/240',
    //                 name: 'Marcelo Sosa',
    //                 role: 'inker',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/500',
    //                 name: 'Christopher Sotomayor',
    //                 role: 'colorist',
    //               },
    //             ],
    //             returned: 6,
    //           },
    //           characters: {
    //             available: 10,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/38318/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011298',
    //                 name: 'Armor (Hisako Ichiki)',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
    //                 name: 'Beast',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
    //                 name: 'Colossus',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009257',
    //                 name: 'Cyclops',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009310',
    //                 name: 'Emma Frost',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009508',
    //                 name: 'Kitty Pryde',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009629',
    //                 name: 'Storm',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
    //                 name: 'Wolverine',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
    //                 name: 'X-Men',
    //               },
    //             ],
    //             returned: 10,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/38318/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/89830',
    //                 name: 'ASTONISHING X-MEN (2004) #38',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/89900',
    //                 name: 'Astonishing X-Men (2004) #38',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/38318/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 39890,
    //           digitalId: 0,
    //           title: 'Heralds (Trade Paperback)',
    //           issueNumber: 0,
    //           variantDescription: '',
    //           description:
    //             "Fire in the sky! The woman known as Nova was a fire-powered herald of Galactus, devourer of worlds, until she was brutally struck down in battle. Now, with a mysterious flash in the nighttime sky, her presence is again being felt. On the case is a group of Marvel's most powerful super heroes: Emma Frost, She-Hulk, Valkyrie, Hellcat, Photon and Abigail Brand, agent of extraterrestrial watchdog organization S.W.O.R.D. In the wake of the flash, the six women must work together to clean up the mess caused by a mass breakout at a storage facility belonging to S.W.O.R.D. Also affected by the event is a waitress named Frances Hyatt, found by the heroines in a catatonic state after going inexplicably berserk. As the flash's impact continues to be felt, can Emma Frost, She-Hulk, Hellcat and the others uncover its connection to Nova? Collecting HERALDS #1-5.",
    //           modified: '2011-03-25T11:24:51-0400',
    //           isbn: '',
    //           upc: '',
    //           diamondCode: '',
    //           ean: '',
    //           issn: '',
    //           format: 'Trade Paperback',
    //           pageCount: 0,
    //           textObjects: [
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 "Fire in the sky! The woman known as Nova was a fire-powered herald of Galactus, devourer of worlds, until she was brutally struck down in battle. Now, with a mysterious flash in the nighttime sky, her presence is again being felt. On the case is a group of Marvel's most powerful super heroes: Emma Frost, She-Hulk, Valkyrie, Hellcat, Photon and Abigail Brand, agent of extraterrestrial watchdog organization S.W.O.R.D. In the wake of the flash, the six women must work together to clean up the mess caused by a mass breakout at a storage facility belonging to S.W.O.R.D. Also affected by the event is a waitress named Frances Hyatt, found by the heroines in a catatonic state after going inexplicably berserk. As the flash's impact continues to be felt, can Emma Frost, She-Hulk, Hellcat and the others uncover its connection to Nova? Collecting HERALDS #1-5.",
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/39890',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/collection/39890/heralds_trade_paperback?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/13065',
    //             name: 'Heralds (2010)',
    //           },
    //           variants: [
    //             {
    //               resourceURI: 'http://gateway.marvel.com/v1/public/comics/36732',
    //               name: 'Heralds (Hardcover)',
    //             },
    //           ],
    //           collections: [],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2011-03-30T00:00:00-0400',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '2011-02-07T00:00:00-0500',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 15.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/e0/4d8b89d033853',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/e0/4d8b89d033853',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/f0/4c7c657bae7e7',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/e0/4c7c564ab7a20',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4c2247a2d0877',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/4c22479faba35',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/70/4c22479ca2179',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/e0/4c2247999abe4',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/e0/4c224788f2b7f',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4c224785a5b44',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/e0/4c19024564c0d',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/4c19024254dc0',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/70/4c19023f457f4',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c19023c32dfc',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c1902392eb2c',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/d0/4c1902363e4ca',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/70/4c190232ea25a',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/00/4c0ff05470264',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/70/4c0ff05194fdf',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/70/4c0ff04e9fb5d',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/00/4c0ff04b97e0a',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/4c0ff0489b061',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/4c0ff04593b4d',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/a0/4c091bd7cf200',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/90/4c091bd4abb2f',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c091bc4b0f36',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/60/4c091bc19b6e8',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/f0/4c091bbe67a5a',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/a0/4c0919f34e580',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/80/4bfff6cd8a0b7',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/30/4bfff6ca242dd',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/e0/4bfff6c335001',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/70/4bfff6bfc63ca',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/90/4bfff5b67f042',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/f0/4bfff5b316a3a',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 4,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/39890/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/5144',
    //                 name: 'Kathryn Immonen',
    //                 role: 'writer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/8729',
    //                 name: 'Jelena Kevic Djurdjevic',
    //                 role: 'penciller (cover)',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
    //                 name: 'Jeff Youngquist',
    //                 role: 'editor',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/9580',
    //                 name: 'Tonci Zonjic',
    //                 role: 'penciller',
    //               },
    //             ],
    //             returned: 4,
    //           },
    //           characters: {
    //             available: 6,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/39890/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009310',
    //                 name: 'Emma Frost',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010351',
    //                 name: 'Hellcat (Patsy Walker)',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009477',
    //                 name: 'Nova',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009583',
    //                 name: 'She-Hulk (Jennifer Walters)',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010350',
    //                 name: 'Valkyrie (Samantha Parrington)',
    //               },
    //             ],
    //             returned: 6,
    //           },
    //           stories: {
    //             available: 6,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/39890/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/69309',
    //                 name: 'Interior #69309',
    //                 type: 'interiorStory',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/69311',
    //                 name: 'Interior #69311',
    //                 type: 'interiorStory',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/69313',
    //                 name: 'Interior #69313',
    //                 type: 'interiorStory',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/69315',
    //                 name: 'Interior #69315',
    //                 type: 'interiorStory',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/69317',
    //                 name: 'Interior #69317',
    //                 type: 'interiorStory',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/90548',
    //                 name: 'Heralds TPB',
    //                 type: 'cover',
    //               },
    //             ],
    //             returned: 6,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/39890/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 30518,
    //           digitalId: 13690,
    //           title: 'S.W.O.R.D. (2009) #5',
    //           issueNumber: 5,
    //           variantDescription: '',
    //           description:
    //             "With Agent Brand imprisoned, all hell breaks loose! Norman Osborn and the Dark Avengers set out to destroy a group peaceful aliens while a war-like race is about to unleash the most intelligent and dangerous being in the universe! Now Brand herself is about to walk in a trap that could spell the end of everything she's worked for...and her life! \r\nRated A ...$2.99",
    //           modified: '2012-03-28T14:34:48-0400',
    //           isbn: '',
    //           upc: '5960606675-00511',
    //           diamondCode: 'JAN100622',
    //           ean: '',
    //           issn: '',
    //           format: 'Comic',
    //           pageCount: 32,
    //           textObjects: [
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 "With Agent Brand imprisoned, all hell breaks loose! Norman Osborn and the Dark Avengers set out to destroy a group peaceful aliens while a war-like race is about to unleash the most intelligent and dangerous being in the universe! Now Brand herself is about to walk in a trap that could spell the end of everything she's worked for...and her life! \r\nRated A ...$2.99",
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/30518',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/30518/sword_2009_5?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=13690&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/8233',
    //             name: 'S.W.O.R.D. (2009 - 2010)',
    //           },
    //           variants: [],
    //           collections: [],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2010-03-10T00:00:00-0500',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '2010-02-18T00:00:00-0500',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2010-11-24T00:00:00-0500',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 2.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/30/4bacb718ce923',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/30/4bacb718ce923',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 3,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/30518/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/8901',
    //                 name: 'Kieron Gillen',
    //                 role: 'writer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/11309',
    //                 name: 'Mike Del Mundo',
    //                 role: 'penciller',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/10051',
    //                 name: 'Steven Sanders',
    //                 role: 'penciller',
    //               },
    //             ],
    //             returned: 3,
    //           },
    //           characters: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/30518/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
    //                 name: 'Beast',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/30518/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/69862',
    //                 name: 'S.W.O.R.D. (2009) #5',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/69863',
    //                 name: 'Interior #69863',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/30518/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 26234,
    //           digitalId: 13844,
    //           title: 'S.W.O.R.D. (2009) #4',
    //           issueNumber: 4,
    //           variantDescription: '',
    //           description:
    //             "Beast, Brand and her crew face an assult on multiple fronts as they go on the run and STILL have stop more than one alien insurgency. Can they upend Gyrich's plot and stop the invasions in one fell swoop?\r\nRated A ...$2.99",
    //           modified: '2012-03-28T14:34:48-0400',
    //           isbn: '',
    //           upc: '5960606675-00411',
    //           diamondCode: 'DEC090567',
    //           ean: '',
    //           issn: '',
    //           format: 'Comic',
    //           pageCount: 32,
    //           textObjects: [
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 "Beast, Brand and her crew face an assult on multiple fronts as they go on the run and STILL have stop more than one alien insurgency. Can they upend Gyrich's plot and stop the invasions in one fell swoop?\r\nRated A ...$2.99",
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/26234',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/26234/sword_2009_4?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=13844&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/8233',
    //             name: 'S.W.O.R.D. (2009 - 2010)',
    //           },
    //           variants: [],
    //           collections: [],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2010-02-10T00:00:00-0500',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '2010-01-21T00:00:00-0500',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2010-11-17T00:00:00-0500',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 2.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/c0/5cb5f639cde08',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/c0/5cb5f639cde08',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/f0/4badc86ce225a',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 6,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/26234/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/8901',
    //                 name: 'Kieron Gillen',
    //                 role: 'writer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/878',
    //                 name: 'Dave Lanphear',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/11309',
    //                 name: 'Mike Del Mundo',
    //                 role: 'penciller',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/10051',
    //                 name: 'Steven Sanders',
    //                 role: 'penciller',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/10279',
    //                 name: 'Matthew Wilson',
    //                 role: 'colorist',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/469',
    //                 name: 'Craig Yeung',
    //                 role: 'inker',
    //               },
    //             ],
    //             returned: 6,
    //           },
    //           characters: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/26234/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
    //                 name: 'Beast',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/26234/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/57767',
    //                 name: 'S.W.O.R.D. (2009) #4',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/57768',
    //                 name: 'Interior #57768',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/26234/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 26233,
    //           digitalId: 14807,
    //           title: 'S.W.O.R.D. (2009) #3',
    //           issueNumber: 3,
    //           variantDescription: '',
    //           description:
    //             'Agent Brand, Beast, Sydren, Beta Ray Bill, Marvel Boy, Jazinda, Karolina and all the other aliens on Earth have been captured by Henry Gyrich and his "NO MORE ALIENS" agenda.  Only one person can free them and save the world: Lockheed.\r\nRated A ...$2.99',
    //           modified: '2012-03-28T14:34:48-0400',
    //           isbn: '',
    //           upc: '5960606675-00311',
    //           diamondCode: 'NOV090516',
    //           ean: '',
    //           issn: '',
    //           format: 'Comic',
    //           pageCount: 32,
    //           textObjects: [
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 'Agent Brand, Beast, Sydren, Beta Ray Bill, Marvel Boy, Jazinda, Karolina and all the other aliens on Earth have been captured by Henry Gyrich and his "NO MORE ALIENS" agenda.  Only one person can free them and save the world: Lockheed.\r\nRated A ...$2.99',
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/26233',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/26233/sword_2009_3?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=14807&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/8233',
    //             name: 'S.W.O.R.D. (2009 - 2010)',
    //           },
    //           variants: [],
    //           collections: [],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2010-01-13T00:00:00-0500',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '2009-12-17T00:00:00-0500',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2010-11-10T00:00:00-0500',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 2.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/5cb5e82f2194d',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/5cb5e82f2194d',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/f0/4bae5e24f0c36',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 7,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/26233/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/8901',
    //                 name: 'Kieron Gillen',
    //                 role: 'writer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/878',
    //                 name: 'Dave Lanphear',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
    //                 name: 'Nick Lowe',
    //                 role: 'editor',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4306',
    //                 name: 'Laura Martin',
    //                 role: 'colorist',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/10279',
    //                 name: 'Matthew Wilson',
    //                 role: 'colorist',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/10051',
    //                 name: 'Steven Sanders',
    //                 role: 'penciller',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/469',
    //                 name: 'Craig Yeung',
    //                 role: 'inker',
    //               },
    //             ],
    //             returned: 7,
    //           },
    //           characters: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/26233/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
    //                 name: 'Beast',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/26233/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/57765',
    //                 name: 'S.W.O.R.D. (2009) #3',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/57766',
    //                 name: 'Interior #57766',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/26233/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 24504,
    //           digitalId: 15234,
    //           title: 'Astonishing X-Men (2004) #33',
    //           issueNumber: 33,
    //           variantDescription: '',
    //           description:
    //             'EXOGENETIC PART 3 Dead mutants turned into biological weapons...genetically-reprogrammed Brood sleazoids...the truth about Abby Brand. It all adds up to an attempt to remove mutantcy from the planet Earth entirely and the rise of the Bio-Sentinels.',
    //           modified: '2018-03-17T09:10:59-0400',
    //           isbn: '',
    //           upc: '5960605543-03311',
    //           diamondCode: '',
    //           ean: '',
    //           issn: '',
    //           format: 'Comic',
    //           pageCount: 32,
    //           textObjects: [
    //             {
    //               type: 'issue_preview_text',
    //               language: 'en-us',
    //               text:
    //                 'EXOGENETIC PART 3 Dead mutants turned into biological weapons...genetically-reprogrammed Brood sleazoids...the truth about Abby Brand. It all adds up to an attempt to remove mutantcy from the planet Earth entirely and the rise of the Bio-Sentinels.',
    //             },
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 '"EXOGENETIC," PART 3\r\nDead mutants turned into biological weapons...genetically-reprogrammed Brood sleazoids...missing data on Henry McCoy\'s research computers...the truth about what Abby Brand was trying to burn out on Cruithne.  It all adds up to an attempt to remove mutantcy from the planet Earth entirely -- and the rise of the Bio-Sentinels.\r\nRated T  ...$2.99',
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/24504',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/24504/astonishing_x-men_2004_33?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'purchase',
    //               url:
    //                 'http://comicstore.marvel.com/Astonishing-X-Men-33/digital-comic/15234?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=15234&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'inAppLink',
    //               url:
    //                 'https://applink.marvel.com/issue/15234?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
    //             name: 'Astonishing X-Men (2004 - 2013)',
    //           },
    //           variants: [],
    //           collections: [],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2009-12-16T00:00:00-0500',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '2009-11-23T00:00:00-0500',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2011-03-23T00:00:00-0400',
    //             },
    //             {
    //               type: 'digitalPurchaseDate',
    //               date: '2011-09-06T00:00:00-0400',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 2.99,
    //             },
    //             {
    //               type: 'digitalPurchasePrice',
    //               price: 1.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/00/58f8cd8ae4641',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/00/58f8cd8ae4641',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/56e6e1f415b9b',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/80/4bad1276bd00f',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/00/4bad1271149e6',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/70/4bad126b31d17',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/a0/4bad1262e1c73',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bad125b01d5d',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4bad12537f433',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 6,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/24504/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4014',
    //                 name: 'Axel Alonso',
    //                 role: 'editor',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
    //                 name: 'Vc Joe Caramagna',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/8504',
    //                 name: "Frank D'ARMATA",
    //                 role: 'colorist',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/676',
    //                 name: 'Warren Ellis',
    //                 role: 'writer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/306',
    //                 name: 'Phil Jimenez',
    //                 role: 'penciller',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
    //                 name: 'Andy Lanning',
    //                 role: 'inker',
    //               },
    //             ],
    //             returned: 6,
    //           },
    //           characters: {
    //             available: 8,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/24504/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011298',
    //                 name: 'Armor (Hisako Ichiki)',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
    //                 name: 'Beast',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009257',
    //                 name: 'Cyclops',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009310',
    //                 name: 'Emma Frost',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009629',
    //                 name: 'Storm',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
    //                 name: 'Wolverine',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
    //                 name: 'X-Men',
    //               },
    //             ],
    //             returned: 8,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/24504/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/54041',
    //                 name: 'ASTONISHING X-MEN (2004) #33',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/54042',
    //                 name: 'Interior #54042',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/24504/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 26232,
    //           digitalId: 14806,
    //           title: 'S.W.O.R.D. (2009) #2',
    //           issueNumber: 2,
    //           variantDescription: '',
    //           description:
    //             'Extraterrestrials are no longer welcome on Earth.  So say goodbye to Marvel Boy, Beta Ray Bill, Karolina from the Runaways and a ton of others...including Agent Brand and Lockheed!  Henry Gyrich has turned the tables on our heroine and her time as head of S.W.O.R.D. is coming to a close.\r\nRated A ...$2.99',
    //           modified: '2012-03-28T14:34:47-0400',
    //           isbn: '',
    //           upc: '5960606675-00211',
    //           diamondCode: 'OCT090570',
    //           ean: '',
    //           issn: '',
    //           format: 'Comic',
    //           pageCount: 32,
    //           textObjects: [
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 'Extraterrestrials are no longer welcome on Earth.  So say goodbye to Marvel Boy, Beta Ray Bill, Karolina from the Runaways and a ton of others...including Agent Brand and Lockheed!  Henry Gyrich has turned the tables on our heroine and her time as head of S.W.O.R.D. is coming to a close.\r\nRated A ...$2.99',
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/26232',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/26232/sword_2009_2?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=14806&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/8233',
    //             name: 'S.W.O.R.D. (2009 - 2010)',
    //           },
    //           variants: [],
    //           collections: [],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2009-12-09T00:00:00-0500',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '2009-11-12T00:00:00-0500',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2010-11-03T00:00:00-0400',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 2.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/10/5cb5dfed01454',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/10/5cb5dfed01454',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/4bb3ce9e41786',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/10/4bad56482d978',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/40/4bad56419ed1e',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/b0/4bad563b87556',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/4bad56345d870',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/d0/4bad562d0c8ad',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bad56259d9e0',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/4bad561b4892b',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 5,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/26232/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/162',
    //                 name: 'John Cassaday',
    //                 role: 'inker',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/9437',
    //                 name: 'Serge Lapointe',
    //                 role: 'inker',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/8901',
    //                 name: 'Kieron Gillen',
    //                 role: 'writer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4306',
    //                 name: 'Laura Martin',
    //                 role: 'colorist',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/10051',
    //                 name: 'Steven Sanders',
    //                 role: 'penciller',
    //               },
    //             ],
    //             returned: 5,
    //           },
    //           characters: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/26232/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
    //                 name: 'Beast',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/26232/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/57763',
    //                 name: 'S.W.O.R.D. (2009) #2',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/57764',
    //                 name: 'Interior #57764',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/26232/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 24503,
    //           digitalId: 14735,
    //           title: 'Astonishing X-Men (2004) #32',
    //           issueNumber: 32,
    //           variantDescription: '',
    //           description:
    //             'EXOGENETIC PART 2 The X-Men have fought many Sentinels but never quite like this. Never a Sentinel made of meat and bone, wearing the skin of one of their own deceased teammates. What could this monstrosity have to do with The Brood?',
    //           modified: '2018-03-17T09:10:58-0400',
    //           isbn: '',
    //           upc: '5960605543-03211',
    //           diamondCode: 'SEP090465',
    //           ean: '',
    //           issn: '',
    //           format: 'Comic',
    //           pageCount: 32,
    //           textObjects: [
    //             {
    //               type: 'issue_preview_text',
    //               language: 'en-us',
    //               text:
    //                 'EXOGENETIC PART 2 The X-Men have fought many Sentinels but never quite like this. Never a Sentinel made of meat and bone, wearing the skin of one of their own deceased teammates. What could this monstrosity have to do with The Brood?',
    //             },
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 "The X-Men have fought towering, mutant-slaying robot Sentinels before. But never one quite like this. Never a Sentinel made of meat and bone, wearing the skin of one of their own deceased teammates, every technological aspect given a biological solution. And as the X-Men fight for their lives, they're left to wonder: What could this monstrosity have to do with THE BROOD?\r\nRated T  ...$2.99",
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/24503',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/24503/astonishing_x-men_2004_32?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'purchase',
    //               url:
    //                 'http://comicstore.marvel.com/Astonishing-X-Men-32/digital-comic/14735?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=14735&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'inAppLink',
    //               url:
    //                 'https://applink.marvel.com/issue/14735?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
    //             name: 'Astonishing X-Men (2004 - 2013)',
    //           },
    //           variants: [
    //             {
    //               resourceURI: 'http://gateway.marvel.com/v1/public/comics/29976',
    //               name: 'Astonishing X-Men (2004) #32 (SHS VARIANT)',
    //             },
    //           ],
    //           collections: [],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2009-11-04T00:00:00-0500',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '2009-10-15T00:00:00-0400',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2011-03-16T00:00:00-0400',
    //             },
    //             {
    //               type: 'digitalPurchaseDate',
    //               date: '2011-09-06T00:00:00-0400',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 2.99,
    //             },
    //             {
    //               type: 'digitalPurchasePrice',
    //               price: 1.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58f8c7b0920ee',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58f8c7b0920ee',
    //               extension: 'jpg',
    //             },
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/70/4bb405574927c',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 6,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/24503/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4014',
    //                 name: 'Axel Alonso',
    //                 role: 'editor',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
    //                 name: 'Vc Joe Caramagna',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/8504',
    //                 name: "Frank D'ARMATA",
    //                 role: 'colorist',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/676',
    //                 name: 'Warren Ellis',
    //                 role: 'writer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/306',
    //                 name: 'Phil Jimenez',
    //                 role: 'penciller',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/485',
    //                 name: 'Andy Lanning',
    //                 role: 'inker',
    //               },
    //             ],
    //             returned: 6,
    //           },
    //           characters: {
    //             available: 7,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/24503/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011298',
    //                 name: 'Armor (Hisako Ichiki)',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
    //                 name: 'Beast',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009310',
    //                 name: 'Emma Frost',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009629',
    //                 name: 'Storm',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
    //                 name: 'Wolverine',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
    //                 name: 'X-Men',
    //               },
    //             ],
    //             returned: 7,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/24503/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/54039',
    //                 name: 'ASTONISHING X-MEN (2004) #32',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/54040',
    //                 name: 'Interior #54040',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/24503/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 17353,
    //           digitalId: 7994,
    //           title: 'Astonishing X-Men (2004) #24',
    //           issueNumber: 24,
    //           variantDescription: '',
    //           description:
    //             '"UNSTOPPABLE"  Everything, from #1 to now, comes down to this. Things will change. One will not return. This is the end. Or is it? Part 6 (of 6) Rated T  ...$2.99',
    //           modified: '2010-12-03T20:22:33-0500',
    //           isbn: '',
    //           upc: '5960605543-02411',
    //           diamondCode: '',
    //           ean: '',
    //           issn: '',
    //           format: 'Comic',
    //           pageCount: 0,
    //           textObjects: [
    //             {
    //               type: 'issue_preview_text',
    //               language: 'en-us',
    //               text:
    //                 '"UNSTOPPABLE"  Everything, from #1 to now, comes down to this. Things will change. One will not return. This is the end. Or is it? Part 6 (of 6) Rated T  ...$2.99',
    //             },
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 '"UNSTOPPABLE" \r\nEverything, from #1 to now, comes down to this. Things will change. One will not return. This is the end. Or is it? Part 6 (of 6)\r\nRated T  ...$2.99',
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/17353',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/17353/astonishing_x-men_2004_24?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'purchase',
    //               url:
    //                 'http://comicstore.marvel.com/Astonishing-X-Men-24/digital-comic/7994?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=7994&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'inAppLink',
    //               url:
    //                 'https://applink.marvel.com/issue/7994?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
    //             name: 'Astonishing X-Men (2004 - 2013)',
    //           },
    //           variants: [
    //             {
    //               resourceURI: 'http://gateway.marvel.com/v1/public/comics/17354',
    //               name: 'Astonishing X-Men (2004) #24 (Variant)',
    //             },
    //           ],
    //           collections: [
    //             {
    //               resourceURI: 'http://gateway.marvel.com/v1/public/comics/24514',
    //               name: 'Astonishing X-Men by Joss Whedon & John Cassaday (Hardcover)',
    //             },
    //             {
    //               resourceURI: 'http://gateway.marvel.com/v1/public/comics/21422',
    //               name: 'Astonishing X-Men Vol. 4: Unstoppable (Trade Paperback)',
    //             },
    //           ],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2008-01-23T00:00:00-0500',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '1961-01-01T00:00:00-0500',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2010-01-01T00:00:00-0500',
    //             },
    //             {
    //               type: 'digitalPurchaseDate',
    //               date: '2009-10-30T00:00:00-0400',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 2.99,
    //             },
    //             {
    //               type: 'digitalPurchasePrice',
    //               price: 1.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/a0/56ddf78fe18f7',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/a0/56ddf78fe18f7',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 6,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/17353/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4014',
    //                 name: 'Axel Alonso',
    //                 role: 'editor',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
    //                 name: 'Virtual Calligr',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/12581',
    //                 name: 'Chris Eliopoulos',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/162',
    //                 name: 'John Cassaday',
    //                 role: 'penciller (cover)',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4306',
    //                 name: 'Laura Martin',
    //                 role: 'colorist',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/799',
    //                 name: 'Joss Whedon',
    //                 role: 'writer',
    //               },
    //             ],
    //             returned: 6,
    //           },
    //           characters: {
    //             available: 9,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/17353/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
    //                 name: 'Beast',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
    //                 name: 'Colossus',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009257',
    //                 name: 'Cyclops',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009310',
    //                 name: 'Emma Frost',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009508',
    //                 name: 'Kitty Pryde',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009504',
    //                 name: 'Professor X',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
    //                 name: 'Wolverine',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
    //                 name: 'X-Men',
    //               },
    //             ],
    //             returned: 9,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/17353/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/36374',
    //                 name: 'ASTONISHING X-MEN (2004) #24',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/36375',
    //                 name: '6 of 6 - Unstoppable',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/17353/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 16119,
    //           digitalId: 7993,
    //           title: 'Astonishing X-Men (2004) #23',
    //           issueNumber: 23,
    //           variantDescription: '',
    //           description:
    //             '"UNSTOPPABLE" The X-Men are on the run on Breakworld.  Can they keep the warlords of Breakworld from killing Colossus?  If his life means the destruction of an entire planet, SHOULD they save him?  Part 4 (of 6) 32 PGS./Rated T  ...$2.99',
    //           modified: '2010-12-03T20:21:22-0500',
    //           isbn: '',
    //           upc: '5960605543-02311',
    //           diamondCode: '',
    //           ean: '',
    //           issn: '',
    //           format: 'Comic',
    //           pageCount: 0,
    //           textObjects: [
    //             {
    //               type: 'issue_preview_text',
    //               language: 'en-us',
    //               text:
    //                 '"UNSTOPPABLE" The X-Men are on the run on Breakworld.  Can they keep the warlords of Breakworld from killing Colossus?  If his life means the destruction of an entire planet, SHOULD they save him?  Part 4 (of 6) 32 PGS./Rated T  ...$2.99',
    //             },
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 '"UNSTOPPABLE"\r\nThe end is near.  The situation is dire.  The outlook is bleak.  But Cyclops has a plan.  Part 5 (of 6)\r\n32 PGS./Rated T  ...$2.99',
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/16119',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/16119/astonishing_x-men_2004_23?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'purchase',
    //               url:
    //                 'http://comicstore.marvel.com/Astonishing-X-Men-23/digital-comic/7993?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=7993&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'inAppLink',
    //               url:
    //                 'https://applink.marvel.com/issue/7993?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
    //             name: 'Astonishing X-Men (2004 - 2013)',
    //           },
    //           variants: [
    //             {
    //               resourceURI: 'http://gateway.marvel.com/v1/public/comics/16118',
    //               name: 'Astonishing X-Men (2004) #23 (Variant)',
    //             },
    //           ],
    //           collections: [
    //             {
    //               resourceURI: 'http://gateway.marvel.com/v1/public/comics/21422',
    //               name: 'Astonishing X-Men Vol. 4: Unstoppable (Trade Paperback)',
    //             },
    //           ],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2007-11-07T00:00:00-0500',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '1961-01-01T00:00:00-0500',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2010-01-01T00:00:00-0500',
    //             },
    //             {
    //               type: 'digitalPurchaseDate',
    //               date: '2009-10-30T00:00:00-0400',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 2.99,
    //             },
    //             {
    //               type: 'digitalPurchasePrice',
    //               price: 1.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/a0/56ddf732bd7be',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/a0/56ddf732bd7be',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 6,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/16119/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4014',
    //                 name: 'Axel Alonso',
    //                 role: 'editor',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
    //                 name: 'Virtual Calligr',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/12581',
    //                 name: 'Chris Eliopoulos',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/162',
    //                 name: 'John Cassaday',
    //                 role: 'penciller (cover)',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4306',
    //                 name: 'Laura Martin',
    //                 role: 'colorist',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/799',
    //                 name: 'Joss Whedon',
    //                 role: 'writer',
    //               },
    //             ],
    //             returned: 6,
    //           },
    //           characters: {
    //             available: 7,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/16119/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
    //                 name: 'Colossus',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009257',
    //                 name: 'Cyclops',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009310',
    //                 name: 'Emma Frost',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009508',
    //                 name: 'Kitty Pryde',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
    //                 name: 'Wolverine',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
    //                 name: 'X-Men',
    //               },
    //             ],
    //             returned: 7,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/16119/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/32919',
    //                 name: 'ASTONISHING X-MEN (2004) #23',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/32920',
    //                 name: '5 of 6 - Unstoppable',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/16119/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 6309,
    //           digitalId: 7991,
    //           title: 'Astonishing X-Men (2004) #22',
    //           issueNumber: 22,
    //           variantDescription: '',
    //           description:
    //             '"UNSTOPPABLE" The X-Men are on the run on Breakworld.  Can they keep the warlords of Breakworld from killing Colossus?  If his life means the destruction of an entire planet, SHOULD they save him?  Part 4 (of 6) 32 PGS./Rated T  ...$2.99',
    //           modified: '2010-12-03T20:20:43-0500',
    //           isbn: '',
    //           upc: '5960605543-02211',
    //           diamondCode: '',
    //           ean: '',
    //           issn: '',
    //           format: 'Comic',
    //           pageCount: 0,
    //           textObjects: [
    //             {
    //               type: 'issue_preview_text',
    //               language: 'en-us',
    //               text:
    //                 '"UNSTOPPABLE" The X-Men are on the run on Breakworld.  Can they keep the warlords of Breakworld from killing Colossus?  If his life means the destruction of an entire planet, SHOULD they save him?  Part 4 (of 6) 32 PGS./Rated T  ...$2.99',
    //             },
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 '"UNSTOPPABLE"\r\nThe X-Men are on the run on Breakworld.  Can they keep the warlords of Breakworld from killing Colossus?  If his life means the destruction of an entire planet, SHOULD they save him?  Part 4 (of 6)\r\n32 PGS./Rated T  ...$2.99',
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/6309',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/6309/astonishing_x-men_2004_22?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'purchase',
    //               url:
    //                 'http://comicstore.marvel.com/Astonishing-X-Men-22/digital-comic/7991?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=7991&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'inAppLink',
    //               url:
    //                 'https://applink.marvel.com/issue/7991?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
    //             name: 'Astonishing X-Men (2004 - 2013)',
    //           },
    //           variants: [
    //             {
    //               resourceURI: 'http://gateway.marvel.com/v1/public/comics/6291',
    //               name: 'Astonishing X-Men (2004) #22 (Variant Cover)',
    //             },
    //           ],
    //           collections: [
    //             {
    //               resourceURI: 'http://gateway.marvel.com/v1/public/comics/21422',
    //               name: 'Astonishing X-Men Vol. 4: Unstoppable (Trade Paperback)',
    //             },
    //           ],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2007-08-22T00:00:00-0400',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '1961-01-01T00:00:00-0500',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2010-01-01T00:00:00-0500',
    //             },
    //             {
    //               type: 'digitalPurchaseDate',
    //               date: '2009-10-30T00:00:00-0400',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 2.99,
    //             },
    //             {
    //               type: 'digitalPurchasePrice',
    //               price: 1.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/b0/56ddf654e2a82',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/b0/56ddf654e2a82',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 6,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/6309/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4014',
    //                 name: 'Axel Alonso',
    //                 role: 'editor',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
    //                 name: 'Virtual Calligr',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/12581',
    //                 name: 'Chris Eliopoulos',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/162',
    //                 name: 'John Cassaday',
    //                 role: 'penciller (cover)',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4306',
    //                 name: 'Laura Martin',
    //                 role: 'colorist',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/799',
    //                 name: 'Joss Whedon',
    //                 role: 'writer',
    //               },
    //             ],
    //             returned: 6,
    //           },
    //           characters: {
    //             available: 9,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/6309/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
    //                 name: 'Beast',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
    //                 name: 'Colossus',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009257',
    //                 name: 'Cyclops',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009310',
    //                 name: 'Emma Frost',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009508',
    //                 name: 'Kitty Pryde',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009504',
    //                 name: 'Professor X',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
    //                 name: 'Wolverine',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
    //                 name: 'X-Men',
    //               },
    //             ],
    //             returned: 9,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/6309/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/8144',
    //                 name: 'ASTONISHING X-MEN (2004) #22',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/8145',
    //                 name: '4 of 6 - Unstoppable',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/6309/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 6120,
    //           digitalId: 7989,
    //           title: 'Astonishing X-Men (2004) #21',
    //           issueNumber: 21,
    //           variantDescription: '',
    //           description:
    //             '"UNSTOPPABLE" PART 3 (OF 6)! Ord and his people of Breakworld lead the charge to take down the X-Men and S.W.O.R.D. And when this fight\'s over... Not everyone is coming back!  32 PGS./Rated T  ...$2.99',
    //           modified: '2017-04-17T15:24:40-0400',
    //           isbn: '',
    //           upc: '5960605543-02111',
    //           diamondCode: '',
    //           ean: '',
    //           issn: '',
    //           format: 'Comic',
    //           pageCount: 0,
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/6120',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/6120/astonishing_x-men_2004_21?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'purchase',
    //               url:
    //                 'http://comicstore.marvel.com/Astonishing-X-Men-21/digital-comic/7989?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'reader',
    //               url:
    //                 'http://marvel.com/digitalcomics/view.htm?iid=7989&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //             {
    //               type: 'inAppLink',
    //               url:
    //                 'https://applink.marvel.com/issue/7989?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2007-05-02T00:00:00-0400',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '1961-01-01T00:00:00-0500',
    //             },
    //             {
    //               type: 'unlimitedDate',
    //               date: '2012-06-27T00:00:00-0400',
    //             },
    //             {
    //               type: 'digitalPurchaseDate',
    //               date: '2009-10-30T00:00:00-0400',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 2.99,
    //             },
    //             {
    //               type: 'digitalPurchasePrice',
    //               price: 1.99,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/40/4bb8846d89d2f',
    //             extension: 'jpg',
    //           },
    //           images: [
    //             {
    //               path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/40/4bb8846d89d2f',
    //               extension: 'jpg',
    //             },
    //           ],
    //           creators: {
    //             available: 5,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/6120/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
    //                 name: 'Virtual Calligr',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/12581',
    //                 name: 'Chris Eliopoulos',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/162',
    //                 name: 'John Cassaday',
    //                 role: 'penciller (cover)',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4306',
    //                 name: 'Laura Martin',
    //                 role: 'colorist',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/799',
    //                 name: 'Joss Whedon',
    //                 role: 'writer',
    //               },
    //             ],
    //             returned: 5,
    //           },
    //           characters: {
    //             available: 8,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/6120/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
    //                 name: 'Beast',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
    //                 name: 'Colossus',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009310',
    //                 name: 'Emma Frost',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009508',
    //                 name: 'Kitty Pryde',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011202',
    //                 name: 'Ord',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
    //                 name: 'Wolverine',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
    //                 name: 'X-Men',
    //               },
    //             ],
    //             returned: 8,
    //           },
    //           stories: {
    //             available: 3,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/6120/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/7670',
    //                 name: 'ASTONISHING X-MEN (2004) #21',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/7671',
    //                 name: '3 of 6 - Unstoppable',
    //                 type: 'interiorStory',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/8141',
    //                 name: '3 of 6 - Unstoppable',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 3,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/6120/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //         {
    //           id: 5477,
    //           digitalId: 0,
    //           title: 'Astonishing X-Men (2004) #19 (Variant)',
    //           issueNumber: 19,
    //           variantDescription: 'Variant',
    //           description:
    //             "\"UNSTOPPABLE!\" Part 1 (of 6)\r\nStrap yourselves in, folks! It's the beginning of Joss Whedon and John Cassaday's final arc on Astonishing X-Men! After the shocking and brain-smashing events of last issue, the X-Men are off to protect the Earth from its destruction at the hands of the Breakworld. And when it's all over, nothing will ever be the same! No really, we mean it! Whedon & Cassaday prove they are more than Astonishing: They are UNSTOPPABLE!\r\n32 PGS./Rated T  ...$2.99",
    //           modified: '-0001-11-30T00:00:00-0500',
    //           isbn: '',
    //           upc: '',
    //           diamondCode: '',
    //           ean: '',
    //           issn: '',
    //           format: 'Comic',
    //           pageCount: 0,
    //           textObjects: [
    //             {
    //               type: 'issue_solicit_text',
    //               language: 'en-us',
    //               text:
    //                 "\"UNSTOPPABLE!\" Part 1 (of 6)\r\nStrap yourselves in, folks! It's the beginning of Joss Whedon and John Cassaday's final arc on Astonishing X-Men! After the shocking and brain-smashing events of last issue, the X-Men are off to protect the Earth from its destruction at the hands of the Breakworld. And when it's all over, nothing will ever be the same! No really, we mean it! Whedon & Cassaday prove they are more than Astonishing: They are UNSTOPPABLE!\r\n32 PGS./Rated T  ...$2.99",
    //             },
    //           ],
    //           resourceURI: 'http://gateway.marvel.com/v1/public/comics/5477',
    //           urls: [
    //             {
    //               type: 'detail',
    //               url:
    //                 'http://marvel.com/comics/issue/5477/astonishing_x-men_2004_19_variant/variant?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
    //             },
    //           ],
    //           series: {
    //             resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
    //             name: 'Astonishing X-Men (2004 - 2013)',
    //           },
    //           variants: [
    //             {
    //               resourceURI: 'http://gateway.marvel.com/v1/public/comics/5417',
    //               name: 'Astonishing X-Men (2004) #19',
    //             },
    //           ],
    //           collections: [],
    //           collectedIssues: [],
    //           dates: [
    //             {
    //               type: 'onsaleDate',
    //               date: '2006-12-27T00:00:00-0500',
    //             },
    //             {
    //               type: 'focDate',
    //               date: '-0001-11-30T00:00:00-0500',
    //             },
    //           ],
    //           prices: [
    //             {
    //               type: 'printPrice',
    //               price: 0,
    //             },
    //           ],
    //           thumbnail: {
    //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
    //             extension: 'jpg',
    //           },
    //           images: [],
    //           creators: {
    //             available: 4,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/5477/creators',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
    //                 name: 'Vc Joe Caramagna',
    //                 role: 'letterer',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/162',
    //                 name: 'John Cassaday',
    //                 role: 'inker',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/4306',
    //                 name: 'Laura Martin',
    //                 role: 'colorist',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/creators/799',
    //                 name: 'Joss Whedon',
    //                 role: 'writer',
    //               },
    //             ],
    //             returned: 4,
    //           },
    //           characters: {
    //             available: 9,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/5477/characters',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011297',
    //                 name: 'Agent Brand',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
    //                 name: 'Beast',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
    //                 name: 'Colossus',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009257',
    //                 name: 'Cyclops',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009310',
    //                 name: 'Emma Frost',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009508',
    //                 name: 'Kitty Pryde',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011202',
    //                 name: 'Ord',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
    //                 name: 'Wolverine',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
    //                 name: 'X-Men',
    //               },
    //             ],
    //             returned: 9,
    //           },
    //           stories: {
    //             available: 2,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/5477/stories',
    //             items: [
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/3352',
    //                 name: 'Cover #3352',
    //                 type: 'cover',
    //               },
    //               {
    //                 resourceURI: 'http://gateway.marvel.com/v1/public/stories/3353',
    //                 name: 'Interior #3353',
    //                 type: 'interiorStory',
    //               },
    //             ],
    //             returned: 2,
    //           },
    //           events: {
    //             available: 0,
    //             collectionURI: 'http://gateway.marvel.com/v1/public/comics/5477/events',
    //             items: [],
    //             returned: 0,
    //           },
    //         },
    //       ],
    //     },
    //   },
    // };
    return res && res.status === 200 ? res.data.data.results : [];
  };

  static GetComicById = async (id) => {
    // const res = await axios().get(
    //   `${process.env.REACT_APP_MARVEL_URL}/comics?ts=${process.env.REACT_APP_MARVEL_API_TS}&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_HASH}/${id}`
    // );
    const res = {
      status: 200,
      data: {
        code: 200,
        status: 'Ok',
        copyright: '© 2020 MARVEL',
        attributionText: 'Data provided by Marvel. © 2020 MARVEL',
        attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2020 MARVEL</a>',
        etag: 'a598e3bc79cb002acb5b949475c8e63e745f3c0c',
        data: {
          offset: 0,
          limit: 20,
          total: 1,
          count: 1,
          results: [
            {
              id: 70718,
              digitalId: 51433,
              title: 'The Amazing Spider-Man (2018) #22',
              issueNumber: 22,
              variantDescription: '',
              description:
                'HUNTED AFTERMATH! The fallout from “HUNTED” continues to loom, and much of Peter’s life is called into question. What is left of Spider-Man after living through the harrowing hunt?! ',
              modified: '2019-05-14T14:53:53-0400',
              isbn: '',
              upc: '75960608936902211',
              diamondCode: 'MAR190835',
              ean: '',
              issn: '0274-5232',
              format: 'Comic',
              pageCount: 40,
              textObjects: [
                {
                  type: 'issue_solicit_text',
                  language: 'en-us',
                  text:
                    'HUNTED AFTERMATH! The fallout from “HUNTED” continues to loom, and much of Peter’s life is called into question. What is left of Spider-Man after living through the harrowing hunt?! ',
                },
              ],
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/70718',
              urls: [
                {
                  type: 'detail',
                  url:
                    'http://marvel.com/comics/issue/70718/the_amazing_spider-man_2018_22?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
                },
                {
                  type: 'purchase',
                  url:
                    'http://comicstore.marvel.com/The-Amazing-Spider-Man-22/digital-comic/51433?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
                },
                {
                  type: 'reader',
                  url:
                    'http://marvel.com/digitalcomics/view.htm?iid=51433&utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
                },
                {
                  type: 'inAppLink',
                  url:
                    'https://applink.marvel.com/issue/51433?utm_campaign=apiRef&utm_source=75d603f88af04f5aebcb8bd8c7e5df52',
                },
              ],
              series: {
                resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
                name: 'The Amazing Spider-Man (2018 - Present)',
              },
              variants: [],
              collections: [],
              collectedIssues: [],
              dates: [
                {
                  type: 'onsaleDate',
                  date: '2019-05-29T00:00:00-0400',
                },
                {
                  type: 'focDate',
                  date: '2019-05-06T00:00:00-0400',
                },
                {
                  type: 'unlimitedDate',
                  date: '2019-12-02T00:00:00-0500',
                },
                {
                  type: 'digitalPurchaseDate',
                  date: '2019-05-29T00:00:00-0400',
                },
              ],
              prices: [
                {
                  type: 'printPrice',
                  price: 3.99,
                },
                {
                  type: 'digitalPurchasePrice',
                  price: 3.99,
                },
              ],
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5ce401142935b',
                extension: 'jpg',
              },
              images: [
                {
                  path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5ce401142935b',
                  extension: 'jpg',
                },
                {
                  path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/5c76cb249a7e3',
                  extension: 'jpg',
                },
              ],
              creators: {
                available: 7,
                collectionURI: 'http://gateway.marvel.com/v1/public/comics/70718/creators',
                items: [
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/creators/13162',
                    name: 'Erick Arciniega',
                    role: 'colorist',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
                    name: 'Vc Joe Caramagna',
                    role: 'letterer',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/creators/430',
                    name: 'Edgar Delgado',
                    role: 'colorist (cover)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
                    name: 'Nick Lowe',
                    role: 'editor',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/creators/447',
                    name: 'Victor Olazaba',
                    role: 'inker',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/creators/72',
                    name: 'Humberto Ramos',
                    role: 'penciler (cover)',
                  },
                  {
                    resourceURI: 'http://gateway.marvel.com/v1/public/creators/11434',
                    name: 'Nick Spencer',
                    role: 'writer',
                  },
                ],
                returned: 7,
              },
            },
          ],
        },
      },
    };

    return res && res.status === 200 && res.data.data.results.length > 0 ? res.data.data.results[0] : {};
  };
}
