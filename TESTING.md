![Homepage](assets/images/amiresponsive.png)

# ✅ CCT Rental — Testing Documentation

This document outlines the validation checks, functional testing, and manual user testing conducted on the **CCT Rental** project.

---

## 🔍 HTML Validation

All HTML files were tested using the [W3C HTML Validator](https://validator.w3.org/):

| File              | Result                        |
|-------------------|-------------------------------|
| `index.html`      | ✅ No major errors             |
| `movie_detail.html` | ✅ No major errors          |
| `booking.html`    | ✅ No major errors             |
| `navbar.html`     | ✅ No major errors             |
| `footer.html`     | ✅ No major errors             |

Notes:
- Some warnings about unrecognized ARIA roles or redundant attributes were reviewed and deemed non-blocking.

---

## 🎨 CSS Validation

Validated using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/):

| File                | Result            |
|---------------------|-------------------|
| `style.css`         | ✅ No errors       |

---

## 📜 JavaScript Testing

Linted using [JSHint](https://jshint.com/):

| File                 | Result                         |
|----------------------|--------------------------------|
| `filter_movies.js`   | ⚠️ Minor warnings, no blockers |
| `navbar.js`          | ✅ No issues                   |
| `footer.js`          | ✅ No issues                   |
| `movie_detail.js`    | ✅ No issues                   |
| `booking_validation.js` | ✅ No issues              |

Notes:
- Warnings related to missing semicolons were reviewed and cleaned.

---

## 📱 Responsive Design

Tested on Chrome DevTools and real devices:

| Device                  | View | Result        |
|-------------------------|------|---------------|
| iPhone 12 Pro           | Mobile | ✅ Pass     |
| Samsung Galaxy S21      | Mobile | ✅ Pass     |
| iPad (portrait & landscape) | Tablet | ✅ Pass |
| 1440px Desktop          | Desktop | ✅ Pass   |
| 1920px Full HD Monitor  | Desktop | ✅ Pass   |

Tested using [Am I Responsive](http://ami.responsivedesign.is/) to verify fluid layout and element adaptability.

---

## 💡 Lighthouse Report

Run via Chrome DevTools (Desktop audit):

| Category       | Score  |
|----------------|--------|
| Performance    | 98     |
| Accessibility  | 100    |
| Best Practices | 100    |
| SEO            | 100    |

---

## 🧪 Manual Testing

### Homepage (`index.html`)
| Feature                             | Action Performed                                               | Result     |
|-------------------------------------|----------------------------------------------------------------|------------|
| Dynamic movie gallery               | Loaded homepage in browser                                     | ✅ Movies load from JSON and display correctly |
| Genre filter                        | Selected multiple genres from dropdown                         | ✅ Gallery updates without reload |
| Click on movie poster               | Clicked a movie poster to open details                         | ✅ Redirects to `movie_detail.html` with correct ID |
| Navbar/Genre Dropdown               | Tested collapse and responsiveness on different screen sizes   | ✅ Works as expected and is responsive |
| Footer                              | Verified social icons and footer position                      | ✅ Social links visible and footer sticks to bottom |

### Movie Detail Page (`movie_detail.html`)
| Feature                             | Action Performed                                               | Result     |
|-------------------------------------|----------------------------------------------------------------|------------|
| Movie details rendered              | Landed on detail page from homepage                            | ✅ Title, poster, year, cast, director, and plot load correctly |
| Embedded trailer                    | Viewed trailer area below content                              | ✅ Trailer appears correctly and plays in iframe |
| Book Now button                     | Clicked Book Now                                               | ✅ Redirects to booking page |
| Responsive layout                   | Resized window and tested on mobile view                       | ✅ Layout adapts, no overflow or cut-off elements |

### Booking Page (`booking.html`)
| Feature                             | Action Performed                                               | Result     |
|-------------------------------------|----------------------------------------------------------------|------------|
| Form input                          | Left all fields blank and submitted                            | ✅ Error messages shown |
| Email validation                    | Entered invalid email format                                   | ✅ Alert shown and form blocked |
| Date and time validation            | Left date or time blank                                        | ✅ Alert shown and form blocked |
| Successful submission               | Filled all fields correctly                                    | ✅ Thank-you alert appears and redirects to homepage |
| Browser refresh after booking       | Refreshed browser post-booking                                 | ✅ Redirect works without duplicate submission |

### Navbar and Footer (All Pages)
| Feature                             | Action Performed                                               | Result     |
|-------------------------------------|----------------------------------------------------------------|------------|
| Navbar loaded via JS                | Inspected HTML structure                                       | ✅ `navbar.js` injects `navbar.html` as expected |
| Footer loaded via JS                | Verified footer on every page                                  | ✅ `footer.js` loads `footer.html` consistently |
| Social links                        | Clicked Facebook, Instagram, GitHub icons                      | ✅ Links open in new tab with correct URLs |
| Mobile navigation                   | Tested hamburger toggle on mobile                              | ✅ Collapses and expands correctly |

- ✅ Clicking a movie loads full details based on ID
- ✅ Trailer embeds correctly using YouTube URL parsing
- ✅ Responsive layout on mobile and tablet

### Booking Page
- ✅ All fields required
- ✅ Email validated using regex
- ✅ Error shown for empty fields
- ✅ Redirect and thank-you popup display on valid submit

### Navbar/Footer
- ✅ Navbar is responsive and collapses on small screens
- ✅ Genre dropdown functions with Bootstrap
- ✅ Footer stays at bottom, includes functional social links

---

## ✅ Summary

All core functionality works across modern devices and browsers. Pages validate cleanly, user experience is fluid, and performance/accessibility scores are strong. Any warnings encountered were reviewed and accepted as safe.

