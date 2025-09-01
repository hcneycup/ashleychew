const terminalContent = document.getElementById('terminal-content');
const terminalInput = document.getElementById('terminal-input');

const commands = {
    hello: {
        description: 'Show available commands',
        action: () => {
            return `Available commands:

- about: Learn about me
- skills: View my technical skills
- creative: View my creative skills
- projects: See my projects
- experience: View my work experience
- certs: View my certifications
- contact: Get my contact information
- clear: Clear the terminal

Type any command and press 'Enter'!`;
        }
    },

    about: {
        description: "Learn about me",
        action: () => {
            return `👩🏻‍💻About Me:

Hi! I'm Ashley Chew. With roots in Creative Direction, I am a multi-disciplinary individual fascinated by where arts meets technology. 

I am fluent in multiple languages including: English, Mandarin, Cantonese, Bahasa Melayu

💡What I do: 
I blend creative strategy with technical skills to build user-centered digital solutions. 

📍Location: 
London, UK

📚Education: 
BA (Hons) Creative Direction, University of the Arts London

🌟Interests: 
Coding, interactive media/art, music

I am creative which occasionally codes!`;
        }
    },

    skills: {
        description: 'View my technical skills',
        action: () => {
            return `💻Technical Skills:

Programming Languages:
- JavaScript ⭐⭐⭐
- HTML/CSS  ⭐⭐⭐⭐
- Python    ⭐⭐⭐

Frameworks & Tools: 
- p5.js
- Node.js
- Git/GitHub
- VS Code

Currently Learning: 
- Java
- React.js
- Gen AI`;
        }
    },

    creative: {
        description: 'View my creative skills',
        action: () => {
            return `🎨Creative Skills:

3D Modeling & Animation:
- Blender ⭐⭐⭐

Interactive Media:
- TouchDesigner ⭐⭐⭐⭐
- p5.js ⭐⭐⭐

Adobe Creative Suite:
- Photoshop ⭐⭐⭐⭐⭐
- Premiere Pro ⭐⭐⭐
- InDesign (certified) ⭐⭐⭐⭐⭐

Design Tools:
- Figma ⭐⭐⭐⭐⭐
- Canva ⭐⭐⭐⭐⭐

Currently Exploring:
- Unreal Engine
- Unity`;
        }
    },

    projects: {
        description: 'See My Projects',
        action: () => {
            return `📝My Projects:

1. Terminal Portfolio (This Website!)
    - Tech: HTML, CSS, JavaScript
    - A terminal-style portfolio
    
2. Daily Football Matches Tracker 
    - Tech: HTML, CSS, JavaScript, Electron.js
    - Built a desktop football matches tracker using Electron.js to display real-time matches across 5+ major leagues with live-scores and match events (cards/goals)
    - Integrated RESTful API (API-Sports) with auto-refresh functionality for live match data and player event tracking 
    
Want to see more? Check out my GitHub`;
        }
    },

    experience: {
        description: 'View my work experience',
        action: () => {
            return `💼Work Experience:

 Digital Marketing Intern | House of Sunny | Jan 2025 - Mar 2025
   - Conducted weekly market research and presented findings to support campaign planning decisions
   - Managed post-campaign analysis for 2-3 monthly campaigns, tracking KPIs and delivering performance reports
   - Conceptualised campaign strategies that achieved 150% increase in user engagement

 Front of House | Urban Pubs and Bars | 2022 - 2024
   - Improved operational eﬃciency by identifying customer flow patterns and suggesting inventory management adjustments
   - Handled multiple priorities while maintaining quality standards in a high-volume, time-sensitive environment
   - Resolved customer issues and communicated eﬀectively with diverse clientele and team members

 Student Representative | INTO London World Educational Centre | 2021 - 2022
   - Facilitated communication between students and faculty to address concerns and improve engagement
   - Organised community networking events, overseeing planning, logistics, and execution to enhance student experience

 Volunteer Coordinator | Fettes Park Baptist Kindergarten | 2018 - 2020
   - Supervised and facilitated educational activities for 20+ children aged 6-12 during weekend programs
   - Led multiple activities including games, classes, and bible reading sessions


Key Skills Developed: Leadership, technical problem-solving, project management, client communication`;
        }
    },

    certs: {
        description: 'View my certifications',
        action: () => {
            return `📜Certifications:

Professional Certifications:
<a href="https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=440&cvid=vBAgzlU70QnCWrpD2lJxvw==" target="blank" style="color: #ff69b4; text-decoration: underline;">Adobe InDesign Certified in Print & Digital Publication</a> | 2024
<a href="https://coursera.org/share/79ddea4c0cfdbbb887ad132afd462bc5" target="blank" style="color: #ff69b4; text-decoration: underline;">Python for Everybody Specialisation by University of Michigan (Coursera)</a> | 2025
<a href="https://coursera.org/share/53d6fd1161071998c0ecab10980e11c4" target="blank" style="color: #ff69b4; text-decoration: underline;">Python Data Structures by University of Michigan (Coursera)</a> | 2025
<a href="https://coursera.org/share/3a6b83d7e809846db02a75fbbe637a0a" target="blank" style="color: #ff69b4; text-decoration: underline;">IBM Product Manager Professional Certificate (Coursera)</a> | 2025
<a href="https://coursera.org/share/783f1cf988f83d8ea8caebb1cedefb3d" target="blank" style="color: #ff69b4; text-decoration: underline;">Google UX Design Professional Certificate (Coursera)</a> | 2025`;
        }
    },

    contact: {
        description: 'Get my contact information',
        action: () => {
            return `Contact Information: 

📧 Email: hcneycup@gmail.com
🐱 GitHub: https://github.com/hcneycup
💼 LinkedIn: https://www.linkedin.com/in/chewhoyeng/
🌐 Website: https://hcneycup.github.io/ashleychew/

Feel free to reach out! I'm always open to new opportunities and interesting projects. `;
        }
    },

    clear: {
        description: 'Clear the terminal',
        action: () => {
            terminalContent.innerHTML = `
                <div class="line">
                    <span class="output">Terminal cleared! </span>
                </div>
                <div class="line">
                    <span class="output">Type 'hello' to see available commands.</span>
                </div>
                <br>
            `;
            return '';
        }
    }
};

// function to add a new line to the terminal display
function addLine(content) {
    const line = document.createElement('div');
    line.className = 'line';
    line.innerHTML = content;
    terminalContent.appendChild(line);

    // scroll to the bottom so user can see new content
    line.scrollIntoView({ behavior: 'smooth' });
}

// function to execute commands when user types them 
function executeCommand(cmd) {
    const command = cmd.toLowerCase().trim();

    //show what the user typed 
    addLine(`<span class="prompt">visitor@portfolio:~$</span> <span style="color: white;">${cmd}</span>`);

    // check if the command exists and run 
    if (commands[command]) {
        const output = commands[command].action();
        if (output) {
            addLine(`<span class="output">${output}</span>`);
        }
    } else if (command === '') {
        // user just pressed Enter with no command - do nothing 
    } else {
        // command not found - show error message 
        addLine(`<span style="color: #ff4444;">Command not found: '${command}'</span>`);
        addLine(`<span class="output">Type 'hello' to see available commands.</span>`);
    }

    // add spacing after each command
    addLine(' ');
}

// listen for when user pressed Enter key
terminalInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const command = this.value;
        executeCommand(command);
        this.value = '';
    }
});

//when user clicks anywhere on the page, focus the input 
document.addEventListener('click', function () {
    terminalInput.focus();
});

//make sure input is focused when page load
terminalInput.focus();

window.addEventListener('load', function () {
    setTimeout(() => {
        addLine(`<span class="welcome-message" style="color:#ffb6c1;">✨ Terminal ready! Type 'hello' to get started. ✨</span>`);
    }, 500);
});
