<div align="center">

  <h1>🚀 FolioForge</h1>
  <h3>AI-Powered Portfolio Builder</h3>

  <p>
    <strong>Craft your digital identity in seconds.</strong><br>
    FolioForge uses Google's Gemini AI to generate professional content, helping developers, designers, and professionals build stunning portfolios instantly.
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" />
    <img src="https://img.shields.io/badge/Vite-Fast-yellow?style=for-the-badge&logo=vite" />
    <img src="https://img.shields.io/badge/AI-Gemini-orange?style=for-the-badge&logo=google" />
    <img src="https://img.shields.io/badge/Bootstrap-5-purple?style=for-the-badge&logo=bootstrap" />
  </p>
</div>

<hr />

## ✨ Features

- **🤖 AI Content Generation**: Stuck on what to write? Let Gemini AI generate your **Bio**, **Project Descriptions**, and **Experience Summaries** with a single click.
- **🎨 Smart Templates**: Choose from curated templates designed for specific roles:
  - *Modern Developer* (Dark Mode, Tech-focused)
  - *Creative Designer* (Clean, Visual-heavy)
  - *Professional Business* (Sleek, Corporate)
- **⚡ Live Preview**: See your changes in real-time within a browser mockup as you edit.
- **🛠️ Customization**: Tweak fonts, theme colors, and layout settings to match your personal brand.
- **📦 Export to HTML**: Download your complete, standalone portfolio as an HTML file ready for hosting (GitHub Pages, Netlify, Vercel).

## 🛠️ Tech Stack

- **Frontend**: React (TypeScript), Vite
- **Styling**: Bootstrap 5, Custom CSS Variables
- **AI Integration**: Google GenAI SDK (`@google/genai`)
- **Icons**: Lucide React

## 🚀 Getting Started

Follow these steps to get FolioForge running on your local machine.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Google Gemini API Key

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/folioforge.git
cd folioforge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project:

```bash
touch .env
```

Add your Google Gemini API key to the file:

```env
API_KEY=your_actual_google_api_key_here
```

> **Note:** You can get a free API key from [Google AI Studio](https://aistudio.google.com/).

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

## 📖 How to Use

1.  **Fill Details**: Enter your basic info, skills, and projects in the Form view.
2.  **Use AI**: Click the **"✨ Generate"** button next to text areas (Bio, Descriptions) to have AI write for you.
3.  **Select Design**: Switch to the **"Design"** tab to choose a template and customize colors/fonts.
4.  **Publish**: Click **"Publish"** to finalize your site.
5.  **Download**: Click **"Download Code"** to get a `.html` file you can upload anywhere.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Built with ❤️ using React and Google Gemini</p>
</div>
