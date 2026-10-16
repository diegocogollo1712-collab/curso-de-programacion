/**
 * DANZAS ERICK - ACADEMIA DE DANZA NACIONALISTA VENEZOLANA
 * Master Application Script
 * Ensayos: Lunes a Viernes de 4:00 PM a 8:00 PM
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveScheduleTracker();
  initScheduleTabs();
  initCategorySelectors();
  initCurrencyToggle();
  initVideoPlayer();
  initFormInteractivity();
  initSilhouetteCardTilt();
  initPaymentCopyButtons();
  initAdminPanel();
  initMobileMenu();
});

/* ==========================================================================
   1. LIVE REHEARSAL STATUS TRACKER (Lunes a Viernes 4:00 PM a 8:00 PM)
   ========================================================================== */
function initLiveScheduleTracker() {
  const statusTextEl = document.getElementById('liveScheduleText');
  const statusPillEl = document.querySelector('.live-status-pill');

  function updateStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 1 = Lunes, ..., 5 = Viernes, 6 = Sábado
    const hour = now.getHours();
    const minute = now.getMinutes();
    const timeVal = hour + minute / 60;

    let message = '';
    let isLive = false;

    // Lunes a Viernes (1 a 5)
    if (day >= 1 && day <= 5) {
      if (timeVal >= 16 && timeVal < 17) {
        message = '🔴 EN VIVO AHORA (4 a 5 PM): Ensayos de Semillitas (4-6 años)';
        isLive = true;
      } else if (timeVal >= 17 && timeVal < 18) {
        message = '🔴 EN VIVO AHORA (5 a 6 PM): Ensayos Infantil (7-11 años)';
        isLive = true;
      } else if (timeVal >= 18 && timeVal < 19) {
        message = '🔴 EN VIVO AHORA (6 a 7 PM): Ensayos Juvenil (12-17 años)';
        isLive = true;
      } else if (timeVal >= 19 && timeVal < 20) {
        message = '🔴 EN VIVO AHORA (7 a 8 PM): Ensayos Adultos & Elenco Principal';
        isLive = true;
      } else if (timeVal < 16) {
        message = 'Próximo ensayo hoy a las 4:00 PM (Lunes a Viernes 4-8 PM)';
      } else {
        message = 'Ensayos finalizados por hoy. Retomamos mañana a las 4:00 PM';
      }
    } else {
      message = 'Fin de semana • Próximo ensayo este Lunes a las 4:00 PM';
    }

    if (statusTextEl) {
      statusTextEl.textContent = message;
    }

    // Update active highlight tags on schedule cards
    document.querySelectorAll('.status-indicator-badge').forEach(badge => {
      badge.textContent = 'Disponible';
      badge.classList.remove('in-session');
    });

    if (isLive) {
      if (timeVal >= 16 && timeVal < 17) markLiveCard('live-tag-semillitas');
      else if (timeVal >= 17 && timeVal < 18) markLiveCard('live-tag-infantil');
      else if (timeVal >= 18 && timeVal < 19) markLiveCard('live-tag-juvenil');
      else if (timeVal >= 19 && timeVal < 20) markLiveCard('live-tag-adultos');
    }
  }

  function markLiveCard(className) {
    const el = document.querySelector('.' + className);
    if (el) {
      el.textContent = '● En Sala Ahora';
      el.classList.add('in-session');
    }
  }

  updateStatus();
  setInterval(updateStatus, 60000); // Check every minute
}

/* ==========================================================================
   2. SCHEDULE TABS (Lunes a Viernes)
   ========================================================================== */
function initScheduleTabs() {
  const tabs = document.querySelectorAll('.day-tab-btn');
  const cards = document.querySelectorAll('.schedule-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const selectedDay = tab.dataset.day;

      cards.forEach(card => {
        card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        card.style.opacity = '0.5';
        card.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 150);
      });

      playSubtleChime();
    });
  });
}

/* ==========================================================================
   3. CATEGORY & PLAN SELECTION AUTO-FILL
   ========================================================================== */
function initCategorySelectors() {
  // Category quick buttons
  document.querySelectorAll('.select-category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = btn.dataset.category;
      const categorySelect = document.getElementById('enrollCategory');
      if (categorySelect && category) {
        // match category option
        for (let i = 0; i < categorySelect.options.length; i++) {
          if (categorySelect.options[i].value.includes(category) || category.includes(categorySelect.options[i].value)) {
            categorySelect.selectedIndex = i;
            break;
          }
        }
        updateConfirmedRehearsalTime(categorySelect.value);
        showToast(`Categoría seleccionada: ${category}`, 'info');
      }
    });
  });

  // Plan quick buttons
  document.querySelectorAll('.select-plan-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const plan = btn.dataset.plan;
      const planSelect = document.getElementById('enrollPlan');
      if (planSelect && plan) {
        for (let i = 0; i < planSelect.options.length; i++) {
          if (planSelect.options[i].value.includes(plan)) {
            planSelect.selectedIndex = i;
            break;
          }
        }
        showToast(`Plan elegido: ${plan}`, 'info');
      }
    });
  });
}

function updateConfirmedRehearsalTime(categoryVal) {
  const confirmedTimeSlot = document.getElementById('confirmedTimeSlot');
  if (!confirmedTimeSlot) return;

  if (categoryVal.includes('Semillitas')) {
    confirmedTimeSlot.innerHTML = '<strong>Horario asignado:</strong> Lunes a Viernes de <strong>4:00 PM a 5:00 PM</strong> (Salón 1)';
  } else if (categoryVal.includes('Infantil')) {
    confirmedTimeSlot.innerHTML = '<strong>Horario asignado:</strong> Lunes a Viernes de <strong>5:00 PM a 6:00 PM</strong> (Salón 1)';
  } else if (categoryVal.includes('Juvenil')) {
    confirmedTimeSlot.innerHTML = '<strong>Horario asignado:</strong> Lunes a Viernes de <strong>6:00 PM a 7:00 PM</strong> (Salón Principal)';
  } else if (categoryVal.includes('Adultos')) {
    confirmedTimeSlot.innerHTML = '<strong>Horario asignado:</strong> Lunes a Viernes de <strong>7:00 PM a 8:00 PM</strong> (Salón Principal)';
  } else {
    confirmedTimeSlot.innerHTML = 'Selecciona tu categoría para ver tu horario exacto de 4 a 8 PM.';
  }
}

/* ==========================================================================
   4. CURRENCY TOGGLE (USD vs BOLÍVARES)
   ========================================================================== */
function initCurrencyToggle() {
  const usdBtn = document.getElementById('currUsdBtn');
  const bsBtn = document.getElementById('currBsBtn');
  const priceVals = document.querySelectorAll('.price-val');
  const inscVals = document.querySelectorAll('.insc-val');
  const currencySyms = document.querySelectorAll('.currency-sym');

  if (!usdBtn || !bsBtn) return;

  function setCurrency(mode) {
    if (mode === 'USD') {
      usdBtn.classList.add('active');
      bsBtn.classList.remove('active');
      currencySyms.forEach(sym => sym.textContent = '$');
      priceVals.forEach(el => el.textContent = el.dataset.usd);
      inscVals.forEach(el => el.textContent = '$' + el.dataset.usd);
    } else {
      bsBtn.classList.add('active');
      usdBtn.classList.remove('active');
      currencySyms.forEach(sym => sym.textContent = 'Bs.');
      priceVals.forEach(el => el.textContent = el.dataset.bs);
      inscVals.forEach(el => el.textContent = 'Bs. ' + el.dataset.bs);
    }
  }

  usdBtn.addEventListener('click', () => setCurrency('USD'));
  bsBtn.addEventListener('click', () => setCurrency('VES'));
}

/* ==========================================================================
   5. VIDEO PLAYER & PLAYLIST SWITCHER
   ========================================================================== */
function initVideoPlayer() {
  const mainVideoFrame = document.getElementById('mainVideoFrame');
  const currentVideoTitle = document.getElementById('currentVideoTitle');
  const playlistCards = document.querySelectorAll('.playlist-card');
  const btnRestart = document.getElementById('btnRestartVideo');
  const btnFullscreen = document.getElementById('btnFullscreenVideo');
  const videoBoxWrapper = document.getElementById('videoBoxWrapper');

  playlistCards.forEach(card => {
    card.addEventListener('click', () => {
      playlistCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const videoId = card.dataset.videoid;
      const title = card.dataset.title;

      if (mainVideoFrame && videoId) {
        // Change YouTube embed cleanly
        mainVideoFrame.src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1&enablejsapi=1`;
        if (currentVideoTitle) {
          currentVideoTitle.textContent = title;
        }
        showToast(`Reproduciendo: ${title}`, 'info');
        playSubtleChime();
      }
    });
  });

  if (btnRestart && mainVideoFrame) {
    btnRestart.addEventListener('click', () => {
      const currentSrc = mainVideoFrame.src;
      mainVideoFrame.src = currentSrc;
      showToast('Video reiniciado', 'info');
    });
  }

  if (btnFullscreen && videoBoxWrapper) {
    btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        videoBoxWrapper.requestFullscreen().catch(err => {
          showToast('No se pudo activar pantalla completa', 'warning');
        });
      } else {
        document.exitFullscreen();
      }
    });
  }
}

/* ==========================================================================
   6. SILHOUETTE CARD 3D TILT EFFECT
   ========================================================================== */
function initSilhouetteCardTilt() {
  const card = document.getElementById('silhouetteCard');
  if (!card) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 14;
    const rotateY = (x / rect.width) * 14;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

/* ==========================================================================
   7. FORM INTERACTIVITY, VALIDATION & ENROLLMENT RECEIPT
   ========================================================================== */
function initFormInteractivity() {
  const form = document.getElementById('enrollmentForm');
  const ageInput = document.getElementById('studentAge');
  const guardianBox = document.getElementById('guardianBox');
  const categorySelect = document.getElementById('enrollCategory');
  const birthDateInput = document.getElementById('studentBirthDate');

  // Auto calculate age if birthdate is entered
  if (birthDateInput && ageInput) {
    birthDateInput.addEventListener('change', () => {
      if (birthDateInput.value) {
        const birthYear = new Date(birthDateInput.value).getFullYear();
        const currentYear = new Date().getFullYear();
        const computedAge = currentYear - birthYear;
        if (computedAge >= 3 && computedAge <= 80) {
          ageInput.value = computedAge;
          handleAgeChange(computedAge);
        }
      }
    });
  }

  // Handle Age change -> guardian requirement & category recommendation
  if (ageInput) {
    ageInput.addEventListener('input', () => {
      const age = parseInt(ageInput.value, 10);
      handleAgeChange(age);
    });
  }

  function handleAgeChange(age) {
    if (!isNaN(age)) {
      if (age < 18) {
        guardianBox.style.display = 'block';
        guardianBox.style.border = '1px solid var(--gold-400)';
      } else {
        guardianBox.style.border = '1px dashed rgba(234, 179, 8, 0.3)';
      }

      // Auto-suggest category if not set
      if (categorySelect && !categorySelect.value) {
        if (age >= 4 && age <= 6) categorySelect.value = 'Semillitas (4 a 6 años)';
        else if (age >= 7 && age <= 11) categorySelect.value = 'Infantil (7 a 11 años)';
        else if (age >= 12 && age <= 17) categorySelect.value = 'Juvenil (12 a 17 años)';
        else if (age >= 18) categorySelect.value = 'Adultos & Elenco Principal (18+ años)';
        updateConfirmedRehearsalTime(categorySelect.value);
      }
    }
  }

  if (categorySelect) {
    categorySelect.addEventListener('change', () => {
      updateConfirmedRehearsalTime(categorySelect.value);
    });
  }

  // Handle Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('studentFullName').value.trim();
      const cedula = document.getElementById('studentCedula').value.trim();
      const age = document.getElementById('studentAge').value.trim();
      const gender = document.getElementById('studentGender').value;
      const phone = document.getElementById('studentPhone').value.trim();
      const category = document.getElementById('enrollCategory').value;
      const plan = document.getElementById('enrollPlan').value;
      const paymentMethod = document.getElementById('paymentMethod').value;
      const guardianName = document.getElementById('guardianName').value.trim();
      const guardianPhone = document.getElementById('guardianPhone').value.trim();

      // Simple Validation
      if (!fullName || !cedula || !age || !gender || !phone || !category) {
        showToast('Por favor completa todos los campos requeridos con asterisco (*)', 'warning');
        return;
      }

      if (parseInt(age, 10) < 18 && !guardianName) {
        showToast('Por favor ingresa el nombre del representante para menores de edad', 'warning');
        document.getElementById('guardianName').focus();
        return;
      }

      // Generate Unique Registration Code
      const regCode = 'DE-2026-' + Math.floor(1000 + Math.random() * 9000);
      const today = new Date().toLocaleDateString('es-VE', { year: 'numeric', month: '2-digit', day: '2-digit' });

      // Determine rehearsal time string
      let rehearsalTime = 'Lunes a Viernes • 4:00 PM a 8:00 PM';
      if (category.includes('Semillitas')) rehearsalTime = 'Lunes a Viernes • 4:00 PM a 5:00 PM';
      else if (category.includes('Infantil')) rehearsalTime = 'Lunes a Viernes • 5:00 PM a 6:00 PM';
      else if (category.includes('Juvenil')) rehearsalTime = 'Lunes a Viernes • 6:00 PM a 7:00 PM';
      else if (category.includes('Adultos')) rehearsalTime = 'Lunes a Viernes • 7:00 PM a 8:00 PM';

      const enrollmentData = {
        code: regCode,
        date: today,
        name: fullName,
        cedula: cedula,
        age: age,
        gender: gender,
        phone: phone,
        category: category,
        rehearsalTime: rehearsalTime,
        plan: plan,
        paymentMethod: paymentMethod,
        guardian: (parseInt(age, 10) < 18 && guardianName) ? `${guardianName} (${guardianPhone || phone})` : 'Mayor de edad / Independiente'
      };

      // Save to localStorage
      saveEnrollment(enrollmentData);

      // Populate Receipt Modal
      openReceiptModal(enrollmentData);

      // Play Sound Feedback
      playFanfareChime();

      showToast('¡Ficha de inscripción generada con éxito!', 'success');
    });
  }

  // Setup Receipt Modal Buttons
  const receiptModal = document.getElementById('receiptModal');
  const btnCloseReceipt = document.getElementById('btnCloseReceiptModal');
  const btnPrintReceipt = document.getElementById('btnPrintReceipt');
  const btnWhatsApp = document.getElementById('btnSendWhatsAppReceipt');

  if (btnCloseReceipt && receiptModal) {
    btnCloseReceipt.addEventListener('click', () => {
      receiptModal.classList.remove('active');
    });
  }

  if (btnPrintReceipt) {
    btnPrintReceipt.addEventListener('click', () => {
      window.print();
    });
  }

  if (btnWhatsApp) {
    btnWhatsApp.addEventListener('click', () => {
      const code = document.getElementById('receiptCode').textContent;
      const name = document.getElementById('receiptStudentName').textContent;
      const cedula = document.getElementById('receiptStudentCedula').textContent;
      const cat = document.getElementById('receiptCategory').textContent;
      const sched = document.getElementById('receiptSchedule').textContent;
      const plan = document.getElementById('receiptPlan').textContent;
      const pay = document.getElementById('receiptPayment').textContent;
      const guard = document.getElementById('receiptGuardian').textContent;

      const message = `🩰 *NUEVA INSCRIPCIÓN - DANZAS ERICK (CICLO 2026)* 🇻🇪%0A%0A` +
        `Hola Academia Danzas Erick, deseo consignar mi inscripción:%0A%0A` +
        `📌 *Código:* ${encodeURIComponent(code)}%0A` +
        `👤 *Bailarín(a):* ${encodeURIComponent(name)}%0A` +
        `🆔 *Cédula:* ${encodeURIComponent(cedula)}%0A` +
        `🎭 *Categoría:* ${encodeURIComponent(cat)}%0A` +
        `⏰ *Horario de Ensayos:* ${encodeURIComponent(sched)}%0A` +
        `💳 *Plan:* ${encodeURIComponent(plan)}%0A` +
        `💰 *Método de Pago:* ${encodeURIComponent(pay)}%0A` +
        `👨‍👩‍👧 *Representante:* ${encodeURIComponent(guard)}%0A%0A` +
        `¡Adjunto mi comprobante para asegurar mi cupo en Danzas Erick!`;

      window.open(`https://wa.me/584125551234?text=${message}`, '_blank');
    });
  }
}

function openReceiptModal(data) {
  document.getElementById('receiptCode').textContent = data.code;
  document.getElementById('receiptDate').textContent = data.date;
  document.getElementById('receiptStudentName').textContent = data.name;
  document.getElementById('receiptStudentCedula').textContent = data.cedula;
  document.getElementById('receiptStudentAge').textContent = `${data.age} años • ${data.gender}`;
  document.getElementById('receiptCategory').textContent = data.category;
  document.getElementById('receiptSchedule').textContent = data.rehearsalTime;
  document.getElementById('receiptPlan').textContent = data.plan;
  document.getElementById('receiptPayment').textContent = data.paymentMethod;
  document.getElementById('receiptGuardian').textContent = data.guardian;

  const modal = document.getElementById('receiptModal');
  if (modal) {
    modal.classList.add('active');
  }
}

/* ==========================================================================
   8. LOCAL STORAGE & ADMIN PANEL FOR ENROLLED STUDENTS
   ========================================================================== */
const STORAGE_KEY = 'danzas_erick_enrollments_v1';

function getStoredEnrollments() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    // Seed initial realistic Venezuelan students for demonstration
    const initialStudents = [
      {
        code: 'DE-2026-1042',
        date: '14/10/2026',
        name: 'Camila Victoria Paredes',
        cedula: 'V-32.901.442',
        age: '15',
        gender: 'Femenino',
        phone: '0414-9871122',
        category: 'Juvenil (12 a 17 años)',
        rehearsalTime: 'Lunes a Viernes • 6:00 a 7:00 PM',
        plan: 'Plan Juvenil Proyección',
        paymentMethod: 'Pago Móvil',
        guardian: 'María Elena Paredes'
      },
      {
        code: 'DE-2026-1088',
        date: '15/10/2026',
        name: 'Sebastián Alejandro Rivas',
        cedula: 'V-34.112.500',
        age: '9',
        gender: 'Masculino',
        phone: '0424-5553344',
        category: 'Infantil (7 a 11 años)',
        rehearsalTime: 'Lunes a Viernes • 5:00 a 6:00 PM',
        plan: 'Plan Semillita & Infantil',
        paymentMethod: 'Pago Móvil',
        guardian: 'José Gregorio Rivas'
      },
      {
        code: 'DE-2026-1120',
        date: '16/10/2026',
        name: 'Ana Coromoto Silva',
        cedula: 'V-26.890.312',
        age: '22',
        gender: 'Femenino',
        phone: '0412-3339988',
        category: 'Adultos & Elenco Principal (18+ años)',
        rehearsalTime: 'Lunes a Viernes • 7:00 a 8:00 PM',
        plan: 'Plan Elenco Principal & Adultos',
        paymentMethod: 'Transferencia Bancaria',
        guardian: 'Independiente'
      }
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialStudents));
    return initialStudents;
  }
  return JSON.parse(data);
}

function saveEnrollment(record) {
  const current = getStoredEnrollments();
  current.unshift(record); // Prepend so latest is first
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  updateAdminTable();
}

function initAdminPanel() {
  const btnAdmin = document.getElementById('btnAdminPanel');
  const adminModal = document.getElementById('adminModal');
  const btnCloseAdmin = document.getElementById('btnCloseAdminModal');
  const btnCloseFooter = document.getElementById('btnCloseAdminFooter');
  const btnClear = document.getElementById('btnClearStorage');
  const btnExport = document.getElementById('btnExportCsv');

  if (btnAdmin && adminModal) {
    btnAdmin.addEventListener('click', () => {
      updateAdminTable();
      adminModal.classList.add('active');
    });
  }

  [btnCloseAdmin, btnCloseFooter].forEach(btn => {
    if (btn && adminModal) {
      btn.addEventListener('click', () => {
        adminModal.classList.remove('active');
      });
    }
  });

  if (btnClear) {
    btnClear.addEventListener('click', () => {
      if (confirm('¿Deseas reiniciar los registros de alumnos inscritos en este equipo?')) {
        localStorage.removeItem(STORAGE_KEY);
        updateAdminTable();
        showToast('Registros reiniciados', 'info');
      }
    });
  }

  if (btnExport) {
    btnExport.addEventListener('click', () => {
      exportEnrollmentsToCSV();
    });
  }

  updateAdminTable();
}

function updateAdminTable() {
  const list = getStoredEnrollments();
  const tbody = document.getElementById('adminStudentsTbody');
  const totalCountEl = document.getElementById('adminTotalCount');

  if (totalCountEl) totalCountEl.textContent = list.length;
  if (!tbody) return;

  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding: 2rem; color: #94a3b8;">No hay alumnos inscritos registrados aún.</td></tr>';
    return;
  }

  tbody.innerHTML = list.map(student => `
    <tr>
      <td><strong class="text-gold">${student.code}</strong></td>
      <td><strong>${student.name}</strong> <br><small style="color:#94a3b8;">${student.age} años • ${student.gender}</small></td>
      <td>${student.cedula}</td>
      <td><span style="font-weight:600; color:var(--gold-300);">${student.category}</span></td>
      <td><small>${student.rehearsalTime}</small></td>
      <td>${student.phone}</td>
      <td><small>${student.plan}</small></td>
    </tr>
  `).join('');
}

function exportEnrollmentsToCSV() {
  const list = getStoredEnrollments();
  if (list.length === 0) {
    showToast('No hay datos para exportar', 'warning');
    return;
  }

  let csv = 'Codigo,Fecha,Alumno,Cedula,Edad,Genero,Telefono,Categoria,Horario,Plan,Pago,Representante\n';
  list.forEach(s => {
    csv += `"${s.code}","${s.date}","${s.name}","${s.cedula}","${s.age}","${s.gender}","${s.phone}","${s.category}","${s.rehearsalTime}","${s.plan}","${s.paymentMethod}","${s.guardian}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `danzas_erick_alumnos_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Archivo CSV descargado correctamente', 'success');
}

/* ==========================================================================
   9. PAYMENT INFO COPY BUTTONS
   ========================================================================== */
function initPaymentCopyButtons() {
  document.querySelectorAll('.btn-copy-info').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.dataset.copy;
      if (navigator.clipboard && textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`¡Copiado al portapapeles! (${textToCopy})`, 'success');
          playSubtleChime();
        });
      }
    });
  });
}

/* ==========================================================================
   10. MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });

    // Close when clicking nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   11. TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = '<i class="fa-solid fa-circle-info text-gold"></i>';
  if (type === 'success') icon = '<i class="fa-solid fa-circle-check" style="color:#22c55e;"></i>';
  if (type === 'warning') icon = '<i class="fa-solid fa-triangle-exclamation" style="color:#eab308;"></i>';

  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 20);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* ==========================================================================
   12. WEB AUDIO API SYNTH CHIMES (Pure, 0 external audio files needed)
   ========================================================================== */
function getAudioContext() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  if (!window._danceAudioCtx) {
    window._danceAudioCtx = new AudioContext();
  }
  if (window._danceAudioCtx.state === 'suspended') {
    window._danceAudioCtx.resume();
  }
  return window._danceAudioCtx;
}

function playSubtleChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  } catch (e) {
    // Audio context silently ignored if policy prevents
  }
}

function playFanfareChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [440, 554.37, 659.25, 880]; // A major arpeggio
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = ctx.currentTime + idx * 0.08;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.35);
    });
  } catch (e) {}
}
