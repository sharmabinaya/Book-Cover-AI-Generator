# Book-Cover-AI-Generator

book-cover-ai/
 ├── frontend/
 │   ├── pages/
 │   │   ├── index.js         # Home page (upload + AI cover generation)
 │   │   ├── edit.js          # Drag & Drop Editor
 │   │   ├── order.js         # Payment & Order Page
 │   ├── components/
 │   │   ├── UploadForm.js    # Upload cover details
 │   │   ├── AIResults.js     # Shows AI-generated covers
 │   │   ├── Editor.js        # Drag & drop book cover editing
 │   │   ├── OrderForm.js     # Stripe payment integration
 │   ├── styles/
 │   ├── public/
 │   ├── package.json
 │   ├── next.config.js
 │   ├── tailwind.config.js
 ├── backend/
 │   ├── server.js
 │   ├── routes/
 │   │   ├── coverRoutes.js   # AI model API
 │   │   ├── orderRoutes.js   # Order processing API
 │   ├── models/
 │   │   ├── Order.js         # Order Schema (MongoDB)
 │   ├── .env
 │   ├── package.json
