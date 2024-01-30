document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'Jun 2022 - Present',
        title: 'Springboard | Data Science Fellow',
        description: '•	Successfully completed over 550 hours of training in all aspects of the data science workflow.'
        '•	Peer-mentor to students new to the program and less experienced in programming and data science.',
        '•	Executed the data science and machine learning projects listed at the top of the CV.'
        
    },
    {
        date: 'Aug 2019 - Jan 2022',
        title: 'Freelance Sarcasm Specialist',
        description: 'Offered a wide range of sarcasm consulting services. Helped clients understand the fine line between a hilarious email and an HR issue.'
    },
    {
        date: 'May 2017 - Jul 2019',
        title: 'Amateur Coffee Brewer',
        description: 'Worked at JavaGenius, a tech startup where the code was less important than the coffee. Received the "Caffeine Innovator" award for my cold brew technique that kept coders awake for 72 hours straight.'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
