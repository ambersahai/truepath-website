/* ======================================================================
   TRUE PATH CAB SERVICES INDIA — WEBSITE SETTINGS
   ======================================================================
   Edit the values in this file to change prices, cities, vehicles,
   and contact details shown on the website. You do NOT need to touch
   index.html or its CSS/JS — everything you need to update lives here.

   After editing, save this file and re-upload it to your hosting
   (see the HOW TO EDIT note at the bottom of this file). The change
   will appear on the live site as soon as it's re-uploaded.

   Rules to avoid breaking the site:
   - Keep the quote marks "like this" around any text.
   - Keep every comma between items.
   - Don't remove the curly braces { } or square brackets [ ].
   - Numbers (prices, distances, percentages) do NOT need quote marks.
   ====================================================================== */

window.TRUE_PATH_CONFIG = {

  // ---- CONTACT DETAILS ----------------------------------------------
  contact: {
    phone: "8576020033",              // shown in header, footer, demo
    whatsapp: "918576020033",         // country code + number, no + or spaces
    email: "truepathcab@gmail.com"
  },

  // ---- SOCIAL MEDIA LINKS (shown as icons in the footer) -------------
  social: {
    whatsapp: "https://wa.me/918576020033",
    facebook: "https://www.facebook.com/profile.php?id=61590888536882",
    instagram: "https://www.instagram.com/truepathcabindia?igsh=MWx0OXJxYnIwcnRqaw=="
  },

  // ---- CITY SUGGESTIONS ------------------------------------------------
  // Shown as autocomplete suggestions while typing in the From/To boxes.
  // Customers can still type ANY place, even one not in this list —
  // these are just suggestions, not a restriction. Add or remove city
  // names freely.
  indianCities: [
    // ---- Major cities ----
    "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", "Chennai",
    "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur",
    "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad",
    "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik",
    "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar",
    "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar",
    "Navi Mumbai", "Allahabad (Prayagraj)", "Ranchi", "Howrah",
    "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur",
    "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh",
    "Thiruvananthapuram", "Solapur", "Hubballi-Dharwad", "Tiruchirappalli",
    "Bareilly", "Mysuru", "Tiruppur", "Gurugram", "Aligarh", "Jalandhar",
    "Bhubaneswar", "Salem", "Warangal", "Guntur", "Bhiwandi", "Saharanpur",
    "Gorakhpur", "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai",
    "Cuttack", "Firozabad", "Kochi", "Nellore", "Bhavnagar", "Dehradun",
    "Durgapur", "Asansol", "Rourkela", "Nanded", "Kolhapur", "Ajmer",
    "Akola", "Gulbarga", "Jamnagar", "Ujjain", "Loni", "Siliguri",
    "Jhansi", "Ulhasnagar", "Jammu", "Sangli-Miraj", "Mangaluru", "Erode",
    "Belagavi", "Ambattur", "Tirunelveli", "Malegaon", "Gaya", "Udaipur",
    "Maheshtala", "Shimla", "Manali", "Rishikesh", "Haridwar", "Puri",
    "Digha", "Goa (Panaji)", "Ooty", "Darjeeling", "Rewa", "Satna",
    "Unnao", "Sitapur", "Hardoi", "Etawah", "Mathura", "Vrindavan",
    "Ayodhya", "Basti", "Faizabad", "Ballia", "Azamgarh", "Deoria",
    "Fatehpur", "Pratapgarh", "Banda", "Jaunpur", "Sultanpur",

    // ---- Uttar Pradesh — more cities & towns ----
    "Moradabad", "Rampur", "Shahjahanpur", "Farrukhabad", "Kannauj",
    "Orai", "Mainpuri", "Etah", "Kasganj", "Budaun", "Bahraich", "Gonda",
    "Barabanki", "Raebareli", "Amethi", "Lakhimpur Kheri", "Mirzapur",
    "Ghazipur", "Mau", "Bhadohi", "Lalitpur", "Mahoba", "Hamirpur (UP)",
    "Auraiya", "Bulandshahr", "Hapur", "Muzaffarnagar", "Shamli",
    "Baghpat", "Bijnor", "Amroha", "Sambhal", "Pilibhit", "Balrampur",
    "Siddharthnagar", "Maharajganj", "Sonbhadra", "Renukoot", "Bithoor",
    "Chunar", "Greater Noida",

    // ---- Bihar & Jharkhand ----
    "Muzaffarpur", "Bhagalpur", "Darbhanga", "Purnia", "Chapra",
    "Begusarai", "Katihar", "Munger", "Arrah", "Sasaram", "Hajipur",
    "Motihari", "Bettiah", "Sitamarhi", "Siwan", "Bihar Sharif", "Buxar",
    "Jehanabad", "Nawada", "Madhubani", "Bokaro", "Hazaribagh", "Giridih",
    "Ramgarh", "Chaibasa", "Daltonganj",

    // ---- Delhi NCR, Haryana & Punjab ----
    "Panipat", "Karnal", "Ambala", "Hisar", "Rohtak", "Sonipat",
    "Yamunanagar", "Kurukshetra", "Sirsa", "Bhiwani", "Rewari",
    "Panchkula", "Manesar", "Jhajjar", "Palwal", "Patiala", "Bathinda",
    "Mohali", "Pathankot", "Hoshiarpur", "Moga", "Firozpur", "Kapurthala",
    "Sangrur",

    // ---- Rajasthan ----
    "Jaisalmer", "Chittorgarh", "Bundi", "Alwar", "Bhilwara", "Sikar",
    "Pali", "Tonk", "Hanumangarh", "Sri Ganganagar", "Barmer", "Nagaur",
    "Jhunjhunu", "Churu", "Dungarpur", "Banswara", "Sirohi",
    "Sawai Madhopur (Ranthambore)", "Bharatpur", "Mandawa",

    // ---- Gujarat ----
    "Junagadh", "Gandhinagar", "Anand", "Nadiad", "Bharuch", "Navsari",
    "Valsad", "Vapi", "Porbandar", "Veraval", "Bhuj", "Gandhidham",
    "Mandvi", "Palanpur", "Mehsana", "Patan", "Morbi", "Surendranagar",
    "Amreli",

    // ---- Madhya Pradesh & Chhattisgarh ----
    "Sagar", "Ratlam", "Dewas", "Khandwa", "Burhanpur", "Singrauli",
    "Chhindwara", "Vidisha", "Shivpuri", "Mandsaur", "Neemuch", "Guna",
    "Damoh", "Katni", "Balaghat", "Seoni", "Narmadapuram (Hoshangabad)",
    "Datia", "Bilaspur (Chhattisgarh)", "Korba", "Durg", "Jagdalpur",
    "Rajnandgaon", "Ambikapur",

    // ---- Maharashtra ----
    "Jalgaon", "Latur", "Ahmednagar", "Chandrapur", "Parbhani", "Jalna",
    "Bhusawal", "Panvel", "Wardha", "Yavatmal", "Beed", "Osmanabad",
    "Satara", "Ratnagiri", "Karjat",

    // ---- Karnataka, Goa & coastal ----
    "Udupi", "Vijayapura (Bijapur)", "Bidar", "Davangere", "Ballari",
    "Shivamogga", "Tumakuru", "Raichur", "Bagalkot", "Hassan", "Mandya",
    "Chitradurga", "Kolar", "Karwar",

    // ---- Andhra Pradesh & Telangana ----
    "Tirupati", "Rajahmundry", "Kakinada", "Kurnool", "Anantapur",
    "Kadapa", "Ongole", "Eluru", "Machilipatnam", "Nizamabad",
    "Karimnagar", "Khammam", "Ramagundam", "Mahbubnagar",

    // ---- Tamil Nadu & Kerala ----
    "Vellore", "Thanjavur", "Kumbakonam", "Kanchipuram", "Chidambaram",
    "Hosur", "Dindigul", "Karur", "Namakkal", "Cuddalore", "Villupuram",
    "Thoothukudi", "Nagercoil", "Sivakasi", "Virudhunagar", "Theni",
    "Kozhikode", "Thrissur", "Kollam", "Alappuzha", "Kottayam", "Palakkad",
    "Kannur", "Kasaragod", "Malappuram", "Pathanamthitta",

    // ---- Odisha, West Bengal & the East ----
    "Sambalpur", "Berhampur", "Balasore", "Koraput", "Jeypore", "Malda",
    "Bardhaman", "Kharagpur", "Haldia", "Murshidabad", "Bankura",
    "Jalpaiguri", "Cooch Behar", "Krishnanagar",

    // ---- Sikkim & the North-East ----
    "Gangtok", "Namchi", "Shillong", "Jorhat", "Dibrugarh", "Tezpur",
    "Silchar", "Imphal", "Aizawl", "Kohima", "Dimapur", "Agartala",
    "Itanagar",

    // ---- Hill stations & mountain retreats ----
    "Mussoorie", "Nainital", "Almora", "Ranikhet", "Kausani", "Bhimtal",
    "Mukteshwar", "Binsar", "Lansdowne", "Chakrata", "Dhanaulti", "Chopta",
    "Auli", "Joshimath", "Uttarkashi", "Munsiyari", "Pithoragarh",
    "Haldwani", "Rudrapur", "Roorkee", "Kashipur", "Dharamshala",
    "McLeodganj", "Dalhousie", "Khajjiar", "Chamba", "Kullu", "Kasol",
    "Manikaran", "Solan", "Kasauli", "Mandi", "Palampur", "Kaza (Spiti)",
    "Chail", "Kufri", "Narkanda", "Sangla", "Kalpa", "Nahan",
    "Paonta Sahib", "Gulmarg", "Pahalgam", "Sonmarg", "Leh", "Kargil",
    "Udhampur", "Mount Abu", "Lonavala", "Khandala", "Mahabaleshwar",
    "Panchgani", "Matheran", "Igatpuri", "Saputara", "Pachmarhi",
    "Netarhat", "Kodaikanal", "Coonoor", "Yercaud", "Munnar", "Thekkady",
    "Wayanad (Kalpetta)", "Madikeri (Coorg)", "Chikmagalur",
    "Araku Valley", "Horsley Hills", "Cherrapunji", "Pelling", "Lachung",
    "Kalimpong", "Tawang", "Ziro", "Bomdila",

    // ---- Temples & pilgrimage ----
    "Kedarnath", "Badrinath", "Gangotri", "Yamunotri", "Rudraprayag",
    "Devprayag", "Karnaprayag", "Tehri", "Katra (Vaishno Devi)",
    "Anandpur Sahib", "Sarnath", "Chitrakoot", "Naimisharanya",
    "Vindhyachal", "Shravasti", "Kushinagar", "Barsana", "Govardhan",
    "Gokul", "Bodh Gaya", "Rajgir", "Nalanda", "Vaishali", "Deoghar",
    "Pushkar", "Nathdwara", "Khatu Shyamji", "Somnath", "Dwarka", "Ambaji",
    "Palitana", "Modhera", "Omkareshwar", "Maheshwar", "Maihar",
    "Amarkantak", "Shirdi", "Trimbakeshwar", "Bhimashankar",
    "Shani Shingnapur", "Pandharpur", "Tirumala", "Srisailam",
    "Bhadrachalam", "Mantralayam", "Sringeri", "Dharmasthala",
    "Kukke Subramanya", "Guruvayur", "Sabarimala", "Rameswaram",
    "Kanyakumari", "Tiruvannamalai", "Palani", "Velankanni",
    "Srivilliputhur",

    // ---- Heritage sites, forts & monuments ----
    "Fatehpur Sikri", "Khajuraho", "Orchha", "Sanchi", "Mandu",
    "Bhimbetka", "Chanderi", "Ajanta", "Ellora", "Hampi", "Badami",
    "Aihole", "Pattadakal", "Belur", "Halebidu", "Konark", "Mahabalipuram",
    "Kumbhalgarh", "Ranakpur", "Deeg", "Champaner",
    "Kevadia (Statue of Unity)", "Bolpur (Santiniketan)", "Lepakshi",
    "Nagarjuna Sagar", "Jog Falls", "Athirappilly", "Chitrakote Falls",

    // ---- Beaches & backwaters ----
    "Puducherry (Pondicherry)", "Gokarna", "Murudeshwar", "Malpe",
    "Alibaug", "Ganpatipule", "Tarkarli", "Diu", "Daman", "Kovalam",
    "Varkala", "Kumarakom", "Bekal", "Gopalpur", "Mandarmani",
    "Chilika (Barkul)", "Port Blair",

    // ---- Wildlife & national parks ----
    "Jim Corbett (Ramnagar)", "Sariska", "Bandhavgarh (Umaria)", "Kanha",
    "Pench", "Panna", "Tadoba", "Gir (Sasan)", "Kaziranga", "Majuli",
    "Sundarbans", "Bandipur", "Nagarhole", "Rann of Kutch (Dhordo)"
  ],

  // ---- CITY COORDINATES (used only to estimate trip distance) --------
  // [latitude, longitude] for every city above. Used to calculate the
  // "estimated distance" shown to customers — it's a straight-line
  // distance multiplied by roadDistanceFactor below to approximate real
  // road distance, not a live routing lookup. If a customer types a
  // place that isn't in this list, the distance just won't be shown —
  // that's expected, not an error.
  cityCoordinates: {
    // ---- Major cities ----
    "Mumbai": [19.0760, 72.8777], "Delhi": [28.6139, 77.2090],
    "Bengaluru": [12.9716, 77.5946], "Hyderabad": [17.3850, 78.4867],
    "Ahmedabad": [23.0225, 72.5714], "Chennai": [13.0827, 80.2707],
    "Kolkata": [22.5726, 88.3639], "Surat": [21.1702, 72.8311],
    "Pune": [18.5204, 73.8567], "Jaipur": [26.9124, 75.7873],
    "Lucknow": [26.8467, 80.9462], "Kanpur": [26.4499, 80.3319],
    "Nagpur": [21.1458, 79.0882], "Indore": [22.7196, 75.8577],
    "Thane": [19.2183, 72.9781], "Bhopal": [23.2599, 77.4126],
    "Visakhapatnam": [17.6868, 83.2185], "Pimpri-Chinchwad": [18.6298, 73.7997],
    "Patna": [25.5941, 85.1376], "Vadodara": [22.3072, 73.1812],
    "Ghaziabad": [28.6692, 77.4538], "Ludhiana": [30.9010, 75.8573],
    "Agra": [27.1767, 78.0081], "Nashik": [19.9975, 73.7898],
    "Faridabad": [28.4089, 77.3178], "Meerut": [28.9845, 77.7064],
    "Rajkot": [22.3039, 70.8022], "Kalyan-Dombivli": [19.2403, 73.1305],
    "Vasai-Virar": [19.4914, 72.8054], "Varanasi": [25.3176, 82.9739],
    "Srinagar": [34.0837, 74.7973], "Aurangabad": [19.8762, 75.3433],
    "Dhanbad": [23.7957, 86.4304], "Amritsar": [31.6340, 74.8723],
    "Navi Mumbai": [19.0330, 73.0297], "Allahabad (Prayagraj)": [25.4358, 81.8463],
    "Ranchi": [23.3441, 85.3096], "Howrah": [22.5958, 88.2636],
    "Coimbatore": [11.0168, 76.9558], "Jabalpur": [23.1815, 79.9864],
    "Gwalior": [26.2183, 78.1828], "Vijayawada": [16.5062, 80.6480],
    "Jodhpur": [26.2389, 73.0243], "Madurai": [9.9252, 78.1198],
    "Raipur": [21.2514, 81.6296], "Kota": [25.2138, 75.8648],
    "Guwahati": [26.1445, 91.7362], "Chandigarh": [30.7333, 76.7794],
    "Thiruvananthapuram": [8.5241, 76.9366], "Solapur": [17.6599, 75.9064],
    "Hubballi-Dharwad": [15.3647, 75.1240], "Tiruchirappalli": [10.7905, 78.7047],
    "Bareilly": [28.3670, 79.4304], "Mysuru": [12.2958, 76.6394],
    "Tiruppur": [11.1085, 77.3411], "Gurugram": [28.4595, 77.0266],
    "Aligarh": [27.8974, 78.0880], "Jalandhar": [31.3260, 75.5762],
    "Bhubaneswar": [20.2961, 85.8245], "Salem": [11.6643, 78.1460],
    "Warangal": [17.9689, 79.5941], "Guntur": [16.3067, 80.4365],
    "Bhiwandi": [19.3002, 73.0629], "Saharanpur": [29.9640, 77.5460],
    "Gorakhpur": [26.7606, 83.3732], "Bikaner": [28.0229, 73.3119],
    "Amravati": [20.9374, 77.7796], "Noida": [28.5355, 77.3910],
    "Jamshedpur": [22.8046, 86.2029], "Bhilai": [21.1938, 81.3509],
    "Cuttack": [20.4625, 85.8830], "Firozabad": [27.1592, 78.3957],
    "Kochi": [9.9312, 76.2673], "Nellore": [14.4426, 79.9865],
    "Bhavnagar": [21.7645, 72.1519], "Dehradun": [30.3165, 78.0322],
    "Durgapur": [23.5204, 87.3119], "Asansol": [23.6739, 86.9524],
    "Rourkela": [22.2604, 84.8536], "Nanded": [19.1383, 77.3210],
    "Kolhapur": [16.7050, 74.2433], "Ajmer": [26.4499, 74.6399],
    "Akola": [20.7002, 77.0082], "Gulbarga": [17.3297, 76.8343],
    "Jamnagar": [22.4707, 70.0577], "Ujjain": [23.1765, 75.7885],
    "Loni": [28.7515, 77.2897], "Siliguri": [26.7271, 88.3953],
    "Jhansi": [25.4484, 78.5685], "Ulhasnagar": [19.2215, 73.1645],
    "Jammu": [32.7266, 74.8570], "Sangli-Miraj": [16.8524, 74.5815],
    "Mangaluru": [12.9141, 74.8560], "Erode": [11.3410, 77.7172],
    "Belagavi": [15.8497, 74.4977], "Ambattur": [13.1143, 80.1548],
    "Tirunelveli": [8.7139, 77.7567], "Malegaon": [20.5579, 74.5288],
    "Gaya": [24.7955, 84.9994], "Udaipur": [24.5854, 73.7125],
    "Maheshtala": [22.5093, 88.2482], "Shimla": [31.1048, 77.1734],
    "Manali": [32.2432, 77.1892], "Rishikesh": [30.0869, 78.2676],
    "Haridwar": [29.9457, 78.1642], "Puri": [19.8135, 85.8312],
    "Digha": [21.6273, 87.5088], "Goa (Panaji)": [15.4909, 73.8278],
    "Ooty": [11.4064, 76.6932], "Darjeeling": [27.0410, 88.2663],
    "Rewa": [24.5364, 81.3037], "Satna": [24.6005, 80.8322],
    "Unnao": [26.5464, 80.4879], "Sitapur": [27.5619, 80.6822],
    "Hardoi": [27.3969, 80.1308], "Etawah": [26.7855, 79.0154],
    "Mathura": [27.4924, 77.6737], "Vrindavan": [27.5806, 77.7006],
    "Ayodhya": [26.7922, 82.1998], "Basti": [26.8148, 82.7614],
    "Faizabad": [26.7748, 82.1442], "Ballia": [25.7600, 84.1500],
    "Azamgarh": [26.0737, 83.1859], "Deoria": [26.5024, 83.7791],
    "Fatehpur": [25.9308, 80.8135], "Pratapgarh": [25.8971, 81.9994],
    "Banda": [25.4762, 80.3360], "Jaunpur": [25.7479, 82.6836],
    "Sultanpur": [26.2648, 82.0721],

    // ---- Uttar Pradesh — more cities & towns ----
    "Moradabad": [28.8386, 78.7733], "Rampur": [28.8155, 79.0250],
    "Shahjahanpur": [27.8815, 79.9106], "Farrukhabad": [27.3929, 79.5800],
    "Kannauj": [27.0550, 79.9189], "Orai": [25.9900, 79.4500],
    "Mainpuri": [27.2300, 79.0270], "Etah": [27.5580, 78.6620],
    "Kasganj": [27.8100, 78.6450], "Budaun": [28.0362, 79.1210],
    "Bahraich": [27.5743, 81.5940], "Gonda": [27.1333, 81.9600],
    "Barabanki": [26.9300, 81.1800], "Raebareli": [26.2300, 81.2330],
    "Amethi": [26.1550, 81.8140], "Lakhimpur Kheri": [27.9470, 80.7790],
    "Mirzapur": [25.1460, 82.5690], "Ghazipur": [25.5880, 83.5780],
    "Mau": [25.9410, 83.5610], "Bhadohi": [25.3950, 82.5700],
    "Lalitpur": [24.6900, 78.4100], "Mahoba": [25.2920, 79.8730],
    "Hamirpur (UP)": [25.9500, 80.1500], "Auraiya": [26.4650, 79.5100],
    "Bulandshahr": [28.4030, 77.8580], "Hapur": [28.7300, 77.7800],
    "Muzaffarnagar": [29.4700, 77.7000], "Shamli": [29.4500, 77.3100],
    "Baghpat": [28.9450, 77.2200], "Bijnor": [29.3720, 78.1350],
    "Amroha": [28.9030, 78.4670], "Sambhal": [28.5850, 78.5700],
    "Pilibhit": [28.6400, 79.8000], "Balrampur": [27.4300, 82.1800],
    "Siddharthnagar": [27.2800, 83.0900], "Maharajganj": [27.1440, 83.5600],
    "Sonbhadra": [24.6850, 83.0700], "Renukoot": [24.2000, 83.0300],
    "Bithoor": [26.6070, 80.2700], "Chunar": [25.1250, 82.8800],
    "Greater Noida": [28.4744, 77.5040],

    // ---- Bihar & Jharkhand ----
    "Muzaffarpur": [26.1200, 85.3900], "Bhagalpur": [25.2400, 86.9800],
    "Darbhanga": [26.1520, 85.8970], "Purnia": [25.7770, 87.4750],
    "Chapra": [25.7800, 84.7300], "Begusarai": [25.4180, 86.1300],
    "Katihar": [25.5390, 87.5700], "Munger": [25.3800, 86.4700],
    "Arrah": [25.5560, 84.6600], "Sasaram": [24.9500, 84.0300],
    "Hajipur": [25.6900, 85.2100], "Motihari": [26.6500, 84.9200],
    "Bettiah": [26.8000, 84.5000], "Sitamarhi": [26.6000, 85.4900],
    "Siwan": [26.2200, 84.3600], "Bihar Sharif": [25.2000, 85.5200],
    "Buxar": [25.5600, 83.9800], "Jehanabad": [25.2100, 84.9900],
    "Nawada": [24.8800, 85.5400], "Madhubani": [26.3500, 86.0700],
    "Bokaro": [23.6700, 86.1500], "Hazaribagh": [23.9900, 85.3600],
    "Giridih": [24.1900, 86.3000], "Ramgarh": [23.6300, 85.5600],
    "Chaibasa": [22.5500, 85.8000], "Daltonganj": [24.0400, 84.0700],

    // ---- Delhi NCR, Haryana & Punjab ----
    "Panipat": [29.3900, 76.9700], "Karnal": [29.6900, 76.9900],
    "Ambala": [30.3780, 76.7770], "Hisar": [29.1500, 75.7200],
    "Rohtak": [28.8900, 76.5900], "Sonipat": [28.9900, 77.0200],
    "Yamunanagar": [30.1300, 77.2900], "Kurukshetra": [29.9700, 76.8800],
    "Sirsa": [29.5300, 75.0200], "Bhiwani": [28.7900, 76.1300],
    "Rewari": [28.1900, 76.6200], "Panchkula": [30.6900, 76.8500],
    "Manesar": [28.3500, 76.9400], "Jhajjar": [28.6100, 76.6600],
    "Palwal": [28.1400, 77.3300], "Patiala": [30.3400, 76.3860],
    "Bathinda": [30.2100, 74.9450], "Mohali": [30.7050, 76.7180],
    "Pathankot": [32.2700, 75.6500], "Hoshiarpur": [31.5300, 75.9100],
    "Moga": [30.8100, 75.1700], "Firozpur": [30.9200, 74.6100],
    "Kapurthala": [31.3800, 75.3800], "Sangrur": [30.2500, 75.8400],

    // ---- Rajasthan ----
    "Jaisalmer": [26.9157, 70.9083], "Chittorgarh": [24.8800, 74.6300],
    "Bundi": [25.4400, 75.6400], "Alwar": [27.5530, 76.6350],
    "Bhilwara": [25.3500, 74.6300], "Sikar": [27.6100, 75.1400],
    "Pali": [25.7700, 73.3200], "Tonk": [26.1700, 75.7900],
    "Hanumangarh": [29.5800, 74.3200], "Sri Ganganagar": [29.9200, 73.8800],
    "Barmer": [25.7500, 71.3900], "Nagaur": [27.2000, 73.7300],
    "Jhunjhunu": [28.1300, 75.4000], "Churu": [28.3000, 74.9600],
    "Dungarpur": [23.8400, 73.7100], "Banswara": [23.5500, 74.4500],
    "Sirohi": [24.8800, 72.8600], "Sawai Madhopur (Ranthambore)": [26.0200, 76.3400],
    "Bharatpur": [27.2170, 77.4900], "Mandawa": [28.0550, 75.1480],

    // ---- Gujarat ----
    "Junagadh": [21.5200, 70.4600], "Gandhinagar": [23.2200, 72.6800],
    "Anand": [22.5600, 72.9500], "Nadiad": [22.6900, 72.8600],
    "Bharuch": [21.7100, 72.9900], "Navsari": [20.9500, 72.9300],
    "Valsad": [20.6100, 72.9300], "Vapi": [20.3700, 72.9000],
    "Porbandar": [21.6400, 69.6100], "Veraval": [20.9100, 70.3700],
    "Bhuj": [23.2420, 69.6670], "Gandhidham": [23.0800, 70.1300],
    "Mandvi": [22.8300, 69.3500], "Palanpur": [24.1700, 72.4300],
    "Mehsana": [23.6000, 72.4000], "Patan": [23.8500, 72.1200],
    "Morbi": [22.8200, 70.8300], "Surendranagar": [22.7300, 71.6500],
    "Amreli": [21.6000, 71.2200],

    // ---- Madhya Pradesh & Chhattisgarh ----
    "Sagar": [23.8400, 78.7400], "Ratlam": [23.3300, 75.0400],
    "Dewas": [22.9600, 76.0500], "Khandwa": [21.8300, 76.3500],
    "Burhanpur": [21.3100, 76.2300], "Singrauli": [24.2000, 82.6700],
    "Chhindwara": [22.0600, 78.9400], "Vidisha": [23.5200, 77.8100],
    "Shivpuri": [25.4200, 77.6600], "Mandsaur": [24.0700, 75.0700],
    "Neemuch": [24.4700, 74.8700], "Guna": [24.6500, 77.3100],
    "Damoh": [23.8300, 79.4400], "Katni": [23.8300, 80.4000],
    "Balaghat": [21.8100, 80.1900], "Seoni": [22.0900, 79.5500],
    "Narmadapuram (Hoshangabad)": [22.7500, 77.7200], "Datia": [25.6700, 78.4600],
    "Bilaspur (Chhattisgarh)": [22.0800, 82.1500], "Korba": [22.3500, 82.7000],
    "Durg": [21.1900, 81.2800], "Jagdalpur": [19.0800, 82.0200],
    "Rajnandgaon": [21.1000, 81.0300], "Ambikapur": [23.1200, 83.2000],

    // ---- Maharashtra ----
    "Jalgaon": [21.0100, 75.5600], "Latur": [18.4000, 76.5800],
    "Ahmednagar": [19.0950, 74.7480], "Chandrapur": [19.9500, 79.3000],
    "Parbhani": [19.2700, 76.7700], "Jalna": [19.8400, 75.8800],
    "Bhusawal": [21.0400, 75.7800], "Panvel": [18.9900, 73.1200],
    "Wardha": [20.7500, 78.6000], "Yavatmal": [20.4000, 78.1300],
    "Beed": [18.9900, 75.7600], "Osmanabad": [18.1800, 76.0400],
    "Satara": [17.6800, 74.0200], "Ratnagiri": [16.9900, 73.3100],
    "Karjat": [18.9100, 73.3200],

    // ---- Karnataka, Goa & coastal ----
    "Udupi": [13.3400, 74.7500], "Vijayapura (Bijapur)": [16.8300, 75.7100],
    "Bidar": [17.9100, 77.5200], "Davangere": [14.4640, 75.9210],
    "Ballari": [15.1400, 76.9200], "Shivamogga": [13.9300, 75.5700],
    "Tumakuru": [13.3400, 77.1000], "Raichur": [16.2100, 77.3500],
    "Bagalkot": [16.1800, 75.7000], "Hassan": [13.0100, 76.1000],
    "Mandya": [12.5200, 76.9000], "Chitradurga": [14.2300, 76.4000],
    "Kolar": [13.1400, 78.1300], "Karwar": [14.8100, 74.1300],

    // ---- Andhra Pradesh & Telangana ----
    "Tirupati": [13.6288, 79.4192], "Rajahmundry": [17.0000, 81.8000],
    "Kakinada": [16.9600, 82.2400], "Kurnool": [15.8300, 78.0400],
    "Anantapur": [14.6800, 77.6000], "Kadapa": [14.4700, 78.8200],
    "Ongole": [15.5000, 80.0500], "Eluru": [16.7100, 81.1000],
    "Machilipatnam": [16.1700, 81.1300], "Nizamabad": [18.6700, 78.1000],
    "Karimnagar": [18.4400, 79.1300], "Khammam": [17.2500, 80.1500],
    "Ramagundam": [18.7600, 79.4700], "Mahbubnagar": [16.7500, 77.9800],

    // ---- Tamil Nadu & Kerala ----
    "Vellore": [12.9200, 79.1300], "Thanjavur": [10.7870, 79.1380],
    "Kumbakonam": [10.9600, 79.3800], "Kanchipuram": [12.8340, 79.7040],
    "Chidambaram": [11.4000, 79.6900], "Hosur": [12.7400, 77.8300],
    "Dindigul": [10.3600, 77.9800], "Karur": [10.9600, 78.0800],
    "Namakkal": [11.2200, 78.1700], "Cuddalore": [11.7500, 79.7500],
    "Villupuram": [11.9400, 79.4900], "Thoothukudi": [8.7600, 78.1300],
    "Nagercoil": [8.1800, 77.4300], "Sivakasi": [9.4500, 77.8000],
    "Virudhunagar": [9.5800, 77.9600], "Theni": [10.0100, 77.4800],
    "Kozhikode": [11.2588, 75.7804], "Thrissur": [10.5276, 76.2144],
    "Kollam": [8.8932, 76.6141], "Alappuzha": [9.4980, 76.3388],
    "Kottayam": [9.5916, 76.5222], "Palakkad": [10.7867, 76.6548],
    "Kannur": [11.8745, 75.3704], "Kasaragod": [12.5000, 74.9900],
    "Malappuram": [11.0400, 76.0800], "Pathanamthitta": [9.2600, 76.7900],

    // ---- Odisha, West Bengal & the East ----
    "Sambalpur": [21.4700, 83.9700], "Berhampur": [19.3100, 84.7900],
    "Balasore": [21.5000, 86.9300], "Koraput": [18.8100, 82.7100],
    "Jeypore": [18.8600, 82.5700], "Malda": [25.0000, 88.1400],
    "Bardhaman": [23.2400, 87.8600], "Kharagpur": [22.3300, 87.3200],
    "Haldia": [22.0600, 88.1000], "Murshidabad": [24.1800, 88.2700],
    "Bankura": [23.2300, 87.0700], "Jalpaiguri": [26.5200, 88.7200],
    "Cooch Behar": [26.3200, 89.4500], "Krishnanagar": [23.4000, 88.5000],

    // ---- Sikkim & the North-East ----
    "Gangtok": [27.3314, 88.6138], "Namchi": [27.1700, 88.3600],
    "Shillong": [25.5788, 91.8933], "Jorhat": [26.7500, 94.2200],
    "Dibrugarh": [27.4700, 94.9100], "Tezpur": [26.6300, 92.8000],
    "Silchar": [24.8200, 92.8000], "Imphal": [24.8170, 93.9370],
    "Aizawl": [23.7270, 92.7180], "Kohima": [25.6700, 94.1100],
    "Dimapur": [25.9100, 93.7300], "Agartala": [23.8300, 91.2800],
    "Itanagar": [27.0800, 93.6200],

    // ---- Hill stations & mountain retreats ----
    "Mussoorie": [30.4600, 78.0700], "Nainital": [29.3800, 79.4500],
    "Almora": [29.6000, 79.6600], "Ranikhet": [29.6400, 79.4300],
    "Kausani": [29.8400, 79.6000], "Bhimtal": [29.3450, 79.5600],
    "Mukteshwar": [29.4700, 79.6500], "Binsar": [29.7000, 79.7500],
    "Lansdowne": [29.8400, 78.6800], "Chakrata": [30.7000, 77.8700],
    "Dhanaulti": [30.4200, 78.2300], "Chopta": [30.4900, 79.2000],
    "Auli": [30.5300, 79.5700], "Joshimath": [30.5550, 79.5650],
    "Uttarkashi": [30.7300, 78.4400], "Munsiyari": [30.0700, 80.2400],
    "Pithoragarh": [29.5800, 80.2200], "Haldwani": [29.2200, 79.5200],
    "Rudrapur": [28.9800, 79.4000], "Roorkee": [29.8700, 77.8900],
    "Kashipur": [29.2100, 78.9500], "Dharamshala": [32.2190, 76.3234],
    "McLeodganj": [32.2400, 76.3200], "Dalhousie": [32.5400, 75.9700],
    "Khajjiar": [32.5500, 76.0600], "Chamba": [32.5550, 76.1260],
    "Kullu": [31.9580, 77.1090], "Kasol": [32.0100, 77.3150],
    "Manikaran": [32.0270, 77.3450], "Solan": [30.9080, 77.0970],
    "Kasauli": [30.9000, 76.9600], "Mandi": [31.7080, 76.9320],
    "Palampur": [32.1100, 76.5400], "Kaza (Spiti)": [32.2260, 78.0720],
    "Chail": [30.9700, 77.2000], "Kufri": [31.0980, 77.2660],
    "Narkanda": [31.2600, 77.4600], "Sangla": [31.4300, 78.2700],
    "Kalpa": [31.5400, 78.2600], "Nahan": [30.5600, 77.3000],
    "Paonta Sahib": [30.4400, 77.6200], "Gulmarg": [34.0480, 74.3800],
    "Pahalgam": [34.0150, 75.3150], "Sonmarg": [34.3000, 75.2900],
    "Leh": [34.1642, 77.5848], "Kargil": [34.5560, 76.1260],
    "Udhampur": [32.9160, 75.1420], "Mount Abu": [24.5925, 72.7156],
    "Lonavala": [18.7550, 73.4090], "Khandala": [18.7600, 73.3800],
    "Mahabaleshwar": [17.9230, 73.6580], "Panchgani": [17.9250, 73.8000],
    "Matheran": [18.9860, 73.2700], "Igatpuri": [19.6900, 73.5600],
    "Saputara": [20.5700, 73.7500], "Pachmarhi": [22.4700, 78.4300],
    "Netarhat": [23.4700, 84.2600], "Kodaikanal": [10.2380, 77.4890],
    "Coonoor": [11.3500, 76.8000], "Yercaud": [11.7800, 78.2100],
    "Munnar": [10.0889, 77.0595], "Thekkady": [9.6000, 77.1700],
    "Wayanad (Kalpetta)": [11.6100, 76.0800], "Madikeri (Coorg)": [12.4200, 75.7400],
    "Chikmagalur": [13.3200, 75.7700], "Araku Valley": [18.3300, 82.8700],
    "Horsley Hills": [13.6600, 78.4000], "Cherrapunji": [25.3000, 91.7000],
    "Pelling": [27.3200, 88.2400], "Lachung": [27.6900, 88.7400],
    "Kalimpong": [27.0600, 88.4700], "Tawang": [27.5860, 91.8590],
    "Ziro": [27.6300, 93.8300], "Bomdila": [27.2600, 92.4000],

    // ---- Temples & pilgrimage ----
    "Kedarnath": [30.7350, 79.0670], "Badrinath": [30.7430, 79.4930],
    "Gangotri": [30.9940, 78.9400], "Yamunotri": [31.0130, 78.4600],
    "Rudraprayag": [30.2840, 78.9800], "Devprayag": [30.1460, 78.5980],
    "Karnaprayag": [30.2600, 79.2200], "Tehri": [30.3800, 78.4800],
    "Katra (Vaishno Devi)": [32.9917, 74.9500], "Anandpur Sahib": [31.2390, 76.5030],
    "Sarnath": [25.3800, 83.0250], "Chitrakoot": [25.2000, 80.8700],
    "Naimisharanya": [27.3500, 80.4800], "Vindhyachal": [25.1600, 82.5000],
    "Shravasti": [27.5200, 82.0500], "Kushinagar": [26.7400, 83.8890],
    "Barsana": [27.6470, 77.3770], "Govardhan": [27.4970, 77.4610],
    "Gokul": [27.4480, 77.7200], "Bodh Gaya": [24.6960, 84.9910],
    "Rajgir": [25.0280, 85.4200], "Nalanda": [25.1360, 85.4440],
    "Vaishali": [25.9900, 85.1300], "Deoghar": [24.4800, 86.7000],
    "Pushkar": [26.4900, 74.5500], "Nathdwara": [24.9370, 73.8200],
    "Khatu Shyamji": [27.4000, 75.3900], "Somnath": [20.8880, 70.4010],
    "Dwarka": [22.2400, 68.9700], "Ambaji": [24.3300, 72.8500],
    "Palitana": [21.5200, 71.8300], "Modhera": [23.5830, 72.1300],
    "Omkareshwar": [22.2450, 76.1500], "Maheshwar": [22.1800, 75.5800],
    "Maihar": [24.2700, 80.7600], "Amarkantak": [22.6700, 81.7500],
    "Shirdi": [19.7660, 74.4770], "Trimbakeshwar": [19.9400, 73.5300],
    "Bhimashankar": [19.0700, 73.5400], "Shani Shingnapur": [19.3700, 74.9500],
    "Pandharpur": [17.6800, 75.3300], "Tirumala": [13.6830, 79.3470],
    "Srisailam": [16.0800, 78.8700], "Bhadrachalam": [17.6700, 80.8900],
    "Mantralayam": [15.9400, 77.4200], "Sringeri": [13.4200, 75.2500],
    "Dharmasthala": [12.9500, 75.3800], "Kukke Subramanya": [12.6600, 75.6200],
    "Guruvayur": [10.5900, 76.0400], "Sabarimala": [9.4300, 77.0800],
    "Rameswaram": [9.2880, 79.3130], "Kanyakumari": [8.0883, 77.5385],
    "Tiruvannamalai": [12.2300, 79.0700], "Palani": [10.4500, 77.5200],
    "Velankanni": [10.6800, 79.8400], "Srivilliputhur": [9.5100, 77.6300],

    // ---- Heritage sites, forts & monuments ----
    "Fatehpur Sikri": [27.0940, 77.6610], "Khajuraho": [24.8500, 79.9300],
    "Orchha": [25.3500, 78.6400], "Sanchi": [23.4800, 77.7400],
    "Mandu": [22.3600, 75.4000], "Bhimbetka": [22.9400, 77.6100],
    "Chanderi": [24.7200, 78.1400], "Ajanta": [20.5520, 75.7030],
    "Ellora": [20.0260, 75.1790], "Hampi": [15.3350, 76.4600],
    "Badami": [15.9150, 75.6800], "Aihole": [16.0200, 75.8800],
    "Pattadakal": [15.9500, 75.8200], "Belur": [13.1600, 75.8600],
    "Halebidu": [13.2100, 75.9900], "Konark": [19.8880, 86.0950],
    "Mahabalipuram": [12.6200, 80.1900], "Kumbhalgarh": [25.1500, 73.5800],
    "Ranakpur": [25.1150, 73.4720], "Deeg": [27.4700, 77.3200],
    "Champaner": [22.4860, 73.5370], "Kevadia (Statue of Unity)": [21.8380, 73.7190],
    "Bolpur (Santiniketan)": [23.6700, 87.6800], "Lepakshi": [13.8100, 77.6100],
    "Nagarjuna Sagar": [16.5700, 79.3100], "Jog Falls": [14.2290, 74.8120],
    "Athirappilly": [10.2900, 76.5700], "Chitrakote Falls": [19.2000, 81.6000],

    // ---- Beaches & backwaters ----
    "Puducherry (Pondicherry)": [11.9416, 79.8083], "Gokarna": [14.5500, 74.3200],
    "Murudeshwar": [14.0940, 74.4840], "Malpe": [13.3500, 74.7000],
    "Alibaug": [18.6410, 72.8720], "Ganpatipule": [17.1450, 73.2690],
    "Tarkarli": [16.0500, 73.4700], "Diu": [20.7140, 70.9870],
    "Daman": [20.4200, 72.8300], "Kovalam": [8.4000, 76.9800],
    "Varkala": [8.7300, 76.7100], "Kumarakom": [9.6200, 76.4300],
    "Bekal": [12.3900, 75.0300], "Gopalpur": [19.2600, 84.9100],
    "Mandarmani": [21.6600, 87.7000], "Chilika (Barkul)": [19.7300, 85.3200],
    "Port Blair": [11.6234, 92.7265],

    // ---- Wildlife & national parks ----
    "Jim Corbett (Ramnagar)": [29.3900, 79.1300], "Sariska": [27.3000, 76.4400],
    "Bandhavgarh (Umaria)": [23.7000, 81.0300], "Kanha": [22.3300, 80.6100],
    "Pench": [21.7500, 79.2500], "Panna": [24.7200, 80.2000],
    "Tadoba": [20.2200, 79.3300], "Gir (Sasan)": [21.1400, 70.7900],
    "Kaziranga": [26.5800, 93.1700], "Majuli": [26.9500, 94.1700],
    "Sundarbans": [21.9500, 88.9000], "Bandipur": [11.6600, 76.6300],
    "Nagarhole": [12.0300, 76.1300], "Rann of Kutch (Dhordo)": [23.8500, 69.7200]
  },

  // Multiplies the straight-line distance between two cities to
  // approximate real road distance (roads are never perfectly direct).
  // 1.3 is a commonly used approximation; raise it for hilly/rural
  // areas, lower it for well-connected highway routes.
  roadDistanceFactor: 1.3,

  // ---- YOUR FLEET (cars/vans shown in "Our Fleet" and the demo search)
  fleet: [
    {
      name: "Hatchback",
      seats: "4 seats",
      tagline: "Economy · WagonR, Etios or similar",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVf-1600MOkgBImXDgJtZdV3MDz8h-5KbSkiI_3wyCA&s=10",
      perKm: "9-10",      // price per kilometre, in rupees
      base: 250,     // starting/base fare added before per-km cost
      eta: "4 min"
    },
    {
      name: "Sedan Plus/Premium",
      seats: "4 seats",
      tagline: "Premium economy · Dzire, Verna, Amaze or similar",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRA6OwuDFStxdkQCyGxAplmCT-V_lL13lcsc04m3pp6w&s=10",
      perKm: "10-11",
      base: 300,
      eta: "6 min"
    },
    {
      name: "Ertiga / SUV",
      seats: "6 seats",
      tagline: "Perfect for families",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxA_U75SiVUGb3lsAQ63BFIcixFi2ndeKneGZYpD72Q&s=10",
      perKm: "13–14",
      base: 400,
      eta: "8 min"
    },
    {
      name: "Innova Crysta",
      seats: "7 seats",
      tagline: "Group travel friendly",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5CkYjFa9xHQTYkbdxocS5zU0Glusc_QFFbWYAt8FlTQ&s=10",
      perKm: "16-17",
      base: 450,
      eta: "10 min"
    },
    {
      name: "Tempo Traveller",
      seats: "12–17 seats",
      tagline: "Group tours & large families",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPdukuAVjW7GuEhnrdCeMqLmNgT5DTj2DN1zrUN1trg&s=10",
      perKm: "23–24",
      base: 800,
      eta: "15 min"
    },
    {
      name: "Urbania",
      seats: "12–17 seats",
      tagline: "Group tours & large families",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1EU1jVQ-QhJh1LeG1FV6biUzXZOxahDUwN-Njx4vdUQ&s=10",
      perKm: "28-30",
      base: 800,
      eta: "15 min"
    }
    // To add another vehicle, copy one of the blocks above (from the
    // { down to the }) and paste it just before this comment, then
    // change the details.
  ],

  // ---- LOCAL RENTAL PACKAGES (shown in the Local tab's package dropdown)
  localPackages: ["4HR 40KM","6HR 60KM", "8HR 80KM", "10HR 100KM","12HR 120KM", "WEDDING"],

  // ---- PRICING RULES --------------------------------------------------
  discountPercent: 15,        // % shown as an "online discount" off the listed fare
  advancePercent: 20,         // % of the fare collected as advance/booking amount

  // Shown under every per-km price (which all carry a *) to explain the asterisk.
  priceNote: "Rates are indicative and may vary by exact route, vehicle availability, and season."

};

/* ======================================================================
   HOW TO EDIT THIS FILE (no coding experience needed)
   ======================================================================
   1. Right-click config.js and open it with Notepad (Windows),
      TextEdit (Mac, set to plain text), or any code editor like
      VS Code / Notepad++.
   2. Change a number or piece of text between the quote marks.
      Example: to change the Sedan price from ₹9/km to ₹10/km, find
      "perKm: 9" under Sedan and change it to "perKm: 10".
   3. Save the file (keep the name config.js).
   4. Re-upload config.js to your hosting, replacing the old one.
      - Netlify: drag the updated config.js into your site's deploy.
      - GitHub Pages: commit and push the changed file.
   5. Refresh the website — your change is live.
   ====================================================================== */
