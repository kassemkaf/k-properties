import { useState } from "react";
import { supabase } from './supabase';

const T={cream:"#E8E0D0",cream2:"#DDD4C0",ivory:"#F0EAD8",brown:"#1A0E08",brown2:"#3D2418",brown3:"#6B4535",beige:"#B8955F",gold:"#8A6A38",goldL:"rgba(138,106,56,.15)",line:"rgba(26,14,8,.15)",lineL:"rgba(26,14,8,.1)",green:"#4A7A42",greenL:"rgba(74,122,66,.1)",red:"#8B3A3A",redL:"rgba(139,58,58,.08)",blue:"#3A5A8B",blueL:"rgba(58,90,139,.08)",orange:"#8B6A3A"};

const css=`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html,body{overflow-x:hidden;max-width:100vw;}
body{background:${T.cream};color:${T.brown};font-family:'Montserrat',sans-serif;font-weight:400;-webkit-font-smoothing:antialiased;}
::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-thumb{background:${T.gold};}
input,select,textarea{width:100%;background:transparent;border:none;border-bottom:1px solid ${T.brown};color:${T.brown};font-family:'Montserrat',sans-serif;font-size:.72rem;padding:.6rem 0;outline:none;-webkit-appearance:none;border-radius:0;}
input:focus,select:focus,textarea:focus{border-bottom-color:${T.gold};}
input::placeholder,textarea::placeholder{color:rgba(26,14,8,.35);}
select option{background:${T.ivory};color:${T.brown};}
label{font-size:.5rem;letter-spacing:.22em;text-transform:uppercase;color:${T.brown3};display:block;margin-bottom:.5rem;}
table{width:100%;border-collapse:collapse;}
th{font-size:.46rem;letter-spacing:.18em;text-transform:uppercase;color:${T.brown3};padding:.8rem 1.2rem;text-align:left;border-bottom:1px solid ${T.line};}
td{font-size:.62rem;padding:.85rem 1.2rem;border-bottom:1px solid ${T.lineL};color:${T.brown2};vertical-align:middle;}
tr:last-child td{border:none;}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
`;

const useW=()=>{const[w,setW]=useState(typeof window!=="undefined"?window.innerWidth:800);if(typeof window!=="undefined")window.onresize=()=>setW(window.innerWidth);return w;};

const I={
  Home:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>,
  Users:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>,
  Doc:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>,
  Chart:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>,
  Bell:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/></svg>,
  Gear:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  Building:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/></svg>,
  Star:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>,
  Shield:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>,
  Calendar:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>,
  Message:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/></svg>,
  Money:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75"/></svg>,
  Person:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>,
  Plus:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>,
  Warning:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>,
  Check:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>,
  Key:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/></svg>,
  Handshake:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>,
  Download:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>,
  Map:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/></svg>,
  Academic:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>,
  Book:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>,
  Inbox:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"/></svg>,
  Trend:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>,
  Globe:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/></svg>,
  Scale:()=><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z"/></svg>,
};

const Tag=({c="beige",children}:any)=>{const m:any={gold:{color:T.gold,border:"rgba(138,106,56,.35)",bg:T.goldL},green:{color:T.green,border:"rgba(74,122,66,.3)",bg:T.greenL},red:{color:T.red,border:"rgba(139,58,58,.3)",bg:T.redL},blue:{color:T.blue,border:"rgba(58,90,139,.3)",bg:T.blueL},beige:{color:T.brown2,border:"rgba(184,149,95,.4)",bg:"rgba(184,149,95,.1)"},silver:{color:T.brown3,border:T.lineL,bg:"transparent"},orange:{color:T.orange,border:"rgba(139,106,58,.35)",bg:"rgba(139,106,58,.08)"}};const s=m[c]||m.beige;return <span style={{display:"inline-block",fontSize:".46rem",letterSpacing:".18em",textTransform:"uppercase",padding:".28rem .75rem",border:`1px solid ${s.border}`,color:s.color,background:s.bg}}>{children}</span>;};

const Btn=({v="primary",sz="md",full,onClick,children,style={}}:any)=>{const[h,setH]=useState(false);const sz2:any={sm:{padding:".5rem 1.1rem",fontSize:".5rem"},md:{padding:".8rem 1.8rem",fontSize:".54rem"},lg:{padding:"1rem 2.5rem",fontSize:".56rem"}};const vs:any={primary:{bg:T.brown,color:T.cream,border:T.brown},outline:{bg:"transparent",color:T.brown,border:T.brown},gold:{bg:T.gold,color:T.ivory,border:T.gold},ghost:{bg:"transparent",color:T.brown3,border:"transparent"}};const vt=vs[v]||vs.primary;const hv:any=h?(v==="primary"?{background:T.brown2}:v==="outline"?{background:T.brown,color:T.cream}:{}):{};return <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:".5rem",fontFamily:"'Montserrat',sans-serif",fontWeight:500,letterSpacing:".18em",textTransform:"uppercase",background:vt.bg,color:vt.color,border:`1px solid ${vt.border}`,cursor:"pointer",transition:"all .3s",borderRadius:0,whiteSpace:"nowrap",...(sz2[sz]||sz2.md),...(full?{width:"100%"}:{}),...hv,...style}}>{children}</button>;};

const Card=({title,actions,children,style={}}:any)=>(<div style={{background:T.ivory,marginBottom:"1rem",...style}}>{title&&<div style={{padding:"1rem 1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`1px solid ${T.lineL}`,flexWrap:"wrap",gap:".5rem"}}><span style={{fontSize:".56rem",letterSpacing:".2em",textTransform:"uppercase",color:T.brown,fontWeight:500}}>{title}</span>{actions&&<div style={{display:"flex",gap:".5rem",flexWrap:"wrap"}}>{actions}</div>}</div>}{children}</div>);

const Empty=({icon:Icon,text}:any)=>(<div style={{padding:"3rem 1.5rem",textAlign:"center",color:T.brown3}}><div style={{display:"flex",justifyContent:"center",marginBottom:"1rem",opacity:.3}}><Icon/></div><div style={{fontSize:".62rem"}}>{text}</div></div>);

const Logo=()=>(<div><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1rem",letterSpacing:".2em",color:T.brown,whiteSpace:"nowrap",fontWeight:400}}>K PROPERTIES</div><div style={{display:"flex",alignItems:"center",gap:".5rem",marginTop:".25rem"}}><div style={{flex:1,height:"0.5px",background:T.gold}}/><div style={{fontSize:".3rem",letterSpacing:".3em",textTransform:"uppercase",color:T.gold,whiteSpace:"nowrap"}}>AFRIGROUPE · ABIDJAN</div><div style={{flex:1,height:"0.5px",background:T.gold}}/></div></div>);

const Divider=()=>(<div style={{display:"flex",alignItems:"center",gap:"1.5rem",margin:"1.5rem 0"}}><div style={{flex:1,height:"0.5px",background:T.line}}/><span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:".9rem",color:T.gold}}>✦</span><div style={{flex:1,height:"0.5px",background:T.line}}/></div>);

// ── LANDING ──
function Landing({goto}:any){
  const w=useW(),isMobile=w<768;
  return(<div style={{background:T.cream}}>
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,background:`rgba(232,224,208,.96)`,backdropFilter:"blur(20px)",borderBottom:`1px solid ${T.lineL}`,padding:isMobile?"1.1rem 1.5rem":"1.3rem 4rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <Logo/>
      <div style={{display:"flex",gap:".6rem"}}><Btn v="outline" sz="sm" onClick={()=>goto("auth")}>Connexion</Btn><Btn sz="sm" onClick={()=>goto("auth")}>Accès Privé</Btn></div>
    </nav>
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:isMobile?"7rem 1.5rem 5rem":"0 4rem",position:"relative",overflow:"hidden",background:T.ivory}}>
      {!isMobile&&<div style={{position:"absolute",right:"-5%",top:"50%",transform:"translateY(-50%)",fontFamily:"'Cormorant Garamond',serif",fontSize:"38vw",fontWeight:200,color:"transparent",WebkitTextStroke:`1px rgba(26,14,8,.04)`,lineHeight:1,pointerEvents:"none",userSelect:"none"}}>K</div>}
      <div style={{position:"relative",zIndex:2,maxWidth:600,animation:"fadeUp 1s ease .1s both"}}>
        <div style={{fontSize:".48rem",letterSpacing:".4em",textTransform:"uppercase",color:T.gold,marginBottom:"1.2rem",display:"flex",alignItems:"center",gap:"1rem"}}><span style={{width:22,height:"0.5px",background:T.gold,display:"inline-block"}}/>Abidjan · Côte d'Ivoire · AFRIGROUPE</div>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:isMobile?"clamp(3rem,14vw,4.5rem)":"clamp(3.5rem,7vw,5.5rem)",fontWeight:300,lineHeight:1,color:T.brown,marginBottom:".8rem"}}>Built for<br/>the Few.</h1>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:isMobile?"1.1rem":"1.5rem",fontWeight:300,fontStyle:"italic",color:T.brown2,marginBottom:"2rem",lineHeight:1.4}}>Own the exception. Where prestige meets purpose.</p>
        <div style={{width:40,height:"0.5px",background:T.gold,marginBottom:"2rem"}}/>
        <p style={{fontSize:".68rem",lineHeight:2.2,color:T.brown2,maxWidth:420,marginBottom:"3rem"}}>We are not a real estate agency, we are a premium experience. We don't sell properties, we build relationships.</p>
        <div style={{display:"flex",flexDirection:isMobile?"column":"row",gap:".8rem"}}>
          <Btn sz="lg" onClick={()=>goto("kyc")} style={isMobile?{width:"100%"}:{}}>Soumettre ma candidature</Btn>
          <Btn v="outline" sz="lg" style={isMobile?{width:"100%"}:{}}>Découvrir les projets</Btn>
        </div>
      </div>
    </div>
    <div style={{background:T.brown,padding:isMobile?"3.5rem 1.5rem":"4rem",textAlign:"center"}}>
      <div style={{maxWidth:560,margin:"0 auto"}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:isMobile?"1.5rem":"2rem",fontWeight:300,fontStyle:"italic",color:T.cream,lineHeight:1.5,marginBottom:"1.5rem"}}>"Là où d'autres proposent des biens,<br/>nous bâtissons des relations."</div>
        <div style={{display:"flex",alignItems:"center",gap:"1.5rem"}}><div style={{flex:1,height:"0.5px",background:"rgba(245,240,232,.2)"}}/><span style={{fontSize:".46rem",letterSpacing:".38em",textTransform:"uppercase",color:T.beige}}>K PROPERTIES · AFRIGROUPE</span><div style={{flex:1,height:"0.5px",background:"rgba(245,240,232,.2)"}}/></div>
      </div>
    </div>
    <div style={{background:T.cream2,padding:isMobile?"4rem 1.5rem":"7rem 4rem"}}>
      <div style={{fontSize:".48rem",letterSpacing:".4em",textTransform:"uppercase",color:T.gold,marginBottom:"1.2rem",display:"flex",alignItems:"center",gap:"1rem"}}><span style={{width:22,height:"0.5px",background:T.gold,display:"inline-block"}}/>Portfolio</div>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2rem,5vw,3.2rem)",fontWeight:300,color:T.brown,marginBottom:"2rem"}}>Projets d'exception</h2>
      <div style={{background:T.ivory,padding:"4rem",textAlign:"center"}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.5rem",fontWeight:300,color:T.brown3,marginBottom:"1rem"}}>Projets à venir</div>
        <p style={{fontSize:".62rem",color:T.brown3,lineHeight:1.9}}>Notre portfolio de projets premium sera disponible prochainement.<br/>Accès réservé aux membres vérifiés.</p>
        <div style={{marginTop:"2rem"}}><Btn onClick={()=>goto("auth")}>Soumettre ma candidature</Btn></div>
      </div>
    </div>
    <div style={{background:T.ivory,padding:isMobile?"4rem 1.5rem":"7rem 4rem"}}>
      <div style={{fontSize:".48rem",letterSpacing:".4em",textTransform:"uppercase",color:T.gold,marginBottom:"1.2rem",display:"flex",alignItems:"center",gap:"1rem"}}><span style={{width:22,height:"0.5px",background:T.gold,display:"inline-block"}}/>Portails d'accès</div>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2rem,5vw,3.2rem)",fontWeight:300,color:T.brown,marginBottom:"3.5rem"}}>Two portals.<br/>One standard.</h2>
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?"1rem":"2px"}}>
        {[[I.Person,"Acquéreurs","Pour les particuliers et investisseurs souhaitant acquérir des biens d'exception. Accès après vérification KYC complète.",["Portfolio projets complet","Suivi dossier en temps réel","Tableau de bord financier","Documents sécurisés","Messagerie conseiller"],"Candidater","outline",false],[I.Handshake,"Partenaires","Accès exclusif sur invitation, réservé aux professionnels qualifiés souhaitant accompagner leurs clients.",["Accès sur invitation uniquement","Espace dédié & outils exclusifs","Catalogue projets privilégié","Support dédié 6j/7","Conditions préférentielles"],"Demander un accès","gold",true]].map(([Icon,title,desc,features,cta,v,dark]:any,i:number)=>(<div key={title} onClick={()=>goto("auth")} style={{background:dark?T.brown:T.cream2,padding:isMobile?"2rem 1.5rem":"3.5rem",cursor:"pointer"}}><div style={{width:46,height:46,border:`1px solid ${dark?"rgba(245,240,232,.15)":T.line}`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"2rem",color:dark?T.beige:T.gold}}><Icon/></div><h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.6rem",fontWeight:400,marginBottom:"1rem",color:dark?T.cream:T.brown}}>{title}</h3><p style={{fontSize:".63rem",lineHeight:2,color:dark?"rgba(245,240,232,.5)":T.brown2,marginBottom:"2rem"}}>{desc}</p><Divider/><ul style={{listStyle:"none",marginBottom:"2.5rem"}}>{features.map((f:string)=>(<li key={f} style={{fontSize:".58rem",color:dark?"rgba(245,240,232,.55)":T.brown2,padding:".6rem 0",borderBottom:`1px solid ${dark?"rgba(245,240,232,.06)":T.lineL}`,display:"flex",alignItems:"center",gap:".7rem"}}><I.Check/>{f}</li>))}</ul><Btn v={v} full>{cta}</Btn></div>))}
      </div>
    </div>
    <div style={{background:T.brown,padding:"3rem 1.5rem"}}><Logo/><div style={{height:"0.5px",background:"rgba(245,240,232,.12)",margin:"1.5rem 0"}}/><div style={{display:"flex",flexDirection:isMobile?"column":"row",justifyContent:"space-between",gap:".5rem"}}><div style={{fontSize:".48rem",color:"rgba(245,240,232,.3)"}}>© 2024 K Properties · AFRIGROUPE · Abidjan</div><div style={{fontSize:".48rem",color:"rgba(245,240,232,.3)"}}>contact@kproperties.ci</div></div></div>
  </div>);
}

// ── AUTH ──
function Auth({goto,loginAs}:any){
  const[tab,setTab]=useState("login");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState("");
  const w=useW(),isMobile=w<768;

  const handleLogin=async()=>{
    setLoading(true);setError("");
    const{error:err}=await supabase.auth.signInWithPassword({email,password});
    if(err){setError(err.message);setLoading(false);return;}
    loginAs("client");
  };

  return(<div style={{minHeight:"100vh",background:T.cream}}>
    <div style={{padding:"1.5rem 2rem",borderBottom:`1px solid ${T.lineL}`,display:"flex",justifyContent:"space-between",alignItems:"center",background:T.ivory}}><Logo/><span onClick={()=>goto("landing")} style={{fontSize:".5rem",letterSpacing:".15em",color:T.brown2,cursor:"pointer"}}>← Retour</span></div>
    <div style={{maxWidth:420,margin:"0 auto",padding:isMobile?"2.5rem 1.5rem":"4rem 2rem"}}>
      <div style={{textAlign:"center",marginBottom:"3rem"}}><h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"2.5rem",fontWeight:300,color:T.brown,marginBottom:".8rem",lineHeight:1.1}}>Accès<br/><em style={{fontStyle:"italic",color:T.brown3}}>exclusif</em></h2><p style={{fontSize:".6rem",color:T.brown3,lineHeight:1.9}}>Plateforme réservée aux membres vérifiés.</p></div>
      <div style={{display:"flex",borderBottom:`1px solid ${T.line}`,marginBottom:"2.5rem"}}>{[["login","Connexion"],["register","Inscription"]].map(([t,l])=>(<div key={t} onClick={()=>setTab(t)} style={{flex:1,textAlign:"center",fontSize:".52rem",letterSpacing:".18em",textTransform:"uppercase",padding:".8rem",cursor:"pointer",color:tab===t?T.brown:T.brown3,borderBottom:tab===t?`1px solid ${T.brown}`:"1px solid transparent",marginBottom:"-1px"}}>{l}</div>))}</div>
      {error&&<div style={{background:T.redL,border:`1px solid rgba(139,58,58,.2)`,padding:".8rem 1rem",marginBottom:"1rem",fontSize:".58rem",color:T.red}}>{error}</div>}
      {tab==="login"?(<div>
        <div style={{marginBottom:"1.8rem"}}><label>Email</label><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="votre@email.com"/></div>
        <div style={{marginBottom:"1.8rem"}}><label>Mot de passe</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••"/></div>
        <Btn full onClick={handleLogin} style={{marginBottom:"2rem",opacity:loading?.7:1}}>{loading?"Connexion...":"Se connecter"}</Btn>
        <Divider/>
        <p style={{fontSize:".5rem",color:T.brown3,textAlign:"center",marginBottom:"1.2rem"}}>Accès démonstration</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:".6rem"}}>
          <Btn v="outline" sz="sm" onClick={()=>loginAs("client")}>Client</Btn>
          <Btn v="outline" sz="sm" onClick={()=>loginAs("partner")}>Partenaire</Btn>
          <Btn v="outline" sz="sm" onClick={()=>loginAs("admin")}>Admin</Btn>
        </div>
      </div>):(<div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1.5rem"}}><div><label>Prénom</label><input placeholder="Jean"/></div><div><label>Nom</label><input placeholder="Kouassi"/></div></div>
        <div style={{marginBottom:"1.5rem"}}><label>Email</label><input type="email" placeholder="j.kouassi@email.com"/></div>
        <div style={{marginBottom:"2rem"}}><label>Téléphone</label><input placeholder="+225 07 00 00 00 00"/></div>
        <Btn full onClick={()=>goto("kyc")}>Soumettre ma candidature →</Btn>
      </div>)}
    </div>
  </div>);
}

// ── KYC ──
function KYC({goto,loginAs}:any){
  const[step,setStep]=useState(1);
  const[done,setDone]=useState(false);
  const w=useW(),isMobile=w<768;
  const steps=["Identité","Profil","Fonds","Documents","Signature"];
  const FG=({label,children}:any)=><div style={{marginBottom:"1.5rem"}}><label>{label}</label>{children}</div>;
  const Sel=({opts}:any)=><select style={{borderBottom:`1px solid ${T.brown}`}}><option>Sélectionner</option>{opts.map((o:string)=><option key={o}>{o}</option>)}</select>;
  const Up=({label,desc}:any)=><FG label={label}><div style={{border:`1px solid ${T.line}`,padding:"2rem",textAlign:"center",cursor:"pointer"}}><I.Download/><div style={{fontSize:".58rem",color:T.brown2,marginTop:".5rem"}}>Glissez ou <span style={{color:T.gold}}>parcourez</span></div>{desc&&<div style={{fontSize:".52rem",color:T.brown3,marginTop:".3rem"}}>{desc}</div>}</div></FG>;
  const views:any={
    1:<div><div style={{background:T.blueL,border:`1px solid rgba(58,90,139,.25)`,padding:".9rem 1.2rem",marginBottom:"1.5rem",fontSize:".6rem",color:T.brown2}}>Ces informations garantissent la sécurité de tous les membres. Chiffrées AES-256.</div><div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:"1.5rem",marginBottom:"1.5rem"}}><FG label="Prénom *"><input placeholder="Jean"/></FG><FG label="Nom *"><input placeholder="Kouassi"/></FG></div><FG label="Nationalité *"><Sel opts={["Ivoirienne","Française","Sénégalaise","Ghanéenne","Autre"]}/></FG><FG label="Pays de résidence *"><Sel opts={["Côte d'Ivoire","France","Sénégal","Ghana","Maroc","Autre"]}/></FG><FG label="Adresse complète *"><input placeholder="Cocody, Abidjan"/></FG><div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:"1.5rem"}}><FG label="Téléphone *"><input placeholder="+225 07 00 00 00 00"/></FG><FG label="Email *"><input type="email" placeholder="j.kouassi@email.com"/></FG></div><FG label="Profession *"><Sel opts={["Chef d'entreprise","Directeur Général","Investisseur","Médecin","Autre"]}/></FG></div>,
    2:<div><div style={{background:T.goldL,border:`1px solid rgba(138,106,56,.25)`,padding:".9rem 1.2rem",marginBottom:"1.5rem",fontSize:".6rem",color:T.brown2}}>Seuil minimum : <strong>200M FCFA</strong>.</div><FG label="Revenus annuels nets *"><Sel opts={["60M–150M FCFA","150M–300M FCFA","300M–600M FCFA","+ 600M FCFA"]}/></FG><FG label="Patrimoine global estimé *"><Sel opts={["200M–500M FCFA","500M–1Md FCFA","1Md–3Md FCFA","+ 3Md FCFA"]}/></FG><FG label="Capacité d'investissement *"><Sel opts={["200M–400M FCFA","400M–800M FCFA","800M–1.5Md FCFA","+ 1.5Md FCFA"]}/></FG><FG label="Objectif *"><Sel opts={["Résidence principale","Investissement locatif","Diversification","Résidence secondaire"]}/></FG></div>,
    3:<div><div style={{background:T.redL,border:`1px solid rgba(139,58,58,.25)`,padding:".9rem 1.2rem",marginBottom:"1.5rem",fontSize:".6rem",color:T.brown2}}>K Properties est soumis aux réglementations AML/KYC internationales.</div><FG label="Source des fonds *"><Sel opts={["Revenus salariés","Bénéfices d'entreprise","Cession d'actifs","Héritage","Revenus locatifs"]}/></FG><FG label="Banque principale *"><input placeholder="Nom de votre banque"/></FG><FG label="Pays de la banque *"><Sel opts={["Côte d'Ivoire","France","Sénégal","Ghana","Maroc","Suisse","Autre"]}/></FG><FG label="Personne Politiquement Exposée ? *"><Sel opts={["Non","Oui — Fonction actuelle","Oui — Fonction passée"]}/></FG></div>,
    4:<div><div style={{background:T.blueL,border:`1px solid rgba(58,90,139,.25)`,padding:".9rem 1.2rem",marginBottom:"1.5rem",fontSize:".6rem",color:T.brown2}}>Fichiers chiffrés AES-256. Accès réservé à l'équipe conformité.</div><Up label="Pièce d'identité *" desc="Passeport ou CNI · PDF, JPG · Max 10 Mo"/><Up label="Justificatif de domicile *" desc="Moins de 3 mois"/><Up label="3 derniers relevés bancaires *" desc="PDF officiel"/><Up label="Justificatif de revenus *" desc="Bulletins de salaire ou bilan certifié"/></div>,
    5:<div><div style={{background:T.greenL,border:`1px solid rgba(74,122,66,.25)`,padding:".9rem 1.2rem",marginBottom:"1.5rem",fontSize:".6rem",color:T.brown2}}>Délai de traitement : <strong>5 jours ouvrables</strong>.</div><Up label="NDA signé *" desc="Téléchargez, signez et renvoyez"/>{["Je certifie l'exactitude de toutes les informations.","J'accepte la politique de confidentialité.","J'accepte les conditions générales."].map((t:string)=>(<label key={t} style={{display:"flex",alignItems:"flex-start",gap:"1rem",cursor:"pointer",marginBottom:"1.2rem"}}><input type="checkbox" style={{width:16,height:16,flexShrink:0,marginTop:2,accentColor:T.brown}}/><span style={{fontSize:".58rem",lineHeight:1.9,color:T.brown2}}>{t}</span></label>))}<FG label="Signature électronique *"><input placeholder="Votre nom complet"/></FG></div>
  };
  if(done)return(<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",textAlign:"center",padding:"3rem 1.5rem",background:T.ivory}}><div style={{color:T.gold,marginBottom:"1.5rem"}}><I.Check/></div><h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"2rem",fontWeight:300,color:T.brown,marginBottom:"1.5rem"}}>Dossier soumis</h2><p style={{fontSize:".66rem",color:T.brown2,lineHeight:2,maxWidth:380,marginBottom:"2.5rem"}}>Notre équipe vous contactera dans les <strong>5 jours ouvrables</strong>.</p><Btn sz="lg" onClick={()=>goto("landing")} style={{width:"100%",maxWidth:300}}>Retour à l'accueil</Btn></div>);
  return(<div style={{background:T.cream}}>
    <div style={{background:T.ivory,padding:"1.2rem 1.5rem",borderBottom:`1px solid ${T.lineL}`,position:"sticky",top:0,zIndex:100}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:".8rem"}}><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:".95rem",color:T.brown}}>KYC — Étape {step}/5</div><Btn v="ghost" sz="sm" onClick={()=>goto("landing")}>Quitter</Btn></div>
      <div style={{height:1,background:T.line}}><div style={{height:"100%",width:`${(step/5)*100}%`,background:T.gold,transition:"width .4s ease"}}/></div>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:".5rem"}}>{steps.map((s:string,i:number)=><div key={s} style={{fontSize:".42rem",textTransform:"uppercase",color:i+1<=step?T.gold:T.brown3}}>{s}</div>)}</div>
    </div>
    <div style={{maxWidth:580,margin:"0 auto",padding:"3rem 1.5rem 6rem"}}>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.9rem",fontWeight:300,color:T.brown,marginBottom:".5rem"}}>{["Identité & Coordonnées","Profil Investisseur","Origine des Fonds","Documents Justificatifs","Signature & Engagement"][step-1]}</h2>
      <div style={{width:30,height:"0.5px",background:T.gold,marginBottom:"2.5rem"}}/>
      {views[step]}
      <div style={{display:"flex",gap:".8rem",marginTop:"2rem"}}>
        {step>1&&<Btn v="outline" onClick={()=>setStep((s:number)=>s-1)}>← Retour</Btn>}
        {step<5?<Btn onClick={()=>setStep((s:number)=>s+1)} style={step===1?{width:"100%"}:{flex:1}}>Continuer →</Btn>:<Btn onClick={()=>setDone(true)} style={{flex:1}}>Soumettre →</Btn>}
      </div>
    </div>
  </div>);
}

// ── DASHBOARD ──
const NAVS:any={
  client:[{s:"Mon Acquisition"},{id:"overview",ic:I.Home,lb:"Vue globale"},{id:"dossier",ic:I.Doc,lb:"Mon dossier"},{id:"financier",ic:I.Money,lb:"Tableau financier"},{id:"chantier",ic:I.Building,lb:"Suivi chantier"},{s:"Projets"},{id:"projets",ic:I.Map,lb:"Bibliothèque projets"},{s:"Communication"},{id:"messagerie",ic:I.Message,lb:"Messagerie"},{id:"rdv",ic:I.Calendar,lb:"Rendez-vous"},{s:"Documents"},{id:"documents",ic:I.Doc,lb:"Mes documents"},{id:"kyc",ic:I.Shield,lb:"Mon profil & KYC"},{s:"Support"},{id:"notifications",ic:I.Bell,lb:"Notifications"},{id:"settings",ic:I.Gear,lb:"Paramètres"}],
  partner:[{s:"Principal"},{id:"overview",ic:I.Home,lb:"Vue globale"},{id:"crm",ic:I.Users,lb:"Mes clients"},{id:"commissions",ic:I.Money,lb:"Commissions"},{s:"Projets"},{id:"catalogue",ic:I.Building,lb:"Catalogue projets"},{s:"Communication"},{id:"messagerie",ic:I.Message,lb:"Messagerie"},{id:"agenda",ic:I.Calendar,lb:"Agenda"},{s:"Mon Compte"},{id:"profil",ic:I.Person,lb:"Mon profil"},{id:"settings",ic:I.Gear,lb:"Paramètres"}],
  admin:[{s:"Administration"},{id:"overview",ic:I.Home,lb:"Vue globale"},{id:"kyc",ic:I.Shield,lb:"Validation KYC"},{s:"Membres"},{id:"membres",ic:I.Users,lb:"Gestion membres"},{id:"leads",ic:I.Inbox,lb:"Leads entrants"},{s:"Projets & Finance"},{id:"projets",ic:I.Building,lb:"Gestion projets"},{id:"finance",ic:I.Chart,lb:"Reporting financier"},{id:"commissions",ic:I.Money,lb:"Commissions"},{s:"Commercial"},{id:"crm",ic:I.Trend,lb:"CRM Pipeline"},{s:"Communication"},{id:"messagerie",ic:I.Message,lb:"Messagerie"},{id:"agenda",ic:I.Calendar,lb:"Agenda"},{s:"Partenaires"},{id:"partenaires",ic:I.Handshake,lb:"Gestion partenaires"},{s:"Outils"},{id:"exports",ic:I.Download,lb:"Exports"},{id:"settings",ic:I.Gear,lb:"Paramètres"}],
};
const INFO:any={
  client:{ini:"",name:"Mon Espace",role:"Acquéreur",label:"Espace Client"},
  partner:{ini:"",name:"Mon Espace",role:"Partenaire",label:"Espace Partenaire"},
  admin:{ini:"KP",name:"K Properties",role:"Administrateur",label:"Back-Office Admin"},
};

const KPI=({label,value,sub,icon:Icon}:any)=>(<div style={{background:T.ivory,padding:"1.4rem 1.5rem"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:".6rem"}}><div style={{fontSize:".46rem",letterSpacing:".2em",textTransform:"uppercase",color:T.brown3,fontWeight:500}}>{label}</div>{Icon&&<span style={{color:T.gold}}><Icon/></span>}</div><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.9rem",fontWeight:400,lineHeight:1,color:T.brown,marginBottom:".3rem"}}>{value}</div>{sub&&<div style={{fontSize:".54rem",color:T.brown3}}>{sub}</div>}</div>);

function DView({role,view}:any){
  const w=useW(),isMobile=w<768;
  const Ks=({items,cols=4}:any)=>(<div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":`repeat(${cols},1fr)`,gap:1,marginBottom:"1rem"}}>{items.map(([l,v,s,Icon]:any)=><KPI key={l} label={l} value={v} sub={s} icon={Icon}/>)}</div>);

  if(role==="client"){
    if(view==="overview")return <div><Ks items={[["Statut KYC","—","En attente",I.Shield],["Dossiers actifs","0","Aucun dossier",I.Doc],["Montant engagé","—","FCFA",I.Money],["Messages","0","Aucun message",I.Message]]}/><div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"2fr 1fr",gap:1}}><Card title="Mes acquisitions"><Empty icon={I.Building} text="Aucune acquisition pour le moment"/></Card><Card title="Prochains versements"><Empty icon={I.Money} text="Aucun versement prévu"/></Card></div><Card title="Derniers messages"><Empty icon={I.Message} text="Aucun message"/></Card></div>;
    if(view==="dossier")return <div><Card title="Mon dossier KYC"><Empty icon={I.Shield} text="Dossier en cours de traitement"/></Card></div>;
    if(view==="financier")return <div><Card title="Tableau financier"><Empty icon={I.Money} text="Aucune donnée financière disponible"/></Card></div>;
    if(view==="chantier")return <div><Card title="Suivi chantier"><Empty icon={I.Building} text="Aucun chantier associé à votre dossier"/></Card></div>;
    if(view==="projets")return <div><Card title="Bibliothèque projets"><Empty icon={I.Map} text="Aucun projet disponible pour le moment"/></Card></div>;
    if(view==="messagerie")return <div><Card title="Messagerie"><Empty icon={I.Message} text="Aucun message. Votre conseiller vous contactera prochainement."/></Card></div>;
    if(view==="rdv")return <div><Card title="Rendez-vous" actions={<Btn sz="sm"><I.Plus/> Demander un RDV</Btn>}><Empty icon={I.Calendar} text="Aucun rendez-vous planifié"/></Card></div>;
    if(view==="documents")return <div><Card title="Mes documents"><Empty icon={I.Doc} text="Aucun document disponible"/></Card></div>;
    if(view==="kyc")return <div><Card title="Mon profil & KYC"><Empty icon={I.Shield} text="Profil en cours de vérification"/></Card></div>;
    if(view==="notifications")return <div><Card title="Notifications"><Empty icon={I.Bell} text="Aucune notification"/></Card></div>;
    if(view==="settings")return <Card title="Paramètres"><div style={{padding:"2rem 1.5rem"}}><div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:"1.5rem",marginBottom:"1.5rem"}}><div><label>Prénom</label><input/></div><div><label>Nom</label><input/></div></div><div style={{marginBottom:"1.5rem"}}><label>Email</label><input type="email"/></div><div style={{marginBottom:"2rem"}}><label>Téléphone</label><input type="tel"/></div><Btn>Enregistrer</Btn></div></Card>;
  }
  if(role==="partner"){
    if(view==="overview")return <div><Ks items={[["Clients référés","0","Aucun client",I.Users],["Volume","—","FCFA",I.Money],["Commissions","—","FCFA",I.Chart],["Statut","Actif","Partenaire",I.Star]]}/><div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"2fr 1fr",gap:1}}><Card title="Mes clients"><Empty icon={I.Users} text="Aucun client référé pour le moment"/></Card><Card title="Performance"><Empty icon={I.Chart} text="Données disponibles après la première vente"/></Card></div></div>;
    if(view==="crm")return <Card title="Mes clients" actions={<Btn sz="sm"><I.Plus/> Référer un client</Btn>}><Empty icon={I.Users} text="Aucun client dans votre portefeuille"/></Card>;
    if(view==="commissions")return <Card title="Commissions"><Empty icon={I.Money} text="Aucune commission enregistrée"/></Card>;
    if(view==="catalogue")return <Card title="Catalogue projets"><Empty icon={I.Building} text="Aucun projet disponible pour le moment"/></Card>;
    if(view==="messagerie")return <Card title="Messagerie"><Empty icon={I.Message} text="Aucun message"/></Card>;
    if(view==="agenda")return <Card title="Agenda" actions={<Btn sz="sm"><I.Plus/> RDV</Btn>}><Empty icon={I.Calendar} text="Aucun rendez-vous planifié"/></Card>;
    if(view==="profil")return <Card title="Mon profil"><div style={{padding:"2rem 1.5rem"}}><div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:"1.5rem",marginBottom:"1.5rem"}}><div><label>Prénom</label><input/></div><div><label>Nom</label><input/></div></div><div style={{marginBottom:"1.5rem"}}><label>Structure</label><input/></div><div style={{marginBottom:"2rem"}}><label>Email</label><input type="email"/></div><Btn>Enregistrer</Btn></div></Card>;
    if(view==="settings")return <Card title="Paramètres"><div style={{padding:"2rem 1.5rem"}}><div style={{marginBottom:"1.5rem"}}><label>Email</label><input type="email"/></div><div style={{marginBottom:"2rem"}}><label>Téléphone</label><input type="tel"/></div><Btn>Enregistrer</Btn></div></Card>;
  }
  if(role==="admin"){
    if(view==="overview")return <div><Ks items={[["Membres actifs","0","Aucun membre",I.Users],["KYC en attente","0","À traiter",I.Shield],["Projets actifs","0","Aucun projet",I.Building],["Partenaires","0","Aucun partenaire",I.Handshake]]}/><div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"2fr 1fr",gap:1}}><Card title="Activité récente"><Empty icon={I.Chart} text="Aucune activité enregistrée"/></Card><Card title="Répartition membres"><Empty icon={I.Users} text="Aucun membre"/></Card></div></div>;
    if(view==="kyc")return <Card title="File de traitement KYC"><Empty icon={I.Shield} text="Aucun dossier KYC en attente"/></Card>;
    if(view==="membres")return <Card title="Tous les membres" actions={<Btn sz="sm"><I.Plus/> Inviter</Btn>}><Empty icon={I.Users} text="Aucun membre enregistré"/></Card>;
    if(view==="leads")return <Card title="Leads entrants" actions={<Btn sz="sm"><I.Plus/> Ajouter</Btn>}><Empty icon={I.Inbox} text="Aucun lead entrant"/></Card>;
    if(view==="projets")return <Card title="Gestion projets" actions={<Btn sz="sm"><I.Plus/> Nouveau projet</Btn>}><Empty icon={I.Building} text="Aucun projet créé. Ajoutez votre premier projet."/></Card>;
    if(view==="finance")return <Card title="Reporting financier"><Empty icon={I.Chart} text="Aucune donnée financière"/></Card>;
    if(view==="commissions")return <Card title="Commissions partenaires"><Empty icon={I.Money} text="Aucune commission enregistrée"/></Card>;
    if(view==="crm")return <Card title="CRM Pipeline"><Empty icon={I.Trend} text="Aucun dossier dans le pipeline"/></Card>;
    if(view==="messagerie")return <Card title="Messagerie globale"><Empty icon={I.Message} text="Aucun message"/></Card>;
    if(view==="agenda")return <Card title="Agenda" actions={<Btn sz="sm"><I.Plus/> RDV</Btn>}><Empty icon={I.Calendar} text="Aucun rendez-vous"/></Card>;
    if(view==="partenaires")return <Card title="Réseau partenaires" actions={<Btn sz="sm"><I.Plus/> Inviter</Btn>}><Empty icon={I.Handshake} text="Aucun partenaire enregistré"/></Card>;
    if(view==="exports")return <div style={{display:"flex",flexDirection:"column",gap:1}}>{[["Membres & KYC","Liste complète, statuts, dates"],["Ventes & Projets","Dashboard commercial, taux"],["Reporting financier","CA, encaissements, pipeline"],["Commissions","Détail par partenaire"]].map(([t,d])=>(<div key={t} style={{background:T.ivory,padding:"1.3rem 1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:".8rem"}}><div><div style={{fontSize:".63rem",fontWeight:500,color:T.brown,marginBottom:".3rem"}}>{t}</div><div style={{fontSize:".56rem",color:T.brown3}}>{d}</div></div><div style={{display:"flex",gap:".5rem"}}><Btn v="outline" sz="sm"><I.Download/> Excel</Btn><Btn sz="sm"><I.Download/> PDF</Btn></div></div>))}</div>;
    if(view==="settings")return <Card title="Paramètres & Rôles"><div style={{padding:"2rem 1.5rem"}}><div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:"1.5rem",marginBottom:"1.5rem"}}><div><label>Prénom</label><input defaultValue="Admin"/></div><div><label>Nom</label><input defaultValue="K Properties"/></div></div><div style={{marginBottom:"1.5rem"}}><label>Email</label><input defaultValue="admin@kproperties.ci"/></div><Btn>Enregistrer</Btn></div></Card>;
  }
  return <div style={{padding:"3rem",textAlign:"center",color:T.brown3,fontFamily:"'Cormorant Garamond',serif",fontSize:"1.4rem"}}>Section disponible prochainement</div>;
}

function Dashboard({goto,role}:any){
  const nav=NAVS[role];
  const info=INFO[role];
  const[view,setView]=useState("overview");
  const[open,setOpen]=useState(false);
  const w=useW(),isMobile=w<768;
  const cur=nav.find((i:any)=>i.id===view);
  const SB=()=>(<>
    <div style={{padding:"1.4rem 1.5rem",borderBottom:`1px solid ${T.lineL}`}}><Logo/><div style={{fontSize:".42rem",letterSpacing:".2em",textTransform:"uppercase",color:T.brown3,marginTop:".5rem"}}>{info.label}</div></div>
    <div style={{padding:"1rem 1.5rem",borderBottom:`1px solid ${T.lineL}`,display:"flex",alignItems:"center",gap:".8rem"}}><div style={{width:34,height:34,background:T.brown,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Cormorant Garamond',serif",fontSize:".9rem",color:T.cream,flexShrink:0}}>{info.ini||<I.Person/>}</div><div><div style={{fontSize:".62rem",fontWeight:500,color:T.brown}}>{info.name}</div><div style={{fontSize:".46rem",letterSpacing:".12em",textTransform:"uppercase",color:T.gold,marginTop:".15rem"}}>{info.role}</div></div></div>
    <nav style={{flex:1,padding:".8rem 0",overflowY:"auto"}}>{nav.map((item:any,i:number)=>item.s?(<div key={i} style={{fontSize:".42rem",letterSpacing:".22em",textTransform:"uppercase",color:T.brown3,padding:".3rem 1.5rem",marginTop:".5rem",opacity:.7}}>{item.s}</div>):(<div key={item.id} onClick={()=>{setView(item.id);if(isMobile)setOpen(false);}} style={{display:"flex",alignItems:"center",gap:".7rem",padding:".65rem 1.5rem",fontSize:".6rem",cursor:"pointer",color:view===item.id?T.brown:T.brown3,background:view===item.id?T.goldL:"transparent",borderRight:view===item.id?`2px solid ${T.gold}`:"2px solid transparent"}}><span style={{color:view===item.id?T.gold:T.brown3,flexShrink:0,display:"flex"}}><item.ic/></span><span style={{flex:1}}>{item.lb}</span></div>))}</nav>
    <div style={{padding:"1.1rem 1.5rem",borderTop:`1px solid ${T.lineL}`}}><button onClick={()=>goto("landing")} style={{display:"flex",alignItems:"center",gap:".5rem",background:"transparent",border:"none",cursor:"pointer",fontSize:".52rem",color:T.brown3,fontFamily:"'Montserrat',sans-serif",letterSpacing:".12em"}}><I.Key/> Déconnexion</button></div>
  </>);
  return(<div style={{display:"flex",minHeight:"100vh",background:T.cream}}>
    {!isMobile&&<div style={{width:245,background:T.ivory,display:"flex",flexDirection:"column",position:"fixed",top:0,left:0,bottom:0,borderRight:`1px solid ${T.lineL}`,zIndex:100}}><SB/></div>}
    {isMobile&&open&&<div style={{position:"fixed",inset:0,zIndex:200}}><div onClick={()=>setOpen(false)} style={{position:"absolute",inset:0,background:"rgba(26,14,8,.4)"}}/><div style={{position:"absolute",left:0,top:0,bottom:0,width:260,background:T.ivory,display:"flex",flexDirection:"column",borderRight:`1px solid ${T.lineL}`}}><SB/></div></div>}
    <div style={{marginLeft:isMobile?0:245,flex:1,minWidth:0}}>
      <div style={{background:T.ivory,padding:"1rem 1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`1px solid ${T.lineL}`,position:"sticky",top:0,zIndex:90}}>
        <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
          {isMobile&&<div onClick={()=>setOpen(true)} style={{width:30,height:30,border:`1px solid ${T.line}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",flexShrink:0}}><div style={{width:12,height:"0.5px",background:T.brown}}/><div style={{width:12,height:"0.5px",background:T.brown}}/><div style={{width:12,height:"0.5px",background:T.brown}}/></div>}
          <div style={{display:"flex",alignItems:"center",gap:".5rem"}}>{cur?.ic&&<span style={{color:T.gold,display:"flex"}}><cur.ic/></span>}<div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:isMobile?"1rem":"1.15rem",fontWeight:400,color:T.brown}}>{cur?.lb||"K Properties"}</div></div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:".6rem"}}>
          <div style={{width:30,height:30,border:`1px solid ${T.line}`,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:T.brown3}}><I.Bell/></div>
          <div style={{width:30,height:30,border:`1px solid ${T.line}`,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:T.brown3}}><I.Message/></div>
          {!isMobile&&<Btn sz="sm" onClick={()=>goto("landing")}>← Site</Btn>}
        </div>
      </div>
      <div style={{padding:isMobile?"1.2rem":"1.8rem 2rem"}}><DView role={role} view={view}/></div>
    </div>
  </div>);
}

export default function App(){
  const[page,setPage]=useState("landing");
  const[role,setRole]=useState("client");
  const loginAs=(r:string)=>{setRole(r);setPage("dashboard");};
  return(<div style={{minHeight:"100vh",background:T.cream,color:T.brown}}><style>{css}</style>{page==="landing"&&<Landing goto={setPage}/>}{page==="auth"&&<Auth goto={setPage} loginAs={loginAs}/>}{page==="kyc"&&<KYC goto={setPage} loginAs={loginAs}/>}{page==="dashboard"&&<Dashboard goto={setPage} role={role}/>}</div>);
}
