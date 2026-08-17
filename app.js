  emailjs.init('YOUR_EMAILJS_USER_ID');
  const WA_BOOK_LINK = 'https://wa.me/918576020033';
  function openWhatsApp(){ window.location.href = WA_BOOK_LINK; }
  // Apply contact info from config.js everywhere it's used
  document.querySelectorAll('.cfg-phone-link').forEach(el => el.href = 'tel:' + TRUE_PATH_CONFIG.contact.phone);
  document.querySelectorAll('.cfg-phone-text').forEach(el => el.textContent = TRUE_PATH_CONFIG.contact.phone);
  document.querySelectorAll('.cfg-email-link').forEach(el => el.href = 'mailto:' + TRUE_PATH_CONFIG.contact.email);
  document.querySelectorAll('.cfg-email-text').forEach(el => el.textContent = TRUE_PATH_CONFIG.contact.email);
  document.querySelectorAll('.cfg-whatsapp-link').forEach(el => el.href = TRUE_PATH_CONFIG.social.whatsapp);
  document.querySelectorAll('.cfg-facebook-link').forEach(el => el.href = TRUE_PATH_CONFIG.social.facebook);
  document.querySelectorAll('.cfg-instagram-link').forEach(el => el.href = TRUE_PATH_CONFIG.social.instagram);

  // Structured data for search engines (Google rich results etc.), built
  // from config.js so it can never drift out of sync with the contact
  // info shown on the page itself.
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "True Path Cab Services India",
    "image": "https://truepathcabindia.autos/og-image.jpg",
    "url": "https://truepathcabindia.autos/",
    "telephone": "+91" + TRUE_PATH_CONFIG.contact.phone,
    "email": TRUE_PATH_CONFIG.contact.email,
    "areaServed": "IN",
    "sameAs": [
      TRUE_PATH_CONFIG.social.whatsapp,
      TRUE_PATH_CONFIG.social.facebook,
      TRUE_PATH_CONFIG.social.instagram
    ].filter(url => url && url !== '#')
  };
  const jsonLdScript = document.createElement('script');
  jsonLdScript.type = 'application/ld+json';
  jsonLdScript.textContent = JSON.stringify(localBusinessJsonLd);
  document.head.appendChild(jsonLdScript);

  // Seal / mile marker ticking divider
  const sealData = [
    "OUTSTATION CABS","LOCAL RENTALS","AIRPORT TRANSFERS","VERIFIED DRIVERS","FIXED FARES","24×7 SUPPORT"
  ];
  const sealTrack = document.getElementById('sealTrack');
  sealTrack.innerHTML = [...sealData, ...sealData].map(t => `<span><span class="dot">◆</span>${t}</span>`).join("");

  // Build the fleet cards on the page from config.js
  const fleetGrid = document.getElementById('fleetGrid');
  fleetGrid.innerHTML = TRUE_PATH_CONFIG.fleet.map(c => `
    <div class="fleet-card">
      <span class="seat-tag">${c.seats}</span>
      <div class="icon" style="background-image:url('${c.image || ''}')">${c.image ? '' : c.icon}</div>
      <h3>${c.name}</h3>
      <div class="tagline">${c.tagline}</div>
      <div class="price">₹${c.perKm}*<small>/km</small></div>
    </div>
  `).join("");
  document.getElementById('fleetPriceNote').textContent = '* ' + TRUE_PATH_CONFIG.priceNote;

  /* ================= BOOKING WIDGET + CAB SEARCH ================= */

  const searchForm = document.getElementById('searchForm');
  const searchFromInput = document.getElementById('searchFrom');
  const fieldFromLabel = document.getElementById('fieldFromLabel');
  const searchToInput = document.getElementById('searchTo');
  const fieldTo = document.getElementById('fieldTo');
  const fieldToLabel = document.getElementById('fieldToLabel');
  const searchDateInput = document.getElementById('searchDate');
  const searchDateLabel = document.getElementById('searchDateLabel');
  const searchTimeInput = document.getElementById('searchTime');
  const searchTimeLabel = document.getElementById('searchTimeLabel');
  const searchVehicleSel = document.getElementById('searchVehicle');
  const tripTabs = document.querySelectorAll('.trip-tab');
  const outstationToggle = document.getElementById('outstationToggle');
  const outstationRadios = document.querySelectorAll('input[name="outstationType"]');
  const extraDestinations = document.getElementById('extraDestinations');
  const addDestinationBtn = document.getElementById('addDestinationBtn');
  const fieldLocalPackage = document.getElementById('fieldLocalPackage');
  const localPackageSel = document.getElementById('localPackage');
  const resultsList = document.getElementById('resultsList');
  const resultsTitle = document.getElementById('resultsTitle');
  const bookingFormPanel = document.getElementById('bookingFormPanel');
  const tripSummary = document.getElementById('tripSummary');
  const bookingForm = document.getElementById('bookingEmailForm');
  const bookingStatus = document.getElementById('bookingStatus');

  let mainTrip = 'outstation';
  let outstationType = 'round';
  let selectedBooking = null;

  searchVehicleSel.innerHTML = '<option value="">Any car type</option>' +
    TRUE_PATH_CONFIG.fleet.map(c => `<option value="${c.name}">${c.name}</option>`).join('');

  localPackageSel.innerHTML = '<option value="" disabled selected>Select package</option>' +
    (TRUE_PATH_CONFIG.localPackages || []).map(p => `<option value="${p}">${p}</option>`).join('');

  document.getElementById('resultsPriceNote').textContent = '* ' + TRUE_PATH_CONFIG.priceNote;

  const todayISO = new Date().toISOString().slice(0, 10);
  searchDateInput.min = todayISO;
  searchDateInput.value = todayISO;

  // ---- City autocomplete (custom, so it only appears after 3 letters
  // and stays capped in height instead of the native <datalist> dumping
  // the entire city list open on focus) ----
  const CITY_SUGGESTION_LIMIT = 8;
  const cityNames = TRUE_PATH_CONFIG.indianCities || [];

  function setupCityAutocomplete(input, box){
    let activeIndex = -1;

    function position(){
      const rect = input.getBoundingClientRect();
      box.style.left = rect.left + 'px';
      box.style.top = (rect.bottom + 4) + 'px';
      box.style.width = rect.width + 'px';
    }

    function render(matches){
      if (!matches.length) { box.classList.remove('show'); box.innerHTML = ''; return; }
      activeIndex = -1;
      box.innerHTML = matches.map(city => `<div class="sugg-item">${city}</div>`).join('');
      position();
      box.classList.add('show');
    }

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 3) { box.classList.remove('show'); box.innerHTML = ''; return; }
      const matches = cityNames.filter(c => c.toLowerCase().includes(q)).slice(0, CITY_SUGGESTION_LIMIT);
      render(matches);
    });

    window.addEventListener('scroll', () => { box.classList.remove('show'); }, true);
    window.addEventListener('resize', () => { box.classList.remove('show'); });

    box.addEventListener('mousedown', (event) => {
      const item = event.target.closest('.sugg-item');
      if (!item) return;
      event.preventDefault();
      input.value = item.textContent;
      box.classList.remove('show');
      box.innerHTML = '';
    });

    input.addEventListener('keydown', (event) => {
      const items = box.querySelectorAll('.sugg-item');
      if (!items.length || !box.classList.contains('show')) return;
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        activeIndex = Math.min(activeIndex + 1, items.length - 1);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        activeIndex = Math.max(activeIndex - 1, 0);
      } else if (event.key === 'Enter' && activeIndex >= 0) {
        event.preventDefault();
        input.value = items[activeIndex].textContent;
        box.classList.remove('show');
        box.innerHTML = '';
        return;
      } else if (event.key === 'Escape') {
        box.classList.remove('show');
        return;
      } else {
        return;
      }
      items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
    });

    input.addEventListener('blur', () => { box.classList.remove('show'); });
  }

  setupCityAutocomplete(searchFromInput, document.getElementById('fromSuggestions'));
  setupCityAutocomplete(searchToInput, document.getElementById('toSuggestions'));

  function formatDate(iso){
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  // ---- Estimated trip distance ----
  // Straight-line distance between known cities, scaled by
  // roadDistanceFactor to approximate real road distance. Not a live
  // routing lookup — see the comment on cityCoordinates in config.js.
  function findCityCoords(name){
    if (!name) return null;
    const target = name.trim().toLowerCase();
    const key = Object.keys(TRUE_PATH_CONFIG.cityCoordinates || {}).find(k => k.toLowerCase() === target);
    return key ? TRUE_PATH_CONFIG.cityCoordinates[key] : null;
  }

  function haversineKm(lat1, lon1, lat2, lon2){
    const R = 6371;
    const toRad = deg => deg * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  // points: ordered array of city names describing the whole trip leg by
  // leg (e.g. [from, dest1, dest2, from] for a round trip) — a round trip
  // to a single destination naturally comes out to roughly double the
  // one-way distance since it includes the return leg.
  function estimateDistanceKm(points){
    let total = 0;
    for (let i = 0; i < points.length - 1; i++) {
      const a = findCityCoords(points[i]);
      const b = findCityCoords(points[i + 1]);
      if (!a || !b) return null;
      total += haversineKm(a[0], a[1], b[0], b[1]);
    }
    return total * (TRUE_PATH_CONFIG.roadDistanceFactor || 1.3);
  }

  function distanceLabelFor(ctx){
    let points = null;
    if (ctx.mainTrip === 'outstation' && ctx.outstationType === 'round') {
      points = [ctx.from, ...ctx.destinations, ctx.from];
    } else if (ctx.mainTrip === 'outstation' && ctx.outstationType === 'oneway') {
      points = [ctx.from, ctx.to];
    } else {
      return null; // no distance estimate for Local or Airport
    }
    const km = estimateDistanceKm(points);
    return km === null ? 'distance to be confirmed' : `~${Math.round(km)} km (estimated)`;
  }

  // Renders a "part · part · part" line into el, where any segment can be
  // marked { highlight: true, text } to get the light distance-badge
  // treatment. Builds the line out of text nodes (never innerHTML), so
  // free-text city names typed by customers can never be interpreted as
  // markup.
  function renderLineWithParts(el, segments){
    el.textContent = '';
    segments.filter(Boolean).forEach((seg, i) => {
      if (i > 0) el.appendChild(document.createTextNode(' · '));
      if (seg && typeof seg === 'object' && seg.highlight) {
        const span = document.createElement('span');
        span.className = 'distance-badge';
        span.textContent = seg.text;
        el.appendChild(span);
      } else {
        el.appendChild(document.createTextNode(seg));
      }
    });
  }

  // ---- Round Trip: multiple destinations ----
  let destCounter = 0;

  function addDestinationRow(){
    destCounter++;
    const row = document.createElement('div');
    row.className = 'dest-row';
    row.innerHTML = `
      <div class="field">
        <input type="text" placeholder="Additional destination" autocomplete="off">
        <div class="suggestions"></div>
      </div>
      <button type="button" class="remove-dest" aria-label="Remove destination">×</button>
    `;
    extraDestinations.appendChild(row);
    setupCityAutocomplete(row.querySelector('input'), row.querySelector('.suggestions'));
    row.querySelector('.remove-dest').addEventListener('click', () => row.remove());
  }

  function clearExtraDestinations(){
    extraDestinations.innerHTML = '';
  }

  function getExtraDestinations(){
    return [...extraDestinations.querySelectorAll('input')].map(i => i.value.trim()).filter(Boolean);
  }

  addDestinationBtn.addEventListener('click', addDestinationRow);

  // ---- Field visibility per tab / sub-type ----
  // Pickup time is shown on every tab (Outstation, Local, Airport) — only
  // its label changes to fit context.
  function updateFieldVisibility(){
    if (mainTrip === 'outstation') {
      outstationToggle.style.display = 'flex';
      fieldFromLabel.textContent = 'From';
      fieldTo.style.display = '';
      searchToInput.required = true;
      fieldLocalPackage.style.display = 'none';
      localPackageSel.required = false;
      searchDateLabel.textContent = 'Pickup Date';
      searchTimeLabel.textContent = 'Pickup Time';

      if (outstationType === 'round') {
        fieldToLabel.textContent = 'Destination 1';
        extraDestinations.style.display = 'flex';
        addDestinationBtn.style.display = '';
      } else {
        fieldToLabel.textContent = 'To';
        extraDestinations.style.display = 'none';
        addDestinationBtn.style.display = 'none';
        clearExtraDestinations();
      }
    } else if (mainTrip === 'local') {
      outstationToggle.style.display = 'none';
      fieldFromLabel.textContent = 'City';
      fieldTo.style.display = 'none';
      searchToInput.required = false;
      extraDestinations.style.display = 'none';
      addDestinationBtn.style.display = 'none';
      clearExtraDestinations();
      fieldLocalPackage.style.display = '';
      localPackageSel.required = true;
      searchDateLabel.textContent = 'Travel Date';
      searchTimeLabel.textContent = 'Time';
    } else { // airport
      outstationToggle.style.display = 'none';
      fieldFromLabel.textContent = 'City (pickup or drop)';
      fieldTo.style.display = 'none';
      searchToInput.required = false;
      extraDestinations.style.display = 'none';
      addDestinationBtn.style.display = 'none';
      clearExtraDestinations();
      fieldLocalPackage.style.display = 'none';
      localPackageSel.required = false;
      searchDateLabel.textContent = 'Flight Date';
      searchTimeLabel.textContent = 'Flight Time';
    }
  }

  function resetResults(){
    resultsList.innerHTML = '<div class="empty-state">Enter your trip details above, then click "Search Cabs" to see available cars.</div>';
    resultsTitle.textContent = 'Available cabs';
    bookingFormPanel.classList.remove('show');
  }

  // Clears every trip-specific input so each tab starts with a blank
  // slate instead of carrying over values typed under a different tab.
  function resetFormFields(){
    searchFromInput.value = '';
    searchToInput.value = '';
    clearExtraDestinations();
    localPackageSel.selectedIndex = 0;
    searchTimeInput.value = '11:00';
    searchVehicleSel.value = '';
  }

  tripTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tripTabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      mainTrip = tab.dataset.trip;
      resetFormFields();
      updateFieldVisibility();
      resetResults();
    });
  });

  outstationRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      outstationType = radio.value;
      updateFieldVisibility();
      resetResults();
    });
  });

  updateFieldVisibility();

  // ---- Trip labels & pricing rules ----
  // Pricing is shown for Round Trip and Airport, but hidden for One Way and
  // Local (those fares depend too much on exact distance/hours to quote
  // upfront on this page).
  function tripLabelFor(ctx){
    if (ctx.mainTrip === 'outstation') return ctx.outstationType === 'round' ? 'Outstation – Round Trip' : 'Outstation – One Way';
    if (ctx.mainTrip === 'local') return 'Local';
    return 'Airport Transfer';
  }

  function routeLabelFor(ctx){
    let base;
    if (ctx.mainTrip === 'outstation' && ctx.outstationType === 'round') {
      base = `${ctx.from} → ${ctx.destinations.join(' → ')} → ${ctx.from}`;
    } else if (ctx.mainTrip === 'outstation') {
      base = `${ctx.from} → ${ctx.to}`;
    } else if (ctx.mainTrip === 'local') {
      base = `${ctx.from} (${ctx.package})`;
    } else {
      base = `${ctx.from} ⇄ Airport`;
    }
    return ctx.time ? `${base} · ${ctx.time}` : base;
  }

  function openBookingPanel(result){
    selectedBooking = result;
    const { context, showPrice, vehicle } = result;
    const distanceLabel = distanceLabelFor(context);
    renderLineWithParts(tripSummary, [
      tripLabelFor(context),
      routeLabelFor(context),
      distanceLabel && { highlight: true, text: distanceLabel },
      formatDate(context.date),
      vehicle.name,
      showPrice && `₹${vehicle.perKm}*/km`
    ]);
    bookingFormPanel.classList.add('show');
    bookingStatus.textContent = '';
    bookingForm.reset();
    bookingFormPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    bookingFormPanel.classList.remove('show');

    const date = searchDateInput.value;
    const time = searchTimeInput.value;
    const vehicleFilter = searchVehicleSel.value;
    const from = searchFromInput.value.trim();
    const context = { mainTrip, outstationType, date, time, from };
    let showPrice = true;

    if (mainTrip === 'outstation' && outstationType === 'oneway') {
      const to = searchToInput.value.trim();
      if (from.toLowerCase() === to.toLowerCase()) {
        resultsList.innerHTML = '<div class="empty-state">Pickup and destination must be different.</div>';
        return;
      }
      context.to = to;
      showPrice = false;
    } else if (mainTrip === 'outstation' && outstationType === 'round') {
      const primaryTo = searchToInput.value.trim();
      const destinations = [primaryTo, ...getExtraDestinations()].filter(Boolean);
      if (!destinations.length) {
        resultsList.innerHTML = '<div class="empty-state">Please enter at least one destination.</div>';
        return;
      }
      if (destinations.some(d => d.toLowerCase() === from.toLowerCase())) {
        resultsList.innerHTML = '<div class="empty-state">A destination can\'t be the same as the pickup city.</div>';
        return;
      }
      context.destinations = destinations;
      showPrice = true;
    } else if (mainTrip === 'local') {
      const pkg = localPackageSel.value;
      if (!pkg) {
        resultsList.innerHTML = '<div class="empty-state">Please select a package.</div>';
        return;
      }
      context.package = pkg;
      showPrice = false;
    } else { // airport
      context.to = 'Airport';
      showPrice = true;
    }

    const fleet = vehicleFilter ? TRUE_PATH_CONFIG.fleet.filter(v => v.name === vehicleFilter) : TRUE_PATH_CONFIG.fleet;
    const results = fleet.map(vehicle => ({ vehicle, context, showPrice }));

    const distanceLabel = distanceLabelFor(context);
    renderLineWithParts(resultsTitle, [
      `${results.length} cabs available — ${routeLabelFor(context)}`,
      distanceLabel && { highlight: true, text: distanceLabel }
    ]);

    resultsList.innerHTML = results.map((r, i) => `
      <div class="cab-row${showPrice ? '' : ' no-rate'}">
        <div class="icon" style="background-image:url('${r.vehicle.image || ''}')">${r.vehicle.image ? '' : (r.vehicle.icon || '')}</div>
        <div>
          <div class="cab-name">${r.vehicle.name} <span class="cab-seats">(${r.vehicle.seats})</span></div>
          <div class="cab-sub">${r.vehicle.tagline}</div>
        </div>
        ${showPrice ? `<div class="cab-rate">₹${r.vehicle.perKm}*/km</div>` : ''}
        <button class="book-btn" type="button" data-index="${i}">Book</button>
      </div>
    `).join('');

    resultsList.querySelectorAll('.book-btn').forEach((btn, i) => {
      btn.addEventListener('click', () => openBookingPanel(results[i]));
    });
  });

  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    bookingStatus.textContent = '';

    const name = document.getElementById('bookName').value.trim();
    const phone = document.getElementById('bookPhone').value.trim();

    if (!name || !phone) {
      bookingStatus.textContent = 'Please fill every field before sending.';
      return;
    }
    if (!selectedBooking) {
      bookingStatus.textContent = 'Please search and select a cab first.';
      return;
    }

    const { context, vehicle, showPrice } = selectedBooking;
    const tripLabel = tripLabelFor(context);
    const routeText = routeLabelFor(context);
    const priceText = showPrice ? ` Rate ₹${vehicle.perKm}*/km.` : '';
    const distanceLabel = distanceLabelFor(context);
    const distanceText = distanceLabel ? ` Est. distance: ${distanceLabel}.` : '';

    const templateParams = {
      booking_name: name,
      booking_phone: phone,
      booking_from: context.from,
      booking_to: context.destinations ? context.destinations.join(', ') : (context.to || context.package || ''),
      booking_vehicle: vehicle.name,
      booking_type: tripLabel,
      booking_date: formatDate(context.date),
      booking_time: context.time || '',
      booking_distance: distanceLabel || '',
      booking_message: `${tripLabel} booking from ${name} (${phone}): ${routeText} on ${formatDate(context.date)} in ${vehicle.name}.${distanceText}${priceText}`
    };

    bookingStatus.textContent = 'Opening WhatsApp with your booking details…';

    // Open WhatsApp immediately (synchronously, in direct response to the
    // click) rather than waiting on the email promise below — most
    // browsers block window.open() once it's called from inside an async
    // callback instead of directly from the user's click.
    window.open(WA_BOOK_LINK + '?text=' + encodeURIComponent(templateParams.booking_message), '_blank', 'noopener');

    // Email is sent in parallel, best-effort. TRUE_PATH_CONFIG's EmailJS
    // IDs are still placeholders (see index.html), so this is expected to
    // fail until real EmailJS credentials are configured — that's fine,
    // WhatsApp above is already the primary channel.
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      .then(() => {
        bookingStatus.textContent = 'Booking request sent via WhatsApp and email. We will contact you soon.';
      })
      .catch(() => {
        bookingStatus.textContent = 'Booking request sent via WhatsApp. (Email is not fully set up yet.)';
      });
  });
