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
    "Jhansi", "Ulhasnagar", "Jammu", "Sangli-Miraj", "Mangaluru",
    "Erode", "Belagavi", "Ambattur", "Tirunelveli", "Malegaon",
    "Gaya", "Udaipur", "Maheshtala", "Shimla", "Manali", "Rishikesh",
    "Haridwar", "Puri", "Digha", "Goa (Panaji)", "Ooty", "Darjeeling",
    "Rewa", "Satna", "Unnao", "Sitapur", "Hardoi", "Etawah", "Mathura",
    "Vrindavan", "Ayodhya", "Basti", "Faizabad", "Ballia", "Azamgarh",
    "Deoria", "Fatehpur", "Pratapgarh", "Banda", "Jaunpur", "Sultanpur"
  ],

  // ---- CITY COORDINATES (used only to estimate trip distance) --------
  // [latitude, longitude] for every city above. Used to calculate the
  // "estimated distance" shown to customers — it's a straight-line
  // distance multiplied by roadDistanceFactor below to approximate real
  // road distance, not a live routing lookup. If a customer types a
  // place that isn't in this list, the distance just won't be shown —
  // that's expected, not an error.
  cityCoordinates: {
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
    "Sultanpur": [26.2648, 82.0721]
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
      tagline: "Economy · Dzire, Etios or similar",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVf-1600MOkgBImXDgJtZdV3MDz8h-5KbSkiI_3wyCA&s=10",
      perKm: "9-10",      // price per kilometre, in rupees
      base: 250,     // starting/base fare added before per-km cost
      eta: "4 min"
    },
    {
      name: "Sedan Plus/Premium",
      seats: "4 seats",
      tagline: "Premium economy · Verna, Amaze or similar",
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
