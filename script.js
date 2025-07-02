const vaccineSchedule = [
    {
        age: '8 weeks',
        weeks: 8,
        vaccines: [
            { name: '6-in-1', diseases: 'Diphtheria, Tetanus, Whooping cough, Polio, Hib, Hepatitis B', sideEffects: 'Soreness, redness, swelling at injection site, fever, irritability.' },
            { name: 'Rotavirus', diseases: 'Rotavirus infection', sideEffects: 'Mild tummy upset, diarrhea.' },
            { name: 'Meningitis B', diseases: 'Meningococcal group B disease', sideEffects: 'Fever, irritability, feeding problems, skin rash.' }
        ]
    },
    {
        age: '12 weeks',
        weeks: 12,
        vaccines: [
            { name: '6-in-1 (2nd dose)', diseases: 'Diphtheria, Tetanus, Whooping cough, Polio, Hib, Hepatitis B', sideEffects: 'Soreness, redness, swelling at injection site, fever, irritability.' },
            { name: 'Rotavirus (2nd dose)', diseases: 'Rotavirus infection', sideEffects: 'Mild tummy upset, diarrhea.' },
            { name: 'Meningitis B (2nd dose)', diseases: 'Meningococcal group B disease', sideEffects: 'Fever, irritability, feeding problems, skin rash.' }
        ]
    },
    {
        age: '16 weeks',
        weeks: 16,
        vaccines: [
            { name: '6-in-1 (3rd dose)', diseases: 'Diphtheria, Tetanus, Whooping cough, Polio, Hib, Hepatitis B', sideEffects: 'Soreness, redness, swelling at injection site, fever, irritability.' },
            { name: 'Pneumococcal', diseases: 'Pneumococcal infections', sideEffects: 'Soreness, redness, swelling at injection site, fever.' }
        ]
    },
    {
        age: '1 year',
        weeks: 52,
        vaccines: [
            { name: 'Hib/MenC', diseases: 'Haemophilus influenzae type b, Meningococcal group C disease', sideEffects: 'Soreness, redness, swelling at injection site, fever.' },
            { name: 'MMR', diseases: 'Measles, Mumps, Rubella', sideEffects: 'Fever, rash, temporary joint pain.' },
            { name: 'Pneumococcal', diseases: 'Pneumococcal infections', sideEffects: 'Soreness, redness, swelling at injection site, fever.' },
            { name: 'Meningitis B (3rd dose)', diseases: 'Meningococcal group B disease', sideEffects: 'Fever, irritability, feeding problems, skin rash.' }
        ]
    },
    {
        age: '18 months (for children born on or after 1 July 2024)',
        weeks: 78,
        vaccines: [
            { name: '6-in-1 (4th dose)', diseases: 'Diphtheria, Tetanus, Whooping cough, Polio, Hib, Hepatitis B', sideEffects: 'Soreness, redness, swelling at injection site, fever, irritability.' },
            { name: 'MMR (2nd dose)', diseases: 'Measles, Mumps, Rubella', sideEffects: 'Fever, rash, temporary joint pain.' }
        ]
    },
    {
        age: '2 to 15 years (annually)',
        weeks: 104,
        vaccines: [
            { name: 'Children\'s flu vaccine', diseases: 'Influenza (flu)', sideEffects: 'Runny nose, headache, muscle aches, fever.' }
        ]
    },
    {
        age: '3 years and 4 months',
        weeks: 173,
        vaccines: [
             { name: '4-in-1 pre-school booster', diseases: 'Diphtheria, Tetanus, Whooping cough, Polio', sideEffects: 'Soreness, redness, swelling at injection site, fever.' },
             { name: 'MMR (2nd dose)', diseases: 'Measles, Mumps, Rubella', sideEffects: 'Fever, rash, temporary joint pain.' }
        ]
    },
    {
        age: '12-13 years',
        weeks: 624,
        vaccines: [
            { name: 'HPV', diseases: 'Human papillomavirus', sideEffects: 'Soreness, redness, swelling at injection site, headache, fever.' }
        ]
    },
    {
        age: '14 years',
        weeks: 728,
        vaccines: [
            { name: '3-in-1 teenage booster', diseases: 'Tetanus, Diphtheria, Polio', sideEffects: 'Soreness, redness, swelling at injection site, headache, fever.' },
            { name: 'MenACWY', diseases: 'Meningococcal groups A, C, W, Y disease', sideEffects: 'Soreness, redness, swelling at injection site, headache, fever.' }
        ]
    }
];

const translations = {
    en: {
        nextStepsTitle: "Next Steps",
        ageBasedRecommendation: (years, months, weeks) => {
            if (years > 0) {
                return `Based on your child's age of <strong>${years} year${years > 1 ? 's' : ''} and ${months} month${months > 1 ? 's' : ''}</strong>, the following vaccinations are recommended:`;
            } else {
                return `Based on your child's age of <strong>${months} month${months > 1 ? 's' : ''} and ${weeks} week${weeks > 1 ? 's' : ''}</strong>, the following vaccinations are recommended:`;
            }
        },
        allUpToDate: "All vaccinations appear to be up to date for your child's current age according to the schedule shown.",
        howToGetVaccinations: "How to get the vaccinations:",
        gpContact: "In England, you should be contacted by your GP surgery when your child is due for a routine vaccination. This is usually by letter or text message. You'll be asked to book an appointment at the surgery.",
        missedVaccination: "If you think your child has missed a vaccination, please contact your GP surgery to book an appointment as soon as possible. It's best to have them on time, but you can still catch up.",
        disclaimer: "Disclaimer: I am a large language model and not a medical professional. This information is for guidance only. Please consult with a healthcare provider for medical advice.",
        listenButton: "Listen to text",
        enterDOB: "Please enter the child's date of birth first.",
        selectFile: "Please select an image file first."
    },
    es: {
        nextStepsTitle: "Próximos Pasos",
        ageBasedRecommendation: (years, months, weeks) => {
            if (years > 0) {
                return `Según la edad de su hijo/a de <strong>${years} año${years > 1 ? 's' : ''} y ${months} mes${months > 1 ? 'es' : ''}</strong>, se recomiendan las siguientes vacunas:`;
            } else {
                return `Según la edad de su hijo/a de <strong>${months} mes${months > 1 ? 'es' : ''} y ${weeks} semana${weeks > 1 ? 's' : ''}</strong>, se recomiendan las siguientes vacunas:`;
            }
        },
        allUpToDate: "Todas las vacunas parecen estar al día para la edad actual de su hijo/a según el calendario mostrado.",
        howToGetVaccinations: "Cómo obtener las vacunas:",
        gpContact: "En Inglaterra, su centro de salud (GP) debería contactarle cuando su hijo/a deba recibir una vacuna de rutina. Esto suele ser por carta o mensaje de texto. Se le pedirá que reserve una cita en el centro de salud.",
        missedVaccination: "Si cree que su hijo/a ha omitido una vacuna, póngase en contacto con su centro de salud (GP) para reservar una cita lo antes posible. Es mejor que las reciban a tiempo, pero aún pueden ponerse al día.",
        disclaimer: "Descargo de responsabilidad: Soy un modelo de lenguaje grande y no un profesional médico. Esta información es solo una guía. Consulte con un proveedor de atención médica para obtener asesoramiento médico.",
        listenButton: "Escuchar texto",
        enterDOB: "Por favor, introduzca primero la fecha de nacimiento del niño/a.",
        selectFile: "Por favor, seleccione primero un archivo de imagen."
    }
};

let currentLanguage = 'en'; // Default language

const scheduleContainer = document.getElementById('vaccine-schedule');
const detailsModal = document.getElementById('details-modal');
const nextStepsModal = document.getElementById('next-steps-modal');
const detailsCloseButton = detailsModal.querySelector('.close-button');
const nextStepsCloseButton = nextStepsModal.querySelector('.close-button');
const uploadButton = document.getElementById('upload-button');
const fileInput = document.getElementById('vaccine-record-input');
const nextStepsButton = document.getElementById('next-steps-button');
const dobInput = document.getElementById('dob-input');
const listenButton = document.getElementById('listen-button');
const languageRadios = document.querySelectorAll('input[name="language"]');
const timelineDiv = document.getElementById('timeline');

let receivedVaccinations = []; // Store received vaccinations globally

function getAgeInWeeks(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    const diffTime = Math.abs(today - birthDate);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
}

function getAgeInYearsMonthsWeeks(dob) {
    const today = new Date();
    const birthDate = new Date(dob);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let weeks = 0;

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
    }

    const remainingDays = today.getDate() - birthDate.getDate();
    if (remainingDays < 0) {
        // Adjust months and days if current day is before birth day in the month
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthDate.getDate());
        weeks = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24 * 7));
        months--;
    } else {
        weeks = Math.floor(remainingDays / 7);
    }

    return { years, months, weeks };
}

function renderSchedule() {
    scheduleContainer.innerHTML = '';
    const dob = dobInput.value;
    const ageInWeeks = dob ? getAgeInWeeks(dob) : -1; // -1 if no DOB entered

    const eligibleSchedule = vaccineSchedule.filter(item => ageInWeeks === -1 || ageInWeeks >= item.weeks);

    eligibleSchedule.forEach(item => {
        const group = document.createElement('div');
        group.innerHTML = `<h3>${item.age}</h3>`;
        item.vaccines.forEach(vaccine => {
            const card = document.createElement('div');
            card.dataset.vaccineName = vaccine.name;

            let isComplete = false;
            if (receivedVaccinations.includes(vaccine.name)) {
                isComplete = true;
            }

            card.className = `vaccine-card ${isComplete ? 'complete' : 'missing'}`;

            card.innerHTML = `
                <span>${vaccine.name}</span>
                <div>
                    <button class="details-button">Details</button>
                    <input type="checkbox" class="status-checkbox" ${isComplete ? 'checked' : ''}>
                </div>
            `;
            group.appendChild(card);

            card.querySelector('.details-button').addEventListener('click', () => showDetails(vaccine));
            card.querySelector('.status-checkbox').addEventListener('change', (e) => {
                if (e.target.checked) {
                    card.classList.remove('missing');
                    card.classList.add('complete');
                    if (!receivedVaccinations.includes(vaccine.name)) {
                        receivedVaccinations.push(vaccine.name);
                    }
                } else {
                    card.classList.remove('complete');
                    card.classList.add('missing');
                    receivedVaccinations = receivedVaccinations.filter(name => name !== vaccine.name);
                }
            });
        });
        scheduleContainer.appendChild(group);
    });
    renderTimeline();
}

function showDetails(vaccine) {
    document.getElementById('vaccine-name').innerText = vaccine.name;
    document.getElementById('diseases-prevented').innerText = vaccine.diseases;
    document.getElementById('side-effects').innerText = vaccine.sideEffects;
    detailsModal.style.display = 'block';
}

function simulateOcrAndUpdateUI(file) {
    console.log(`Simulating OCR for file: ${file.name}`);

    // This is a simulation. In a real application, you'd send the image to a backend for OCR.
    // For now, we'll hardcode the vaccinations from the previous image analysis.
    receivedVaccinations = [
        '6-in-1',
        'Rotavirus',
        'Meningitis B',
        '6-in-1 (2nd dose)',
        'Rotavirus (2nd dose)',
        'Meningitis B (2nd dose)'
    ];
    renderSchedule(); // Re-render the schedule to reflect updated receivedVaccinations
}

function renderTimeline() {
    timelineDiv.innerHTML = '';
    const dob = dobInput.value;
    const ageInWeeks = dob ? getAgeInWeeks(dob) : -1;

    const maxWeeks = vaccineSchedule[vaccineSchedule.length - 1].weeks;

    vaccineSchedule.forEach((item, index) => {
        const timelinePoint = document.createElement('div');
        timelinePoint.className = 'timeline-point';
        timelinePoint.style.left = `${(item.weeks / maxWeeks) * 100}%`;

        const span = document.createElement('span');
        span.innerText = item.age;
        
        // Alternate vertical position for labels
        if (index % 2 === 0) {
            span.style.top = '20px';
        } else {
            span.style.bottom = '20px';
        }

        timelinePoint.appendChild(span);

        // Check if all vaccines in this group are complete
        const allCompleteInGroup = item.vaccines.every(vaccine => receivedVaccinations.includes(vaccine.name));
        if (allCompleteInGroup) {
            timelinePoint.classList.add('complete-timeline');
        }

        // Mark current age group
        if (ageInWeeks !== -1 && ageInWeeks >= item.weeks && (item.weeks === maxWeeks || ageInWeeks < (vaccineSchedule[vaccineSchedule.indexOf(item) + 1]?.weeks || Infinity))) {
            timelinePoint.classList.add('active');
        }

        timelineDiv.appendChild(timelinePoint);
    });
}

function showNextSteps() {
    const dob = dobInput.value;
    if (!dob) {
        alert(translations[currentLanguage].enterDOB);
        return;
    }

    const { years, months, weeks } = getAgeInYearsMonthsWeeks(dob);
    const nextStepsContent = document.getElementById('next-steps-content');
    let advice = '';

    const missingVaccinations = Array.from(document.querySelectorAll('.vaccine-card.missing'));

    if (missingVaccinations.length > 0) {
        advice += `<p>${translations[currentLanguage].ageBasedRecommendation(years, months, weeks)}</p>`;
        const missingByAge = {};
        missingVaccinations.forEach(card => {
            const ageGroup = card.parentElement.querySelector('h3').innerText;
            if (!missingByAge[ageGroup]) {
                missingByAge[ageGroup] = [];
            }
            missingByAge[ageGroup].push(card.dataset.vaccineName);
        });

        for (const ageGroup in missingByAge) {
            advice += `<h5>${ageGroup}</h5>`;
            advice += `<ul>${missingByAge[ageGroup].map(v => `<li>${v}</li>`).join('')}</ul>`;
        }

    } else {
        advice += `<p>${translations[currentLanguage].allUpToDate}</p>`;
    }

    advice += `<p><strong>${translations[currentLanguage].howToGetVaccinations}</strong></p>`;
    advice += `<p>${translations[currentLanguage].gpContact}</p>`;
    advice += `<p>${translations[currentLanguage].missedVaccination}</p>`;
    advice += `<p><strong>${translations[currentLanguage].disclaimer}</strong></p>`;

    nextStepsContent.innerHTML = advice;
    nextStepsModal.style.display = 'block';
    document.getElementById('listen-button').innerText = translations[currentLanguage].listenButton;
    nextStepsModal.querySelector('h2').innerText = translations[currentLanguage].nextStepsTitle;
}

listenButton.addEventListener('click', () => {
    const textToSpeak = document.getElementById('next-steps-content').innerText;
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = currentLanguage === 'en' ? 'en-GB' : 'es-ES'; // Set language for speech
        speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser does not support text-to-speech.");
    }
});

languageRadios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        currentLanguage = event.target.value;
        showNextSteps(); // Re-render advice in new language
    });
});

dobInput.addEventListener('change', () => {
    renderSchedule();
    renderTimeline();
});

uploadButton.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (file) {
        simulateOcrAndUpdateUI(file);
    } else {
        alert(translations[currentLanguage].selectFile);
    }
});

nextStepsButton.addEventListener('click', showNextSteps);

detailsCloseButton.onclick = () => detailsModal.style.display = 'none';
nextStepsCloseButton.onclick = () => {
    nextStepsModal.style.display = 'none';
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel(); // Stop speaking if modal is closed
    }
};

window.onclick = (event) => {
    if (event.target == detailsModal) {
        detailsModal.style.display = 'none';
    }
    if (event.target == nextStepsModal) {
        nextStepsModal.style.display = 'none';
        if ('speechSynthesis' in window) {
            speechSynthesis.cancel(); // Stop speaking if modal is closed by clicking outside
        }
    }
}

// Initial render of the full schedule
renderSchedule();
renderTimeline();