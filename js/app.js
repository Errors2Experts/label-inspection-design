/* LabelInspect - Minimal Frontend Interactions */

// Simple navigation helper
function goTo(page) {
  window.location.href = page;
}

// Login form
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('email')?.value;
  const password = document.getElementById('password')?.value;
  if (email && password) {
    // Mock login - redirect to dashboard
    window.location.href = 'dashboard.html';
  } else {
    alert('Please enter email and password');
  }
}

// Inspection wizard steps
let currentStep = 1;
const totalSteps = 5;

function showStep(step) {
  currentStep = step;
  document.querySelectorAll('.wizard-panel').forEach(p => p.classList.add('hidden'));
  const panel = document.getElementById('step-' + step);
  if (panel) panel.classList.remove('hidden');

  document.querySelectorAll('.step').forEach((s, i) => {
    s.classList.remove('active', 'done');
    if (i + 1 < step) s.classList.add('done');
    if (i + 1 === step) s.classList.add('active');
  });

  // Update buttons
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  if (prevBtn) prevBtn.style.display = step === 1 ? 'none' : 'inline-flex';
  if (nextBtn) {
    nextBtn.textContent = step === totalSteps ? 'Finish Inspection' : 'Next';
  }
}

function nextStep() {
  if (currentStep < totalSteps) {
    showStep(currentStep + 1);
  } else {
    // Finish
    alert('Inspection completed and saved!');
    window.location.href = 'history.html';
  }
}

function prevStep() {
  if (currentStep > 1) {
    showStep(currentStep - 1);
  }
}

// Mock barcode scan
function mockBarcodeScan() {
  const input = document.getElementById('barcode-input');
  if (input) {
    input.value = '8901030865483';
    document.getElementById('product-info')?.classList.remove('hidden');
  }
}

// Mock image upload
function handleImageUpload(input) {
  const preview = document.getElementById('image-preview');
  if (!preview || !input.files) return;
  preview.innerHTML = '';
  Array.from(input.files).forEach(file => {
    const img = document.createElement('img');
    img.className = 'thumb';
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
  });
  if (input.files.length > 0) {
    document.getElementById('ocr-status')?.classList.remove('hidden');
  }
}

// Mock OCR + AI processing
function runOCR() {
  const status = document.getElementById('ocr-status');
  if (status) {
    status.innerHTML = '<span class="badge badge-info">Processing OCR...</span>';
    setTimeout(() => {
      status.innerHTML = '<span class="badge badge-success">OCR Complete</span>';
      document.getElementById('ai-fields')?.classList.remove('hidden');
    }, 1500);
  }
}

// Mock compliance evaluation
function runCompliance() {
  const panel = document.getElementById('compliance-result');
  if (panel) {
    panel.classList.remove('hidden');
    panel.scrollIntoView({ behavior: 'smooth' });
  }
}

// Search / filter tables
function filterTable(inputId, tableId) {
  const query = document.getElementById(inputId)?.value.toLowerCase() || '';
  const rows = document.querySelectorAll('#' + tableId + ' tbody tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
}

// Toggle mobile menu (placeholder)
function toggleSidebar() {
  // For future mobile support
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav
  const path = window.location.pathname.split('/').pop() || 'dashboard.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    if (a.getAttribute('href') === path) {
      a.classList.add('active');
    }
  });

  // Init wizard if present
  if (document.getElementById('step-1')) {
    showStep(1);
  }
});
