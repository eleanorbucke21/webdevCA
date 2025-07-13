# 📽️ CCT Rental

A responsive movie rental web application built with HTML, CSS, Bootstrap, and JavaScript. Users can browse a gallery of films, filter by genre, view details about selected movies, and book them for rental.

## 🚀 Features

- 🖼️ Dynamic gallery displaying a range of movie posters
- 🎯 Genre filter dropdown powered by JavaScript
- 🎬 Movie detail view with:
  - Poster
  - Title and release year
  - Plot summary
  - Cast and directors
  - Embedded YouTube trailer
  - "Book Now" button
- 🧩 Fully responsive design using Bootstrap
- 🗂️ Modular structure using external HTML fragments (navbar, footer)

---

## 🛠️ Technologies Used

| Tech              | Purpose                           |
| ----------------- | --------------------------------- |
| HTML5             | Structure and content             |
| CSS3 / Custom CSS | Styling and layout                |
| Bootstrap 4       | Responsive design and components  |
| JavaScript        | Interactivity and filtering logic |
| Font Awesome      | Icons                             |
| YouTube Embed     | Movie trailer display             |

---

## 📁 File Structure

```
CCT-Rental/
├── index.html               # Main homepage
├── movie_detail.html        # Movie detail page
├── navbar.html              # Reusable navbar fragment
├── footer.html              # Reusable footer fragment
├── assets/
│   └── css/style.css        # Custom CSS styling
├── images/                  # Movie posters
├── filter_movies.js         # Filtering logic
├── navbar.js                # JS to inject navbar
├── footer.js                # JS to inject footer
├── README.md
└── TESTING.md
```

---

## ✅ Testing

See TESTING.md for full validation and test logs.

Highlights:

- ✅ HTML & CSS validated with no major issues
- ⚠️ JS warnings reviewed via JSHint
- 📱 Fully responsive on mobile, tablet, and desktop
- 💡 Lighthouse performance and accessibility passed

---

## 🐛 Bugs, Issues and Solutions

| Issue                         | Solution                                              |
| ----------------------------- | ----------------------------------------------------- |
| Dropdown misaligned           | Switched to Bootstrap-native structure                |
| Navbar content not displaying | Injected HTML using `DOMContentLoaded` in `navbar.js` |

---

## 🚀 Deployment

To deploy using GitHub Pages:

1. Push project to GitHub.
2. Go to Settings > Pages.
3. Select branch `main` and root `/`.
4. GitHub will generate a live link.

---

# Content

### Files Used
- [Film Json](https://github.com/erik-sytnyk/movies-list/blob/master/db.json)

