import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeUtilityDropdown, setActiveUtilityDropdown] = useState(null);
  const [activeMainDropdown, setActiveMainDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setActiveUtilityDropdown(null); // Close dropdowns on scroll
      setActiveMainDropdown(null);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveUtilityDropdown(null);
        setActiveMainDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleUtilityDropdown = (name) => {
    setActiveUtilityDropdown(activeUtilityDropdown === name ? null : name);
    setActiveMainDropdown(null);
  };

  const toggleMainDropdown = (name) => {
    setActiveMainDropdown(activeMainDropdown === name ? null : name);
    setActiveUtilityDropdown(null);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent border-b border-white/20'}`}>
      <div ref={dropdownRef}>
        {/* Utility Navigation (Top Tier) */}
        <div className={`hidden lg:flex justify-between items-center px-6 lg:px-12 xl:px-16 2xl:px-24 py-2 transition-all duration-300 ${isScrolled ? '!hidden' : ''}`}>
          <div className="flex items-center space-x-6 text-[11px] font-bold tracking-widest text-white uppercase">
            
            {/* Offices Dropdown */}
            <div>
              <button 
                onClick={() => toggleUtilityDropdown('offices')}
                className={`hover:text-gray-300 transition-colors flex items-center gap-1 ${activeUtilityDropdown === 'offices' ? 'text-gray-300' : ''}`}
              >
                Offices
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${activeUtilityDropdown === 'offices' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {activeUtilityDropdown === 'offices' && (
                <div className="absolute top-full left-0 w-full bg-white text-bain-dark border-t border-gray-200 shadow-xl p-8 z-50 normal-case tracking-normal text-left">
                  <div className="max-w-[1400px] mx-auto flex gap-16 px-6 lg:px-12 xl:px-16 2xl:px-24">
                    <div className="w-1/4">
                      <h4 className="text-2xl font-bold mb-6 text-bain-dark">Offices</h4>
                      <a href="#" className="text-bain-red font-bold text-sm uppercase tracking-widest hover:underline flex items-center gap-1 group">
                        See all offices
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </a>
                    </div>
                    <div className="w-3/4 grid grid-cols-3 gap-12">
                      <div>
                        <h5 className="font-bold text-bain-dark mb-4 text-base">North & Latin America</h5>
                        <ul className="space-y-3 text-[15px] text-gray-600">
                          <li><a href="#" className="hover:text-bain-red transition-colors">Atlanta</a></li>
                          <li><a href="#" className="hover:text-bain-red transition-colors">Boston</a></li>
                          <li><a href="#" className="hover:text-bain-red transition-colors">Chicago</a></li>
                          <li><a href="#" className="hover:text-bain-red transition-colors">New York</a></li>
                          <li><a href="#" className="hover:text-bain-red transition-colors">San Francisco</a></li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-bain-dark mb-4 text-base">Europe & Africa</h5>
                        <ul className="space-y-3 text-[15px] text-gray-600">
                          <li><a href="#" className="hover:text-bain-red transition-colors">Amsterdam</a></li>
                          <li><a href="#" className="hover:text-bain-red transition-colors">London</a></li>
                          <li><a href="#" className="hover:text-bain-red transition-colors">Paris</a></li>
                          <li><a href="#" className="hover:text-bain-red transition-colors">Johannesburg</a></li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-bain-dark mb-4 text-base">Asia & Australia</h5>
                        <ul className="space-y-3 text-[15px] text-gray-600">
                          <li><a href="#" className="hover:text-bain-red transition-colors">Beijing</a></li>
                          <li><a href="#" className="hover:text-bain-red transition-colors">Mumbai</a></li>
                          <li><a href="#" className="hover:text-bain-red transition-colors">Sydney</a></li>
                          <li><a href="#" className="hover:text-bain-red transition-colors">Tokyo</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-gray-300 transition-colors">Alumni</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Media Center</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Subscribe</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-6 text-[11px] font-bold tracking-widest text-white uppercase">
            
            {/* Global English Dropdown */}
            <div>
              <button 
                onClick={() => toggleUtilityDropdown('language')}
                className={`hover:text-gray-300 transition-colors flex items-center gap-1 ${activeUtilityDropdown === 'language' ? 'text-gray-300' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Global | English
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${activeUtilityDropdown === 'language' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {activeUtilityDropdown === 'language' && (
                <div className="absolute top-full right-0 mt-2 w-[600px] bg-white text-bain-dark border border-gray-200 shadow-xl p-8 z-50 normal-case tracking-normal text-left">
                  <h4 className="text-xl font-bold text-bain-dark border-b border-gray-200 pb-4 mb-6">Select your region and language</h4>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-bain-dark mb-4 text-sm">North & Latin America</h5>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-bain-red flex justify-between group">Brazil <span className="text-gray-400 group-hover:text-bain-red">(Português)</span></a></li>
                        <li><a href="#" className="hover:text-bain-red flex justify-between group">Canada <span className="text-gray-400 group-hover:text-bain-red">(Français)</span></a></li>
                        <li><a href="#" className="hover:text-bain-red flex justify-between group">Colombia <span className="text-gray-400 group-hover:text-bain-red">(Español)</span></a></li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-bain-dark mb-4 text-sm">Europe, Middle East, & Africa</h5>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-bain-red flex justify-between group">France <span className="text-gray-400 group-hover:text-bain-red">(Français)</span></a></li>
                        <li><a href="#" className="hover:text-bain-red flex justify-between group">DACH Region <span className="text-gray-400 group-hover:text-bain-red">(Deutsch)</span></a></li>
                        <li><a href="#" className="hover:text-bain-red flex justify-between group">Italy <span className="text-gray-400 group-hover:text-bain-red">(Italiano)</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Saved Items Dropdown */}
            <div>
              <button 
                onClick={() => toggleUtilityDropdown('saved')}
                className={`hover:text-gray-300 transition-colors flex items-center gap-1 ${activeUtilityDropdown === 'saved' ? 'text-gray-300' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                Saved items
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${activeUtilityDropdown === 'saved' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {activeUtilityDropdown === 'saved' && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 shadow-xl p-8 z-50 text-center normal-case tracking-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                  </svg>
                  <h4 className="text-lg font-bold text-bain-dark mb-2">You have no saved items.</h4>
                  <p className="text-gray-500 text-sm mb-6">Bookmark content that interests you and it will be saved here for you to read or share later.</p>
                  <a href="#" className="inline-block border-2 border-bain-dark text-bain-dark hover:bg-bain-dark hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs font-bold py-3 px-6">
                    Explore Insights
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Navigation (Bottom Tier) */}
        <div className={`flex items-center justify-between px-4 lg:px-8 xl:px-16 2xl:px-24 h-16 lg:h-20 ${isScrolled ? 'text-bain-dark' : 'text-white'}`}>
          <div className="flex items-center h-full">
            
            {/* Hamburger Icon */}
            <button className="mr-6 hidden lg:block hover:text-bain-red transition-colors focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo Text + Compass */}
            <a href="#" className={`flex items-center gap-2 mr-8 lg:mr-10 font-bold uppercase tracking-widest text-lg group transition-colors duration-300 ${isScrolled ? 'text-bain-red' : 'text-white'}`}>
              CONSULTEDGE
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-colors ${isScrolled ? 'text-bain-red' : 'group-hover:text-bain-red'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 h-full relative">
              {[
                { name: 'Industries', hasDropdown: true },
                { name: 'Consulting Services', hasDropdown: true },
                { name: 'Digital', hasDropdown: false },
                { name: 'Insights', hasDropdown: true },
                { name: 'About', hasDropdown: true },
                { name: 'Careers', hasDropdown: false }
              ].map((link) => (
                <div key={link.name} className="h-full flex items-center">
                  <button 
                    onClick={() => link.hasDropdown ? toggleMainDropdown(link.name) : null}
                    className={`text-[15px] font-bold transition-colors h-full flex items-center gap-1 border-b-[3px] ${activeMainDropdown === link.name ? 'border-bain-red text-bain-red' : `border-transparent ${isScrolled ? 'hover:text-bain-red' : 'hover:text-gray-300'}`}`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${activeMainDropdown === link.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </button>
                  
                  {/* Mega Menu Dropdown */}
                  {link.hasDropdown && activeMainDropdown === link.name && (
                    <div className="absolute top-full left-[-200px] w-screen max-w-[100vw] bg-white text-bain-dark border-t border-gray-200 shadow-xl p-10 z-50 normal-case cursor-default text-left">
                      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 2xl:px-24">
                        <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
                          <h4 className="text-3xl font-bold text-bain-dark">{link.name}</h4>
                          <a href="#" className="text-bain-red font-bold text-sm uppercase tracking-widest hover:underline">View all {link.name} &rarr;</a>
                        </div>
                        <div className="grid grid-cols-4 gap-8">
                          {/* Placeholder Columns */}
                          {[1, 2, 3, 4].map(col => (
                            <div key={col}>
                              <ul className="space-y-4 text-[15px] text-gray-600 font-medium">
                                <li><a href="#" className="hover:text-bain-red transition-colors block">Item {col}.1</a></li>
                                <li><a href="#" className="hover:text-bain-red transition-colors block">Item {col}.2</a></li>
                                <li><a href="#" className="hover:text-bain-red transition-colors block">Item {col}.3</a></li>
                                <li><a href="#" className="hover:text-bain-red transition-colors block">Item {col}.4</a></li>
                                <li><a href="#" className="hover:text-bain-red transition-colors block">Item {col}.5</a></li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6 h-full">
            <a href="#" className={`hidden lg:flex items-center gap-2 text-sm font-bold transition-colors ${isScrolled ? 'hover:text-bain-red' : 'hover:text-gray-300'}`}>
              Explore
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </a>
            
            <div className={`hidden lg:block w-px h-6 ${isScrolled ? 'bg-gray-300' : 'bg-white/30'}`}></div>

            <button className={`hidden lg:block transition-colors ${isScrolled ? 'hover:text-bain-red' : 'hover:text-gray-300'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
            
            {/* Mobile Hamburger */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden transition-colors focus:outline-none ${isScrolled ? 'hover:text-bain-red' : 'hover:text-gray-300'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-bain-dark border-t border-gray-100 absolute w-full left-0 top-full shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-2 flex flex-col">
            {['Industries', 'Consulting Services', 'Digital', 'Insights', 'About', 'Careers'].map((link) => (
              <a
                key={link}
                href="#"
                className="px-4 py-4 text-base font-bold border-b border-gray-100 hover:text-bain-red"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
