
const hotelItems = [
      {
        HotelId: 1,
        HotelName: "Stay For Days Hotel",
        hotelImage : "https://cache.marriott.com/content/dam/marriott-renditions/KGLMC/kglmc-terrace-0021-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=600px:*",
        Description: "This classic hotel is ideally located on the main commercial artery of the city in the heart of New York. A few minutes away is Time's Square and the historic centre of the city, as well as other places of interest that make New York one of America's most attractive and cosmopolitan cities.",
        Description_fr: "Cet hôtel classique est idéalement situé sur la principale artère commerciale de la ville en plein cœur de New York. A quelques minutes se trouve la place du temps et le centre historique de la ville, ainsi que d'autres lieux d'intérêt qui font de New York l'une des villes les plus attractives et cosmopolites de l'Amérique.",
        LastRenovationDate: "2017-01-18T00:00:00Z",
        Address: {
          "StreetAddress": "677 5th Ave",
          "City": "New York",
          "StateProvince": "NY",
          "PostalCode": "10022",
          "Country": "USA"
        },
        Location: {
          "type": "Point",
          "coordinates": [ -73.975403, 40.760586 ]
        },
        Rooms: [
          {
            "Description": "Budget Room, 1 Queen Bed (Cityside)",
            "Description_fr": "Chambre Économique, 1 grand lit (côté ville)",
            "Type": "Budget Room",
            "BaseRate": 96.99,
            "BedOptions": "1 Queen Bed",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "vcr/dvd" ]
          },
          {
            "Description": "Budget Room, 1 King Bed (Mountain View)",
            "Description_fr": "Chambre Économique, 1 très grand lit (Mountain View)",
            "Type": "Budget Room",
            "BaseRate": 80.99,
            "BedOptions": "1 King Bed",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "vcr/dvd", "jacuzzi tub" ]
          },
          {
            "Description": "Deluxe Room, 2 Double Beds (City View)",
            "Description_fr": "Chambre Deluxe, 2 lits doubles (vue ville)",
            "Type": "Deluxe Room",
            "BaseRate": 150.99,
            "BedOptions": "2 Double Beds",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "suite", "bathroom shower", "coffee maker" ]
          },
          {
            "Description": "Standard Room, 1 King Bed (Amenities)",
            "Description_fr": "Chambre Standard, 1 très grand lit (Services)",
            "Type": "Standard Room",
            "BaseRate": 110.99,
            "BedOptions": "1 King Bed",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "Room Tags", "bathroom shower", "bathroom shower" ]
          }
        ]
      },

      {
        HotelId: 2,
        HotelName: "Countryside Hotel",
        hotelImage: "https://image-tc.galaxy.tf/wijpeg-3aaubf2iwiw7oj1xvk1x1439s/serena-kigali-2023-grvw-024-room-04-prime-room.jpg?width=1600&height=1066",
        Description: "Save up to 50% off traditional hotels. Free WiFi, great location near downtown, full kitchen, washer & dryer, 24\/7 support, bowling alley, fitness center and more.",
        Description_fr: "Économisez jusqu'à 50% sur les hôtels traditionnels. WiFi gratuit, très bien situé près du centre-ville, cuisine complète, laveuse & sécheuse, support 24\/7, bowling, centre de fitness et plus encore.",
        LastRenovationDate: "2009-09-06T00:00:00Z",
        Address: {
          "StreetAddress": "6910 Fayetteville Rd",
          "City": "Durham",
          "StateProvince": "NC",
          "PostalCode": "27713",
          "Country": "USA"
        },
        Location: {
          "type": "Point",
          "coordinates": [ -78.940483, 35.904160 ]
        },
        Rooms: [
          {
            "Description": "Suite, 1 King Bed (Amenities)",
            "Description_fr": "Suite, 1 très grand lit (Services)",
            "Type": "Suite",
            "BaseRate": 244.99,
            "BedOptions": "1 King Bed",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "coffee maker" ]
          },
          {
            "Description": "Budget Room, 1 Queen Bed (Amenities)",
            "Description_fr": "Chambre Économique, 1 grand lit (Services)",
            "Type": "Budget Room",
            "BaseRate": 76.99,
            "BedOptions": "1 Queen Bed",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "coffee maker" ]
          },
          {
            "Description": "Deluxe Room, 2 Double Beds (Cityside)",
            "Description_fr": "Chambre Deluxe, 2 lits doubles (Cityside)",
            "Type": "Deluxe Room",
            "BaseRate": 145.99,
            "BedOptions": "2 Double Beds",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "vcr/dvd", "coffee maker" ]
          },
          {
            "Description": "Deluxe Room, 1 King Bed (Waterfront View)",
            "Description_fr": "Chambre Deluxe, 1 très grand lit (vue sur le front de mer)",
            "Type": "Deluxe Room",
            "BaseRate": 167.99,
            "BedOptions": "1 King Bed",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "suite", "bathroom shower" ]
          }
        ]
      },

      {
        HotelId: 3,
        HotelName: "Royal Cottage Resort",
        hotelImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRram_OXJTUPPuf7-3GggamFBY_DrL5Dc9gbAdC-CvtAUyevFEn0a4hsFk-TmB7SbSarks&usqp=CAU",
        Description: "Your home away from home. Brand new fully equipped premium rooms, fast WiFi, full kitchen, washer & dryer, fitness center. Inner courtyard includes water features and outdoor seating. All units include fireplaces and small outdoor balconies. Pets accepted.",
        Description_fr: "Votre maison loin de chez vous. Flambant neuf chambres Premium entièrement équipées, WiFi rapide, cuisine complète, laveuse & sécheuse, centre de fitness. La cour intérieure comprend des points d'eau et des sièges à l'extérieur. Toutes les unités comprennent des cheminées et de petits balcons extérieurs. Animaux acceptés.",
        Tags: [ "free wifi", "free parking", "24-hour front desk service" ],
        LastRenovationDate: "2020-11-26T00:00:00Z",
        Address: {
          "StreetAddress": "22422 29th Dr SE",
          "City": "Bothell",
          "StateProvince": "WA",
          "PostalCode": "98021",
          "Country": "USA"
        },
        Location: {
          "type": "Point",
          "coordinates": [ -122.196700, 47.794540 ]
        },
        Rooms: [
          {
            "Description": "Deluxe Room, 1 Queen Bed (Waterfront View)",
            "Description_fr": "Chambre Deluxe, 1 grand lit (vue sur le front de mer)",
            "Type": "Deluxe Room",
            "BaseRate": 144.99,
            "BedOptions": "1 Queen Bed",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "coffee maker", "tv", "coffee maker" ]
          },
          {
            "Description": "Suite, 2 Queen Beds (Mountain View)",
            "Description_fr": "Suite, 2 grands lits (vue sur la montagne)",
            "Type": "Suite",
            "BaseRate": 248.99,
            "BedOptions": "2 Queen Beds",
            "SleepsCount": 4,
            "SmokingAllowed": true,
            "Tags": [ "suite", "bathroom shower" ]
          },
          {
            "Description": "Suite, 2 Double Beds (Mountain View)",
            "Description_fr": "Suite, 2 lits doubles (vue sur la montagne)",
            "Type": "Suite",
            "BaseRate": 229.99,
            "BedOptions": "2 Double Beds",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "tv", "tv", "coffee maker" ]
          },
          {
            "Description": "Budget Room, 2 Queen Beds (City View)",
            "Description_fr": "Chambre Économique, 2 grands lits (vue sur la ville)",
            "Type": "Budget Room",
            "BaseRate": 84.99,
            "BedOptions": "2 Queen Beds",
            "SleepsCount": 4,
            "SmokingAllowed": false,
            "Tags": [ "vcr/dvd" ]
          },
        ]
      },

      {
        HotelId: 4,
        HotelName: "Winter Panorama Resort",
        hotelImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRram_OXJTUPPuf7-3GggamFBY_DrL5Dc9gbAdC-CvtAUyevFEn0a4hsFk-TmB7SbSarks&usqp=CAU",
        Description: "Plenty of great skiing, outdoor ice skating, sleigh rides, tubing and snow biking. Yoga, group exercise classes and outdoor hockey are available year-round, plus numerous options for shopping as well as great spa services. Newly-renovated with large rooms, free 24-hr airport shuttle & a new restaurant. Rooms\/suites offer mini-fridges & 49-inch HDTVs.",
        Description_fr: "Beaucoup de superbes pistes de ski, de patinage sur glace en plein air, de promenades en traîneau, de tubes et de vélo de neige. Yoga, cours de groupe et hockey en plein air sont disponibles toute l'année, ainsi que de nombreuses options de shopping ainsi que d'excellents services de spa. Récemment rénové, avec de grandes chambres, une navette gratuite de 24 heures par aéroport et un nouveau restaurant. Les chambres\/suites offrent des mini-frigos et des TVHD de 49 pouces.",
        LastRenovationDate: "2008-09-16T00:00:00Z",
        Address: {
          "StreetAddress": "9025 SW Hillman Ct",
          "City": "Wilsonville",
          "StateProvince": "OR",
          "PostalCode": "97070",
          "Country": "USA"
        },
        Location: {
          "type": "Point",
          "coordinates": [ -122.770576, 45.322392 ]
        },
        Rooms: [
          {
            "Description": "Deluxe Room, 1 King Bed (Cityside)",
            "Description_fr": "Chambre Deluxe, 1 très grand lit (Cityside)",
            "Type": "Deluxe Room",
            "BaseRate": 144.99,
            "BedOptions": "1 King Bed",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "coffee maker", "suite", "suite" ]
          },
          {
            "Description": "Deluxe Room, 1 Queen Bed (Waterfront View)",
            "Description_fr": "Chambre Deluxe, 1 grand lit (vue sur le front de mer)",
            "Type": "Deluxe Room",
            "BaseRate": 168.99,
            "BedOptions": "1 Queen Bed",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "jacuzzi tub", "coffee maker" ]
          },
          {
            "Description": "Standard Room, 2 Double Beds (Waterfront View)",
            "Description_fr": "Chambre Standard, 2 lits doubles (vue sur le front de mer)",
            "Type": "Standard Room",
            "BaseRate": 110.99,
            "BedOptions": "2 Double Beds",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "tv", "tv" ]
          },
          {
            "Description": "Deluxe Room, 1 Queen Bed (City View)",
            "Description_fr": "Chambre Deluxe, 1 grand lit (vue ville)",
            "Type": "Deluxe Room",
            "BaseRate": 141.99,
            "BedOptions": "1 Queen Bed",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "vcr/dvd" ]
          }
        ]
      },

      {
        HotelId: 5,
        HotelName: "Luxury Lion Resort",
        hotelImage:"https://cdn.audleytravel.com/798/570/79/261974-kigali-serena-hotel-kigali.jpg",
        Description: "Unmatched Luxury. Visit our downtown hotel to indulge in luxury accommodations. Moments from the stadium, we feature the best in comfort",
        Description_fr: "Un luxe inégalé. Visitez notre hôtel du centre-ville pour vous adonner à des hébergements luxueux. Moments du stade, nous vous présentons le meilleur dans le confort",
        LastRenovationDate: "2016-03-18T00:00:00Z",
        Address: {
          "StreetAddress": "3 Cityplace Dr",
          "City": "St. Louis",
          "StateProvince": "MO",
          "PostalCode": "63141",
          "Country": "USA"
        },
        Location: {
          "type": "Point",
          "coordinates": [ -90.440810, 38.672190 ]
        },
        Rooms: [
          {
            "Description": "Standard Room, 1 King Bed (Mountain View)",
            "Description_fr": "Chambre Standard, 1 très grand lit (vue montagne)",
            "Type": "Standard Room",
            "BaseRate": 114.99,
            "BedOptions": "1 King Bed",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "jacuzzi tub" ]
          },
          {
            "Description": "Deluxe Room, 2 Double Beds (Amenities)",
            "Description_fr": "Chambre Deluxe, 2 lits doubles (Services)",
            "Type": "Deluxe Room",
            "BaseRate": 145.99,
            "BedOptions": "2 Double Beds",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "jacuzzi tub" ]
          },
          {
            "Description": "Standard Room, 2 Queen Beds (Waterfront View)",
            "Description_fr": "Chambre Standard, 2 grands lits (vue sur le front de mer)",
            "Type": "Standard Room",
            "BaseRate": 133.99,
            "BedOptions": "2 Queen Beds",
            "SleepsCount": 4,
            "SmokingAllowed": true,
            "Tags": [ "Room Tags", "jacuzzi tub", "bathroom shower" ]
          },
          {
            "Description": "Suite, 2 Double Beds (City View)",
            "Description_fr": "Suite, 2 lits doubles (vue sur la ville)",
            "Type": "Suite",
            "BaseRate": 242.99,
            "BedOptions": "2 Double Beds",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "tv", "suite", "vcr/dvd" ]
          }
        ]
      },
      {
        HotelId: 6,
        HotelName: "Twin Vortex Hotel",
        hotelImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRram_OXJTUPPuf7-3GggamFBY_DrL5Dc9gbAdC-CvtAUyevFEn0a4hsFk-TmB7SbSarks&usqp=CAU",
        Description: "New experience in the Making. Be the first to experience the luxury of the Twin Vortex. Reserve one of our newly-renovated guest rooms today.",
        Description_fr: "Nouvelle expérience dans la fabrication. Soyez les premiers à découvrir le luxe du Twin vortex. Réservez une de nos chambres récemment rénovées aujourd'hui.",
        LastRenovationDate: "2020-11-14T00:00:00Z",
        Address: {
          "StreetAddress": "1950 N Stemmons Fw",
          "City": "Dallas",
          "StateProvince": "TX",
          "PostalCode": "75207",
          "Country": "USA"
        },
        Location: {
          "type": "Point",
          "coordinates": [ -96.819412, 32.800762 ]
        },
        Rooms: [
          {
            "Description": "Budget Room, 1 King Bed (Cityside)",
            "Description_fr": "Chambre Économique, 1 très grand lit (côté ville)",
            "Type": "Budget Room",
            "BaseRate": 62.99,
            "BedOptions": "1 King Bed",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "suite", "tv" ]
          },
          {
            "Description": "Standard Room, 2 Queen Beds (Cityside)",
            "Description_fr": "Chambre Standard, 2 grands lits (côté ville)",
            "Type": "Standard Room",
            "BaseRate": 107.99,
            "BedOptions": "2 Queen Beds",
            "SleepsCount": 4,
            "SmokingAllowed": true,
            "Tags": [ "vcr/dvd", "coffee maker", "jacuzzi tub" ]
          },
          {
            "Description": "Deluxe Room, 1 Queen Bed (Amenities)",
            "Description_fr": "Chambre Deluxe, 1 grand lit (Services)",
            "Type": "Deluxe Room",
            "BaseRate": 138.99,
            "BedOptions": "1 Queen Bed",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "bathroom shower" ]
          },
          {
            "Description": "Standard Room, 2 Double Beds (Cityside)",
            "Description_fr": "Chambre Standard, 2 lits doubles (côté ville)",
            "Type": "Standard Room",
            "BaseRate": 126.99,
            "BedOptions": "2 Double Beds",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "tv", "jacuzzi tub", "suite" ]
          }
        ]
      },
      {
        HotelId: 7,
        HotelName: "Near the Market Hotel",
        hotelImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aOBiT4XJyVpZ9omAPNcHG4QADtVjSoGMGQ&s",
        Description: "Book now and Save up to 30%. Central location. Steps from Empire State Building & Times Square, in Chelsea neighborhood. Brand new rooms. Impeccable service.",
        Description_fr: "Réservez dès maintenant et économisez jusqu'à 30%. Emplacement central. A quelques pas de l'Empire State Building & Times Square, dans le quartier de Chelsea. Chambres flambant neuves. Service impeccable.",
        LastRenovationDate: "2013-10-30T00:00:00Z",
        Address: {
          "StreetAddress": "11 Times Sq",
          "City": "New York",
          "StateProvince": "NY",
          "PostalCode": "10036",
          "Country": "USA"
        },
        Location: {
          "type": "Point",
          "coordinates": [ -73.989792, 40.756729 ]
        },
        Rooms: [
          {
            "Description": "Standard Room, 1 King Bed (Waterfront View)",
            "Description_fr": "Chambre Standard, 1 très grand lit (vue sur le front de mer)",
            "Type": "Standard Room",
            "BaseRate": 105.99,
            "BedOptions": "1 King Bed",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "tv", "vcr/dvd", "suite" ]
          },
          {
            "Description": "Budget Room, 2 Double Beds (City View)",
            "Description_fr": "Chambre Économique, 2 lits doubles (vue sur la ville)",
            "Type": "Budget Room",
            "BaseRate": 80.99,
            "BedOptions": "2 Double Beds",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "tv" ]
          },
          {
            "Description": "Standard Room, 1 King Bed (Mountain View)",
            "Description_fr": "Chambre Standard, 1 très grand lit (vue montagne)",
            "Type": "Standard Room",
            "BaseRate": 130.99,
            "BedOptions": "1 King Bed",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "coffee maker", "bathroom shower", "vcr/dvd" ]
          },
          {
            "Description": "Suite, 1 King Bed (Cityside)",
            "Description_fr": "Suite, 1 très grand lit (côté ville)",
            "Type": "Suite",
            "BaseRate": 259.99,
            "BedOptions": "1 King Bed",
            "SleepsCount": 2,
            "SmokingAllowed": false,
            "Tags": [ "bathroom shower", "vcr/dvd" ]
          }
        ]
      },
      {
        HotelId: 8,
        HotelName: "Double Sanctuary Resort",
        hotelImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/62/f0/0f/evening-exterior-view.jpg?w=700&h=-1&s=1",
        Description: "5* Luxury Hotel - Biggest Rooms in the city.  #1 Hotel in the area listed by Conde Nast Traveler. Free WiFi, Flexible check in\/out, Fitness Center & Nespresso in room.",
        Description_fr: "5 * hôtel de luxe-plus grandes chambres de la ville.  #1 hôtel dans les environs énumérés par Conde Nast Traveler. WiFi gratuit, Check-in\/out flexible, centre de fitness et Nespresso dans la chambre.",
        LastRenovationDate: "2019-08-05T00:00:00Z",
        Address: {
          "StreetAddress": "2211 Elliott Ave",
          "City": "Seattle",
          "StateProvince": "WA",
          "PostalCode": "98121",
          "Country": "USA"
        },
        "Location": {
          "type": "Point",
          "coordinates": [ -122.347771, 47.611660 ]
        },
        Rooms: [
          {
            "Description": "Suite, 2 Queen Beds (Amenities)",
            "Description_fr": "Suite, 2 grands lits (Services)",
            "Type": "Suite",
            "BaseRate": 254.99,
            "BedOptions": "2 Queen Beds",
            "SleepsCount": 4,
            "SmokingAllowed": false,
            "Tags": [ "suite" ]
          },
          {
            "Description": "Standard Room, 1 King Bed (Amenities)",
            "Description_fr": "Chambre Standard, 1 très grand lit (Services)",
            "Type": "Standard Room",
            "BaseRate": 124.99,
            "BedOptions": "1 King Bed",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "suite" ]
          },
          {
            "Description": "Budget Room, 2 Double Beds (Waterfront View)",
            "Description_fr": "Chambre Économique, 2 lits doubles (vue sur le front de mer)",
            "Type": "Budget Room",
            "BaseRate": 68.99,
            "BedOptions": "2 Double Beds",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "suite", "vcr/dvd" ]
          },
          {
            "Description": "Standard Room, 1 Queen Bed (Mountain View)",
            "Description_fr": "Chambre Standard, 1 grand lit (vue montagne)",
            "Type": "Standard Room",
            "BaseRate": 126.99,
            "BedOptions": "1 Queen Bed",
            "SleepsCount": 2,
            "SmokingAllowed": true,
            "Tags": [ "vcr/dvd" ]
          }
        ]
      }
    ]

export default hotelItems