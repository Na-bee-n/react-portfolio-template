import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import context_aware from '../assets/images/context_aware.png';
import '../assets/styles/Project.scss';
import ai_bone_age from '../assets/images/ai_bone_age.png';
import olympics from '../assets/images/olympics_data.png';
import hand from '../assets/images/hand_tracking.png';
function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            {/* <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div> */}

            <div className="project">
                <a href="https://github.com/Na-bee-n/Contextual-Spell-Checker-Nepali-/tree/note1" target="_blank" rel="noreferrer">
                    <img src={context_aware} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/Na-bee-n/Contextual-Spell-Checker-Nepali-/tree/note1" target="_blank" rel="noreferrer">
                    <h2>Nepali Context-Aware Spell Tool</h2>
                </a>
                <p>Implemented a spell-checking tool for Nepali using confusion sets, fine-tuned NepBERTa, and context-aware correction.</p>
            </div>



            <div className="project">
                <a href="https://huggingface.co/spaces/Nabeen/Ai_bone_age_prediction/tree/main" target="_blank" rel="noreferrer"><img src={ai_bone_age} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://huggingface.co/spaces/Nabeen/Ai_bone_age_prediction/tree/main" target="_blank" rel="noreferrer"><h2>AI Based Bone Age Prediction</h2></a>
                <p>Developed an AI-based bone age prediction system using ResNet and InceptionV3 models of CNN for accurate age estimation.</p>
            </div>

            <div className="project">
                <a href="https://www.datacamp.com/datalab/w/124f3ddf-8cb3-47c6-ae55-45d919481fde/edit" target="_blank" rel="noreferrer"><img src={olympics} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datacamp.com/datalab/w/124f3ddf-8cb3-47c6-ae55-45d919481fde/edit" target="_blank" rel="noreferrer"><h2>Analyzing Olympics Data</h2></a>
                <p>Performed cleaning, and then used the data to answer questions with interactive charts.</p>
            </div>

            <div className="project">
                <a href="https://github.com/Na-bee-n/hand-tracking/tree/main" target="_blank" rel="noreferrer"><img src={hand} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Na-bee-n/hand-tracking/tree/main" target="_blank" rel="noreferrer"><h2>Hand Tracking</h2></a>
                <p>Developed a real-time hand tracking system using OpenCV and MediaPipe.</p>
            </div>


            {/* <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;