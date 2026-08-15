TRUE PATH CAB SERVICES INDIA — WEBSITE PACKAGE
================================================

WHAT'S IN THIS FOLDER
----------------------
index.html    -> the website itself (structure, content, booking demo)
style.css     -> all the visual styling (colors, fonts, layout)
app.js        -> all the interactive behavior (search, booking, etc.)
config.js     -> EDIT THIS to change prices, vehicles, phone number,
                 email, or WhatsApp number
favicon.png   -> the small icon shown in the browser tab
og-image.jpg  -> the preview image shown when your link is shared on
                 WhatsApp, Facebook, etc.
robots.txt    -> tells Google/search engines they're allowed to crawl
                 the site
sitemap.xml   -> helps search engines find and index the site
README.txt    -> this file

All of the above files must stay in the SAME folder, and keep their
exact names, or the site won't load (or won't be found by search
engines) properly.


HOW TO EDIT PRICES / VEHICLES
----------------------------------------
Open config.js in Notepad (Windows), TextEdit (Mac — set to plain
text mode), or a free code editor like VS Code / Notepad++.
Full instructions are written inside config.js itself at the top
and bottom of the file. In short:
  - To change a price:   find "perKm: 9" and change the number.
  - To add a new vehicle: copy one of the fleet blocks and change the details.
  - To change your phone/WhatsApp/email: edit the "contact" section.
Save the file when done, then re-upload it to your host (see below).

Customers type their own pickup and destination into the booking
form (there's no fixed city list to maintain), so you don't need to
edit anything to support a new city or route.


HOW TO PUT THIS LIVE FOR FREE (pick ONE option)
-------------------------------------------------

OPTION A — Netlify (easiest, recommended, free)
  1. Go to https://app.netlify.com/drop in your browser.
  2. Create a free account (email or Google login) if asked.
  3. Drag this ENTIRE FOLDER (with all the files listed above
     inside it) onto the page.
  4. Netlify gives you a live link in a few seconds, e.g.
     https://true-path-cabs.netlify.app
  5. To update later: edit config.js, then drag the folder onto
     the same Netlify site again ("Deploys" tab -> drag and drop)
     to replace it.
  6. Optional: in Netlify's site settings you can change the
     random name to something like truepathcab.netlify.app for free,
     or connect your own domain (e.g. truepathcab.com) if you buy one.

OPTION B — GitHub Pages (free, a little more setup)
  1. Create a free account at https://github.com
  2. Create a new repository (e.g. "truepath-website").
  3. Upload all the files listed above into it.
  4. Go to Settings -> Pages -> set branch to "main" -> Save.
  5. GitHub gives you a link like
     https://yourusername.github.io/truepath-website

Either option gives you a real, working link you can put on
Google, WhatsApp, business cards, etc. — for free, no coding needed
beyond editing config.js.


WHAT'S REAL VS. DEMO RIGHT NOW
---------------------------------
Works for real:       design, layout, mobile view, call/WhatsApp/email
                      links, the cab search and booking form.
Still a demo:        "Confirm Booking" does not save a booking or
                      take real payment — it shows a message asking
                      the customer to call/WhatsApp you instead.
                      To accept real online bookings and payments,
                      you'll eventually need a small backend and a
                      payment gateway (e.g. Razorpay) — a separate,
                      bigger project from this front-end website.
