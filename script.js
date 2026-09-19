/**
 * Dr. Devang Gokalani - Shreeji Children & Medical Hospital
 * Interactive Script: Vaccine Calculator, WhatsApp Booking, Drawer & Accordion
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    // Close menu when clicking outside or on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }

  // 2. Interactive Baby Vaccination Schedule Data (IAP Guidelines)
  const vaccineData = {
    'birth': {
      title: 'At Birth (Day 0 – 1)',
      subtitle: 'Crucial immunity shields for newborn infants right after delivery',
      vaccines: [
        { name: 'BCG', protectsAgainst: 'Tuberculosis (TB)', route: 'Intradermal', status: 'Mandatory' },
        { name: 'OPV 0', protectsAgainst: 'Polio (Oral drops)', route: 'Oral', status: 'Mandatory' },
        { name: 'Hepatitis B (Birth dose)', protectsAgainst: 'Hepatitis B viral infection', route: 'Intramuscular', status: 'Mandatory' }
      ]
    },
    '6w': {
      title: '6 Weeks (1.5 Months)',
      subtitle: 'Primary combination shots against major childhood infections',
      vaccines: [
        { name: 'DTwP / DTaP 1', protectsAgainst: 'Diphtheria, Tetanus, Pertussis (Whooping cough)', route: 'Intramuscular', status: 'Essential' },
        { name: 'IPV 1', protectsAgainst: 'Poliovirus (Injectable)', route: 'Intramuscular', status: 'Essential' },
        { name: 'Hepatitis B 1', protectsAgainst: 'Hep-B infection', route: 'Intramuscular', status: 'Essential' },
        { name: 'Hib 1', protectsAgainst: 'Haemophilus influenzae type b meningitis', route: 'Intramuscular', status: 'Essential' },
        { name: 'Rotavirus 1', protectsAgainst: 'Severe Infant Diarrhea & Dehydration', route: 'Oral drops', status: 'Recommended' },
        { name: 'PCV 1', protectsAgainst: 'Pneumococcal Pneumonia & Sepsis', route: 'Intramuscular', status: 'Recommended' }
      ]
    },
    '10w': {
      title: '10 Weeks (2.5 Months)',
      subtitle: 'Second booster sequence for solid antibody response',
      vaccines: [
        { name: 'DTwP / DTaP 2', protectsAgainst: 'Diphtheria, Tetanus, Whooping cough', route: 'Intramuscular', status: 'Essential' },
        { name: 'IPV 2', protectsAgainst: 'Poliovirus', route: 'Intramuscular', status: 'Essential' },
        { name: 'Hib 2', protectsAgainst: 'Hib meningitis', route: 'Intramuscular', status: 'Essential' },
        { name: 'Rotavirus 2', protectsAgainst: 'Rotavirus Diarrhea', route: 'Oral drops', status: 'Recommended' },
        { name: 'PCV 2', protectsAgainst: 'Pneumococcal Pneumonia', route: 'Intramuscular', status: 'Recommended' }
      ]
    },
    '14w': {
      title: '14 Weeks (3.5 Months)',
      subtitle: 'Completing primary infant immunity cycle',
      vaccines: [
        { name: 'DTwP / DTaP 3', protectsAgainst: 'Diphtheria, Tetanus, Whooping cough', route: 'Intramuscular', status: 'Essential' },
        { name: 'IPV 3', protectsAgainst: 'Poliovirus', route: 'Intramuscular', status: 'Essential' },
        { name: 'Hib 3', protectsAgainst: 'Hib meningitis', route: 'Intramuscular', status: 'Essential' },
        { name: 'Rotavirus 3', protectsAgainst: 'Rotavirus Diarrhea', route: 'Oral drops', status: 'Recommended' },
        { name: 'PCV 3', protectsAgainst: 'Pneumococcal Pneumonia', route: 'Intramuscular', status: 'Recommended' }
      ]
    },
    '6m': {
      title: '6 Months to 9 Months',
      subtitle: 'Seasonal protection and beginning viral prevention',
      vaccines: [
        { name: 'Influenza (Flu) Dose 1 & 2', protectsAgainst: 'H1N1 & Seasonal Swine/Avian Flu', route: 'Intramuscular (4 wks apart)', status: 'Recommended' },
        { name: 'Typhoid Conjugate (TCV)', protectsAgainst: 'Enteric / Typhoid fever (at 6-9 months)', route: 'Intramuscular', status: 'Recommended' },
        { name: 'MMR 1 / MR 1', protectsAgainst: 'Measles, Mumps, Rubella (at 9 months)', route: 'Subcutaneous', status: 'Essential' }
      ]
    },
    '12m': {
      title: '12 Months to 18 Months (Toddler)',
      subtitle: 'Crucial toddler milestones, chickenpox & hepatitis A protection',
      vaccines: [
        { name: 'Hepatitis A (Live/Inactivated)', protectsAgainst: 'Hepatitis A Jaundice & liver infection', route: 'Intramuscular', status: 'Essential' },
        { name: 'MMR 2', protectsAgainst: 'Measles, Mumps, Rubella Booster', route: 'Subcutaneous', status: 'Essential' },
        { name: 'Varicella (Chickenpox) 1', protectsAgainst: 'Chickenpox infection & complications', route: 'Subcutaneous', status: 'Recommended' },
        { name: 'PCV Booster', protectsAgainst: 'Pneumonia Booster protection', route: 'Intramuscular', status: 'Recommended' },
        { name: 'DTaP / DTwP Booster 1', protectsAgainst: 'Triple antigen booster (at 16-18 mo)', route: 'Intramuscular', status: 'Essential' }
      ]
    },
    '2y': {
      title: '2 Years to 5 Years (Preschooler)',
      subtitle: 'Pre-school immunity shields and kindergarten booster protection',
      vaccines: [
        { name: 'Annual Flu Vaccine', protectsAgainst: 'Annual Flu strain updates', route: 'Intramuscular', status: 'Recommended' },
        { name: 'Typhoid Booster', protectsAgainst: 'Typhoid immunity reinforcement', route: 'Intramuscular', status: 'Recommended' },
        { name: 'DPT Booster 2 (at 4-5 Yrs)', protectsAgainst: 'School-age Diphtheria, Tetanus, Pertussis', route: 'Intramuscular', status: 'Mandatory' },
        { name: 'MMR 3 / Varicella 2', protectsAgainst: 'Measles, Mumps & Chickenpox 2nd Dose', route: 'Subcutaneous', status: 'Recommended' }
      ]
    }
  };

  const ageButtons = document.querySelectorAll('.age-tab-btn');
  const resultTitle = document.getElementById('vaccineAgeTitle');
  const resultSubtitle = document.getElementById('vaccineAgeSubtitle');
  const resultTableBody = document.getElementById('vaccineTableBody');
  const vaccineBookingBtn = document.getElementById('vaccineBookingBtn');

  function renderVaccines(ageKey) {
    const data = vaccineData[ageKey];
    if (!data) return;

    if (resultTitle) resultTitle.textContent = data.title;
    if (resultSubtitle) resultSubtitle.textContent = data.subtitle;

    if (resultTableBody) {
      resultTableBody.innerHTML = data.vaccines.map(v => `
        <tr>
          <td><strong>${v.name}</strong></td>
          <td>${v.protectsAgainst}</td>
          <td><span style="font-size: 0.85rem; color: #64748b;">${v.route}</span></td>
          <td class="tag-cell"><span style="background: ${v.status === 'Mandatory' ? '#dcfce7; color: #166534;' : v.status === 'Essential' ? '#e0f2fe; color: #0369a1;' : '#fef3c7; color: #92400e;'} padding: 4px 10px; border-radius: 9999px; font-size: 0.78rem; font-weight: 700;">${v.status}</span></td>
        </tr>
      `).join('');
    }

    if (vaccineBookingBtn) {
      vaccineBookingBtn.onclick = () => {
        openBookingModal(`Vaccination Consultation (${data.title})`);
      };
    }
  }

  if (ageButtons.length > 0) {
    ageButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        ageButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const age = btn.getAttribute('data-age');
        renderVaccines(age);
      });
    });

    // Initial render
    renderVaccines('birth');
  }

  // 3. Modal Booking Logic
  const bookingModal = document.getElementById('bookingModal');
  const modalClose = document.getElementById('modalClose');
  const openModalBtns = document.querySelectorAll('.open-booking-modal');
  const serviceSelect = document.getElementById('modalService');

  window.openBookingModal = function(defaultService) {
    if (bookingModal) {
      bookingModal.classList.add('active');
      if (defaultService && serviceSelect) {
        // Try to match or set custom text
        let found = false;
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value === defaultService) {
            serviceSelect.selectedIndex = i;
            found = true;
            break;
          }
        }
        if (!found) {
          serviceSelect.options[0].text = `Selected: ${defaultService}`;
          serviceSelect.selectedIndex = 0;
        }
      }
    }
  };

  if (openModalBtns) {
    openModalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const service = btn.getAttribute('data-service') || 'General Pediatric OPD';
        window.openBookingModal(service);
      });
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      bookingModal.classList.remove('active');
    });
  }

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
      }
    });
  }

  // 4. WhatsApp Direct Appointment Generator
  const CLINIC_WHATSAPP = '919327705003'; // Dr Devang Gokalani / Shreeji Hospital

  window.submitAppointmentToWhatsApp = function(e) {
    if (e) e.preventDefault();

    const parentName = document.getElementById('modalParentName')?.value.trim() || 'Parent';
    const childName = document.getElementById('modalChildName')?.value.trim() || 'Child';
    const childAge = document.getElementById('modalChildAge')?.value.trim() || 'Not specified';
    const service = document.getElementById('modalService')?.value || 'Pediatric Consultation';
    const preferredDate = document.getElementById('modalDate')?.value || 'Earliest available';
    const note = document.getElementById('modalNote')?.value.trim() || 'Routine Consultation';

    const message = 
`*New Patient Appointment Request* 🩺
*Hospital:* Shreeji Children & Medical Hospital
*Doctor:* Dr. Devang Gokalani

• *Parent Name:* ${parentName}
• *Child Name:* ${childName}
• *Child Age:* ${childAge}
• *Service / Reason:* ${service}
• *Preferred Date / Slot:* ${preferredDate}
• *Symptoms / Notes:* ${note}

_Sent via Official Website Appointment Portal_`;

    const whatsappUrl = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    if (bookingModal) bookingModal.classList.remove('active');
  };

  // Quick hero form handler
  window.submitHeroQuickForm = function(e) {
    if (e) e.preventDefault();
    const parentName = document.getElementById('heroParentName')?.value.trim() || 'Parent';
    const childAge = document.getElementById('heroChildAge')?.value.trim() || 'Infant/Child';
    const reason = document.getElementById('heroReason')?.value || 'General Pediatric Checkup';

    const message = 
`*Quick Appointment Request* 🩺
*To:* Dr. Devang Gokalani (Shreeji Hospital)

• *Parent Name:* ${parentName}
• *Child Age:* ${childAge}
• *Concern:* ${reason}

Please let us know the available OPD slot today. Thank you!`;

    const whatsappUrl = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // 5. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(fi => fi.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
});
