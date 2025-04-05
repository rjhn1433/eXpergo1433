"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import "./styles/home.css"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`main-container ${isLoaded ? "loaded" : ""}`}>
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <Link href="/" className="logo-container">
            <span className="logo-text">Expergo</span>
          </Link>
          <div className="auth-buttons">
            <Link href="/auth">
              <button className="btn btn-outline">Sign In</button>
            </Link>
            <Link href="/auth">
              <button className="btn btn-primary">Register</button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Find Local Talent, Instantly</h1>
          <p className="hero-description">
            Connect with skilled professionals for your immediate needs - from musicians to chefs, stylists to
            electricians.
          </p>

          <div className="search-container">
            <Link href="/search" className="search-bar">
              <i className="fas fa-search search-icon"></i>
              <span className="search-placeholder">What service are you looking for?</span>
              <button className="btn btn-primary search-button">Search</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Popular Categories</h2>
        <div className="categories-grid">
          <CategoryCard
            icon="fa-music"
            title="Musicians"
            description="Singers, Instrumentalists, DJs"
            href="/search?category=musicians"
            color="blue"
          />
          <CategoryCard
            icon="fa-om"
            title="Pooja Archana"
            description="Pandits, Priests, Ceremonies"
            href="/search?category=pooja"
            color="orange"
          />
          <CategoryCard
            icon="fa-utensils"
            title="Chefs"
            description="Home Cooks, Caterers, Bakers"
            href="/search?category=chefs"
            color="red"
          />
          <CategoryCard
            icon="fa-cut"
            title="Stylists"
            description="Hair, Makeup, Fashion"
            href="/search?category=stylists"
            color="purple"
          />
          <CategoryCard
            icon="fa-pen-to-square"
            title="Editors"
            description="Photo, Video, Content"
            href="/search?category=editors"
            color="green"
          />
          <CategoryCard
            icon="fa-bolt"
            title="Electricians"
            description="Repairs, Installation, Maintenance"
            href="/search?category=electricians"
            color="yellow"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Post Your Requirement</h3>
            <p className="step-description">Describe what you need, when you need it, and set your filters.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Connect with Talent</h3>
            <p className="step-description">Nearby professionals get notified and can express interest in your job.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Book & Complete</h3>
            <p className="step-description">Select the right person, confirm details, and get your job done.</p>
          </div>
        </div>
      </section>

      {/* Recent Listings Section */}
      <section className="recent-listings-section">
        <div className="section-header">
          <h2 className="section-title">Recent Requirements</h2>
          <Link href="/listings" className="view-all-link">
            View All
          </Link>
        </div>
        <div className="listings-grid">
          <RequirementCard
            title="Violinist Needed for Wedding"
            category="Musicians"
            location="Mumbai, Maharashtra"
            date="May 15, 2025"
            urgency="Urgent"
          />
          <RequirementCard
            title="Home Chef for Birthday Party"
            category="Chefs"
            location="Delhi, NCR"
            date="April 10, 2025"
            urgency="Standard"
          />
          <RequirementCard
            title="Makeup Artist for Photoshoot"
            category="Stylists"
            location="Bangalore, Karnataka"
            date="April 5, 2025"
            urgency="Urgent"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            {/* Company info */}
            <div className="footer-column">
              <h3 className="footer-title">Expergo</h3>
              <p className="footer-description">Connecting talent with opportunities, instantly.</p>
            </div>
            {/* Category links */}
            <div className="footer-column">
              <h4 className="footer-subtitle">Categories</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/search?category=musicians">Musicians</Link>
                </li>
                <li>
                  <Link href="/search?category=pooja">Pooja Archana</Link>
                </li>
                <li>
                  <Link href="/search?category=chefs">Chefs</Link>
                </li>
                <li>
                  <Link href="/search?category=stylists">Stylists</Link>
                </li>
                <li>
                  <Link href="/search?category=editors">Editors</Link>
                </li>
                <li>
                  <Link href="/search?category=electricians">Electricians</Link>
                </li>
              </ul>
            </div>
            {/* Company links */}
            <div className="footer-column">
              <h4 className="footer-subtitle">Company</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            {/* Legal links */}
            <div className="footer-column">
              <h4 className="footer-subtitle">Legal</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Copyright */}
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Expergo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// CategoryCard Component
function CategoryCard({ icon, title, description, href, color }) {
  return (
    <Link href={href || "#"} className="category-card-link">
      <div className={`category-card category-card-${color}`}>
        <div className="category-icon-container">
          <i className={`fas ${icon}`}></i>
        </div>
        <h3 className="category-title">{title}</h3>
        <p className="category-description">{description}</p>
      </div>
    </Link>
  )
}

// RequirementCard Component
function RequirementCard({ title, category, location, date, urgency }) {
  return (
    <div className="requirement-card">
      <div className="requirement-header">
        <h3 className="requirement-title">{title}</h3>
        <span className={`urgency-badge ${urgency === "Urgent" ? "urgent" : "standard"}`}>{urgency}</span>
      </div>
      <div className="requirement-details">
        <div className="requirement-detail">
          <span className="detail-label">Category:</span> {category}
        </div>
        <div className="requirement-detail">
          <span className="detail-label">Location:</span> {location}
        </div>
        <div className="requirement-detail">
          <span className="detail-label">Date Needed:</span> {date}
        </div>
      </div>
      <button className="btn btn-outline full-width">View Details</button>
    </div>
  )
}

