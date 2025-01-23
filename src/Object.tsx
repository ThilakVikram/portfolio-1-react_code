import React, { JSX } from "react"
import { MdAssistantDirection } from "react-icons/md"

interface _SectionContent {
    sub: JSX.Element[];
}
interface _Section {
    id: string,
    title: string,
    content: string | JSX.Element[],
}

let ObjectMarker: _Section[] = [{
    id: 'summary',
    title: 'Summary',
    content: [(()=><span>{`I am Thilak Vikram R, a motivated and detail-oriented web developer with a strong foundation 
      in HTML, CSS, and JavaScript. I have a passion for creating user-friendly, responsive, and 
      visually appealing web applications. With a quick learning ability and a strong desire to 
      contribute to innovative web development projects, I aim to deliver high-quality solutions that 
      meet user needs and business objectives.
    `}</span>)()]
},
{
    id: 'education',
    title: 'Education',
    content: [(() => (<span className="font-bold">Bachelor of Science in Computer Science</span>))(),
        (() => (<span>{`- Prince Shri Venkateshwara Arts and Science College, Gowrivakkam, Chennai.`}</span>))()]
},
{
    id: 'skills',
    title: 'Skills',
    content: [
        (() => (<span className="flex flex-row"><span className="font-bold pr-2">- Programming Languages:</span> Python, JavaScript, HTML, CSS</span>))(),
        (() => (<span className="flex flex-row"><span className="font-bold pr-2">- Frameworks:</span> Node.js, React.js</span>))(),
        (() => (<span className="flex flex-row"><span className="font-bold pr-2">- Version Control:</span> GitHub for collaboration and version control</span>))(),
        (() => (<span className="flex flex-row"><span className="font-bold pr-2">- Database Systems:</span> MongoDB</span>))(),
        (() => (<span className="flex flex-row"><span className="font-bold pr-2">- Toolsets:</span> Google Sheets, AppScript</span>))(),
    ]
},
{
    id: 'experience',
    title: 'Work Experience',
    content: [
        (() => (<span className="font-bold">Data Analyst and Global Sourcing - Itrend Solution</span>))(),
        (() => (<span>{`- Conducted in-depth analysis of product sales data from various Amazon sellers using tools such as Helium 10 and Jungle Scout.
      - Performed reverse profit calculations to evaluate seller profitability and identified high-potential products for branding.
      - Engaged with suppliers and manufacturers on platforms such as Alibaba, IndiaMart, and Made-in-China to manage end-to-end procurement.
    `}</span>))()
    ]
},
{
    id: 'certifications',
    title: 'Certifications',
    content: [
        (() => (<span className="font-bold">The Complete JavaScript Course 2025: From Zero to Expert! (Udemy):</span>))(),
        (() => (<span>{`Acquired in-depth proficiency in JavaScript, including asynchronous programming, DOM manipulation, and advanced concepts.`}</span>))()
    ]
},
{
    id: 'contact',
    title: 'Contact Information',
    content: [(() => (<span className="flex flex-row"><span className="font-bold pr-2">- Phone:</span> +91 6374472382</span>))(),
    (() => (<span className="flex flex-row"><span className="font-bold pr-2">- Email:</span> thilakvikram13@gmail.com</span>))(),
    (() => (<span className="flex flex-row"><span className="font-bold pr-2">- Github:</span> <a className="flex flex-row text-blue-600 hover:underline" href="https://github.com/ThilakVikram"> Account <MdAssistantDirection /></a></span>))(),
    (() => (<span className="flex flex-row"><span className="font-bold pr-2">- LinkedIn:</span> <a className="flex flex-row text-blue-600 hover:underline" href="http://www.linkedin.com/in/thilakvikramr11"> Account <MdAssistantDirection /></a></span>))(),
    ]
    ,
}
]

export default ObjectMarker;

export {
    _Section,
    _SectionContent
}