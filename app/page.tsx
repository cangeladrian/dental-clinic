'use client'

import { motion } from 'framer-motion'
import './globals.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  { title: 'Preventive check-ups',      desc: 'Help detect dental issues early and prevent more serious oral health problems.'          },
  { title: 'Dental hygiene',            desc: 'Removes tartar and plaque to reduce the risk of tooth decay and gum disease.'            },
  { title: 'Teeth whitening',           desc: 'Brightens the shade of your teeth safely and effectively.'                              },
  { title: 'Endodontic treatment',      desc: 'Root canal therapy saves teeth affected by infection or inflammation.'                   },
  { title: 'Dental fillings & crowns',  desc: 'Restore the function and appearance of damaged or weakened teeth.'                      },
  { title: 'Dental implants',           desc: 'A permanent solution for replacing missing teeth.'                                      },
]

const reviews = [
  { text: 'Booking my appointment was super easy and fast. The clinic is modern, very clean, and I felt like I was in good hands the entire time.', author: 'Daniel C.' },
  { text: "I've always been afraid of the dentist, but this amazing clinic made me feel completely at ease. The staff was kind, professional, and the treatment was pain-free!", author: 'Madison R.' },
  { text: 'The dentists explained everything clearly and took the time to answer all my questions. Highly recommended for anyone looking for quality dental care.', author: 'Lily B.' },
]

const prices = [
  { name: 'Initial examination',            price: '25 €'  },
  { name: 'Consultation',                   price: '12 €'  },
  { name: 'White filling',                  price: '50 €'  },
  { name: 'Multi-surface white filling',    price: '80 €'  },
  { name: 'Replacement of old filling',     price: '35 €'  },
  { name: 'Tartar / calculus removal',      price: '10 €'  },
  { name: 'X-ray image',                    price: '8 €'   },
  { name: 'Root canal treatment',           price: '120 €' },
  { name: 'Teeth whitening (in-office)',    price: '250 €' },
  { name: 'Teeth whitening (home kit)',     price: '130 €' },
  { name: 'Comprehensive dental hygiene',   price: '60 €'  },
]

const navLinks = ['Home', 'Services', 'Price List', 'Blog', 'About Us']

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0  },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main className="bg-white text-[#1a1a2e] font-[Poppins,sans-serif] overflow-x-hidden">

      {/* ── NAV ── */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                   px-6 md:px-12 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
      >
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(' ','-')}`}
                 className="text-[11px] tracking-[0.12em] uppercase text-gray-500
                            hover:text-[#0077b6] transition-colors duration-200 no-underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a href="#book"
           className="bg-[#0077b6] text-white text-[11px] tracking-[0.12em] uppercase
                      px-5 py-2.5 rounded-full no-underline hover:bg-[#005f92] transition-colors duration-200">
          Sign Up
        </a>
      </motion.nav>








      

      {/* ── HERO ── */}
      <section id="home" className="h-[140vw] md:h-[40vw]  overflow-hidden">
  {/* Fotka na celú šírku */}
  <motion.div
    initial={{ opacity: 0, scale: 1.06 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="absolute inset-0"
  >
    <img
      src="/dd.png"
      alt="Dental Clinic"
      className="w-full md:h-[40vw] h-[70vw] object-cover object-center"
    />
    {/* Gradient overlay zľava */}
   
  </motion.div>

  {/* Text cez fotku — ľavá strana */}
  <div className="relative z-10 flex flex-col mb-20 justify-center  h-[140vw] md:h-screen p-8 md:px-24 max-w-2xl">
    
 

    <div className="overflow-hidden mb-2">
      <motion.h1
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="font-medium leading-none tracking-tighter text-[#1a1a2e]"
        style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
      >
        BOOK
      </motion.h1>
    </div>

    <div className=" mb-8">
      <motion.h1
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
        className="font-medium leading-none tracking-tighter  text-[#1a1a2e]"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 5rem)' }}
      >
        YOUR <br /> APPOINTMENT
      </motion.h1>
    </div>

    {/* Krivka — dekoratívna čiara */}
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="origin-left mb-20 md:mb-8"
    >
      <svg viewBox="0 0 300 40" className="w-48 h-8" fill="none">
        <path d="M0 15 Q75 2 150 10 Q225 18 300 5"
              stroke="#0077b6" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.65 }}
      className="text-[#0077b6] text-[11px] tracking-[0.25em] text-center md:text-left uppercase font-semibold mb-10"
    >
      Healthy Smile Starts With Us
    </motion.p>
     <div className="flex flex-col items-center md:items-start">
    <motion.a
      href="#book"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className=" items-center justify-center bg-[#0077b6] text-white no-underline
                 px-10 py-4 rounded-full text-[11px] tracking-[0.15em] uppercase font-bold w-fit
                 hover:bg-[#005f92] transition-colors duration-200"
    >
      Explore
    </motion.a>
</div>

  </div>
</section>







      {/* ── BOOKING FORM ── */}
      <section id="book" className="bg-white px-6 md:px-16 md:py-20 py-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-[11px] tracking-[0.2em] text-center uppercase text-[#0077b6] mb-3">Online booking</p>
          <h2 className="font-bold text-3xl text-center uppercase md:text-4xl tracking-tight mb-10">Reserve your visit</h2>

          <motion.section
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="px-6 md:px-26  flex flex-col sm:flex-row  justify-center items-center gap-6"
>
  {[
    {
      icon: (
        <svg viewBox="0 0 24 24"  className="w-8 h-8">
          <path d="M12 2C9 2 6.5 4 6 7c-.3 1.5 0 3 .8 4.2L9 15h6l2.2-3.8C18 10 18.3 8.5 18 7c-.5-3-2.5-5-6-5zm-2 14v1a2 2 0 004 0v-1H10z"/>
        </svg>
      ),
      top:    'MODERN AND PAINLESS',
      bottom: 'TREATMENT',
      blob:   false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"  stroke="black" fill='none' strokeWidth="1.5" className="w-8 h-8">
          <circle cx="12" cy="12" r="9"/>
          <path strokeLinecap="round" d="M12 7v5l3 3"/>
        </svg>
      ),
      top:    'FAST',
      bottom: 'ONLINE ORDER',
      blob:   false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" className="w-8 h-8">
          <circle cx="10" cy="7" r="3"/>
          <path strokeLinecap="round" d="M4 20c0-3.3 2.7-6 6-6m5-1l2 2 3-3"/>
        </svg>
      ),
      top:    'WITH US YOU CAN EXPECT',
      bottom: 'TRUST AND COMFORT',
      blob:   true,
    },
  ].map((card) => (
    <motion.div
      key={card.bottom}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="relative w-52 h-56 rounded-2xl flex flex-col items-center justify-center text-center
                 px-6 overflow-hidden 
                text-white
                 hover:-translate-y-1 transition-all duration-300"
    >
 

      {/* Ikona */}
      <div className="text-[#1a8a7a] mb-4 relative z-10">
        {card.icon}
      </div>

      {/* Text */}
      <p className="text-[10px] tracking-[0.15em] text-black leading-snug mb-1 relative z-10">
        {card.top}
      </p>
      <p className="text-[13px] font-bold tracking-[0.1em] text-black relative z-10">
        {card.bottom}
      </p>
    </motion.div>
  ))}
</motion.section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-full gap-6">
            {[
              { label: 'Name',           type: 'text'     },
              { label: 'E-mail address', type: 'email'    },
              { label: 'Phone number',   type: 'tel'      },
              { label: 'Preferred date', type: 'date'     },
            ].map(field => (
              <div key={field.label} className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[0.12em]  uppercase text-gray-500">
                  {field.label}
                </label>
                <input type={field.type}
                       className="border border-gray-300 rounded-full shadow-sm px-4 py-3 text-sm bg-white
                                  focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[0.12em] uppercase text-gray-500">
                Choose your service
              </label>
              <select className="border border-gray-300 rounded-full shadow-sm px-4 py-3 text-sm bg-white
                                 focus:outline-none focus:border-blue-500 transition-colors">
                <option className=' rounded-full'>Preventive check-up</option>
                <option className=' rounded-full'>Treatment</option>
                <option className=' rounded-full'>Initial examination</option>
                <option className=' rounded-full'>X-ray</option>
                <option className=' rounded-full'>Dental hygiene</option>
                <option className=' rounded-full'>Teeth whitening</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2 lg:col-span-1">
              <label className="text-[11px] tracking-[0.12em] uppercase text-gray-500">
                Your message
              </label>
              <textarea rows={3}
                        className="border border-gray-300 rounded-xl shadow-sm px-4 py-3 text-sm bg-white resize-none
                                   focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
          </div>
           <div className='flex justify-center py-10'>
          <button className="mt-8 bg-[#0077b6] text-center text-white px-10 py-4 text-[11px]
                             tracking-[0.15em] uppercase rounded-full hover:bg-[#005f92] transition-colors">
            Book Now →
          </button>
          </div>
        </motion.div>
      </section>










      {/* ── EQUIPMENT ── */}
      <section className="grid md:my-50 my-10 grid-cols-1 md:grid-cols-2 min-h-[680px] ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[320px] overflow-hidden"
        >
          <img src="/recepcia.png" alt="Equipment"
               className="absolute inset-0 w-full h-full object-cover" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex  flex-col justify-center px-8 md:px-16 py-16 md:mb-30 md:mt-10 bg-black"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-white mb-4">Technology</p>
          <h2 className="font-light text-white text-3xl md:text-5xl tracking-tight leading-tight mb-6">
            Most Modern<br />Equipment
          </h2>
          <p className="text-white leading-relaxed text-16px mb-8">
            Forget about old procedures – we will treat you with 21st century technology.
            Digital X-ray, intraoral camera, painless anesthesia <br /> and comfortable chairs are
            a matter of course with us. Modern dental care does not have to be painful.
          </p>
          <a href="#services"
             className="inline-flex items-center gap-2 bg-[#0077b6] text-white no-underline
                        px-7 py-3.5 text-[11px] tracking-[0.15em] uppercase rounded-full w-fit
                        hover:bg-[#005f92] transition-colors">
            Read More →
          </a>
        </motion.div>
      </section>





      {/* ── SERVICES ── */}
      <section id="services" className="px-6 md:px-16 text-center md:py-20 py-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#0077b6] mb-3">What we do</p>
          <h2 className="font-bold text-3xl md:text-4xl tracking-tight">Our Services</h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="bg-white px-8 py-10 group hover:bg-[#0077b6] transition-colors duration-300"
            >
              <div className="text-2xl font-bold text-[#0077b6] group-hover:text-white mb-4 transition-colors">
                0{i + 1}
              </div>
              <h3 className="font-bold text-base tracking-tight mb-3
                             group-hover:text-white transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-blue-100 transition-colors">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── TEAM PHOTOS ── */}
      <section className="grid grid-cols-1 sm:grid-cols-3 border-t md:mt-50 border-gray-100">
        {['/pristroje.jpg', '/zuby.jpg', '/ambulancia.png'].map((src, i) => (
          <motion.div
            key={src}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="relative overflow-hidden aspect-square group"
          >
            <img src={src} alt="Team"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#0077b6]/0 " />
          </motion.div>
        ))}
      </section>

      {/* ── CLINIC TEXT ── */}
      <section className="px-6 md:px-24 py-50 text-center bg-black">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#0077b6] mb-4">Our Space</p>
          <h2 className="font-bold text-3xl md:text-5xl text-[#0077b6] tracking-tight mb-8">Architectural Excellence</h2>
          <p className="text-white leading-relaxed text-16px max-w-2xl mx-auto">
            Our new dental clinic is not just a healthcare facility — it is a purpose-built architectural
            statement designed to elevate the patient experience. Every detail reflects our commitment
            to clinical excellence and patient well-being. The building's design champions functionality,
            natural light, and flow.
          </p>
        </motion.div>
      </section>

     





      <section className="grid grid-cols-1 ">
     
          <motion.div
          
     
            className="relative overflow-hidden  group"
          >
            <img src="/clinic.png" alt="Clinic"
                 className="w-full h-full object-cover transition-transform duration-700 " />
          </motion.div>
     
      </section>





      {/* ── REVIEWS ── */}
      <section className="px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center py-20 border-t border-gray-100">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#0077b6] mb-3">Testimonials</p>
          <h2 className="font-bold text-3xl md:text-4xl tracking-tight">Words from our patients</h2>
          <br />
           <span className="font-bold text-5xl md:text-6xl py-30 text-[#0077b6]">1500+</span>
          <p className="text-sm text-gray-500 tracking-wider uppercase mt-2">5-star reviews</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col  gap-8 mb-12"
        >
          {reviews.map(r => (
            <motion.div
              key={r.author}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="border border-gray-100 px-8 py-10 hover:border-[#0077b6] transition-colors duration-300"
            >
              <p className="text-4xl text-[#0077b6] font-serif mb-4">"</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">{r.text}</p>
              <p className="text-[11px] tracking-[0.12em] uppercase font-bold">— {r.author}</p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#0077b6] text-sm">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>


         
      </section>









      {/* ── TEAM TEXT ── */}
      <section className="px-6 md:px-24 py-20 text-center border-t border-gray-100 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#0077b6] mb-4">The Team</p>
          <h2 className="font-bold text-3xl md:text-4xl tracking-tight mb-8">Who's behind this?</h2>
          <p className="text-gray-500 leading-relaxed text-sm max-w-xl mx-auto">
            An experienced dentist specializing in general dentistry. In his practice, he emphasizes
            precise work, an individual approach, and painless treatment. In the pleasant and calm
            environment of the clinic, he strives to create trust and comfort for patients of all ages.
          </p>
        </motion.div>
      </section>






{/* ── FOOTER ── */}
<footer className="bg-black border-t border-white/10">
  <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
    
    <div>
      <img src="/logo.png" alt="Logo" className="h-10 mb-6 opacity-80" />
      <p className="text-xs text-gray-400 leading-relaxed">
        Modern dental care in the heart of Partizánske.
      </p>
    </div>

    <div>
      <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#0077b6] mb-5">Navigation</h3>
      <div className="flex flex-col gap-3">
        {navLinks.map(link => (
          <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`}
             className="text-xs text-gray-400 no-underline hover:text-white transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#0077b6] mb-5">Contact</h3>
      <div className="flex flex-col gap-3 text-xs text-gray-400">
        <p>0902 325 621</p>
        <p>dentalclinic@gmail.com</p>
        <p>Partizánske 95801 – 3251/82</p>
      </div>
    </div>

    <div>
      <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#0077b6] mb-5">Opening Hours</h3>
      <div className="flex flex-col gap-2 text-xs text-gray-400">
        {[
          ['Monday',    '7AM – 3PM'],
          ['Tuesday',   '7AM – 3PM'],
          ['Wednesday', '7AM – 5PM'],
          ['Thursday',  '7AM – 3PM'],
          ['Friday',    '8AM – 2PM'],
        ].map(([day, hours]) => (
          <div key={day} className="flex justify-between gap-4">
            <span>{day}</span>
            <span className="text-white">{hours}</span>
          </div>
        ))}
      </div>
    </div>

  </div>
</footer>

    </main>
  )
}