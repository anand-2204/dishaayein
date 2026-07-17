"use client";
import Image from "next/image";
import { useTheme } from "../../Context/ThemeContext";
import { lazy } from "react";

const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <section className="cta" id="contact">
      <div className="cta-glow"></div>
      <div className="wrap">
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          Let's Build Together
        </p>
        <h2>
          Partner with Dishaayein
          <br />
          Technology today.
        </h2>
        <p>
          Whether you need AI automation, data intelligence, or a custom
          platform — we have the expertise, the products, and the purpose.
        </p>

        <div className="chip-row">
          <a className="chip" href="https://nexiva.dev" target="_blank" rel="noopener">
            <div className="cname" style={{ color: "var(--c-nexiva)" }}>Nexiva AI</div>
            <div className="curl">nexiva.dev</div>
          </a>
          <a className="chip" href="https://dbmagic.pro" target="_blank" rel="noopener">
            <div className="cname" style={{ color: "var(--c-dbmagic)" }}>DB AI Magic</div>
            <div className="curl">dbmagic.pro</div>
          </a>
          <a className="chip" href="https://whynwho.com" target="_blank" rel="noopener">
            <div className="cname" style={{ color: "var(--c-whynwho)" }}>Why&amp;Who</div>
            <div className="curl">whynwho.com</div>
          </a>
          <a className="chip" href="https://missingfound.online" target="_blank" rel="noopener">
            <div className="cname" style={{ color: "var(--c-mfn)" }}>MFN</div>
            <div className="curl">missingfound.online</div>
          </a>
        </div>

        <footer>
          <div className="flogo">
            {theme === "light" ? (
              <Image
                src="/logo/light Vertical.png"
                alt="Dishaayein logo light"
                width={219}
                height={219}
                loading = 'lazy'
              />
            ) : (
              <Image
                src="/logo/Dark Vertical.png"
                alt="Dishaayein logo dark"
                width={219}
                height={219}
                loading='lazy'
              />
            )}
            
          </div>

          <div>
            <span className="loc">📍 Gurugram, India</span> &nbsp;·&nbsp; 🌐 dishaayein.com
          </div>
          <div className="tag">Tech Excellence · Social Purpose · Human Impact</div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
