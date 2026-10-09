# LabelInspect — Minimal UI Design Prototype

**Food Label Inspection & Compliance System**  
Frontend design only · HTML + CSS + JavaScript (no frameworks)

---

## How to View

Open any HTML file in a browser. Start with:

```
index.html          → Login
dashboard.html      → Main dashboard
inspection.html     → Core inspection wizard (most important)
```

All pages are linked via the sidebar navigation.

---

## Screens Included

| File | Purpose |
|------|---------|
| `index.html` | Login page |
| `dashboard.html` | Stats, recent inspections, top violations |
| `inspection.html` | 5-step inspection wizard (Product → Images → OCR/AI → Verify → Result) |
| `history.html` | Inspection history + evidence preview |
| `products.html` | Product catalogue + manual entry |
| `rules.html` | Compliance rule packs & rules list |
| `reports.html` | Report list + PDF-style preview |

---

## Design Principles (Minimal)

- Clean, professional teal/green palette (trust + food/compliance feel)
- Single sidebar navigation for all modules
- Card + table based layouts
- Step wizard for the core inspection flow
- Mobile-friendly breakpoints (sidebar hides on small screens)
- No external libraries or frameworks

---

## Core Workflow Implemented

```
Login
  → Dashboard
    → New Inspection
        1. Scan / enter barcode → product lookup (or unknown product)
        2. Capture / upload package images
        3. Run OCR + AI extraction
        4. Inspector verifies & corrects fields
        5. Rules engine evaluates → Pass / Fail / Review
    → History & Evidence (audit trail)
    → Reports (PDF download)
```

**Key principle (from FDS):**  
AI extracts & structures → Inspector verifies → Deterministic rules decide.

---

## Notes for Development Team

- This is a **static prototype**. Forms and buttons are interactive for demo only.
- Backend (Django + DRF + PostgreSQL) will power real data, OCR, AI, and rules.
- Replace mock data with API calls when integrating.
- Camera capture uses `capture="environment"` for mobile devices.
- Color tokens and components are defined in `css/style.css` for easy reuse.

---

## File Structure

```
labelinspect-design/
├── index.html
├── dashboard.html
├── inspection.html
├── history.html
├── products.html
├── rules.html
├── reports.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

---

Errors2Experts | LabelInspect Project  
Design date: October 2026
