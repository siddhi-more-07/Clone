// Frequently Asked Questions
const questions = document.querySelectorAll('.Frequently-Asked-Questions .question');
const answers = document.querySelectorAll('.Frequently-Asked-Questions .answer');

questions.forEach((question, index) => {
    question.addEventListener('click', function() {
        const answer = answers[index];
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answers.forEach(ans => ans.style.display = 'none'); // Hide all answers
            answer.style.display = 'block';
            answer.style.transform = 'translateY(2px)';
        }
    });
});
