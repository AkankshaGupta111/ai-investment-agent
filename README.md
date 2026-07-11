# AI Investment Research Agent

An AI-powered web application that analyzes publicly traded companies using **real-time financial data**, **latest news**, and **Google Gemini AI** to generate investment recommendations. The application provides financial insights, confidence scores, stock price visualization, downloadable PDF reports, and AI-generated summaries to help users understand a company's investment potential.

---

## Overview

The AI Investment Research Agent enables users to enter a company ticker symbol (e.g., TSLA, MSFT, AAPL) and receive an AI-generated investment analysis.

The application combines:

- Live stock market data from Yahoo Finance
- Latest company news from NewsAPI
- Gemini AI (via LangChain) for intelligent investment analysis

The result is presented as an easy-to-understand dashboard containing financial metrics, stock charts, recent news, AI recommendations, confidence scores, and downloadable reports.

---

## Features

- 📈 Real-time stock market data
- 📰 Latest company news
- 🤖 AI-powered investment recommendation (INVEST / PASS)
- 🎯 Confidence score
- 📊 30-day stock price chart
- ✅ Pros and Cons analysis
- 📝 AI-generated investment summary
- 📄 Download report as PDF
- 🕒 Recent company analysis history
- 📱 Responsive user interface

---

## Tech Stack

### Frontend
- Next.js 16
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes

### AI & LLM
- Google Gemini 2.5 Flash
- LangChain

### APIs
- Yahoo Finance
- NewsAPI

### Libraries
- Chart.js
- react-chartjs-2
- jsPDF

### Deployment
- Vercel

---

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/AkankshaGupta111/ai-investment-agent.git
cd ai-investment-agent
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env.local` file

```env
GOOGLE_API_KEY=your_google_gemini_api_key
NEWS_API_KEY=your_newsapi_key
MONGODB_URI=your_mongodb_connection_string
```

> Note: MongoDB is reserved for future enhancements such as storing analysis history and chat logs.

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

```
http://localhost:3000
```

---

## How It Works

1. The user enters a company ticker symbol.
2. The frontend sends a request to the `/api/analyze` endpoint.
3. The backend fetches:
   - Financial data from Yahoo Finance
   - Recent news from NewsAPI
4. Both datasets are combined into a structured prompt.
5. LangChain sends the prompt to Google Gemini AI.
6. Gemini returns a JSON response containing:
   - Investment recommendation
   - Confidence score
   - Summary
   - Pros
   - Cons
7. The frontend displays:
   - Financial dashboard
   - Stock price chart
   - Latest news
   - AI recommendation
   - Downloadable PDF report

---

## System Architecture

```text
User
   │
   ▼
Next.js Frontend
   │
   ▼
/api/analyze
   │
   ├────────► Yahoo Finance
   │
   ├────────► NewsAPI
   │
   ▼
LangChain
   │
   ▼
Google Gemini AI
   │
   ▼
Structured JSON Response
   │
   ▼
Dashboard + Charts + PDF Report
```

---

## Key Decisions & Trade-offs

### Why Yahoo Finance?
Yahoo Finance provides free and reliable real-time financial data, making it suitable for educational projects.

### Why NewsAPI?
Recent news helps the AI understand current events that may affect investment decisions.

### Why Gemini AI?
Gemini 2.5 Flash offers fast response times and strong reasoning capabilities for generating structured investment analysis.

### Why LangChain?
LangChain simplifies interaction with the LLM and keeps the AI integration modular and extensible.

### Trade-offs
Due to the project timeline, the following features were not implemented:

- User authentication
- Portfolio management
- Watchlist
- Company comparison
- Persistent MongoDB storage
- Advanced financial ratios

---

## Example Runs

### Tesla (TSLA)

**Decision:** PASS

**Confidence:** 85%

**Reason:** High valuation and market volatility outweigh current growth potential.

---

### Microsoft (MSFT)

**Decision:** INVEST

**Confidence:** 85%

**Reason:** Strong financial performance, diversified business model, and consistent long-term growth.

---

### Apple (AAPL)

**Decision:** INVEST

**Confidence:** 75%

**Reason:** Stable financials, strong ecosystem, and consistent profitability.

---

## Future Improvements

- User Authentication
- Portfolio Tracker
- Company Comparison
- Watchlist
- AI Chat Assistant
- MongoDB integration for storing analysis history
- News sentiment analysis
- Email report generation
- Dark mode
- Export analysis to Excel

---


## LLM Chat Logs (Bonus)

This project was developed with the assistance of ChatGPT throughout the complete software development lifecycle.

The `LLM-Chat-Logs` folder contains the conversations used during the development of this project, including:

- Requirement analysis
- Project planning
- Technology stack selection
- System architecture design
- Gemini AI integration
- Yahoo Finance API integration
- NewsAPI integration
- Frontend development
- Backend implementation
- UI/UX improvements
- Stock chart integration
- PDF report generation
- GitHub version control
- Vercel deployment
- Debugging and testing

These chat logs demonstrate the reasoning, implementation process, debugging approach, and iterative improvements made while building the AI Investment Research Agent.

---

## Disclaimer

This project is developed for educational purposes only.

The AI-generated recommendations should not be considered professional financial advice.

---

## Author

**Akanksha Gupta**

B.Tech Computer Science & Engineering

Full Stack Developer

GitHub: https://github.com/AkankshaGupta111/ai-investment-agent

LinkedIn: https://www.linkedin.com/in/akanksha-gupta12
