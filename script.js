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
Explore experiences that blur the boundaries between the digital and physical worlds.

📍Location: 
London, UK

📚Education: 
BA (Hons) Creative Direction, University of the Arts London

🌟Interests: 
Coding, interactive media/art, music

I am an emerging programmer which enjoys merging art and technology!`;
        }
    },

    skills: {
        description: 'View my technical skills',
        action: () => {
            return `💻Technical Skills:

Programming Languages:
- JavaScript ⭐⭐
- HTML/CSS  ⭐⭐⭐⭐
- Python    ⭐⭐⭐

Frameworks & Tools: 
- React.js
- p5.js
- Git/GitHub
- VS Code

Currently Learning: 
- Java
- Node.js
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
    
2. BIM (Malaysian Sign Language) Detection System - Ongoing
    - Tech: Python, OpenCV
    - An object detection system for BIM (Malaysian Sign Language)
    
Want to see more? Check out my GitHub`;
        }
    },

    experience: {
        description: 'View my work experience',
        action: () => {
            return `💼Work Experience:

 Digital Marketing Intern | House of Sunny | Jan 2025 - Mar 2025
   - Conducted market research and presented insights to support campaign planning and strategic decisions
   - Tracked marketing KPIs, performed post-campaign analysis, and contributed to reporting deliverables 
   - Used Adobe Creative Suite to design and edit digital assets for social media and retail use 

 Front of House | Urban Pubs and Bars | 2022 - 2024
   - Streamlined operations by analysing customer behaviour and optimizing inventory processes 
   - Built strong multitasking and interpersonal skills by engaging a diverse customer base in a fast-paced environment 

 Student Representative | INTO London World Educational Centre | 2021 - 2022
   - Acted as a liaison between students and faculty, enhancing communication and engagement 
   - Organised community events to improve student networking and experience 


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
<a href="https://coursera.org/share/53d6fd1161071998c0ecab10980e11c4" target="blank" style="color: #ff69b4; text-decoration: underline;">Python Data Structures by University of Michigan (Coursera)</a> | 2025`;
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
            terminalContent.innerHTML = \`
                <div class="line">
                    <span class="output">Terminal cleared! </span>
                </div>
                <div class="line">
                    <span class="output">Type 'hello' to see available commands.</span>
                </div>
                <br>
            \`;
            return '';
        }
    }
};

// Create and manage custom cursor
let customCursor = null;

function createCustomCursor() {
    if (customCursor) return;
    
    customCursor = document.createElement('div');
    customCursor.className = 'custom-cursor';
    customCursor.style.cssText = \`
        position: absolute;
        width: 12px;
        height: 18px;
        background-color: #ff1493;
        animation: blink-terminal-cursor 1s infinite;
        pointer-events: none;
        z-index: 10;
        top: 50%;
        transform: translateY(-50%);
    \`;
    
    const inputContainer = document.querySelector('.input-container');
    inputContainer.style.position = 'relative';
    inputContainer.appendChild(customCursor);
}

function updateCursorPosition() {
    if (!customCursor) return;
    
    const prompt = document.querySelector('.prompt');
    const input = terminalInput;
    const inputValue = input.value;
    
    // Create a temporary span to measure text width
    const tempSpan = document.createElement('span');
    tempSpan.style.cssText = \`
        position: absolute;
        visibility: hidden;
        white-space: pre;
        font-family: inherit;
        font-size: inherit;
    \`;
    tempSpan.textContent = inputValue;
    document.body.appendChild(tempSpan);
    
    const textWidth = tempSpan.offsetWidth;
    const promptWidth = prompt.offsetWidth;
    
    // Position cursor after the text
    customCursor.style.left = (promptWidth + textWidth + 5) + 'px';
    
    document.body.removeChild(tempSpan);
}

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
    addLine(\`<span class="prompt">visitor@portfolio:~$</span> <span style="color: white;">\${cmd}</span>\`);

    // check if the command exists and run 
    if (commands[command]) {
        const output = commands[command].action();
        if (output) {
            addLine(\`<span class="output">\${output}</span>\`);
        }
    } else if (command === '') {
        // user just pressed Enter with no command - do nothing 
    } else {
        // command not found - show error message 
        addLine(\`<span style="color: #ff4444;">Command not found: '\${command}'</span>\`);
        addLine(\`<span class="output">Type 'hello' to see available commands.</span>\`);
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
        updateCursorPosition(); // Update cursor position after clearing input
    }
});

// Update cursor position as user types
terminalInput.addEventListener('input', updateCursorPosition);

// Update cursor position on focus/blur
terminalInput.addEventListener('focus', () => {
    if (customCursor) customCursor.style.display = 'block';
    updateCursorPosition();
});

terminalInput.addEventListener('blur', () => {
    if (customCursor) customCursor.style.display = 'block'; // Keep cursor visible even when not focused
});

//when user clicks anywhere on the page, focus the input 
document.addEventListener('click', function () {
    terminalInput.focus();
    updateCursorPosition();
});

//make sure input is focused when page load
terminalInput.focus();

window.addEventListener('load', function () {
    // Hide the default cursor and create custom one
    terminalInput.style.caretColor = 'transparent';
    createCustomCursor();
    updateCursorPosition();
    
    setTimeout(() => {
        addLine(\`<span class="welcome-message" style="color:#ffb6c1;">✨ Terminal ready! Type 'hello' to get started. ✨</span>\`);
    }, 500);
});

// Add the cursor animation keyframes to the document
const style = document.createElement('style');
style.textContent = \`
    @keyframes blink-terminal-cursor {
        0%, 50% {
            opacity: 1;
            box-shadow: 0 0 8px rgba(255, 20, 147, 0.8);
        }
        51%, 100% {
            opacity: 0;
        }
    }
\`;
document.head.appendChild(style);
