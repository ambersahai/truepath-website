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
