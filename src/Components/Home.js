import React from "react";
import "./File.css";

function Home() {
  return (
    <section class="home section" id="home">
        <div class="home__container container grid">
            <div class="home__content grid">
                <div class="home__social">
                  
                   <a href="https://www.linkedin.com/in/vr2507/" target="_blank" rel="noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn"
                        style={{ width: "32px", height: "32px" }}/>
                   </a>
                   <a href="https://github.com/RawatGitLAb" target="_blank" rel="noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub"
                        style={{ width: "32px", height: "32px", filter: "invert(1)" }}/>
                   </a>
                   <a href="https://www.hackerrank.com/profile/VarunRawat25" target="_blank" rel="noreferrer">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank"
                        style={{ width: "32px", height: "32px" }}/>
                   </a>
                   <a href="https://www.instagram.com/varunrawatmailbox2507" target="_blank" rel="noreferrer">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"  alt="Instagram"
                        style={{ width: "32px", height: "32px" }}/>
                    </a>
                </div>
                <div class="home__img">
                    <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0" maskType="alpha">
                        <path d="M190.312 36.4879C206.582 62.1187 
                                201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 
                                185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 
                                10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 
                                 0.303176 174.193 10.857 190.312 36.4879Z" />
                        </mask>
                        <g mask="url(#mask0)">
                          <path d="M190.312 36.4879C206.582 62.1187 
                                 201.309 102.826 182.328 134.186C163.346 
                                 165.547 130.807 187.559 100.226 186.353C69.6454 
                                 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 
                                 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 
                                0.303176 174.193 10.857 190.312 36.4879Z" />
                          <image className="home__blob-img" x="0" y="0" 
                             width="200" height="200" 
                             href="/Photo.jpg" alt="Profile" 
                          />
                        </g>
                    </svg>
                </div>
                <div class="home__data">
                  <h1 class="home__title animate-fadeInUp">Hi, I'am Varun Rawat</h1>
                  <h3 class="home__subtitle">Full Stack Developer</h3>
                  <p class="home__description">I am passionate about Front End and Back End web development. 
                    Experienced in developing intelligent systems and contributing to impactful research.</p>
                  <a href="#contact" class="button button--flex home__button">
                    Contact Me<i class="uil uil-message button__icon"></i>
                  </a>
                </div>
            </div>
            <div class="home__scroll">
              <a href="#about" class="home__scroll-button button--flex">
                <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                  <span class="home__scroll-name">Scroll Down</span>
                    <i class="uil uil-arrow-down home__scroll-arrow"></i>
              </a>
            </div>
        </div>
        </section>
  );
}
export default Home;