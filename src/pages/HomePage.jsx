import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const ChampionSection = () => {
  const industries = [
    "Retail", "Private Equity", "Advanced Manufacturing & Services",
    "Technology", "Oil & Gas", "Healthcare & Life Sciences",
    "Chemicals", "Consumer Products", "Mining", "Financial Services"
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/images/bain_champion.png" alt="Professionals talking" className="w-full h-[420px] object-cover" />
          </div>
          <div className="pl-0 lg:pl-8">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-bain-dark mb-4 leading-[1.1]">
              We champion the bold to achieve the extraordinary.
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-light leading-snug max-w-2xl">
              Answer two questions and put our thinking to work on your challenges.
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-bain-dark flex items-center gap-3">
                1. What is your industry? <span className="text-xs font-normal text-gray-400">Question 1 of 2</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {industries.map((ind, idx) => (
                <button key={idx} className="rounded-full border border-gray-200 py-2 px-5 text-bain-red font-bold hover:bg-gray-50 transition-colors shadow-sm text-sm">
                  {ind}
                </button>
              ))}
            </div>
            <a href="#" className="text-gray-500 hover:text-bain-red underline text-sm font-medium transition-colors">
              View all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientStoriesSection = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const stories = [
    {
      id: 0,
      title: "Banca Investis Transforms Customer Dialogue with a Generative AI Engine",
      stats: [
        { value: "500+", label: "pieces of information and research analyzed daily" },
        { value: "7", label: "months from ideation to launch" }
      ],
      image: "/images/bain_banca.png"
    },
    {
      id: 1,
      title: "An EPC Leader Transforms Itself Amid Intense Volatility",
      stats: [
        { value: "$300M", label: "saved over two years" },
        { value: "2.5x", label: "stock price increase over two years" }
      ],
      image: "/images/bain_epc.png"
    },
    {
      id: 2,
      title: "The Hera Group Prepares to Power Up with Generative AI",
      stats: [
        { value: "150", label: "use cases defined within three primary focus areas" },
        { value: "5", label: "use cases launched in the first wave" }
      ],
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "How NatWest Is Scaling Customer Engagement with AI",
      stats: [
        { value: "90%", label: "Reduction in FTE involvement" },
        { value: "Zero", label: "handoffs required, down from 10+" }
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Content */}
          <div className="flex flex-col justify-center py-4">
            <div>
              <h2 className="text-4xl md:text-[42px] font-bold text-bain-dark mb-8 tracking-tight">Bold steps forward.</h2>
              <div className="border-t border-gray-300 pt-4 mb-6">
                <h4 className="text-[16px] font-bold text-bain-dark">Featured client success story</h4>
              </div>
              <h3 className="text-2xl md:text-[32px] font-bold text-bain-dark leading-[1.1] mb-8 min-h-[100px]">
                {stories[activeSlide].title}
              </h3>

              <h5 className="font-bold text-bain-dark mb-3 text-[14px]">The impact</h5>
              <div className="grid grid-cols-2 gap-4 mb-8 min-h-[130px]">
                {stories[activeSlide].stats.map((stat, idx) => (
                  <div key={idx} className="bg-[#f2f2f2] p-6 flex flex-col justify-start min-h-[130px]">
                    <div className="text-3xl md:text-[36px] font-bold text-bain-dark mb-3 tracking-tight">{stat.value}</div>
                    <div className="text-[14px] text-gray-800 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a href="#" className="font-bold text-bain-red hover:text-red-800 transition-colors flex items-center gap-1 text-[15px]">
                Read story
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[520px] w-full bg-gray-100">
            {stories.map((story, idx) => (
              <img
                key={idx}
                src={story.image}
                alt={story.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              />
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="flex gap-4 mb-8">
            {stories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-[10px] h-[10px] rounded-full transition-colors ${idx === activeSlide ? 'bg-[#c00000]' : 'bg-[#999999] hover:bg-gray-600'}`}
              />
            ))}
          </div>
          <button className="border border-[#dddddd] text-bain-red font-bold text-xs tracking-[0.15em] uppercase py-[14px] px-8 hover:bg-gray-50 transition-colors">
            SEE ALL CLIENT RESULTS
          </button>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-bain-red selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* NEW BAIN.COM SECTIONS */}
        <ChampionSection />
        <ClientStoriesSection />


        {/* SECTION 2: Our Expertise (Services Grid) */}
        <section className="py-32 bg-[#f8f8f8]">
          <div className="container mx-auto px-6 lg:px-12 xl:px-24 max-w-[1600px]">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                <h4 className="text-bain-red font-bold tracking-widest uppercase text-sm mb-4">What We Do</h4>
                <h2 className="text-4xl lg:text-5xl font-bold text-bain-dark leading-tight">Unparalleled expertise across industries and capabilities.</h2>
              </div>
              <a href="#" className="mt-8 lg:mt-0 group flex items-center font-bold text-sm tracking-widest uppercase text-bain-dark hover:text-bain-red transition-colors">
                Explore all services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Strategy', desc: 'Tailored solutions that deliver results and achieve sustained growth.' },
                { title: 'Digital Transformation', desc: 'Harnessing the power of AI, data, and technology to reinvent your business.' },
                { title: 'Private Equity', desc: 'Advising investors across the entire investment life cycle.' },
                { title: 'Operations', desc: 'Unlocking value through supply chain optimization and performance improvement.' },
                { title: 'Sustainability', desc: 'Embedding ESG principles to create lasting value and positive impact.' },
                { title: 'Organization', desc: 'Building high-performance cultures and agile operating models.' }
              ].map((service, idx) => (
                <div key={idx} className="group bg-white p-12 border border-gray-100 hover:border-bain-red transition-colors duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-bain-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <h3 className="text-2xl font-bold text-bain-dark mb-4 group-hover:text-bain-red transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">{service.desc}</p>
                  <div className="flex items-center text-bain-red font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Learn more &rarr;
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Featured Case Study (Dark Split Section) */}
        <section className="bg-bain-dark text-white flex flex-col lg:flex-row relative">
          <div className="lg:w-1/2 p-12 lg:p-24 xl:p-32 flex flex-col justify-center relative z-10">
            <h4 className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-6">Featured Client Story</h4>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">Revitalizing a Global Automaker for the EV Era.</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              We partnered with a top-tier automotive giant to completely overhaul their supply chain and R&D pipelines, reducing time-to-market for new electric vehicles by 40% and saving $2.5B in operational inefficiencies.
            </p>
            <div>
              <a href="#" className="inline-block border-2 border-white hover:bg-white hover:text-bain-dark text-white font-bold py-4 px-8 transition-colors duration-300 uppercase tracking-widest text-sm">
                Read the Case Study
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
            <img
              src="/images/insight_data_1780392662771.png"
              alt="Automotive Manufacturing"
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-bain-dark opacity-40 mix-blend-multiply"></div>
          </div>
        </section>

        {/* SECTION 4: Latest Insights (Image Cards) */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12 xl:px-24 max-w-[1600px]">
            <h4 className="text-bain-red font-bold tracking-widest uppercase text-sm mb-4">Insights & Ideas</h4>
            <h2 className="text-4xl lg:text-5xl font-bold text-bain-dark mb-16">Forward-thinking perspectives.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { type: 'Report', title: 'The Future of AI in Enterprise Software', img: '/images/insight_business_1780392648379.png' },
                { type: 'Brief', title: 'Navigating Geopolitical Supply Chain Risks', img: '/images/insight_industry_1780392676345.png' },
                { type: 'Article', title: 'Building Resilience in Retail Banking', img: '/images/hero_bg_1780392630256.png' }
              ].map((insight, idx) => (
                <a href="#" key={idx} className="group block relative overflow-hidden h-[450px]">
                  <img src={insight.img} alt={insight.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bain-dark via-bain-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <span className="text-white/70 font-bold tracking-widest uppercase text-xs mb-4">{insight.type}</span>
                    <h3 className="text-2xl font-bold text-white leading-snug group-hover:text-bain-red transition-colors duration-300 mb-6">{insight.title}</h3>
                    <div className="w-12 h-1 bg-bain-red transform origin-left group-hover:w-full transition-all duration-500"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: The ConsultEdge Difference (Minimalist Values) */}
        <section className="py-32 bg-[#1a1a1a] text-white">
          <div className="container mx-auto px-6 lg:px-12 xl:px-24 max-w-[1600px] text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-20">Why ConsultEdge?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-2 border-bain-red flex items-center justify-center mb-8 text-bain-red">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">True Results</h3>
                <p className="text-gray-400 leading-relaxed text-center">We focus on strategic decisions and practical actions tailored to our clients' unique reality.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-2 border-bain-red flex items-center justify-center mb-8 text-bain-red">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">One Global Team</h3>
                <p className="text-gray-400 leading-relaxed text-center">We operate as one firm across the globe, bringing the best experts to every engagement.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-2 border-bain-red flex items-center justify-center mb-8 text-bain-red">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Uncompromising Ethics</h3>
                <p className="text-gray-400 leading-relaxed text-center">We tell it like it is, with radical honesty and a commitment to doing the right thing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Careers & Newsletter CTA */}
        <section className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-[#f4f4f4] p-16 lg:p-24 xl:p-32 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-bain-dark mb-6">Join our team.</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Discover a career that challenges you to be your best and provides the platform to make a profound global impact.
            </p>
            <div>
              <a href="#" className="inline-block bg-bain-dark hover:bg-black text-white font-bold py-4 px-10 transition-colors duration-300 uppercase tracking-widest text-sm">
                Explore Careers
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 bg-bain-red p-16 lg:p-24 xl:p-32 flex flex-col justify-center text-white">
            <h2 className="text-4xl font-bold mb-6">Stay ahead.</h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Subscribe to our newsletter for the latest business insights, trends, and perspectives delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Business Email Address"
                className="flex-grow bg-white/10 border border-white/30 text-white placeholder-white/50 px-6 py-4 focus:outline-none focus:border-white transition-colors"
                required
              />
              <button type="submit" className="bg-white text-bain-red hover:bg-gray-100 font-bold py-4 px-10 transition-colors duration-300 uppercase tracking-widest text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
