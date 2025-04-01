import testVideo from '../assets/videos/testing.mp4';

export const cyberSecurityContent = {
  title: "Cyber Security Course",
  weeks: [
    {
      title: "Week 1;Cybersecurity Fundamentals",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Introduction to Cybersecurity",
          duration: "30 mins",
          id: "cs-1-1",
          content: {
            video: testVideo,
            description: "Understanding the basics of cybersecurity and its importance",
            materials: ["Cybersecurity Basics PDF", "Introduction Slides"]
          }
        },
        {
          name: "Types of Cyber Threats",
          duration: "35 mins",
          id: "cs-1-2",
          content: {
            video: testVideo,
            description: "Overview of different types of cyber threats and attacks",
            materials: ["Threat Types Guide", "Case Studies"]
          }
        },
        {
          name: "Security Principles",
          duration: "30 mins",
          id: "cs-1-3",
          content: {
            video: testVideo,
            description: "Core principles of information security (CIA triad)",
            materials: ["Security Principles PDF", "Practice Examples"]
          }
        },
        {
          name: "Risk Management",
          duration: "35 mins",
          id: "cs-1-4",
          content: {
            video: testVideo,
            description: "Understanding and managing cybersecurity risks",
            materials: ["Risk Assessment Guide", "Templates"]
          }
        },
        {
          name: "Module 1 Assessment",
          duration: "30 mins",
          id: "cs-1-assessment",
          isAssessment: true,
          content: {
            description: "Test your knowledge of cybersecurity fundamentals",
            quiz: {
              questions: [
                // Assessment questions here
              ]
            }
          }
        }
      ]
    },
    {
      title: "Week 2;Network Security",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Network Fundamentals",
          duration: "35 mins",
          id: "cs-2-1",
          content: {
            video: testVideo,
            description: "Understanding network architecture and protocols",
            materials: ["Network Basics PDF", "Network Diagrams"]
          }
        },
        {
          name: "Firewall Configuration",
          duration: "40 mins",
          id: "cs-2-2",
          content: {
            video: testVideo,
            description: "Setting up and managing firewalls",
            materials: ["Firewall Guide", "Configuration Templates"]
          }
        },
        {
          name: "VPN and Remote Access",
          duration: "35 mins",
          id: "cs-2-3",
          content: {
            video: testVideo,
            description: "Implementing secure remote access solutions",
            materials: ["VPN Setup Guide", "Security Best Practices"]
          }
        },
        {
          name: "Network Monitoring",
          duration: "30 mins",
          id: "cs-2-4",
          content: {
            video: testVideo,
            description: "Tools and techniques for network monitoring",
            materials: ["Monitoring Tools Guide", "Practice Exercises"]
          }
        },
        {
          name: "Module 2 Assessment",
          duration: "30 mins",
          id: "cs-2-assessment",
          isAssessment: true,
          content: {
            description: "Test your knowledge of network security",
            quiz: {
              questions: [
                // Assessment questions here
              ]
            }
          }
        }
      ]
    },
    {
      title: "Week 3;Application Security",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Secure Coding Practices",
          duration: "35 mins",
          id: "cs-3-1",
          content: {
            video: testVideo,
            description: "Best practices for writing secure code",
            materials: ["Coding Guidelines", "Code Examples"]
          }
        },
        {
          name: "Web Application Security",
          duration: "40 mins",
          id: "cs-3-2",
          content: {
            video: testVideo,
            description: "Securing web applications from common vulnerabilities",
            materials: ["OWASP Guide", "Security Checklist"]
          }
        },
        {
          name: "Authentication Systems",
          duration: "35 mins",
          id: "cs-3-3",
          content: {
            video: testVideo,
            description: "Implementing secure authentication mechanisms",
            materials: ["Authentication Methods PDF", "Implementation Guide"]
          }
        },
        {
          name: "Encryption Fundamentals",
          duration: "30 mins",
          id: "cs-3-4",
          content: {
            video: testVideo,
            description: "Understanding basic cryptography and encryption",
            materials: ["Encryption Guide", "Practice Problems"]
          }
        },
        {
          name: "Module 3 Assessment",
          duration: "30 mins",
          id: "cs-3-assessment",
          isAssessment: true,
          content: {
            description: "Test your knowledge of application security",
            quiz: {
              questions: [
                // Assessment questions here
              ]
            }
          }
        }
      ]
    },
    {
      title: "Week 4;Security Operations",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Incident Response",
          duration: "35 mins",
          id: "cs-4-1",
          content: {
            video: testVideo,
            description: "Handling and responding to security incidents",
            materials: ["Incident Response Plan", "Case Studies"]
          }
        },
        {
          name: "Security Auditing",
          duration: "30 mins",
          id: "cs-4-2",
          content: {
            video: testVideo,
            description: "Conducting security audits and assessments",
            materials: ["Audit Checklist", "Report Templates"]
          }
        },
        {
          name: "Compliance and Regulations",
          duration: "35 mins",
          id: "cs-4-3",
          content: {
            video: testVideo,
            description: "Understanding cybersecurity regulations and compliance",
            materials: ["Compliance Guide", "Regulation Overview"]
          }
        },
        {
          name: "Future of Cybersecurity",
          duration: "30 mins",
          id: "cs-4-4",
          content: {
            video: testVideo,
            description: "Emerging trends and future challenges in cybersecurity",
            materials: ["Trends Report", "Research Papers"]
          }
        },
        {
          name: "Final Assessment",
          duration: "45 mins",
          id: "cs-4-assessment",
          isAssessment: true,
          content: {
            description: "Comprehensive assessment of all cybersecurity topics",
            quiz: {
              questions: [
                // Final assessment questions here
              ]
            }
          }
        }
      ]
    }
  ]
};