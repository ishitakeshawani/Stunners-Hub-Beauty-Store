import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-items">
          <div className="made-by">
            Made with <i class="fas fa-heart footer-icon"></i> By Ishita
            Keshawani
          </div>
          <div>
            <a href="">
              <i className="fab fa-github footer-social-icon"></i>
            </a>
            <a href="">
              <i className="fab fa-twitter footer-social-icon"></i>
            </a>
            <a href="">
              <i className="fab fa-linkedin footer-social-icon"></i>
            </a>
          </div>
          <div class="copy-right">© 2022 Stunners Hub</div>
        </div>
      </footer>
    </div>
  );
}
