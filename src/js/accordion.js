document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', function () {
            const isActive = item.classList.contains('active');
            faqItems.forEach((item) => {
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = '0'; // Reset max-height
                item.classList.remove('active');
            });

            if (!isActive) {
                answer.style.maxHeight = answer.scrollHeight + 'px'; // Set max-height to show the answer
                item.classList.add('active');
            }
        });
    });
});
