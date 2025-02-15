import React, { useState } from 'react';
import instructorImg from '../assets/instructor.png';
import './Instructor.css';
import CustomDropdown from '../components/CustomDropdown';
import Modal from '../components/Modal';

const Instructor = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
const skillsList = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
  "Professional"
];
const [formData, setFormData] = useState({
  "FirstName": '',
  "LastName": '',
  "EmailAddress": '',
  "PhoneNumber": '',
  "CurrentRole": '',
  "FieldOfInterest": '',
  "AreaOfFocus": '',
  "RelevantSkills": '',
  "PreferredCommunication": '',
  "WhyMentor": ''
});

  // Predefined list of countries
  const countryList = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Chad", "Chile",
    "China", "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Ecuador",
    "Egypt", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Georgia", "Germany", "Ghana",
    "Greece", "Guatemala", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
    "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
    "Maldives", "Mali", "Malta", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
    "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway",
    "Oman", "Pakistan", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
    "Russia", "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa",
    "South Korea", "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan", "Tanzania", "Thailand",
    "Tunisia", "Turkey", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  // Cities object with major cities for each country
  const citiesByCountry = {
    "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Fort Worth", "Columbus", "San Francisco", "Charlotte", "Indianapolis", "Seattle", "Denver", "Boston"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Liverpool", "Newcastle", "Bristol", "Cardiff", "Edinburgh", "Sheffield", "Belfast", "Leicester", "Aberdeen", "Cambridge", "Oxford", "Portsmouth", "York", "Nottingham", "Reading"],
    "Canada": ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Quebec City", "Winnipeg", "Hamilton", "Halifax", "Victoria", "London", "St. John's", "Saskatoon", "Regina", "Windsor", "Kelowna", "Kingston", "Thunder Bay", "Sudbury"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Newcastle", "Wollongong", "Logan City", "Hobart", "Townsville", "Cairns", "Darwin", "Geelong", "Launceston", "Bendigo", "Ballarat", "Mandurah", "Mackay"],
    "India": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad"],
    "China": ["Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Tianjin", "Wuhan", "Chengdu", "Hangzhou", "Nanjing", "Xi'an", "Chongqing", "Shenyang", "Qingdao", "Zhengzhou", "Jinan", "Harbin", "Suzhou", "Changsha", "Kunming", "Dalian"],
    "Japan": ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama", "Hiroshima", "Sendai", "Kitakyushu", "Chiba", "Sakai", "Niigata", "Hamamatsu", "Kumamoto", "Sagamihara", "Shizuoka"],
    "Germany": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Dortmund", "Essen", "Bremen", "Dresden", "Hanover", "Nuremberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster"],
    "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "Saint-Étienne", "Le Havre", "Toulon", "Grenoble", "Dijon", "Angers", "Nîmes", "Villeurbanne"],
    "Brazil": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Porto Alegre", "Belém", "Goiânia", "Guarulhos", "Campinas", "São Luís", "São Gonçalo", "Maceió", "Duque de Caxias", "Natal", "Campo Grande"],
    "Russia": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Voronezh", "Perm", "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk"],
    "South Africa": ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein", "East London", "Kimberley", "Polokwane", "Nelspruit", "Pietermaritzburg", "Rustenburg", "Potchefstroom", "Newcastle", "Witbank", "Richards Bay", "Welkom", "George", "Paarl", "Stellenbosch"],
    "Mexico": ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana", "León", "Juárez", "Zapopan", "Mérida", "San Luis Potosí", "Querétaro", "Morelia", "Aguascalientes", "Acapulco", "Cuernavaca", "Saltillo", "Villahermosa", "Cancún", "Hermosillo", "Veracruz"],
    "Spain": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas", "Bilbao", "Alicante", "Córdoba", "Valladolid", "Vigo", "Gijón", "L'Hospitalet", "Granada", "A Coruña", "Vitoria-Gasteiz", "Elche"],
    "Italy": ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania", "Venice", "Verona", "Messina", "Padua", "Trieste", "Brescia", "Parma", "Taranto", "Prato", "Modena"],
    "Netherlands": ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Tilburg", "Groningen", "Almere", "Breda", "Nijmegen", "Enschede", "Haarlem", "Arnhem", "Zaanstad", "Amersfoort", "Apeldoorn", "Hertogenbosch", "Hoofddorp", "Maastricht", "Leiden"],
    "Sweden": ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås", "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping", "Lund", "Umeå", "Gävle", "Borås", "Södertälje", "Eskilstuna", "Halmstad", "Växjö", "Karlstad", "Sundsvall"],
    "Poland": ["Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Katowice", "Białystok", "Gdynia", "Częstochowa", "Radom", "Sosnowiec", "Toruń", "Kielce", "Gliwice", "Zabrze", "Olsztyn"],
    "Argentina": ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "La Plata", "San Miguel de Tucumán", "Mar del Plata", "Salta", "Santa Fe", "San Juan", "Resistencia", "Santiago del Estero", "Corrientes", "Neuquén", "Posadas", "San Salvador de Jujuy", "Bahía Blanca", "Paraná", "Formosa", "San Luis"],
    "Belgium": ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège", "Bruges", "Namur", "Leuven", "Mons", "Aalst", "Mechelen", "Kortrijk", "Hasselt", "Ostend", "Sint-Niklaas", "Tournai", "Genk", "Seraing", "Roeselare", "La Louvière"],
    "Greece": ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Ioannina", "Chania", "Rhodes", "Chalcis", "Agrinio", "Katerini", "Trikala", "Serres", "Alexandroupoli", "Xanthi", "Veria", "Kavala", "Kalamata", "Kozani"],
    "Portugal": ["Lisbon", "Porto", "Vila Nova de Gaia", "Amadora", "Braga", "Setúbal", "Coimbra", "Funchal", "Almada", "Queluz", "Cacém", "Barreiro", "Aveiro", "Guimarães", "Odivelas", "Rio Tinto", "Viseu", "Matosinhos", "Maia", "Leiria"],
    "Czech Republic": ["Prague", "Brno", "Ostrava", "Pilsen", "Liberec", "Olomouc", "České Budějovice", "Hradec Králové", "Ústí nad Labem", "Pardubice", "Zlín", "Havířov", "Kladno", "Most", "Opava", "Frýdek-Místek", "Karviná", "Jihlava", "Teplice", "Děčín"],
    "Romania": ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași", "Constanța", "Craiova", "Brașov", "Galați", "Ploiești", "Oradea", "Brăila", "Arad", "Pitești", "Sibiu", "Bacău", "Târgu Mureș", "Baia Mare", "Buzău", "Botoșani", "Satu Mare"],
    "Hungary": ["Budapest", "Debrecen", "Szeged", "Miskolc", "Pécs", "Győr", "Nyíregyháza", "Kecskemét", "Székesfehérvár", "Szombathely", "Szolnok", "Tatabánya", "Érd", "Kaposvár", "Sopron", "Veszprém", "Békéscsaba", "Zalaegerszeg", "Eger", "Nagykanizsa"],
    "Austria": ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "Sankt Pölten", "Dornbirn", "Wiener Neustadt", "Steyr", "Feldkirch", "Bregenz", "Leonding", "Klosterneuburg", "Baden", "Wolfsberg", "Leoben", "Krems"],
    "Switzerland": ["Zürich", "Geneva", "Basel", "Lausanne", "Bern", "Winterthur", "Lucerne", "St. Gallen", "Lugano", "Biel", "Thun", "Köniz", "La Chaux-de-Fonds", "Fribourg", "Schaffhausen", "Vernier", "Chur", "Neuchâtel", "Uster", "Sion"],
    "Denmark": ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Frederiksberg", "Esbjerg", "Randers", "Kolding", "Horsens", "Vejle", "Roskilde", "Herning", "Hørsholm", "Helsingør", "Silkeborg", "Næstved", "Fredericia", "Viborg", "Køge", "Holstebro"],
    "Finland": ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä", "Lahti", "Kuopio", "Pori", "Kouvola", "Joensuu", "Lappeenranta", "Hämeenlinna", "Vaasa", "Rovaniemi", "Seinäjoki", "Mikkeli", "Kotka", "Salo"],
    "Norway": ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Fredrikstad", "Porsgrunn", "Kristiansand", "Tromsø", "Sandnes", "Sarpsborg", "Bodø", "Ålesund", "Sandefjord", "Arendal", "Tønsberg", "Larvik", "Moss", "Hamar", "Halden"],
    "Ireland": ["Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Dundalk", "Swords", "Bray", "Navan", "Ennis", "Kilkenny", "Tralee", "Carlow", "Naas", "Athlone", "Letterkenny", "Celbridge", "Sligo", "Greystones"],
    "New Zealand": ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga", "Napier-Hastings", "Dunedin", "Palmerston North", "Nelson", "Rotorua", "New Plymouth", "Whangarei", "Invercargill", "Whanganui", "Gisborne", "Masterton", "Blenheim", "Pukekohe", "Timaru", "Taupo"],
    "Singapore": ["Singapore", "Woodlands", "Tampines", "Jurong West", "Hougang", "Sengkang", "Yishun", "Ang Mo Kio", "Bedok", "Bukit Merah", "Toa Payoh", "Serangoon", "Clementi", "Bukit Batok", "Queenstown", "Yew Tee", "Punggol", "Bukit Panjang", "Bishan", "Kallang"],
    "Israel": ["Jerusalem", "Tel Aviv", "Haifa", "Rishon LeZion", "Petah Tikva", "Ashdod", "Netanya", "Beer Sheva", "Holon", "Bnei Brak", "Ramat Gan", "Bat Yam", "Rehovot", "Herzliya", "Kfar Saba", "Modi'in", "Ra'anana", "Eilat", "Nahariya", "Lod"],
    "United Arab Emirates": ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Dubai World Central", "Dibba Al-Fujairah", "Madinat Zayed", "Ruwais", "Liwa Oasis", "Dhaid", "Ghayathi", "Ar-Ruways", "Dibba Al-Hisn", "Kalba", "Khor Fakkan", "Muzayri'"],
    "Egypt": ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said", "Suez", "Luxor", "Mansoura", "El-Mahalla El-Kubra", "Tanta", "Asyut", "Ismailia", "Fayyum", "Zagazig", "Aswan", "Damietta", "Damanhur", "El-Minya", "Beni Suef", "Qena"],
    "South Korea": ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Suwon", "Ulsan", "Changwon", "Seongnam", "Goyang", "Yongin", "Cheongju", "Jeonju", "Cheonan", "Ansan", "Anyang", "Gimhak", "Pohang", "Uijeongbu"],
    "Malaysia": ["Kuala Lumpur", "George Town", "Ipoh", "Shah Alam", "Petaling Jaya", "Johor Bahru", "Melaka", "Kota Kinabalu", "Alor Setar", "Kuching", "Kuantan", "Sungai Petani", "Batu Pahat", "Kluang", "Seremban", "Sandakan", "Miri", "Taiping", "Tawau", "Kulim"],
    "Philippines": ["Manila", "Quezon City", "Davao City", "Caloocan", "Cebu City", "Zamboanga City", "Taguig", "Antipolo", "Pasig", "Cagayan de Oro", "Parañaque", "Dasmariñas", "Valenzuela", "Bacoor", "General Santos", "Las Piñas", "Makati", "San Jose del Monte", "Bacolod", "Muntinlupa"],
    "Vietnam": ["Ho Chi Minh City", "Hanoi", "Haiphong", "Da Nang", "Can Tho", "Bien Hoa", "Nha Trang", "Hue", "Vinh", "Da Lat", "Nam Dinh", "Vung Tau", "Quy Nhon", "Long Xuyen", "Thai Nguyen", "Ha Long", "Phan Thiet", "Cam Ranh", "Cam Pha", "Rach Gia"],
    "Thailand": ["Bangkok", "Nonthaburi", "Nakhon Ratchasima", "Chiang Mai", "Hat Yai", "Udon Thani", "Pak Kret", "Khon Kaen", "Nakhon Sawan", "Ubon Ratchathani", "Nakhon Si Thammarat", "Chon Buri", "Pattaya", "Phuket", "Songkhla", "Surat Thani", "Nakhon Pathom", "Rayong", "Yala", "Rangsit"],
    "Indonesia": ["Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Palembang", "Tangerang", "Depok", "Bekasi", "Malang", "Padang", "Denpasar", "Bandar Lampung", "Yogyakarta", "Surakarta", "Pekanbaru", "Balikpapan", "Samarinda", "Tasikmalaya"],
    "Pakistan": ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Gujranwala", "Peshawar", "Multan", "Hyderabad", "Islamabad", "Quetta", "Sargodha", "Bahawalpur", "Sialkot", "Sukkur", "Larkana", "Sheikhupura", "Mirpur Khas", "Rahimyar Khan", "Kohat", "Jhang"],
    "Bangladesh": ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Barisal", "Rangpur", "Comilla", "Narayanganj", "Gazipur", "Mymensingh", "Jessore", "Bogra", "Savar", "Tangail", "Dinajpur", "Nawabganj", "Pabna", "Cox's Bazar", "Narsingdi"],
    "Turkey": ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya", "Adana", "Gaziantep", "Konya", "Mersin", "Diyarbakır", "Kayseri", "Eskişehir", "Samsun", "Denizli", "Şanlıurfa", "Malatya", "Erzurum", "Batman", "Kahramanmaraş", "Van"],
    "Iran": ["Tehran", "Mashhad", "Isfahan", "Karaj", "Shiraz", "Tabriz", "Qom", "Ahvaz", "Kermanshah", "Urmia", "Rasht", "Zahedan", "Hamadan", "Kerman", "Yazd", "Ardabil", "Bandar Abbas", "Arak", "Eslamshahr", "Qazvin"],
    "Saudi Arabia": ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Ta'if", "Tabuk", "Buraidah", "Khamis Mushait", "Al-Hufuf", "Al-Mubarraz", "Khobar", "Najran", "Yanbu", "Abha", "Ha'il", "Al-Qatif", "Al-Kharj", "Arar", "Sakaka"],
    "Iraq": ["Baghdad", "Basra", "Mosul", "Erbil", "Sulaymaniyah", "Najaf", "Karbala", "Nasiriyah", "Kirkuk", "Amarah", "Diwaniyah", "Kut", "Hilla", "Ramadi", "Fallujah", "Samawah", "Baqubah", "Sinjar", "Zakho", "Kufa"],
    "Afghanistan": ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Jalalabad", "Kunduz", "Ghazni", "Lashkar Gah", "Taloqan", "Puli Khumri", "Khost", "Sheberghan", "Charikar", "Farah", "Puli Alam", "Zaranj", "Maymanah", "Mehtar Lam", "Gardez", "Mahmud-E Raqi"],
    "Nigeria": ["Lagos", "Kano", "Ibadan", "Kaduna", "Port Harcourt", "Benin City", "Maiduguri", "Zaria", "Aba", "Jos", "Ilorin", "Oyo", "Enugu", "Abeokuta", "Abuja", "Sokoto", "Onitsha", "Warri", "Calabar", "Katsina"],
    "Ethiopia": ["Addis Ababa", "Dire Dawa", "Mek'ele", "Gondar", "Adama", "Hawassa", "Bahir Dar", "Jimma", "Dessie", "Jijiga", "Shashamane", "Bishoftu", "Arba Minch", "Hosaena", "Harar", "Dilla", "Nekemte", "Debre Birhan", "Asella", "Debre Mark'os"],
    "Kenya": ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Malindi", "Kitale", "Garissa", "Kakamega", "Thika", "Nyeri", "Machakos", "Meru", "Lamu", "Naivasha", "Athi River", "Nanyuki", "Bungoma", "Kericho", "Kisii"],
    "Tanzania": ["Dar es Salaam", "Mwanza", "Arusha", "Dodoma", "Mbeya", "Morogoro", "Tanga", "Kahama", "Tabora", "Zanzibar City", "Singida", "Kigoma", "Musoma", "Iringa", "Shinyanga", "Bukoba", "Songea", "Moshi", "Sumbawanga", "Geita"],
    "Morocco": ["Casablanca", "Rabat", "Fez", "Marrakesh", "Tangier", "Agadir", "Meknes", "Oujda", "Kenitra", "Tetouan", "Safi", "Mohammedia", "El Jadida", "Beni Mellal", "Nador", "Khouribga", "Settat", "Taza", "Larache", "Ksar El Kebir"],
    "Colombia": ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Cúcuta", "Bucaramanga", "Pereira", "Santa Marta", "Ibagué", "Pasto", "Manizales", "Neiva", "Villavicencio", "Armenia", "Valledupar", "Montería", "Sincelejo", "Popayán", "Floridablanca"],
    "Venezuela": ["Caracas", "Maracaibo", "Valencia", "Barquisimeto", "Maracay", "Ciudad Guayana", "Barcelona", "Maturín", "San Cristóbal", "Ciudad Bolívar", "Cumaná", "Mérida", "Cabimas", "Barinas", "Turmero", "Ojeda", "Los Teques", "Punto Fijo", "Coro", "Porlamar"],
    "Peru": ["Lima", "Arequipa", "Trujillo", "Chiclayo", "Piura", "Iquitos", "Cusco", "Chimbote", "Huancayo", "Tacna", "Ica", "Juliaca", "Cajamarca", "Pucallpa", "Sullana", "Ayacucho", "Chincha Alta", "Huánuco", "Huacho", "Tarapoto"],
    "Chile": ["Santiago", "Valparaíso", "Concepción", "La Serena", "Antofagasta", "Temuco", "Rancagua", "Talca", "Arica", "Chillán", "Iquique", "Puerto Montt", "Calama", "Osorno", "Quillota", "Valdivia", "Copiapó", "Punta Arenas", "Curicó", "Los Ángeles"],
    "Ecuador": ["Quito", "Guayaquil", "Cuenca", "Machala", "Manta", "Portoviejo", "Ambato", "Riobamba", "Quevedo", "Loja", "Milagro", "Ibarra", "Esmeraldas", "Babahoyo", "Sangolquí", "Daule", "Santa Elena", "Latacunga", "Quinindé", "La Libertad"],
    "Bolivia": ["La Paz", "Santa Cruz de la Sierra", "Cochabamba", "Sucre", "Oruro", "Potosí", "Tarija", "Sacaba", "Trinidad", "Montero", "Quillacollo", "Riberalta", "Warnes", "La Guardia", "Viacha", "Yacuiba", "Villazón", "Camiri", "Guayaramerín", "Bermejo"],
    "Paraguay": ["Asunción", "Ciudad del Este", "San Lorenzo", "Luque", "Capiatá", "Lambaré", "Fernando de la Mora", "Limpio", "Nemby", "Encarnación", "Pedro Juan Caballero", "Itauguá", "Mariano Roque Alonso", "Villa Elisa", "Concepción", "Coronel Oviedo", "Caaguazú", "Presidente Franco", "Villarrica", "Itá"],
    "Uruguay": ["Montevideo", "Salto", "Ciudad de la Costa", "Paysandú", "Las Piedras", "Rivera", "Maldonado", "Tacuarembó", "Melo", "Mercedes", "Artigas", "Minas", "San José de Mayo", "Durazno", "Florida", "Barros Blancos", "Ciudad del Plata", "San Carlos", "Colonia del Sacramento", "Pando"],
    "Costa Rica": ["San José", "Alajuela", "Cartago", "Heredia", "Limón", "Puntarenas", "Liberia", "San Francisco", "Paraíso", "Desamparados", "San Isidro", "San Rafael", "San Vicente", "Turrialba", "Pérez Zeledón", "Quepos", "Golfito", "Ciudad Quesada", "Nicoya", "Jacó"],
    "Panama": ["Panama City", "San Miguelito", "Juan Díaz", "David", "Arraiján", "Colón", "La Chorrera", "Santiago", "Chitré", "Penonomé", "Changuinola", "Aguadulce", "La Concepción", "Chepo", "Las Tablas", "Bugaba", "Portobelo", "Soná", "Boquete", "El Porvenir"],
    "Honduras": ["Tegucigalpa", "San Pedro Sula", "Choloma", "La Ceiba", "El Progreso", "Choluteca", "Comayagua", "Puerto Cortés", "La Lima", "Danlí", "Siguatepeque", "Juticalpa", "Tocoa", "Santa Rosa de Copán", "Villanueva", "Tela", "Olanchito", "Santa Bárbara", "Yoro", "Nacaome"],
    "Guatemala": ["Guatemala City", "Mixco", "Villa Nueva", "Petapa", "San Juan Sacatepéquez", "Quetzaltenango", "Escuintla", "Chinautla", "Chimaltenango", "Huehuetenango", "Cobán", "San Pedro Carchá", "Coatepeque", "Puerto Barrios", "Mazatenango", "Jalapa", "Antigua Guatemala", "Santa Cruz del Quiché", "Sololá", "Retalhuleu"],
    "El Salvador": ["San Salvador", "Soyapango", "Santa Ana", "San Miguel", "Mejicanos", "Apopa", "Delgado", "Ilopango", "Santa Tecla", "Zacatecoluca", "Usulután", "San Marcos", "Ahuachapán", "Cojutepeque", "San Vicente", "San Francisco", "Chalchuapa", "Sensuntepeque", "La Unión", "Metapán"],
    "Nicaragua": ["Managua", "León", "Masaya", "Chinandega", "Matagalpa", "Estelí", "Granada", "Tipitapa", "Jinotega", "Puerto Cabezas", "Juigalpa", "Nueva Guinea", "Bluefields", "Diriamba", "Ocotal", "Somoto", "Jinotepe", "El Viejo", "Chichigalpa", "Boaco"],
    "Jamaica": ["Kingston", "Spanish Town", "Montego Bay", "Portmore", "May Pen", "Mandeville", "Old Harbour", "Linstead", "Half Way Tree", "Port Antonio", "Savanna-la-Mar", "Lucea", "Morant Bay", "Black River", "Falmouth", "Port Maria", "St. Ann's Bay", "Bog Walk", "Ewarton", "Ocho Rios"],
    "Haiti": ["Port-au-Prince", "Cap-Haïtien", "Carrefour", "Delmas", "Pétionville", "Gonaïves", "Saint-Marc", "Les Cayes", "Jacmel", "Léogâne", "Petit-Goâve", "Jérémie", "Port-de-Paix", "Hinche", "Saint-Louis du Nord", "Dessalines", "Aquin", "Miragoâne", "Fort-Liberté", "Limbé"],
    "Dominican Republic": ["Santo Domingo", "Santiago de los Caballeros", "Santo Domingo Este", "Santo Domingo Norte", "La Romana", "San Pedro de Macorís", "La Vega", "San Francisco de Macorís", "San Cristóbal", "Puerto Plata", "Higüey", "Bonao", "Baní", "Moca", "Azua", "Mao", "Monte Cristi", "Nagua", "Barahona", "Cotuí"],
    "Cuba": ["Havana", "Santiago de Cuba", "Camagüey", "Holguín", "Guantánamo", "Santa Clara", "Las Tunas", "Bayamo", "Cienfuegos", "Pinar del Río", "Matanzas", "Ciego de Ávila", "Sancti Spíritus", "Manzanillo", "Cárdenas", "Palma Soriano", "Guanabacoa", "Nueva Gerona", "Contramaestre", "Trinidad"],
    "Puerto Rico": ["San Juan", "Bayamón", "Carolina", "Ponce", "Caguas", "Guaynabo", "Mayagüez", "Trujillo Alto", "Arecibo", "Fajardo", "Río Grande", "Humacao", "Vega Baja", "Aguadilla", "Yauco", "San Sebastián", "Guayama", "Hatillo", "San Lorenzo", "Canóvanas"],
    "Algeria": ["Algiers", "Oran", "Constantine", "Annaba", "Blida", "Batna", "Djelfa", "Sétif", "Sidi Bel Abbès", "Biskra", "Tébessa", "Skikda", "Tiaret", "Béjaïa", "Tlemcen", "Béchar", "Ghardaïa", "Souk Ahras", "Mostaganem", "Chlef"],
    "Tunisia": ["Tunis", "Sfax", "Sousse", "Kairouan", "Bizerte", "Gabès", "Ariana", "Gafsa", "La Marsa", "Kasserine", "Monastir", "Ben Arous", "Medenine", "Nabeul", "Tataouine", "Béja", "Jendouba", "El Kef", "Mahdia", "Tozeur"],
    "Libya": ["Tripoli", "Benghazi", "Misrata", "Tarhuna", "Al Khums", "Zawiya", "Sirte", "Ajdabiya", "Zliten", "Sabha", "Tobruk", "Derna", "Gharyan", "Sabratha", "Al Bayda", "Yafran", "Bani Walid", "Al Marj", "Ghat", "Murzuk"],
    "Sudan": ["Khartoum", "Omdurman", "Nyala", "Port Sudan", "Kassala", "Al-Ubayyid", "Kosti", "Wad Madani", "Al-Qadarif", "Sinnar", "Dongola", "Al Fashir", "Atbara", "Ad Damazin", "Ad-Duwaym", "Geneina", "Rabak", "Yei", "Kadugli", "Ed Damer"],
    "Ghana": ["Accra", "Kumasi", "Tamale", "Sekondi-Takoradi", "Ashaiman", "Sunyani", "Cape Coast", "Obuasi", "Teshie", "Tema", "Madina", "Koforidua", "Wa", "Ho", "Nungua", "Lashibi", "Techiman", "Dome", "Gbawe", "Bolgatanga"],
    "Cameroon": ["Douala", "Yaoundé", "Garoua", "Bamenda", "Maroua", "Nkongsamba", "Bafoussam", "Ngaoundéré", "Bertoua", "Loum", "Kumba", "Edéa", "Kumbo", "Foumban", "Mbouda", "Dschang", "Limbé", "Ebolowa", "Kousséri", "Guider"],
    "Uganda": ["Kampala", "Gulu", "Lira", "Mbarara", "Jinja", "Bwizibwera", "Mbale", "Mukono", "Kasese", "Masaka", "Hoima", "Luwero", "Arua", "Fort Portal", "Kabale", "Masindi", "Tororo", "Soroti", "Mityana", "Mubende"],
    "Senegal": ["Dakar", "Touba", "Thiès", "Rufisque", "Kaolack", "M'Bour", "Ziguinchor", "Saint-Louis", "Diourbel", "Louga", "Tambacounda", "Kolda", "Richard Toll", "Bargny", "Tivaouane", "Joal-Fadiouth", "Sédhiou", "Kédougou", "Matam", "Fatick"],
    "Zimbabwe": ["Harare", "Bulawayo", "Chitungwiza", "Mutare", "Gweru", "Epworth", "Kwekwe", "Kadoma", "Masvingo", "Chinhoyi", "Norton", "Marondera", "Ruwa", "Chegutu", "Zvishavane", "Bindura", "Beitbridge", "Victoria Falls", "Hwange", "Redcliff"],
    "Rwanda": ["Kigali", "Butare", "Gitarama", "Ruhengeri", "Gisenyi", "Byumba", "Cyangugu", "Kibuye", "Kibungo", "Nyanza", "Ruhango", "Rwamagana", "Gikongoro", "Muhanga", "Musanze", "Rubavu", "Nyagatare", "Rusizi", "Huye", "Kayonza"],
    "Mali": ["Bamako", "Sikasso", "Kalabancoro", "Koutiala", "Ségou", "Kayes", "Mopti", "Kati", "Markala", "Kolokani", "Kita", "Gao", "Sikasso", "Koulikoro", "Niono", "Bougouni", "San", "Timbuktu", "Banamba", "Macina"],
    "Mozambique": ["Maputo", "Matola", "Nampula", "Beira", "Chimoio", "Nacala", "Quelimane", "Tete", "Lichinga", "Pemba", "Xai-Xai", "Maxixe", "Angoche", "Cuamba", "Montepuez", "Dondo", "Mocuba", "Inhambane", "Chokwe", "Chibuto"],
    "Angola": ["Luanda", "Huambo", "Lobito", "Benguela", "Kuito", "Malanje", "Lubango", "Cuito", "Cabinda", "Namibe", "Saurimo", "Soyo", "Uíge", "Luena", "Sumbe", "Menongue", "Ndalatando", "Mbanza Congo", "Caxito", "Ondjiva"],
    "Zambia": ["Lusaka", "Kitwe", "Ndola", "Kabwe", "Chingola", "Mufulira", "Livingstone", "Luanshya", "Kasama", "Chipata", "Choma", "Solwezi", "Mongu", "Mazabuka", "Kafue", "Mansa", "Mpika", "Kapiri Mposhi", "Monze", "Kalulushi"],
    "Madagascar": ["Antananarivo", "Toamasina", "Antsirabe", "Fianarantsoa", "Mahajanga", "Toliara", "Antsiranana", "Ambovombe", "Ambatondrazaka", "Farafangana", "Maevatanana", "Manakara", "Moramanga", "Ambositra", "Antalaha", "Morondava", "Sambava", "Fandriana", "Marovoay", "Betafo"],
    "Cambodia": ["Phnom Penh", "Siem Reap", "Battambang", "Sihanoukville", "Kampong Cham", "Pursat", "Kampong Speu", "Takeo", "Kampot", "Prey Veng", "Svay Rieng", "Kampong Thom", "Kratie", "Stung Treng", "Banlung", "Pailin", "Samraong", "Suong", "Doun Kaev", "Stueng Saen"],
    "Laos": ["Vientiane", "Pakse", "Luang Prabang", "Savannakhet", "Thakhek", "Phonsavan", "Vang Vieng", "Attapeu", "Xam Neua", "Phongsali", "Luang Namtha", "Salavan", "Sayaboury", "Champasak", "Houayxay", "Pakxe", "Muang Xay", "Thanaleng", "Ban Houayxay", "Muang Khong"],
    "Myanmar": ["Yangon", "Mandalay", "Naypyidaw", "Mawlamyine", "Bago", "Pathein", "Monywa", "Meiktila", "Sittwe", "Taunggyi", "Myitkyina", "Dawei", "Pakokku", "Hpa-An", "Myeik", "Pyay", "Aunglan", "Mogok", "Kalay", "Yenangyaung"],
    "Mongolia": ["Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan", "Ölgii", "Ulaangom", "Hovd", "Mörön", "Bayankhongor", "Zuunmod", "Dalanzadgad", "Uliastai", "Baruun-Urt", "Arvaikheer", "Mandalgovi", "Sükhbaatar", "Altai", "Tsetserleg", "Bulgan", "Öndörkhaan"],
    "Nepal": ["Kathmandu", "Pokhara", "Lalitpur", "Bharatpur", "Birgunj", "Biratnagar", "Butwal", "Dharan", "Bhaktapur", "Hetauda", "Dhangadhi", "Tulsipur", "Itahari", "Nepalgunj", "Kirtipur", "Birendranagar", "Siddharthanagar", "Mechinagar", "Ghorahi", "Bhimdatta"],
    "Sri Lanka": ["Colombo", "Kandy", "Galle", "Jaffna", "Negombo", "Trincomalee", "Batticaloa", "Anuradhapura", "Ratnapura", "Badulla", "Matara", "Kurunegala", "Polonnaruwa", "Matale", "Moratuwa", "Kalutara", "Kalmunai", "Gampaha", "Vavuniya", "Hambantota"],
    "Fiji": ["Suva", "Lautoka", "Nadi", "Labasa", "Ba", "Levuka", "Sigatoka", "Savusavu", "Navua", "Rakiraki", "Tavua", "Korovou", "Nasinu", "Nausori", "Vatukoula", "Pacific Harbour", "Deuba", "Nabouwalu", "Seaqaqa", "Waiyevo"],
    "Papua New Guinea": ["Port Moresby", "Lae", "Mount Hagen", "Madang", "Goroka", "Kokopo", "Wewak", "Kimbe", "Bulolo", "Rabaul", "Popondetta", "Kavieng", "Mendi", "Alotau", "Kundiawa", "Daru", "Kiunga", "Kerema", "Lorengau", "Arawa"],
    "Solomon Islands": ["Honiara", "Auki", "Gizo", "Kirakira", "Buala", "Tulagi", "Taro Island", "Lata", "Tigoa", "Noro", "Munda", "Choiseul Bay", "Seghe", "Avu Avu", "Yandina", "Ringi Cove", "Atoifi", "Afufu", "Tingoa", "Pakera"],
    "Vanuatu": ["Port Vila", "Luganville", "Norsup", "Isangel", "Sola", "Lakatoro", "Longana", "Saratamata", "Lenakel", "Port-Olry", "Whitesands", "Loltong", "Pangi", "Rovo Bay", "Naone", "Mele", "Ambore", "Ipota", "Lamap", "Palikulo"],
    "Samoa": ["Apia", "Vaitele", "Faleula", "Siusega", "Malie", "Afega", "Fasito'o Uta", "Vailima", "Moata'a", "Faleasiu", "Solosolo", "Vaiusu", "Lufilufi", "Falefa", "Leauva'a", "Leulumoega", "Saleimoa", "Nofoali'i", "Salelologa", "Safotu"],
    "Tonga": ["Nuku'alofa", "Neiafu", "Pangai", "Ohonua", "Hihifo", "Mu'a", "Vaini", "Houma", "Kolonga", "Lapaha", "Niutoua", "Ha'ateiho", "Pea", "Fua'amotu", "Navutoka", "Nukunuku", "Haveluloto", "Tofoa", "Folaha", "Longumapu"],
    "Kiribati": ["Tarawa", "Betio", "Bikenibeu", "Teaoraereke", "Bairiki", "Eita", "Bangandu", "Bonriki", "Buota", "Tanaea", "Ambo", "Taborio", "Nawerewere", "Abarao", "Bikenibeu West", "Antebuka", "Temwaiku", "Causeway", "Banraeaba", "Nanikai"],
    "Marshall Islands": ["Majuro", "Ebeye", "Arno", "Jabor", "Laura", "Wotje", "Mili", "Jaluit", "Ailinglaplap", "Namdrik", "Likiep", "Woja", "Utrik", "Mejit", "Aur", "Maloelap", "Namu", "Ailuk", "Lib", "Kili"],
    "Micronesia": ["Palikir", "Kolonia", "Weno", "Tofol", "Colonia", "Lelu", "Tafunsak", "Malem", "Utwe", "Madolenihmw", "Nett", "U", "Mokil", "Pingelap", "Nukuoro", "Kapingamarangi", "Sapwuahfik", "Faichuk", "Tonoas", "Romanum"],
    "Palau": ["Ngerulmud", "Koror", "Melekeok", "Kloulklubed", "Mengellang", "Ngarchelong", "Ngardmau", "Ngaraard", "Ngchesar", "Ngiwal", "Peleliu", "Angaur", "Kayangel", "Hatohobei", "Sonsorol", "Ollei", "Ngeremlengui", "Ngatpang", "Aimeliik", "Airai"],
    "Timor-Leste": ["Dili", "Baucau", "Lospalos", "Maliana", "Same", "Aileu", "Manatuto", "Liquiçá", "Gleno", "Suai", "Viqueque", "Ermera", "Ainaro", "Pante Macassar", "Lautém", "Bobonaro", "Maubisse", "Atauro", "Lolotoe", "Laclubar"],
    "Brunei": ["Bandar Seri Begawan", "Kuala Belait", "Tutong", "Bangar", "Seria", "Muara", "Pekan Tutong", "Mentiri", "Berakas", "Gadong", "Kiulap", "Jerudong", "Lumut", "Kampong Ayer", "Sengkurong", "Lambak", "Meragang", "Rimba", "Subok", "Pengkalan Batu"],
    "Maldives": ["Malé", "Addu City", "Fuvahmulah", "Kulhudhuffushi", "Thinadhoo", "Naifaru", "Hinnavaru", "Dhuvaafaru", "Muli", "Eydhafushi", "Kudahuvadhoo", "Mahibadhoo", "Manadhoo", "Fonadhoo", "Hithadhoo", "Maradhoo", "Feydhoo", "Hulhumalé", "Villingili", "Dhidhdhoo"],
    "Seychelles": ["Victoria", "Anse Boileau", "Beau Vallon", "Cascade", "Anse Royale", "Takamaka", "Grand'Anse Mahé", "Port Glaud", "Baie Lazare", "Anse Etoile", "La Digue", "Praslin", "Bel Ombre", "Au Cap", "Pointe La Rue", "Glacis", "Saint Louis", "Mont Fleuri", "Plaisance", "Roche Caiman"],
    "Comoros": ["Moroni", "Mutsamudu", "Fomboni", "Domoni", "Tsimbeo", "Sima", "Ouani", "Mbeni", "Mitsamiouli", "Foumbouni", "Iconi", "Mitsoudjé", "Koimbani", "Mramani", "Bazimini", "Mbéni", "Tsembehou", "Nioumachoua", "Kangani", "Moya"],
    "Mauritius": ["Port Louis", "Beau Bassin-Rose Hill", "Vacoas-Phoenix", "Curepipe", "Quatre Bornes", "Triolet", "Goodlands", "Centre de Flacq", "Rose Belle", "Mahébourg", "Saint Pierre", "Rivière du Rempart", "Tamarin", "Chemin Grenier", "Grand Baie", "Surinam", "L'Escalier", "Rivière des Anguilles", "Souillac", "Grand Gaube"],
    "Cape Verde": ["Praia", "Mindelo", "Santa Maria", "Assomada", "Espargos", "São Filipe", "Tarrafal", "Porto Novo", "Pedra Badejo", "Ribeira Grande", "Santa Cruz", "São Miguel", "Mosteiros", "Vila do Maio", "Ribeira Brava", "Tarrafal de São Nicolau", "Nova Sintra", "Ponta do Sol", "Porto Inglês", "São Domingos"],
    "São Tomé and Príncipe": ["São Tomé", "Santo António", "Neves", "Santana", "Trindade", "São João dos Angolares", "Guadalupe", "Santa Cruz", "Pantufo", "Ribeira Afonso", "Porto Alegre", "Santo Amaro", "Bombom", "Micoló", "Praia Cruz", "Água Grande", "Mé-Zóchi", "Cantagalo", "Lembá", "Lobata"],
    "Bahrain": ["Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali", "Isa Town", "Sitra", "Budaiya", "Jidhafs", "Sanabis", "Tubli", "Barbar", "Diraz", "Janusan", "Hamala", "Sanad", "Adliya", "Busaiteen", "Seef", "Zallaq"],
    "Qatar": ["Doha", "Al Wakrah", "Al Khor", "Umm Salal", "Al Rayyan", "Mesaieed", "Dukhan", "Al Shamal", "Al Wukair", "Abu Samra", "Madinat ash Shamal", "Al Gharafa", "Al Thakhira", "Lusail", "Al Daayen", "Umm Bab", "Al Karaana", "Ras Laffan", "Simaisma", "Al Ruwais"],
    "Kuwait": ["Kuwait City", "Al Ahmadi", "Hawalli", "Al Farwaniyah", "Al Jahra", "Sabah Al Salem", "Salmiya", "Fahaheel", "Al Mangaf", "Abu Halifa", "Al Mahboula", "Sabah Al Ahmad", "Abdullah Al Salem", "Al Qadsiya", "Dasma", "Bayan", "Mishref", "Salwa", "Rumaithiya", "Jabriya"],
    "Oman": ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur", "Ibri", "Seeb", "Rustaq", "Saham", "Barka", "Al Buraimi", "Bahla", "Ibra", "Adam", "Al Khaburah", "Bidbid", "Al Mudaybi", "Al Suwaiq", "Khasab", "Yanqul"],
    "Cyprus": ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta", "Kyrenia", "Morphou", "Aradippou", "Athienou", "Paralimni", "Dali", "Polis", "Deryneia", "Lefkara", "Pegeia", "Strovolos", "Lakatamia", "Aglandjia", "Latsia", "Tseri"],
    "Malta": ["Valletta", "Birkirkara", "Qormi", "Mosta", "Zabbar", "San Pawl il-Baħar", "Sliema", "Naxxar", "Rabat", "Fgura", "Żejtun", "San Ġwann", "Żebbuġ", "Siġġiewi", "Marsascala", "Gżira", "Attard", "Birżebbuġa", "Ħamrun", "Swieqi"],
    "Luxembourg": ["Luxembourg City", "Esch-sur-Alzette", "Dudelange", "Schifflange", "Bettembourg", "Pétange", "Ettelbruck", "Diekirch", "Strassen", "Bertrange", "Mamer", "Differdange", "Wiltz", "Echternach", "Rumelange", "Grevenmacher", "Mondorf-les-Bains", "Mersch", "Remich", "Vianden"],
    "Estonia": ["Tallinn", "Tartu", "Narva", "Pärnu", "Kohtla-Järve", "Viljandi", "Rakvere", "Maardu", "Kuressaare", "Sillamäe", "Võru", "Valga", "Jõhvi", "Haapsalu", "Keila", "Paide", "Elva", "Saue", "Põlva", "Tapa"],
    "Latvia": ["Riga", "Daugavpils", "Liepāja", "Jelgava", "Jūrmala", "Ventspils", "Rēzekne", "Valmiera", "Jēkabpils", "Ogre", "Tukums", "Salaspils", "Cēsis", "Kuldīga", "Saldus", "Olaine", "Talsi", "Sigulda", "Dobele", "Bauska"],
    "Lithuania": ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Alytus", "Marijampolė", "Mažeikiai", "Jonava", "Utena", "Kėdainiai", "Tauragė", "Telšiai", "Ukmergė", "Visaginas", "Plungė", "Kretinga", "Palanga", "Radviliškis", "Šilutė"],
    "Slovenia": ["Ljubljana", "Maribor", "Celje", "Kranj", "Velenje", "Koper", "Novo Mesto", "Ptuj", "Trbovlje", "Kamnik", "Jesenice", "Nova Gorica", "Domžale", "Škofja Loka", "Murska Sobota", "Izola", "Postojna", "Zagorje ob Savi", "Vrhnika", "Grosuplje"],
    "Moldova": ["Chișinău", "Bălți", "Comrat", "Orhei", "Ungheni", "Cahul", "Hîncești", "Soroca", "Hînceşti", "Căușeni", "Strășeni", "Drochia", "Edineț", "Florești", "Ceadîr-Lunga", "Călărași", "Criuleni", "Ialoveni", "Sîngerei", "Rezina"],
    "Belgium": ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège", "Bruges", "Namur", "Leuven", "Mons", "Aalst", "Mechelen", "Kortrijk", "Hasselt", "Ostend", "Tournai", "Sint-Niklaas", "Genk", "Seraing", "Roeselare", "La Louvière"],
    "Netherlands": ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Tilburg", "Groningen", "Almere", "Breda", "Nijmegen", "Enschede", "Haarlem", "Arnhem", "Zaanstad", "Amersfoort", "Apeldoorn", "Hertogenbosch", "Hoofddorp", "Maastricht", "Leiden"],
    "Denmark": ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Frederiksberg", "Esbjerg", "Randers", "Kolding", "Horsens", "Vejle", "Roskilde", "Herning", "Hørsholm", "Helsingør", "Silkeborg", "Næstved", "Fredericia", "Viborg", "Køge", "Holstebro"],
    "Norway": ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Fredrikstad", "Kristiansand", "Sandnes", "Tromsø", "Sarpsborg", "Skien", "Ålesund", "Sandefjord", "Haugesund", "Tønsberg", "Moss", "Porsgrunn", "Bodø", "Arendal", "Hamar"],
    "Sweden": ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås", "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping", "Lund", "Umeå", "Gävle", "Borås", "Södertälje", "Eskilstuna", "Halmstad", "Växjö", "Karlstad", "Sundsvall"],
    "Finland": ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä", "Lahti", "Kuopio", "Pori", "Kouvola", "Joensuu", "Lappeenranta", "Hämeenlinna", "Vaasa", "Rovaniemi", "Seinäjoki", "Mikkeli", "Kotka", "Salo"],
    "Iceland": ["Reykjavík", "Kópavogur", "Hafnarfjörður", "Reykjanesbær", "Akureyri", "Garðabær", "Mosfellsbær", "Árborg", "Akranes", "Fjarðabyggð", "Seltjarnarnes", "Vestmannaeyjar", "Grindavík", "Ísafjörður", "Húsavík", "Borgarnes", "Stykkishólmur", "Egilsstaðir", "Selfoss", "Sauðárkrókur"],
    "Kazakhstan": ["Almaty", "Nur-Sultan", "Shymkent", "Karaganda", "Aktobe", "Taraz", "Pavlodar", "Oskemen", "Semey", "Atyrau", "Kostanay", "Kyzylorda", "Uralsk", "Petropavl", "Aktau", "Temirtau", "Turkistan", "Kokshetau", "Ekibastuz", "Zhezkazgan"],
    "Uzbekistan": ["Tashkent", "Namangan", "Andijan", "Nukus", "Bukhara", "Samarkand", "Qarshi", "Fergana", "Chirchiq", "Urgench", "Jizzakh", "Termez", "Navoiy", "Angren", "Olmaliq", "Bekabad", "Qoqon", "Margilon", "Denov", "Chust"],
    "Kyrgyzstan": ["Bishkek", "Osh", "Jalal-Abad", "Karakol", "Tokmok", "Uzgen", "Balykchy", "Kara-Balta", "Naryn", "Talas", "Kyzyl-Kiya", "Mailuu-Suu", "Tash-Kumyr", "Cholpon-Ata", "Batken", "Isfana", "Kemin", "Kant", "Shopokov", "Aydarken"],
    "Tajikistan": ["Dushanbe", "Khujand", "Kulob", "Bokhtar", "Istaravshan", "Vahdat", "Tursunzoda", "Konibodom", "Panjakent", "Isfara", "Hisor", "Norak", "Khorugh", "Rogun", "Farkhor", "Vose", "Danghara", "Levakant", "Vakhsh", "Dusti"],
    "Turkmenistan": ["Ashgabat", "Türkmenabat", "Daşoguz", "Mary", "Balkanabat", "Bayramaly", "Türkmenbaşy", "Tejen", "Abadan", "Yolöten", "Kerki", "Serdar", "Gumdag", "Bereket", "Magtymguly", "Atamyrat", "Baharly", "Akdepe", "Saýat", "Hazar"],
    "Botswana": ["Gaborone", "Francistown", "Molepolole", "Maun", "Serowe", "Selibe Phikwe", "Mahalapye", "Mogoditshane", "Mochudi", "Lobatse", "Palapye", "Tlokweng", "Kanye", "Ramotswa", "Moshupa", "Letlhakane", "Tonota", "Kasane", "Jwaneng", "Orapa"],
    "Namibia": ["Windhoek", "Walvis Bay", "Swakopmund", "Oshakati", "Rundu", "Rehoboth", "Katima Mulilo", "Otjiwarongo", "Okahandja", "Grootfontein", "Gobabis", "Keetmanshoop", "Ondangwa", "Outjo", "Lüderitz", "Omaruru", "Tsumeb", "Mariental", "Usakos", "Karibib"],
    "Malawi": ["Lilongwe", "Blantyre", "Mzuzu", "Zomba", "Kasungu", "Mangochi", "Karonga", "Salima", "Nkhotakota", "Balaka", "Mzimba", "Dedza", "Liwonde", "Nsanje", "Rumphi", "Ntcheu", "Chitipa", "Mulanje", "Machinga", "Thyolo"],
    "Guyana": ["Georgetown", "Linden", "New Amsterdam", "Anna Regina", "Bartica", "Lethem", "Rosignol", "Parika", "Skeldon", "Charity", "Mabaruma", "Port Kaituma", "Mahdia", "Vreed en Hoop", "Fort Wellington", "Mahaica", "Corriverton", "Wismar", "McKenzie", "Paradise"],
    "Suriname": ["Paramaribo", "Lelydorp", "Nieuw Nickerie", "Moengo", "Albina", "Mariënburg", "Meerzorg", "Wageningen", "Groningen", "Brownsweg", "Brokopondo", "Apoera", "Totness", "Washabo", "Zanderij", "Tamanredjo", "Onverwacht", "Nieuw Amsterdam", "Domburg", "Jenny"],
    "French Guiana": ["Cayenne", "Matoury", "Saint-Laurent-du-Maroni", "Kourou", "Remire-Montjoly", "Macouria", "Mana", "Apatou", "Grand-Santi", "Sinnamary", "Saint-Georges", "Roura", "Montsinéry", "Iracoubo", "Régina", "Awala-Yalimapo", "Camopi", "Papaichton", "Maripasoula", "Saül"],
    "default": ["Capital City", "Major City 1", "Major City 2", "Major City 3", "Major City 4", "Major City 5"]
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setFormData(prev => ({ 
      ...prev, 
      Country: country,
      City: '' 
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
  
    try {
      if (!formData.FirstName || !formData.EmailAddress) {
        throw new Error('Please fill in all required fields');
      }
  
      const dataToSubmit = {
        "Timestamp": new Date().toISOString(),
        "First Name": formData.FirstName,
        "Last Name ": formData.LastName,
        "Email Address": formData.EmailAddress,
        "Phone Number": formData.PhoneNumber,
        "Country": selectedCountry,
        "City": selectedCity,
        "Current Role/Position": formData.CurrentRole,
        "Field of Interest": formData.FieldOfInterest,
        "Area of Focus": formData.AreaOfFocus,
        "Current Skill Level": selectedSkill,
        "Relevant Skills": formData.RelevantSkills,
        "Preferred Communication Method": formData.PreferredCommunication,
        "Why Should we Mentor You?": formData.WhyMentor
      };
  
      const API_ENDPOINT = import.meta.env.VITE_SHEET_API_ENDPOINT || 'https://api.sheetbest.com/sheets/7277a1b0-c95a-44ff-ad35-f2626801f65c';
      const API_KEY = import.meta.env.VITE_SHEET_API_KEY || 'CYRBw2SriPTEnOtTcwxURIoN$yCg6kM2$rwSQffeBNBJfVQjiux7JjBxSPfD5zyl';
  
      console.log('API Endpoint:', API_ENDPOINT);
      // Don't log the API key in production
  
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': API_KEY
        },
        body: JSON.stringify(dataToSubmit)
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('API Error:', errorData);
        throw new Error(errorData?.message || 'Failed to submit form. Please try again.');
      }
  
      setSubmitSuccess(true);
      setShowModal(true);
      resetForm();
  
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(error.message);
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSelectedCountry('');
    setSelectedCity('');
    setSelectedSkill('');
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitError(null);
    setSubmitSuccess(false);
  };

  const styles = {
    formContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      marginBottom: '2rem',
    },
    formGroup: {
      marginBottom: '1rem',
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '0.5rem',
      fontWeight: '500',
      color: '#333',
    },
    input: {
      padding: '0.75rem',
      borderRadius: '8px',
      border: '1px solid #FF7600',
      fontSize: '1rem',
      width: '100%',
      background: '#FFF7F0',
    },
    textarea: {
      padding: '0.75rem',
      borderRadius: '8px',
      border: '1px solid #FF7600',
      fontSize: '1rem',
      width: '100%',
      minHeight: '120px',
      resize: 'none',
      background: '#FFF7F0',
    }
  };

  return (
    <div className="instructor-container">
      <div className="instructor-hero">
        <div className="instructor-image">
          <img src={instructorImg} alt="Expert Mentorship" />
        </div>
        <div className="instructor-content">
          <h1>Expert <span>Mentorship</span></h1>
          <p>
            Unlock your potential with expert mentorship that bridges the gap between theory and real-world application. Our mentors are seasoned professionals and industry leaders with hands-on experience in their fields. They offer personalized guidance, helping you navigate challenges, enhance your skills, and achieve your goals.
          </p>
          <p>
            Through one-on-one sessions, group discussions, and tailored feedback, you'll gain invaluable insights into industry trends, best practices, and innovative techniques. Whether you're a student, a professional seeking to advance, or an entrepreneur with big ideas, expert mentorship ensures you have the support and direction needed to excel in your journey.
          </p>
        </div>
      </div>

      <div className="form-section">
        <h1>Unlock Your Potential with Expert Guidance</h1>
        <p>
          Ready to accelerate your growth and achieve your goals? Our expert mentors are here to guide you every step of the way. Whether you're looking to refine your skills, overcome challenges, or explore new opportunities, we'll connect you with experienced professionals in your field. Fill out the form below, and let's match you with the mentor who can help turn your aspirations into achievements!
        </p>
        <form onSubmit={handleSubmit} className="instructor-form">
          <div className="form-grid">
            <div className="form-group">
              <CustomDropdown
                label="Country"
                options={Object.keys(citiesByCountry)}
                value={selectedCountry}
                onChange={setSelectedCountry}
                placeholder="Select a country"
                error={submitError && !selectedCountry ? 'Country is required' : null}
              />
            </div>
            
            <div className="form-group">
              <CustomDropdown
                label="City"
                options={selectedCountry ? citiesByCountry[selectedCountry] : []}
                value={selectedCity}
                onChange={setSelectedCity}
                placeholder="Select a city"
                disabled={!selectedCountry}
                error={submitError && !selectedCity ? 'City is required' : null}
              />
            </div>
            
            <div className="form-group">
              <CustomDropdown
                label="Skills"
                options={skillsList}
                value={selectedSkill}
                onChange={setSelectedSkill}
                placeholder="Select your skills"
                error={submitError && !selectedSkill ? 'Skills are required' : null}
              />
            </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>First Name *</label>
            <input
              type="text"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
              style={styles.input}
            />
          </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Last Name</label>
            <input
              type="text"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address *</label>
            <input
              type="email"
              name="EmailAddress"
              value={formData.EmailAddress}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="tel"
              name="PhoneNumber"
              value={formData.PhoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Current Role/Position</label>
            <input
              type="text"
              name="CurrentRole"
              value={formData.CurrentRole}
              onChange={handleChange}
              placeholder="Enter your current role"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Field of Interest</label>
            <input
              type="text"
              name="FieldOfInterest"
              value={formData.FieldOfInterest}
              onChange={handleChange}
              placeholder="Enter your field of interest"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Area of Focus</label>
            <input
              type="text"
              name="AreaOfFocus"
              value={formData.AreaOfFocus}
              onChange={handleChange}
              placeholder="Enter your area of focus"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Relevant Skills</label>
            <input
              type="text"
              name="RelevantSkills"
              value={formData.RelevantSkills}
              onChange={handleChange}
              placeholder="Enter your relevant skills"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Preferred Communication Method</label>
            <input
              type="text"
              name="PreferredCommunication"
              value={formData.PreferredCommunication}
              onChange={handleChange}
              placeholder="Enter your preferred communication method"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Why Should We Mentor You?</label>
            <textarea
              name="WhyMentor"
              value={formData.WhyMentor}
              onChange={handleChange}
              placeholder="Tell us why you'd like to be mentored"
              style={styles.textarea}
            />
          </div>

          {submitError && (
            <div className="error-message" role="alert">
              {submitError}
            </div>
          )}

          <Modal 
            isOpen={showModal}
            onClose={closeModal}
            success={submitSuccess}
            message={submitSuccess 
              ? "Your form has been submitted successfully!" 
              : submitError || "An error occurred while submitting the form."}
          />

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Instructor;
