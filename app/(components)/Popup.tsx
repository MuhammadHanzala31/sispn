"use client";

import { useState, useRef, useEffect } from "react";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const CONFIG = {
  colors: {
    text:        "#303030",
    primary:     "#B83DC8",
    accent:      "#e040fb",
    black:       "#000000",
    white:       "#ffffff",
    inputBg:     "#f9f5fb",
    inputBorder: "#e8d5f0",
    labelTag:    "#B83DC8",
    sliderTrack: "#e8d5f0",
    overlay:     "rgba(0,0,0,0.65)",
  },
  budget: {
    min:    500,
    max:    50000,
    prefix: "PKR",
  },
  services: [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Branding & Identity",
    "Digital Marketing",
    "SEO Optimization",
    "E-Commerce Solutions",
    "Custom Software",
  ],
  timelines: [
    "ASAP (Rush)",
    "1–2 Weeks",
    "1 Month",
    "2–3 Months",
    "3–6 Months",
    "6+ Months",
    "Flexible / Not Sure",
  ],
  phoneCodes: [
    { code: "+92",  flag: "🇵🇰", label: "PK" },
    { code: "+971", flag: "🇦🇪", label: "AE" },
    { code: "+1",   flag: "🇺🇸", label: "US" },
    { code: "+44",  flag: "🇬🇧", label: "GB" },
    { code: "+91",  flag: "🇮🇳", label: "IN" },
  ],
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const fmt = (n: number) =>
  n >= 1000 ? `${CONFIG.budget.prefix} ${(n / 1000).toFixed(0)}K` : `${CONFIG.budget.prefix} ${n}`;

// ─── COMPONENT ───────────────────────────────────────────────────────────────
interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({ isOpen, onClose }: ContactPopupProps) {
  const [form, setForm] = useState({
    name:        "",
    company:     "",
    phone:       "",
    phoneCode:   "+92",
    email:       "",
    service:     "",
    timeline:    "",
    budget:      15000,
    message:     "",
  });

  const [submitted, setSubmitted]   = useState(false);
  const [phoneOpen, setPhoneOpen]   = useState(false);
  const sliderRef                   = useRef<HTMLInputElement>(null);
  const overlayRef                  = useRef<HTMLDivElement>(null);

  // close on overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  // slider fill style
  const pct = ((form.budget - CONFIG.budget.min) / (CONFIG.budget.max - CONFIG.budget.min)) * 100;

  const set = (k: string, v: string | number) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.service) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setForm({ name:"", company:"", phone:"", phoneCode:"+92", email:"", service:"", timeline:"", budget:15000, message:"" });
    }, 2800);
  };

  if (!isOpen) return null;

  const selectedPhone = CONFIG.phoneCodes.find((p) => p.code === form.phoneCode)!;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        position: "fixed", inset: 0,
        background: CONFIG.colors.overlay,
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 9999,
        padding: "16px",
        animation: "fadeIn .25s ease",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { opacity:0; transform:translateY(28px) scale(.97) } to { opacity:1; transform:translateY(0) scale(1) } }
        @keyframes popIn   { from { opacity:0; transform:scale(.6) } to { opacity:1; transform:scale(1) } }
        @keyframes checkDraw { from { stroke-dashoffset:100 } to { stroke-dashoffset:0 } }

        .cp-input:focus { outline:none; border-color:${CONFIG.colors.primary} !important; box-shadow:0 0 0 3px ${CONFIG.colors.primary}22; }
        .cp-input::placeholder { color:#bbb; }
        .cp-select:focus { outline:none; border-color:${CONFIG.colors.primary} !important; box-shadow:0 0 0 3px ${CONFIG.colors.primary}22; }

        input[type=range].budget-slider {
          -webkit-appearance:none; appearance:none;
          width:100%; height:6px; border-radius:99px; border:none;
          background: linear-gradient(to right, ${CONFIG.colors.primary} 0%, ${CONFIG.colors.accent} ${pct}%, ${CONFIG.colors.sliderTrack} ${pct}%, ${CONFIG.colors.sliderTrack} 100%);
          cursor:pointer; outline:none;
        }
        input[type=range].budget-slider::-webkit-slider-thumb {
          -webkit-appearance:none; appearance:none;
          width:22px; height:22px; border-radius:50%;
          background:${CONFIG.colors.white};
          border:3px solid ${CONFIG.colors.primary};
          box-shadow:0 2px 12px ${CONFIG.colors.primary}55;
          cursor:pointer; transition:transform .15s;
        }
        input[type=range].budget-slider::-webkit-slider-thumb:hover { transform:scale(1.2); }
        input[type=range].budget-slider::-moz-range-thumb {
          width:20px; height:20px; border-radius:50%;
          background:${CONFIG.colors.white}; border:3px solid ${CONFIG.colors.primary};
          box-shadow:0 2px 12px ${CONFIG.colors.primary}55; cursor:pointer;
        }

        .cp-btn:hover { transform:translateY(-2px); box-shadow:0 8px 28px ${CONFIG.colors.primary}55 !important; }
        .cp-btn:active { transform:translateY(0); }
        .phone-opt:hover { background:${CONFIG.colors.inputBg}; }
        .cp-close:hover { background:${CONFIG.colors.text}; color:${CONFIG.colors.white}; }
      `}</style>

      {/* CARD */}
      <div
      className="bg-black"
      style={{
        // background: CONFIG.colors.white,
        borderRadius: "24px",
        width: "100%", maxWidth: "780px",
        maxHeight: "96vh", overflowY: "auto",
        padding: "44px 44px 40px",
        position: "relative",
        animation: "slideUp .35s cubic-bezier(.22,.68,0,1.2)",
        boxShadow: "10px 32px 80px 10px rgba(184,61,200,.18), 30px 8px 24px rgba(0,0,0,.12)",
        fontFamily: "'DM Sans', sans-serif",
        color: CONFIG.colors.text,
      }}>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="cp-close"
          style={{
            position:"absolute", top:18, right:18,
            width:36, height:36, borderRadius:"50%",
            border:`2px solid ${CONFIG.colors.white}`,
            background:"transparent",
            display:"flex", alignItems:"center", justifyContent:"center",
            cursor:"pointer", fontSize:18, fontWeight:700,
            color: CONFIG.colors.white,
            transition:"all .2s",
          }}
        >×</button>

        {/* SUCCESS STATE */}
        {submitted ? (
          <div style={{ textAlign:"center", padding:"40px 0", animation:"popIn .4s ease" }}>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" style={{margin:"0 auto 20px"}}>
              <circle cx="36" cy="36" r="34" fill={CONFIG.colors.primary} opacity=".12"/>
              <circle cx="36" cy="36" r="34" stroke={CONFIG.colors.primary} strokeWidth="2.5"/>
              <polyline points="22,37 32,47 51,28" stroke={CONFIG.colors.primary} strokeWidth="3.5"
                strokeLinecap="round" strokeLinejoin="round"
                strokeDasharray="100" style={{animation:"checkDraw .6s .2s ease forwards"}}/>
            </svg>
            <p style={{fontFamily:"'Syne',sans-serif", fontSize:26, fontWeight:700, margin:"0 0 8px"}}>You're all set! 🎉</p>
            <p style={{color:"#888", fontSize:15}}>We'll reach out within 24 hours.</p>
          </div>
        ) : (
          <>
            {/* HEADER */}
            <div style={{marginBottom:30}}>
              <div
               className="shadow-2xl shadow-[#e040fb]"
              style={{
                display:"inline-flex", alignItems:"center", gap:7,
                background:`${CONFIG.colors.primary}12`,
                borderRadius:99, padding:"5px 14px",
                marginBottom:14,
              }}>
                <span style={{
                  width:8, height:8, borderRadius:"50%",
                  background:CONFIG.colors.primary, display:"inline-block",
                  boxShadow:`0 0 0 3px ${CONFIG.colors.primary}33`,
                }}/>
                <span style={{color:CONFIG.colors.primary, fontSize:12, fontWeight:600, letterSpacing:".06em", textTransform:"uppercase"}}>
                  Let's Get Started
                </span>
              </div>
              <h2 style={{
                fontFamily:"'Syne',sans-serif",
                fontSize:"clamp(26px,4vw,36px)",
                fontWeight:800, margin:0, lineHeight:1.15,
                color: CONFIG.colors.white,
              }}>
                This Could Be the Start<br/>
                <span style={{
                  background:`linear-gradient(120deg, ${CONFIG.colors.primary}, ${CONFIG.colors.accent})`,
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                }}>Something Incredible!</span>
              </h2>
            </div>

            {/* GRID */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px 20px" }}>

              {/* Name */}
              <input className="cp-input" placeholder="Name*" value={form.name}
                onChange={e=>set("name",e.target.value)}
                style={inputStyle} />

              {/* Company */}
              <input className="cp-input" placeholder="Name of your company / organisation*" value={form.company}
                onChange={e=>set("company",e.target.value)}
                style={inputStyle} />

              {/* Phone */}
              <div style={{display:"flex", gap:8, position:"relative"}}>
                <div style={{position:"relative"}}>
                  <button
                    type="button"
                    onClick={()=>setPhoneOpen(p=>!p)}
                    style={{
                      ...inputStyle, width:90, cursor:"pointer",
                      display:"flex", alignItems:"center", gap:5, justifyContent:"center",
                      background:CONFIG.colors.inputBg,
                    }}
                  >
                    <span>{selectedPhone.flag}</span>
                    <span style={{fontSize:12, fontWeight:600}}>{selectedPhone.code}</span>
                    <span style={{fontSize:10, color:"#aaa"}}>▼</span>
                  </button>
                  {phoneOpen && (
                    <div style={{
                      position:"absolute", top:"calc(100% + 6px)", left:0, zIndex:10,
                      background:CONFIG.colors.white,
                      border:`1.5px solid ${CONFIG.colors.inputBorder}`,
                      borderRadius:12, overflow:"hidden",
                      boxShadow:"0 8px 24px rgba(0,0,0,.1)",
                      minWidth:130,
                    }}>
                      {CONFIG.phoneCodes.map(p=>(
                        <div key={p.code} className="phone-opt"
                          onClick={()=>{set("phoneCode",p.code); setPhoneOpen(false);}}
                          style={{padding:"10px 14px", cursor:"pointer", display:"flex", alignItems:"center", gap:10, fontSize:14, transition:"background .15s"}}
                        >
                          <span>{p.flag}</span>
                          <span style={{fontWeight:600}}>{p.code}</span>
                          <span style={{color:"#aaa", fontSize:12}}>{p.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input className="cp-input" placeholder="Phone No*" value={form.phone}
                  onChange={e=>set("phone",e.target.value)}
                  style={{...inputStyle, flex:1}} />
              </div>

              {/* Email */}
              <input className="cp-input" placeholder="Email*" value={form.email} type="email"
                onChange={e=>set("email",e.target.value)}
                style={inputStyle} />

              {/* Service */}
              <select className="cp-select cp-input" value={form.service}
                onChange={e=>set("service",e.target.value)}
                style={{...inputStyle, color: form.service ? CONFIG.colors.text : "#bbb", appearance:"none",
                  backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23B83DC8' stroke-width='1.8' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center",
                }}>
                <option value="" disabled hidden>Service you are interested in*</option>
                {CONFIG.services.map(s=><option key={s} value={s}>{s}</option>)}
              </select>

              {/* Timeline */}
              <select className="cp-select cp-input" value={form.timeline}
                onChange={e=>set("timeline",e.target.value)}
                style={{...inputStyle, color: form.timeline ? CONFIG.colors.text : "#bbb", appearance:"none",
                  backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23B83DC8' stroke-width='1.8' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center",
                }}>
                <option value="" disabled hidden>Project Timeline*</option>
                {CONFIG.timelines.map(t=><option key={t} value={t}>{t}</option>)}
              </select>

              {/* Budget – full width */}
              <div style={{gridColumn:"1/-1"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10}}>
                  <span style={{fontSize:13, color:"#999", fontWeight:500}}>Budget Range</span>
                  <span style={{
                    fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:17,
                    background:`linear-gradient(120deg,${CONFIG.colors.primary},${CONFIG.colors.accent})`,
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                  }}>{fmt(form.budget)}</span>
                </div>
                <div style={{display:"flex", alignItems:"center", gap:12}}>
                  <span style={{fontSize:12, color:"#aaa", whiteSpace:"nowrap"}}>{fmt(CONFIG.budget.min)}</span>
                  <input
                    ref={sliderRef}
                    type="range"
                    className="budget-slider"
                    min={CONFIG.budget.min}
                    max={CONFIG.budget.max}
                    step={500}
                    value={form.budget}
                    onChange={e=>set("budget",+e.target.value)}
                  />
                  <span style={{fontSize:12, color:"#aaa", whiteSpace:"nowrap"}}>{fmt(CONFIG.budget.max)}+</span>
                </div>
                <p style={{margin:"8px 0 0", fontSize:12, color:"#bbb"}}>
                  A transparent budget helps us set the right expectations. Ballparks are fine.
                </p>
              </div>

              {/* Message – full width */}
              <textarea className="cp-input" placeholder="Tell us about your project"
                value={form.message} onChange={e=>set("message",e.target.value)}
                rows={4}
                style={{...inputStyle, gridColumn:"1/-1", resize:"vertical", lineHeight:1.6}} />
            </div>

            {/* SUBMIT */}
            <button
              className="cp-btn"
              onClick={handleSubmit}
              style={{
                marginTop:24,
                background:`linear-gradient(120deg,${CONFIG.colors.primary},${CONFIG.colors.accent})`,
                color:CONFIG.colors.white,
                border:"none", borderRadius:99,
                padding:"14px 44px",
                fontSize:15, fontWeight:700,
                fontFamily:"'Syne',sans-serif",
                cursor:"pointer",
                transition:"all .25s",
                boxShadow:`0 4px 18px ${CONFIG.colors.primary}44`,
                letterSpacing:".02em",
              }}
            >
              Submit →
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── SHARED INPUT STYLE ───────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1.5px solid #e8d5f0",
  background: "#f9f5fb",
  fontSize: "14px",
  color: "#303030",
  transition: "border-color .2s, box-shadow .2s",
  boxSizing: "border-box",
  fontFamily: "'DM Sans', sans-serif",
};