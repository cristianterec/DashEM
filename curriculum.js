const curriculum = {
    respiratory: {
        lessons: [
            {
                title: "Asthma Exacerbation",
                unlocked: true,
                completed: false,
                summary: {
                    definition: "Acute worsening of reversible airway obstruction leading to respiratory distress.",
                    etiology: "Common triggers include allergens, infections, exercise, and poor medication adherence.",
                    pathophysiology: "Bronchial smooth muscle constriction, airway inflammation, and mucus plugging reduce airflow.",
                    clinical: "Wheezing, dyspnea, tachypnea, and prolonged expiratory phase.",
                    diagnosis: "Clinical presentation supported by peak flow or spirometry showing reduced expiratory flow.",
                    treatment: "Nebulized albuterol with ipratropium, systemic corticosteroids, and oxygen as needed.",
                    disposition: "Discharge if improved after therapy; admit for persistent symptoms or risk factors."
                },
                quiz: [
                    {
                        type: 'multiple',
                        question: 'Which medication provides rapid bronchodilation in acute asthma?',
                        options: ['Oral prednisone', 'Nebulized albuterol', 'Montelukast', 'Inhaled corticosteroid'],
                        correct: 1,
                        explanation: 'Short-acting beta agonists like albuterol act quickly to reverse bronchospasm.'
                    },
                    {
                        type: 'fill',
                        question: 'First-line therapy for severe asthma exacerbation includes nebulized __________.',
                        answer: 'albuterol and ipratropium',
                        explanation: 'Combining a beta agonist with an anticholinergic offers superior bronchodilation in severe attacks.'
                    }
                ]
            },
            {
                title: 'Pulmonary Embolism',
                unlocked: false,
                completed: false,
                summary: {
                    definition: 'Obstruction of pulmonary arteries by thrombus, typically from deep veins of the legs.',
                    etiology: 'Venous thromboembolism risk factors include immobilization, surgery, cancer, and thrombophilia.',
                    pathophysiology: 'Emboli increase pulmonary vascular resistance causing V/Q mismatch and right heart strain.',
                    clinical: 'Sudden dyspnea, pleuritic chest pain, tachycardia, and hemoptysis.',
                    diagnosis: 'CT pulmonary angiography is gold standard; D-dimer useful in low-risk patients.',
                    treatment: 'Anticoagulation with heparin followed by oral agents; thrombolysis for massive PE.',
                    disposition: 'Admit for anticoagulation and monitoring; consider ICU for hemodynamic instability.'
                },
                quiz: [
                    {
                        type: 'multiple',
                        question: 'The triad of dyspnea, chest pain, and hemoptysis is classic for which emergency?',
                        options: ['Pneumonia', 'Pulmonary embolism', 'COPD exacerbation', 'Tension pneumothorax'],
                        correct: 1,
                        explanation: 'These symptoms together strongly suggest pulmonary embolism.'
                    }
                ]
            }
        ]
    },
    cardiovascular: { lessons: [] },
    trauma: { lessons: [] },
    neurological: { lessons: [] },
    gastrointestinal: { lessons: [] },
    resuscitation: { lessons: [] },
    endocrine: { lessons: [] },
    psychiatric: { lessons: [] }
};

let currentCategory = '';
let currentLessonIndex = 0;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let answered = false;

function openCategory(category) {
    currentCategory = category;
    const lessons = curriculum[category].lessons;
    const listContainer = document.getElementById('lessonList');
    listContainer.innerHTML = '';
    lessons.forEach((lesson, index) => {
        const button = document.createElement('button');
        button.className = 'start-button';
        button.textContent = lesson.title + (lesson.completed ? ' \u2713' : '');
        button.disabled = !lesson.unlocked;
        button.onclick = () => showLesson(index);
        listContainer.appendChild(button);
    });
    document.getElementById('lessonSummary').style.display = 'none';
    document.getElementById('lessonModal').style.display = 'flex';
}

function closeLessons() {
    document.getElementById('lessonModal').style.display = 'none';
}

function showLesson(index) {
    currentLessonIndex = index;
    const lesson = curriculum[currentCategory].lessons[index];
    document.getElementById('lessonTitle').textContent = lesson.title;
    const s = lesson.summary;
    document.getElementById('summaryContent').innerHTML = `
        <h3>Definition</h3><p>${s.definition}</p>
        <h3>Etiology</h3><p>${s.etiology}</p>
        <h3>Pathophysiology</h3><p>${s.pathophysiology}</p>
        <h3>Clinical Features</h3><p>${s.clinical}</p>
        <h3>Diagnosis</h3><p>${s.diagnosis}</p>
        <h3>Treatment</h3><p>${s.treatment}</p>
        <h3>Disposition</h3><p>${s.disposition}</p>`;
    document.getElementById('lessonSummary').style.display = 'block';
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    document.getElementById('lessonModal').style.display = 'none';
    document.getElementById('quizModal').style.display = 'flex';
    loadQuestion();
}

function loadQuestion() {
    const lesson = curriculum[currentCategory].lessons[currentLessonIndex];
    const questions = lesson.quiz;
    const question = questions[currentQuestionIndex];
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = questions.length;
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('quizProgressFill').style.width = progress + '%';
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    if (question.type === 'multiple') {
        question.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-button';
            btn.textContent = opt;
            btn.onclick = () => selectOption(i);
            container.appendChild(btn);
        });
    } else if (question.type === 'fill') {
        const input = document.createElement('input');
        input.id = 'fillInput';
        input.className = 'option-button';
        input.style.textAlign = 'left';
        container.appendChild(input);
    }
    document.getElementById('submitButton').className = 'submit-button';
    document.getElementById('submitButton').textContent = 'Check Answer';
    document.getElementById('explanation').style.display = 'none';
    selectedAnswer = null;
    answered = false;
}

function selectOption(index) {
    if (answered) return;
    selectedAnswer = index;
    const options = document.querySelectorAll('.option-button');
    options.forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === index) opt.classList.add('selected');
    });
    document.getElementById('submitButton').classList.add('active');
}

function submitAnswer() {
    if (answered) return;
    const lesson = curriculum[currentCategory].lessons[currentLessonIndex];
    const questions = lesson.quiz;
    const question = questions[currentQuestionIndex];
    let correct = false;
    if (question.type === 'multiple') {
        const options = document.querySelectorAll('.option-button');
        options.forEach((opt, i) => {
            if (i === question.correct) opt.classList.add('correct');
            else if (i === selectedAnswer) opt.classList.add('incorrect');
        });
        correct = selectedAnswer === question.correct;
    } else if (question.type === 'fill') {
        const val = document.getElementById('fillInput').value.trim().toLowerCase();
        correct = val === question.answer.toLowerCase();
        const feedback = document.createElement('div');
        feedback.className = correct ? 'correct' : 'incorrect';
        feedback.textContent = correct ? 'Correct' : `Correct answer: ${question.answer}`;
        document.getElementById('optionsContainer').appendChild(feedback);
    }
    if (correct) score++;
    document.getElementById('explanationText').textContent = question.explanation;
    document.getElementById('explanation').style.display = 'block';
    answered = true;
    if (currentQuestionIndex < questions.length - 1) {
        document.getElementById('submitButton').textContent = 'Next Question';
        document.getElementById('submitButton').onclick = nextQuestion;
    } else {
        document.getElementById('submitButton').textContent = 'Finish Quiz';
        document.getElementById('submitButton').onclick = finishQuiz;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
    document.getElementById('submitButton').onclick = submitAnswer;
}

function finishQuiz() {
    const lesson = curriculum[currentCategory].lessons[currentLessonIndex];
    const questions = lesson.quiz;
    const percentage = Math.round((score / questions.length) * 100);
    alert(`Quiz Complete!\n\nScore: ${score}/${questions.length} (${percentage}%)`);
    lesson.completed = true;
    const nextLesson = curriculum[currentCategory].lessons[currentLessonIndex + 1];
    if (nextLesson) nextLesson.unlocked = true;
    const currentXP = parseInt(document.getElementById('gems').textContent);
    const earnedXP = score * 20;
    document.getElementById('gems').textContent = currentXP + earnedXP;
    closeQuiz();
    openCategory(currentCategory);
}

function closeQuiz() {
    document.getElementById('quizModal').style.display = 'none';
    selectedAnswer = null;
    answered = false;
}
