import devopsImg from "../images/experiences/DevOps.png";
import exp2 from "../images/bright-star-white.svg";
import exp3 from "../images/bright-star-white.svg";

const atradiusMarkdown = `
I'm very grateful to the Atradius team for all their support during my 15-month placement, where I worked as a DevOps Engineer within the SDLC (Software Development Lifecycle) Platform Operations Team. 

#### Key achievements during my placement include:
- **Introducing GitHub Apps:** Improving security by migrating from personal access tokens to GitHub Apps for authentication in CI/CD pipelines.
- **Migrating tests from a legacy tool to Azure Test Plans:** Moving thousands of manual test cases to a modern platform, where they can be easily managed and executed.
- **Researching Podman Desktop:** Finding a way to install and use Podman Desktop in a corporate environment with strict security policies.

#### The technologies and tools I worked with include:
- **CI/CD Tools:** Azure DevOps Pipelines, GitHub Actions
- **Containerization:** Docker, Podman
- **Cloud Platforms:** Microsoft Azure
- **Security Tools:** SonarQube, GHAS CodeQL, Dependabot and Secret Scanning, Aquasec Trivy
- **Programming/Scripting Languages:** YAML, Bash, PowerShell, Python

#### Personal growth from the placement experience:
- Gained hands-on experience in a real-world corporate environment.
- Gained confidence in solving problems independently and driving my own learning.
- Learned to troubleshoot complex issues by reading documentation, experimenting, and learning from mistakes.
- Learned to work effectively within a team and collaborate on projects.
- Understood DevOps principles such as automation, continuous improvement, and “shifting left” on security,

#### Summary of responsibilities:
- Ensuring the organisation’s SDLC tools are easily accessible, well maintained and secure
- Providing day to day support to developers via incident, service request and change management on ServiceNow
- Working closely with application security team to ensure application vulnerabilities are surfaced and addressed easily

### Pictures
`;

const experiences = [
  { 
      name: "DevSecOps Internship",
      desc: "15 month placement working within the SDLC team at Atradius, Cardiff. Jul '24 - Oct '25.", 
      img: devopsImg,
      imgCarousel: [devopsImg, exp2],
      long_desc: atradiusMarkdown,
      tags: ["DevOps", "Internship"]
  },
  { 
      name: "Experience Two", 
      desc: "Description of experience two", 
      img: exp2,
      long_desc: "",
      tags: ["DevOps", "Internship"]
  },
  { 
      name: "Experience Three", 
      desc: "Description of experience three", 
      img: exp3,
      long_desc: ""
  },
  { 
      name: "Project Three", 
      desc: "Description of project three", 
      img: exp3,
      long_desc: ""
  },
];

export default experiences;