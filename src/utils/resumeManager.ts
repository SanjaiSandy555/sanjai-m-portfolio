/**
 * Resume Manager Utility
 * Manages user-uploaded resumes (stored in localStorage) and provides instant
 * downloading of the uploaded resume or an auto-generated high-fidelity PDF/document.
 */

export interface StoredResume {
  fileName: string;
  fileType: string;
  dataUrl: string;
  uploadedAt: string;
  fileSize: number;
}

const STORAGE_KEY = 'sanjai_portfolio_uploaded_resume';

export const getStoredResume = (): StoredResume | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredResume;
  } catch (err) {
    console.error('Failed to read resume from localStorage', err);
    return null;
  }
};

export const saveUploadedResume = (
  file: File,
  dataUrl: string
): StoredResume => {
  const resumeData: StoredResume = {
    fileName: file.name,
    fileType: file.type || 'application/pdf',
    dataUrl: dataUrl,
    uploadedAt: new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    fileSize: file.size,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
  } catch (err) {
    console.warn('Storage quota exceeded for local resume, keeping in memory', err);
  }
  return resumeData;
};

export const clearUploadedResume = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to remove resume from localStorage', err);
  }
};

/**
 * Generates and downloads a clean, printer-ready HTML/PDF resume for Sanjai M
 * if no custom resume has been uploaded yet.
 */
export const downloadDefaultResume = (): void => {
  const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SANJAI M - Resume</title>
  <style>
    body { font-family: 'Times New Roman', Times, serif, Arial; margin: 36px 48px; color: #111; line-height: 1.4; font-size: 13px; }
    h1 { font-size: 24px; text-align: center; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 1px; }
    .contact-line { text-align: center; font-size: 12px; margin-bottom: 3px; }
    .contact-line a { color: #111; text-decoration: none; }
    .section-title { font-size: 14px; font-weight: bold; text-transform: uppercase; border-bottom: 1.5px solid #222; margin-top: 18px; margin-bottom: 6px; padding-bottom: 2px; }
    .item-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 13px; }
    .item-sub { display: flex; justify-content: space-between; font-style: italic; font-size: 12px; color: #333; margin-bottom: 3px; }
    ul { margin: 4px 0 8px 18px; padding: 0; }
    li { margin-bottom: 2px; font-size: 12.5px; }
    .skills-grid { display: grid; grid-template-columns: 180px 1fr; gap: 4px 10px; font-size: 12.5px; }
    .skill-label { font-weight: bold; }
    @media print {
      body { margin: 15mm; }
    }
  </style>
</head>
<body>
  <h1>SANJAI M</h1>
  <div class="contact-line">
    📞 +91 9952022462 &nbsp;|&nbsp; 📍 Oldwashermenpet, Chennai - 600021 &nbsp;|&nbsp; ✉️ sanjaisandy115@gmail.com
  </div>
  <div class="contact-line">
    🔗 linkedin.com/in/sanjai-m-5b87b3246 &nbsp;|&nbsp; 💻 github.com/SanjaiSandy555 &nbsp;|&nbsp; 🌐 sanjai-m-portfolio.kesug.com
  </div>

  <div class="section-title">OBJECTIVE</div>
  <p style="margin: 4px 0; font-size: 12.5px; text-align: justify;">
    To build a successful career in the IT industry by applying strong technical skills and a willingness to learn in a dynamic environment, while enhancing my skills, working with new technologies, and contributing to innovative solutions that support organizational success. Available for full-time roles and freelance software engineering projects.
  </p>

  <div class="section-title">EXPERIENCE</div>
  <div class="item-header">
    <span>Software Engineer</span>
    <span>9 Months Experience</span>
  </div>
  <div class="item-sub">
    <span>4W Technologies</span>
    <span>Chennai, India</span>
  </div>
  <ul>
    <li>Engineered, audited, and maintained production application modules to guarantee platform stability and business SLA compliance.</li>
    <li>Executed remote server management, deployments, and secure multi-tier file transfers using WinSCP, CoreFTP, PuTTY, and Linux Commands.</li>
    <li>Conducted file diff audits and version comparisons with Beyond Compare to prevent release regressions and sync issues.</li>
    <li>Maintained automated scheduled background routines via Windows Task Scheduler, RClone, Syncovery, and custom batch scripts.</li>
    <li>Maintained backend database queries, CRUD operations, and schema structures in MySQL.</li>
  </ul>

  <div class="section-title">EDUCATION</div>
  <div class="item-header">
    <span>M.Sc. Data Science (PG)</span>
    <span>Post Graduate Degree</span>
  </div>
  <div class="item-sub">
    <span>Vellore Institute of Technology (VIT), Chennai</span>
    <span>2023 – 2025</span>
  </div>

  <div class="item-header" style="margin-top: 6px;">
    <span>B.Sc. Computer Science (UG)</span>
    <span>CGPA: 8.45</span>
  </div>
  <div class="item-sub">
    <span>Dwaraka Doss Goverdhan Doss Vaishnav College, Chennai - 600106</span>
    <span>2022 – 2025</span>
  </div>
  
  <div class="item-header" style="margin-top: 6px;">
    <span>Higher Secondary Certificate (HSC)</span>
    <span>PERCENTAGE: 81.1%</span>
  </div>
  <div class="item-sub">
    <span>P.A.K. Palanisamy Hr. Sec. School, Chennai - 600021</span>
    <span>2022</span>
  </div>

  <div class="item-header" style="margin-top: 6px;">
    <span>Secondary School Leaving Certificate (SSLC)</span>
    <span>PERCENTAGE: 75.4%</span>
  </div>
  <div class="item-sub">
    <span>P.A.K. Palanisamy Hr. Sec. School, Chennai - 600021</span>
    <span>2020</span>
  </div>

  <div class="section-title">PROJECTS</div>
  <p style="margin: 4px 0 2px 0;"><strong>CIAMS PORTAL : The Class Internal Assessment Management System</strong></p>
  <p style="margin: 0 0 3px 0; font-size: 12px;">Web-based tool streamlining student record management, result tracking, and class organization with SMS alerts via Twilio API integration and user-friendly interface for real-time academic updates.</p>
  <p style="margin: 0 0 8px 0; font-size: 11.5px; color: #444;"><em>Technologies: HTML, CSS, JavaScript, PHP, MySQL, Twilio API</em></p>

  <p style="margin: 4px 0 2px 0;"><strong>CATERING SERVICE MANAGEMENT PLATFORM</strong></p>
  <p style="margin: 0 0 3px 0; font-size: 12px;">Web-based platform for catering services allowing catering owners to post event job requests and catering staff/workers to view and apply for gigs.</p>
  <p style="margin: 0 0 8px 0; font-size: 11.5px; color: #444;"><em>Technologies: HTML, CSS, JavaScript, PHP, MySQL</em></p>

  <div class="section-title">TECHNICAL SKILLS</div>
  <div class="skills-grid">
    <div class="skill-label">Frontend:</div>
    <div>HTML5, CSS3, JavaScript, Bootstrap</div>
    <div class="skill-label">Backend:</div>
    <div>Java, PHP</div>
    <div class="skill-label">Databases:</div>
    <div>MySQL, RDBMS, CRUD Concepts, Query Optimization</div>
    <div class="skill-label">Core Concepts:</div>
    <div>Object-Oriented Programming (OOPS), RDBMS, REST APIs</div>
    <div class="skill-label">Servers & Remote:</div>
    <div>XAMPP, WAMP, WinSCP, CoreFTP, RDC, PuTTY, Linux Commands</div>
    <div class="skill-label">Tools & Automation:</div>
    <div>Git & GitHub, Beyond Compare, RClone, Syncovery, Batch files</div>
    <div class="skill-label">Documentation & Data:</div>
    <div>Microsoft Excel (Advanced Formulas, Modeling), Microsoft Office</div>
    <div class="skill-label">IDE / Editors:</div>
    <div>IntelliJ IDEA, Visual Studio Code, Eclipse</div>
    <div class="skill-label">Cloud Technologies:</div>
    <div>Amazon Web Services (AWS)</div>
  </div>

  <div class="section-title">CERTIFICATIONS & WORKSHOPS</div>
  <ul>
    <li><strong>TECH-TRIO (C++, JAVA, PYTHON)</strong> — Cybernaut</li>
    <li><strong>WEB DEVELOPMENT</strong> — Softech</li>
    <li><strong>UI/UX DESIGNER</strong> — Softech</li>
    <li><strong>AMAZON WEB SERVICES (AWS)</strong> — Cambtech</li>
    <li><strong>ETHICAL HACKING-WEB Workshop</strong> — Organized by Cappricio Securities (02 Mar 2024)</li>
  </ul>
</body>
</html>`;

  const blob = new Blob([resumeHtml], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'SANJAI_M_Resume.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

/**
 * Downloads the resume.
 * If user uploaded a file, downloads the exact user file (e.g. PDF).
 * Otherwise triggers the default resume download and/or opens print dialogue.
 */
export const downloadResume = (): { success: boolean; fileName: string; isUserUploaded: boolean } => {
  const uploaded = getStoredResume();

  if (uploaded && uploaded.dataUrl) {
    try {
      const a = document.createElement('a');
      a.href = uploaded.dataUrl;
      a.download = uploaded.fileName || 'SANJAI_M_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return { success: true, fileName: uploaded.fileName, isUserUploaded: true };
    } catch (err) {
      console.error('Error downloading uploaded resume, falling back to default', err);
    }
  }

  downloadDefaultResume();
  return { success: true, fileName: 'SANJAI_M_Resume.html', isUserUploaded: false };
};
