"use client";
import Image from "next/image";
import { useTheme } from "../../Context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <nav className="wrap">
        <div className="brandmark">
          {theme === "light" ? (
            <Image
              src="/logo/light Horizontal.png"
              alt="Dishaayein logo mark"
              width={260}   
              height={65}   
              priority
            />
          ) : (
            <Image
              src="/logo/Dark Horizontal.png"
              alt="Dishaayein logo mark"
              width={260}
              height={65}
              priority
            />
          )}
        </div>

        <div className="navlinks">
          <a href="#ecosystem">Ecosystem</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {/* Sun Icon */}
            <svg
              className="sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="4.5" />
              <path
                d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"
                strokeLinecap="round"
              />
            </svg>
            {/* Moon Icon */}
            <svg
              className="moon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <a className="nav-cta" href="#contact">
            Partner With Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
