/**
 * WeCare Survey - Main JavaScript
 * Handles rendering, pagination, and form validation
 */

// ============================================
// State Management
// ============================================
let currentPage = 1;
let totalPages = 0;
let answers = {}; // Store user answers: { questionNumber: selectedValue }

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on the detail page
    if (document.getElementById('survey-container')) {
        initSurvey();
    }

    // Initialize sidebar toggle for mobile
    initSidebarToggle();
});

/**
 * Initialize the survey
 */
function initSurvey() {
    if (typeof surveyData === 'undefined') {
        console.error('Survey data not loaded');
        return;
    }

    totalPages = surveyData.sections.length;

    // Render survey header
    renderSurveyHeader();

    // Render instructions
    renderInstructions();

    // Render current section
    renderCurrentSection();

    // Render pagination
    renderPagination();

    // Load saved answers from sessionStorage
    loadSavedAnswers();
}

// ============================================
// Rendering Functions
// ============================================

/**
 * Render survey header (title and period)
 */
function renderSurveyHeader() {
    const headerContainer = document.getElementById('survey-header');
    if (!headerContainer) return;

    headerContainer.innerHTML = `
        <h2 class="survey-title">${surveyData.title}</h2>
        <p class="survey-period">Periode : ${surveyData.period}</p>
    `;
}

/**
 * Render instructions list
 */
function renderInstructions() {
    const instructionsContainer = document.getElementById('survey-instructions');
    if (!instructionsContainer) return;

    let html = '<h6 class="instructions-title">Instruksi Pengisian :</h6>';
    html += '<ol class="instructions-list">';

    surveyData.instructions.forEach(instruction => {
        html += `<li>${instruction}</li>`;
    });

    html += '</ol>';
    instructionsContainer.innerHTML = html;
}

/**
 * Render the current section based on currentPage
 */
function renderCurrentSection() {
    const container = document.getElementById('questions-container');
    if (!container) return;

    const section = surveyData.sections[currentPage - 1];
    if (!section) return;

    let html = '';

    // Section header
    html += `
        <div class="section-header">
            <h5 class="section-title">${section.title}</h5>
        </div>
    `;

    // Questions
    section.questions.forEach(question => {
        html += renderQuestion(question);
    });

    container.innerHTML = html;

    // Restore saved answers for this section
    restoreAnswers(section);

    // Add event listeners for radio buttons
    addRadioListeners();
}

/**
 * Render a single question with radio options
 */
function renderQuestion(question) {
    const requiredText = question.required
        ? '<span class="required-indicator">*This field is required</span>'
        : '';

    let html = `
        <div class="question-container" data-question="${question.number}">
            <div class="question-label">
                ${question.number}.${question.text} ${requiredText}
            </div>
            <div class="options-list">
    `;

    question.options.forEach((option, index) => {
        const optionId = `q${question.number}_${option.value}`;
        const savedValue = answers[question.number];
        const isChecked = savedValue === option.value ? 'checked' : '';

        html += `
            <div class="option-item">
                <input type="radio" 
                       id="${optionId}" 
                       name="question_${question.number}" 
                       value="${option.value}"
                       ${isChecked}>
                <label for="${optionId}">${option.text}</label>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    return html;
}

/**
 * Render pagination controls
 */
function renderPagination() {
    const paginationContainer = document.getElementById('pagination-container');
    if (!paginationContainer) return;

    let optionsHtml = '';
    for (let i = 1; i <= totalPages; i++) {
        const selected = i === currentPage ? 'selected' : '';
        optionsHtml += `<option value="${i}" ${selected}>page ${i} of ${totalPages}</option>`;
    }

    paginationContainer.innerHTML = `
        <select class="pagination-select" id="page-select" onchange="goToPage(this.value)">
            ${optionsHtml}
        </select>
    `;

    // Update navigation buttons
    updateNavButtons();
}

/**
 * Update navigation buttons visibility
 */
function updateNavButtons() {
    const navContainer = document.getElementById('nav-buttons');
    if (!navContainer) return;

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    let html = '<div class="nav-buttons-wrapper">';

    // Previous button (always show container for consistent layout)
    html += '<div class="nav-btn-left">';
    if (!isFirstPage) {
        html += `
            <button type="button" class="btn-nav btn-prev" onclick="prevPage()">
                <i class="bi bi-chevron-left"></i> Previous
            </button>
        `;
    }
    html += '</div>';

    // Next or Submit button
    html += '<div class="nav-btn-right">';
    if (isLastPage) {
        html += `
            <button type="button" class="btn-nav btn-next" onclick="handleSubmit()">
                Submit
            </button>
        `;
    } else {
        html += `
            <button type="button" class="btn-nav btn-next" onclick="nextPage()">
                Next <i class="bi bi-chevron-right"></i>
            </button>
        `;
    }
    html += '</div>';

    html += '</div>';
    navContainer.innerHTML = html;
}


// ============================================
// Navigation Functions
// ============================================

/**
 * Go to a specific page
 */
function goToPage(pageNum) {
    pageNum = parseInt(pageNum);
    if (pageNum < 1 || pageNum > totalPages) return;

    // Save current answers before navigating
    saveCurrentAnswers();

    currentPage = pageNum;
    renderCurrentSection();
    renderPagination();

    // Scroll to top of questions
    const container = document.getElementById('questions-container');
    if (container) {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Go to next page
 */
function nextPage() {
    if (currentPage < totalPages) {
        // Validate current section before proceeding
        if (!validateCurrentSection()) {
            return;
        }
        goToPage(currentPage + 1);
    }
}

/**
 * Go to previous page
 */
function prevPage() {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
}

// ============================================
// Answer Management
// ============================================

/**
 * Add event listeners to radio buttons
 */
function addRadioListeners() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            const questionNum = this.name.replace('question_', '');
            answers[questionNum] = this.value;
            saveAnswersToSession();
        });
    });
}

/**
 * Save current section answers
 */
function saveCurrentAnswers() {
    const section = surveyData.sections[currentPage - 1];
    if (!section) return;

    section.questions.forEach(question => {
        const selected = document.querySelector(`input[name="question_${question.number}"]:checked`);
        if (selected) {
            answers[question.number] = selected.value;
        }
    });

    saveAnswersToSession();
}

/**
 * Restore answers for a section
 */
function restoreAnswers(section) {
    section.questions.forEach(question => {
        const savedValue = answers[question.number];
        if (savedValue) {
            const radio = document.querySelector(`input[name="question_${question.number}"][value="${savedValue}"]`);
            if (radio) {
                radio.checked = true;
            }
        }
    });
}

/**
 * Save answers to sessionStorage
 */
function saveAnswersToSession() {
    try {
        sessionStorage.setItem('surveyAnswers', JSON.stringify(answers));
    } catch (e) {
        console.warn('Could not save to sessionStorage:', e);
    }
}

/**
 * Load saved answers from sessionStorage
 */
function loadSavedAnswers() {
    try {
        const saved = sessionStorage.getItem('surveyAnswers');
        if (saved) {
            answers = JSON.parse(saved);
        }
    } catch (e) {
        console.warn('Could not load from sessionStorage:', e);
    }
}

// ============================================
// Validation
// ============================================

/**
 * Validate current section (all required questions answered)
 */
function validateCurrentSection() {
    const section = surveyData.sections[currentPage - 1];
    if (!section) return true;

    let isValid = true;
    let firstInvalid = null;

    section.questions.forEach(question => {
        if (question.required) {
            const selected = document.querySelector(`input[name="question_${question.number}"]:checked`);
            if (!selected) {
                isValid = false;
                if (!firstInvalid) {
                    firstInvalid = document.querySelector(`[data-question="${question.number}"]`);
                }
                // Highlight the question
                const container = document.querySelector(`[data-question="${question.number}"]`);
                if (container) {
                    container.style.backgroundColor = 'rgba(220, 53, 69, 0.05)';
                    container.style.borderRadius = '8px';
                    container.style.padding = '15px';
                    container.style.marginLeft = '-15px';
                    container.style.marginRight = '-15px';
                }
            }
        }
    });

    if (!isValid && firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        alert('Mohon jawab semua pertanyaan yang wajib diisi pada halaman ini.');
    }

    return isValid;
}

/**
 * Validate all sections
 */
function validateAllSections() {
    let allValid = true;
    let unansweredQuestions = [];

    surveyData.sections.forEach(section => {
        section.questions.forEach(question => {
            if (question.required && !answers[question.number]) {
                allValid = false;
                unansweredQuestions.push(question.number);
            }
        });
    });

    if (!allValid) {
        alert(`Pertanyaan berikut belum dijawab: ${unansweredQuestions.join(', ')}`);
    }

    return allValid;
}

// ============================================
// Form Submission
// ============================================

/**
 * Handle form submission
 */
function handleSubmit() {
    // Save current answers first
    saveCurrentAnswers();

    // Validate current section
    if (!validateCurrentSection()) {
        return;
    }

    // Validate all sections
    if (!validateAllSections()) {
        return;
    }

    // Show success message
    const totalAnswered = Object.keys(answers).length;
    const totalQuestions = surveyData.sections.reduce((acc, section) => acc + section.questions.length, 0);

    alert(`Terima kasih telah mengisi survei!\n\nAnda telah menjawab ${totalAnswered} dari ${totalQuestions} pertanyaan.`);

    // Clear session storage
    sessionStorage.removeItem('surveyAnswers');

    // Redirect to index page
    window.location.href = 'index.html';
}

// ============================================
// Sidebar Toggle (Mobile)
// ============================================

/**
 * Initialize sidebar toggle for mobile
 */
function initSidebarToggle() {
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            sidebar.classList.toggle('show');
            if (overlay) {
                overlay.classList.toggle('show');
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function () {
            sidebar.classList.remove('show');
            overlay.classList.remove('show');
        });
    }
}

/**
 * Toggle sidebar visibility
 */
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (sidebar) {
        sidebar.classList.toggle('show');
    }
    if (overlay) {
        overlay.classList.toggle('show');
    }
}
