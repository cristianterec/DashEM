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
    cardiovascular: {
        lessons: [
            {
                title: "Acute Coronary Syndrome",
                unlocked: true,
                completed: false,
                summary: {
                    definition: "Acute myocardial ischemia due to reduced coronary perfusion.",
                    etiology: "Usually from plaque rupture with thrombus formation.",
                    pathophysiology: "Coronary occlusion decreases oxygen supply leading to myocardial injury.",
                    clinical: "Pressure-like chest pain radiating to arm or jaw, diaphoresis, nausea.",
                    diagnosis: "ECG changes and elevated troponin confirm myocardial infarction.",
                    treatment: "Chewable aspirin, nitrates, beta blockers, and urgent reperfusion.",
                    disposition: "Admit to monitored setting; emergent cath lab for STEMI."
                },
                quiz: [
                    {type:'multiple', question:'Which biomarker confirms myocardial injury?', options:['Troponin','BNP','D-dimer','CRP'], correct:0, explanation:'Troponin is the most specific marker of myocardial necrosis.'},
                    {type:'fill', question:'Initial management includes chewable ______ and rapid reperfusion.', answer:'aspirin', explanation:'Early aspirin inhibits platelet aggregation and improves outcomes.'}
                ]
            },
            {
                title: "Atrial Fibrillation with RVR",
                unlocked: false,
                completed: false,
                summary: {
                    definition: "Irregularly irregular rhythm with rapid ventricular response.",
                    etiology: "Often triggered by structural heart disease, hyperthyroidism, or alcohol.",
                    pathophysiology: "Chaotic atrial activity leads to ineffective contraction and variable AV conduction.",
                    clinical: "Palpitations, dizziness, fatigue, or dyspnea.",
                    diagnosis: "ECG shows absence of P waves and irregular narrow complexes.",
                    treatment: "Rate control with diltiazem or beta blockers and anticoagulation.",
                    disposition: "Discharge with follow-up if stable; admit if unstable or new onset."
                },
                quiz: [
                    {type:'multiple', question:'Which medication is preferred for rate control in AF with RVR?', options:['Amiodarone','Diltiazem','Atropine','Epinephrine'], correct:1, explanation:'Diltiazem slows AV nodal conduction to control ventricular rate.'}
                ]
            }
        ]
    },
    trauma: {
        lessons: [
            {
                title: "Traumatic Brain Injury",
                unlocked: true,
                completed: false,
                summary: {
                    definition: "Brain dysfunction caused by external mechanical force.",
                    etiology: "Motor vehicle crashes, falls, assaults, and sports injuries.",
                    pathophysiology: "Primary impact causes contusion and shearing; secondary injury from edema and ischemia.",
                    clinical: "Altered mental status, headache, vomiting, focal deficits.",
                    diagnosis: "CT head without contrast is the imaging of choice.",
                    treatment: "Airway protection, blood pressure control, and neurosurgical consultation.",
                    disposition: "Admit for observation if moderate to severe; discharge minor with precautions."
                },
                quiz: [
                    {type:'multiple', question:'What imaging modality is first-line for suspected TBI?', options:['MRI','CT head','X-ray','Ultrasound'], correct:1, explanation:'CT quickly detects hemorrhage and fractures in acute TBI.'}
                ]
            },
            {
                title: "Spinal Cord Injury",
                unlocked: false,
                completed: false,
                summary: {
                    definition: "Damage to spinal cord resulting in motor or sensory deficits.",
                    etiology: "Trauma from falls, MVCs, or penetrating injuries.",
                    pathophysiology: "Mechanical disruption and vascular compromise cause neuronal death.",
                    clinical: "Pain, weakness, or paralysis below the level of injury.",
                    diagnosis: "MRI delineates cord compression; CT identifies fractures.",
                    treatment: "Immobilization, high-dose steroids are controversial, surgical decompression.",
                    disposition: "Admit to intensive care for stabilization and monitoring."
                },
                quiz: [
                    {type:'fill', question:'Preferred imaging to evaluate spinal cord injury is ______.', answer:'MRI', explanation:'MRI best visualizes soft tissue and cord compression.'}
                ]
            }
        ]
    },
    neurological: {
        lessons: [
            {
                title: "Ischemic Stroke",
                unlocked: true,
                completed: false,
                summary: {
                    definition: "Focal cerebral infarction due to arterial occlusion.",
                    etiology: "Often from thromboembolism related to atrial fibrillation or carotid disease.",
                    pathophysiology: "Interrupted cerebral blood flow leads to neuronal death within minutes.",
                    clinical: "Sudden unilateral weakness, facial droop, speech difficulty.",
                    diagnosis: "Non-contrast head CT to exclude hemorrhage prior to thrombolysis.",
                    treatment: "IV tPA within 4.5 hours and mechanical thrombectomy in large vessel occlusion.",
                    disposition: "Admit to stroke unit for monitoring and secondary prevention."
                },
                quiz: [
                    {type:'fill', question:'IV ______ is recommended within 4.5 hours for eligible ischemic stroke patients.', answer:'tPA', explanation:'Early tissue plasminogen activator improves functional outcomes.'}
                ]
            },
            {
                title: "Status Epilepticus",
                unlocked: false,
                completed: false,
                summary: {
                    definition: "Seizure lasting >5 minutes or recurrent seizures without recovery.",
                    etiology: "Common causes include medication noncompliance, stroke, infection, or metabolic issues.",
                    pathophysiology: "Prolonged neuronal excitation leads to excitotoxic injury.",
                    clinical: "Persistent convulsions, altered consciousness, autonomic instability.",
                    diagnosis: "Clinical; labs and imaging seek underlying cause.",
                    treatment: "Immediate benzodiazepines followed by antiepileptics like levetiracetam.",
                    disposition: "Admit to ICU for continuous monitoring and treatment."
                },
                quiz: [
                    {type:'multiple', question:'First-line medication for status epilepticus is?', options:['Phenytoin','Lorazepam','Propofol','Valproate'], correct:1, explanation:'Benzodiazepines such as lorazepam terminate seizures rapidly.'}
                ]
            }
        ]
    },
    gastrointestinal: {
        lessons: [
            {
                title: "Upper GI Bleed",
                unlocked: true,
                completed: false,
                summary: {
                    definition: "Hemorrhage originating proximal to the ligament of Treitz.",
                    etiology: "Peptic ulcers, varices, and gastritis are common causes.",
                    pathophysiology: "Disruption of mucosal vessels leads to intraluminal blood loss.",
                    clinical: "Hematemesis, melena, and signs of hypovolemia.",
                    diagnosis: "Endoscopy identifies source and allows therapy.",
                    treatment: "Resuscitation, proton pump inhibitors, and endoscopic hemostasis.",
                    disposition: "Admit for monitoring; ICU for ongoing bleeding or instability."
                },
                quiz: [
                    {type:'multiple', question:'Which medication reduces rebleeding in peptic ulcer disease?', options:['Proton pump inhibitor','Antacid','Sucralfate','Metoclopramide'], correct:0, explanation:'IV proton pump inhibitors stabilize clots and decrease rebleeding.'}
                ]
            },
            {
                title: "Appendicitis",
                unlocked: false,
                completed: false,
                summary: {
                    definition: "Inflammation of the vermiform appendix.",
                    etiology: "Usually due to obstruction by fecalith or lymphoid hyperplasia.",
                    pathophysiology: "Obstruction leads to bacterial overgrowth and inflammation.",
                    clinical: "Periumbilical pain migrating to RLQ, fever, nausea.",
                    diagnosis: "CT abdomen or ultrasound in children and pregnant patients.",
                    treatment: "Surgical appendectomy with perioperative antibiotics.",
                    disposition: "Admit for surgery; discharge post-op when stable."
                },
                quiz: [
                    {type:'fill', question:'Classic abdominal pain of appendicitis localizes to the ______ quadrant.', answer:'right lower', explanation:'Pain typically migrates to the right lower quadrant (McBurney point).'}
                ]
            }
        ]
    },
    resuscitation: {
        lessons: [
            {
                title: "Cardiac Arrest",
                unlocked: true,
                completed: false,
                summary: {
                    definition: "Cessation of cardiac mechanical activity with absence of circulation.",
                    etiology: "Often due to ventricular fibrillation, myocardial infarction, or severe hypoxia.",
                    pathophysiology: "Loss of effective perfusion leads to cellular hypoxia and death.",
                    clinical: "Unresponsiveness, apnea, pulselessness.",
                    diagnosis: "Clinical; confirmed by absent pulse and apnea.",
                    treatment: "Immediate CPR, defibrillation, and ACLS medications.",
                    disposition: "Return of spontaneous circulation requires ICU care; otherwise pronounce death."
                },
                quiz: [
                    {type:'order', question:'Place the basic life support steps in order:', options:['Start chest compressions','Check responsiveness','Give rescue breaths','Call for help/activate EMS'], answer:[1,3,0,2], explanation:'Recognize unresponsiveness, activate EMS, begin compressions, then provide breaths.'}
                ]
            },
            {
                title: "Septic Shock",
                unlocked: false,
                completed: false,
                summary: {
                    definition: "Sepsis with persistent hypotension requiring vasopressors despite fluids.",
                    etiology: "Bacterial infections leading to systemic inflammatory response.",
                    pathophysiology: "Cytokine storm causes vasodilation and capillary leak leading to hypoperfusion.",
                    clinical: "Fever, tachycardia, hypotension, altered mental status.",
                    diagnosis: "Elevated lactate and hypotension despite fluids; positive cultures.",
                    treatment: "Early broad-spectrum antibiotics, fluid resuscitation, vasopressors.",
                    disposition: "Admit to ICU for aggressive management and monitoring."
                },
                quiz: [
                    {type:'multiple', question:'First-line vasopressor for septic shock?', options:['Dopamine','Epinephrine','Norepinephrine','Phenylephrine'], correct:2, explanation:'Norepinephrine is preferred to restore vascular tone in septic shock.'}
                ]
            }
        ]
    },
    endocrine: {
        lessons: [
            {
                title: "Diabetic Ketoacidosis",
                unlocked: true,
                completed: false,
                summary: {
                    definition: "Life-threatening hyperglycemia with ketosis and metabolic acidosis.",
                    etiology: "Common in type 1 diabetes from insulin omission or infection.",
                    pathophysiology: "Insulin deficiency leads to lipolysis and ketone production causing acidosis.",
                    clinical: "Polyuria, polydipsia, abdominal pain, Kussmaul respirations.",
                    diagnosis: "Hyperglycemia, high anion gap acidosis, positive serum ketones.",
                    treatment: "Fluids, insulin infusion, and electrolyte correction.",
                    disposition: "Admit to ICU until metabolic abnormalities resolve."
                },
                quiz: [
                    {type:'multiple', question:'Which electrolyte must be monitored closely during DKA treatment?', options:['Potassium','Calcium','Sodium','Magnesium'], correct:0, explanation:'Insulin therapy shifts potassium intracellularly risking hypokalemia.'}
                ]
            },
            {
                title: "Thyroid Storm",
                unlocked: false,
                completed: false,
                summary: {
                    definition: "Severe, life-threatening thyrotoxicosis.",
                    etiology: "Usually precipitated by infection, surgery, or iodine exposure in hyperthyroid patients.",
                    pathophysiology: "Excess thyroid hormone increases metabolic activity and adrenergic tone.",
                    clinical: "Fever, tachycardia, hypertension, altered mental status.",
                    diagnosis: "Clinical based on thyrotoxic symptoms and elevated thyroid hormones.",
                    treatment: "Beta blockers, thionamides, iodine, and corticosteroids.",
                    disposition: "Admit to ICU for aggressive therapy and monitoring."
                },
                quiz: [
                    {type:'fill', question:'Initial therapy for thyroid storm includes a beta blocker such as ______.', answer:'propranolol', explanation:'Propranolol controls adrenergic symptoms and blocks peripheral T4→T3 conversion.'}
                ]
            }
        ]
    },
    psychiatric: {
        lessons: [
            {
                title: "Agitated Delirium",
                unlocked: true,
                completed: false,
                summary: {
                    definition: "Severe agitation and confusion due to acute medical or toxic causes.",
                    etiology: "Often from substance intoxication, withdrawal, or metabolic derangements.",
                    pathophysiology: "Catecholamine surge and altered neurotransmission cause agitation and hyperthermia.",
                    clinical: "Violent behavior, tachycardia, hyperthermia, altered mental status.",
                    diagnosis: "Clinical; labs and toxicology screen assess underlying cause.",
                    treatment: "Rapid sedation with benzodiazepines and cooling measures.",
                    disposition: "Admit for monitoring and treatment of underlying condition."
                },
                quiz: [
                    {type:'multiple', question:'Preferred initial agent for chemical restraint in agitated delirium?', options:['Haloperidol','Lorazepam','Ketamine','Olanzapine'], correct:1, explanation:'Benzodiazepines like lorazepam provide rapid, reliable sedation.'}
                ]
            },
            {
                title: "Suicidal Ideation",
                unlocked: false,
                completed: false,
                summary: {
                    definition: "Thoughts of ending one’s life with or without a specific plan.",
                    etiology: "Associated with depression, substance use, or psychosocial stressors.",
                    pathophysiology: "Complex interplay of neurochemical and environmental factors.",
                    clinical: "Expressed desire to die, hopelessness, or planning behavior.",
                    diagnosis: "Clinical assessment including risk stratification.",
                    treatment: "Ensure safety, psychiatric evaluation, and possible hospitalization.",
                    disposition: "Admit involuntarily if high risk; otherwise arrange urgent outpatient follow-up."
                },
                quiz: [
                    {type:'fill', question:'Assessment of suicidal patients should always include evaluation of intent, plan, and ______.', answer:'means', explanation:'Determining access to means helps gauge immediacy of risk.'}
                ]
            }
        ]
    }
};

let currentCategory = '';
let currentLessonIndex = 0;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let selectedOrder = [];
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
    selectedOrder = [];
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
    } else if (question.type === 'order') {
        selectedOrder = [];
        question.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-button';
            btn.textContent = opt;
            btn.onclick = () => selectOrder(i);
            container.appendChild(btn);
        });
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

function selectOrder(index) {
    if (answered) return;
    const buttons = document.querySelectorAll('.option-button');
    buttons[index].classList.add('selected');
    buttons[index].disabled = true;
    selectedOrder.push(index);
    const question = curriculum[currentCategory].lessons[currentLessonIndex].quiz[currentQuestionIndex];
    if (selectedOrder.length === question.answer.length) {
        document.getElementById('submitButton').classList.add('active');
    }
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
    } else if (question.type === 'order') {
        const buttons = document.querySelectorAll('.option-button');
        question.answer.forEach(idx => buttons[idx].classList.add('correct'));
        selectedOrder.forEach(idx => {
            if (!question.answer.includes(idx)) buttons[idx].classList.add('incorrect');
        });
        correct = selectedOrder.length === question.answer.length && selectedOrder.every((v,i)=> v === question.answer[i]);
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
