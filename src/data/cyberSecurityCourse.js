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
            description: "Basic concepts and importance of cybersecurity",
            materials: ["Intro Guide", "Security Basics PDF"]
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
          name: "Week 1 Assessment",
          duration: "N/A",
          id: "cs-1-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is the primary goal of cybersecurity?",
                options: [
                  "To make computers faster",
                  "To protect systems and data from threats",
                  "To develop new software",
                  "To increase internet speed"
                ]
              },
              {
                text: "Which of these is NOT a component of the CIA triad?",
                options: [
                  "Confidentiality",
                  "Integrity",
                  "Authentication",
                  "Availability"
                ]
              },
              {
                text: "What is a common type of cyber attack?",
                options: [
                  "System upgrade",
                  "Data backup",
                  "Phishing",
                  "Software installation"
                ]
              },
              {
                text: "What is the purpose of risk assessment?",
                options: [
                  "To increase profits",
                  "To identify and evaluate potential threats",
                  "To hire new employees",
                  "To purchase new software"
                ]
              },
              {
                text: "Which is a basic security measure?",
                options: [
                  "Sharing passwords",
                  "Using strong passwords",
                  "Disabling firewalls",
                  "Ignoring updates"
                ]
              },
              {
                text: "What is malware?",
                options: [
                  "A type of software license",
                  "A security tool",
                  "Malicious software designed to harm systems",
                  "A network protocol"
                ]
              },
              {
                text: "What is the purpose of encryption?",
                options: [
                  "To speed up data transfer",
                  "To protect data confidentiality",
                  "To compress files",
                  "To delete data"
                ]
              },
              {
                text: "Which is NOT a common security threat?",
                options: [
                  "Viruses",
                  "Regular updates",
                  "Ransomware",
                  "Social engineering"
                ]
              }
            ]
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
          name: "Week 2 Assessment",
          duration: "N/A",
          id: "cs-2-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is the primary function of a firewall?",
                options: [
                  "To speed up internet connection",
                  "To monitor and control network traffic",
                  "To store backup data",
                  "To encrypt emails"
                ]
              },
              {
                text: "Which protocol is commonly used for secure remote access?",
                options: [
                  "HTTP",
                  "FTP",
                  "VPN",
                  "SMTP"
                ]
              },
              {
                text: "What is network segmentation?",
                options: [
                  "Breaking a network into smaller, isolated segments",
                  "Connecting all devices to one network",
                  "Removing network security",
                  "Installing new cables"
                ]
              },
              {
                text: "Which is NOT a common network security tool?",
                options: [
                  "Intrusion Detection System",
                  "Antivirus software",
                  "Social media apps",
                  "Network monitoring tools"
                ]
              },
              {
                text: "What is the purpose of a DMZ in network security?",
                options: [
                  "To block all traffic",
                  "To create a buffer zone between internal and external networks",
                  "To speed up network connections",
                  "To store sensitive data"
                ]
              },
              {
                text: "Which is a best practice for network security?",
                options: [
                  "Using default passwords",
                  "Disabling all firewalls",
                  "Regular security audits and updates",
                  "Sharing network credentials"
                ]
              },
              {
                text: "What is port scanning used for?",
                options: [
                  "To send emails",
                  "To identify open network ports and vulnerabilities",
                  "To browse websites",
                  "To download files"
                ]
              },
              {
                text: "Which encryption protocol is most secure for WiFi?",
                options: [
                  "WEP",
                  "WPA",
                  "WPA3",
                  "HTTP"
                ]
              }
            ]
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
          name: "Week 3 Assessment",
          duration: "N/A",
          id: "cs-3-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is a key principle of secure coding?",
                options: [
                  "Writing code quickly",
                  "Input validation and sanitization",
                  "Using outdated libraries",
                  "Avoiding documentation"
                ]
              },
              {
                text: "Which is a common web application vulnerability?",
                options: [
                  "Strong passwords",
                  "Updated software",
                  "SQL injection",
                  "Regular backups"
                ]
              },
              {
                text: "What is two-factor authentication?",
                options: [
                  "Using the same password twice",
                  "Having two different usernames",
                  "Combining multiple authentication methods",
                  "Sharing credentials with two people"
                ]
              },
              {
                text: "Which encryption type is asymmetric?",
                options: [
                  "AES",
                  "DES",
                  "RSA",
                  "3DES"
                ]
              },
              {
                text: "What is Cross-Site Scripting (XSS)?",
                options: [
                  "A programming language",
                  "A security feature",
                  "A type of client-side attack",
                  "A backup method"
                ]
              },
              {
                text: "Which password practice is most secure?",
                options: [
                  "Using common words",
                  "Using personal information",
                  "Using unique, complex combinations",
                  "Using the same password everywhere"
                ]
              },
              {
                text: "What is the purpose of HTTPS?",
                options: [
                  "To make websites faster",
                  "To encrypt web traffic",
                  "To store cookies",
                  "To block advertisements"
                ]
              },
              {
                text: "Which is NOT a secure coding practice?",
                options: [
                  "Error handling",
                  "Code reviews",
                  "Storing passwords in plain text",
                  "Input validation"
                ]
              }
            ]
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
    },
    {
      title: "Week 9;Advanced Network Security",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Advanced Firewall Configuration",
          duration: "35 mins",
          id: "cs-9-1",
          content: {
            video: testVideo,
            description: "Advanced firewall settings and configurations",
            materials: ["Advanced Firewall Guide", "Configuration Examples"]
          }
        },
        {
          name: "IDS/IPS Systems",
          duration: "40 mins",
          id: "cs-9-2",
          content: {
            video: testVideo,
            description: "Intrusion Detection and Prevention Systems",
            materials: ["IDS/IPS Guide", "Implementation Steps"]
          }
        },
        {
          name: "Network Monitoring Tools",
          duration: "35 mins",
          id: "cs-9-3",
          content: {
            video: testVideo,
            description: "Advanced network monitoring and analysis",
            materials: ["Monitoring Tools Guide", "Analysis Templates"]
          }
        },
        {
          name: "Network Security Protocols",
          duration: "30 mins",
          id: "cs-9-4",
          content: {
            video: testVideo,
            description: "Advanced security protocols and implementations",
            materials: ["Protocol Guide", "Best Practices"]
          }
        },
        {
          name: "Week 9 Assessment",
          duration: "N/A",
          id: "cs-9-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is the purpose of an IDS?",
                options: [
                  "To block all traffic",
                  "To detect potential security threats",
                  "To speed up the network",
                  "To manage passwords"
                ]
              },
              {
                text: "Which is NOT a network monitoring tool?",
                options: [
                  "Wireshark",
                  "Nagios",
                  "Microsoft Word",
                  "Snort"
                ]
              },
              {
                text: "What is a VLAN?",
                options: [
                  "A type of malware",
                  "A virtual local area network",
                  "A video streaming service",
                  "A backup system"
                ]
              },
              {
                text: "Which protocol is used for secure email?",
                options: [
                  "HTTP",
                  "FTP",
                  "SMTP with TLS",
                  "ICMP"
                ]
              },
              {
                text: "What is network segmentation?",
                options: [
                  "Combining networks",
                  "Dividing networks into smaller parts",
                  "Removing networks",
                  "Installing new cables"
                ]
              },
              {
                text: "Which is a benefit of IPS?",
                options: [
                  "Faster internet",
                  "Automatic threat prevention",
                  "Better email service",
                  "More storage space"
                ]
              },
              {
                text: "What is packet sniffing?",
                options: [
                  "Testing network speed",
                  "Analyzing network traffic",
                  "Installing software",
                  "Creating backups"
                ]
              },
              {
                text: "Which is NOT a network security protocol?",
                options: [
                  "SSL/TLS",
                  "IPSec",
                  "JPEG",
                  "SSH"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      title: "Week 10;Cryptography and Encryption",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Advanced Encryption Methods",
          duration: "35 mins",
          id: "cs-10-1",
          content: {
            video: testVideo,
            description: "Modern encryption techniques and applications",
            materials: ["Encryption Guide", "Implementation Examples"]
          }
        },
        {
          name: "Public Key Infrastructure",
          duration: "40 mins",
          id: "cs-10-2",
          content: {
            video: testVideo,
            description: "Understanding and implementing PKI",
            materials: ["PKI Guide", "Setup Instructions"]
          }
        },
        {
          name: "Digital Signatures",
          duration: "35 mins",
          id: "cs-10-3",
          content: {
            video: testVideo,
            description: "Implementation of digital signatures",
            materials: ["Digital Signature Guide", "Usage Examples"]
          }
        },
        {
          name: "Key Management",
          duration: "30 mins",
          id: "cs-10-4",
          content: {
            video: testVideo,
            description: "Best practices in encryption key management",
            materials: ["Key Management Guide", "Security Protocols"]
          }
        },
        {
          name: "Week 10 Assessment",
          duration: "N/A",
          id: "cs-10-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              // ... similar question structure for Week 10
            ]
          }
        }
      ]
    },
    {
      title: "Week 11;Malware Analysis",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Types of Malware",
          duration: "35 mins",
          id: "cs-11-1",
          content: {
            video: testVideo,
            description: "Understanding different types of malicious software",
            materials: ["Malware Guide", "Classification Examples"]
          }
        },
        {
          name: "Malware Analysis Tools",
          duration: "40 mins",
          id: "cs-11-2",
          content: {
            video: testVideo,
            description: "Tools and techniques for analyzing malware",
            materials: ["Analysis Tools Guide", "Lab Setup Instructions"]
          }
        },
        {
          name: "Static Analysis",
          duration: "35 mins",
          id: "cs-11-3",
          content: {
            video: testVideo,
            description: "Performing static analysis of malware",
            materials: ["Static Analysis Guide", "Practice Examples"]
          }
        },
        {
          name: "Dynamic Analysis",
          duration: "30 mins",
          id: "cs-11-4",
          content: {
            video: testVideo,
            description: "Techniques for dynamic malware analysis",
            materials: ["Dynamic Analysis Guide", "Safety Protocols"]
          }
        },
        {
          name: "Week 11 Assessment",
          duration: "N/A",
          id: "cs-11-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is the purpose of malware analysis?",
                options: [
                  "To create malware",
                  "To understand how malware works and how to defend against it",
                  "To spread malware",
                  "To slow down computers"
                ]
              },
              {
                text: "Which tool is commonly used for static analysis?",
                options: [
                  "Task Manager",
                  "IDA Pro",
                  "Microsoft Word",
                  "Web Browser"
                ]
              },
              {
                text: "What is a sandbox in malware analysis?",
                options: [
                  "A playground",
                  "An isolated environment for testing malware",
                  "A backup system",
                  "An antivirus program"
                ]
              },
              {
                text: "Which is NOT a type of malware?",
                options: [
                  "Ransomware",
                  "Trojan",
                  "Secureware",
                  "Spyware"
                ]
              },
              {
                text: "What is dynamic analysis?",
                options: [
                  "Reading malware code",
                  "Observing malware behavior during execution",
                  "Deleting malware",
                  "Writing malware"
                ]
              },
              {
                text: "Which safety measure is most important in malware analysis?",
                options: [
                  "Fast internet connection",
                  "Isolation from production networks",
                  "Multiple monitors",
                  "Colorful interface"
                ]
              },
              {
                text: "What is a virus signature?",
                options: [
                  "A digital autograph",
                  "A unique pattern that identifies specific malware",
                  "An email attachment",
                  "A type of encryption"
                ]
              },
              {
                text: "Which is a characteristic of polymorphic malware?",
                options: [
                  "Never changes",
                  "Changes its code to avoid detection",
                  "Only works on Linux",
                  "Requires internet connection"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      title: "Week 12;Security Operations Center",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "SOC Fundamentals",
          duration: "35 mins",
          id: "cs-12-1",
          content: {
            video: testVideo,
            description: "Introduction to Security Operations Center",
            materials: ["SOC Basics", "Operational Framework"]
          }
        },
        {
          name: "SIEM Systems",
          duration: "40 mins",
          id: "cs-12-2",
          content: {
            video: testVideo,
            description: "Security Information and Event Management",
            materials: ["SIEM Guide", "Implementation Steps"]
          }
        },
        {
          name: "Incident Response",
          duration: "35 mins",
          id: "cs-12-3",
          content: {
            video: testVideo,
            description: "SOC incident response procedures",
            materials: ["Response Protocols", "Case Studies"]
          }
        },
        {
          name: "Threat Hunting",
          duration: "30 mins",
          id: "cs-12-4",
          content: {
            video: testVideo,
            description: "Proactive threat hunting techniques",
            materials: ["Hunting Guide", "Tool Overview"]
          }
        },
        {
          name: "Week 12 Assessment",
          duration: "N/A",
          id: "cs-12-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is the primary function of a SOC?",
                options: [
                  "Software development",
                  "24/7 security monitoring and response",
                  "Network installation",
                  "Employee training"
                ]
              },
              {
                text: "What does SIEM stand for?",
                options: [
                  "System Integration Engineering Management",
                  "Security Information and Event Management",
                  "Software Installation and Email Management",
                  "System Implementation and Error Monitoring"
                ]
              },
              {
                text: "Which is a key SOC metric?",
                options: [
                  "Number of coffee breaks",
                  "Mean time to detect and respond",
                  "Office decoration budget",
                  "Employee vacation days"
                ]
              },
              {
                text: "What is threat hunting?",
                options: [
                  "Playing video games",
                  "Proactively searching for security threats",
                  "Physical security patrols",
                  "Reading threat magazines"
                ]
              },
              {
                text: "Which tool is commonly used in SOCs?",
                options: [
                  "Microsoft Paint",
                  "Splunk",
                  "Video games",
                  "Music player"
                ]
              },
              {
                text: "What is an incident playbook?",
                options: [
                  "A sports manual",
                  "Documented procedures for handling specific incidents",
                  "A collection of games",
                  "Employee handbook"
                ]
              },
              {
                text: "Which is NOT a SOC tier level?",
                options: [
                  "Tier 1 - Alert Monitoring",
                  "Tier 2 - Incident Response",
                  "Tier 3 - Advanced Analysis",
                  "Tier 4 - Coffee Making"
                ]
              },
              {
                text: "What is the purpose of security orchestration?",
                options: [
                  "Playing music",
                  "Automating security operations and response",
                  "Organizing office parties",
                  "Managing budgets"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      title: "Week 13;Cloud Security Advanced",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Cloud Security Architecture",
          duration: "35 mins",
          id: "cs-13-1",
          content: {
            video: testVideo,
            description: "Advanced cloud security architecture principles",
            materials: ["Architecture Guide", "Design Patterns"]
          }
        },
        {
          name: "Container Security",
          duration: "40 mins",
          id: "cs-13-2",
          content: {
            video: testVideo,
            description: "Securing containerized applications",
            materials: ["Container Security Guide", "Best Practices"]
          }
        },
        {
          name: "Cloud Access Security",
          duration: "35 mins",
          id: "cs-13-3",
          content: {
            video: testVideo,
            description: "Advanced cloud access security controls",
            materials: ["Access Control Guide", "Implementation Steps"]
          }
        },
        {
          name: "Cloud Compliance",
          duration: "30 mins",
          id: "cs-13-4",
          content: {
            video: testVideo,
            description: "Cloud security compliance and regulations",
            materials: ["Compliance Guide", "Audit Checklist"]
          }
        },
        {
          name: "Week 13 Assessment",
          duration: "N/A",
          id: "cs-13-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is a container in cloud computing?",
                options: [
                  "A storage box",
                  "A standardized unit of software",
                  "A shipping container",
                  "A type of cloud"
                ]
              },
              {
                text: "Which is a container security best practice?",
                options: [
                  "Never updating containers",
                  "Using container image scanning",
                  "Sharing container credentials",
                  "Running containers as root"
                ]
              },
              {
                text: "What is the principle of least privilege?",
                options: [
                  "Giving everyone full access",
                  "Restricting access to minimum necessary permissions",
                  "Having no security",
                  "Changing passwords daily"
                ]
              },
              {
                text: "Which is a cloud compliance framework?",
                options: [
                  "HTML5",
                  "ISO 27017",
                  "TCP/IP",
                  "USB"
                ]
              },
              {
                text: "What is cloud workload protection?",
                options: [
                  "Physical server security",
                  "Security for cloud-based applications and services",
                  "Email protection",
                  "Website design"
                ]
              },
              {
                text: "Which is NOT a cloud service model?",
                options: [
                  "IaaS",
                  "PaaS",
                  "SaaS",
                  "DaaS (Dinner as a Service)"
                ]
              },
              {
                text: "What is a cloud security posture?",
                options: [
                  "How you sit at your desk",
                  "Your cloud environment's security status",
                  "Cloud server location",
                  "Internet speed"
                ]
              },
              {
                text: "Which tool is used for container orchestration?",
                options: [
                  "Microsoft Word",
                  "Kubernetes",
                  "Paint",
                  "Calculator"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      title: "Week 14;Advanced Security Topics",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Zero Trust Security",
          duration: "35 mins",
          id: "cs-14-1",
          content: {
            video: testVideo,
            description: "Understanding zero trust architecture",
            materials: ["Zero Trust Guide", "Implementation Steps"]
          }
        },
        {
          name: "AI in Cybersecurity",
          duration: "40 mins",
          id: "cs-14-2",
          content: {
            video: testVideo,
            description: "Applications of AI and ML in security",
            materials: ["AI Security Guide", "Use Cases"]
          }
        },
        {
          name: "IoT Security",
          duration: "35 mins",
          id: "cs-14-3",
          content: {
            video: testVideo,
            description: "Securing Internet of Things devices",
            materials: ["IoT Security Guide", "Best Practices"]
          }
        },
        {
          name: "Future Trends",
          duration: "30 mins",
          id: "cs-14-4",
          content: {
            video: testVideo,
            description: "Emerging trends in cybersecurity",
            materials: ["Trends Report", "Analysis Paper"]
          }
        },
        {
          name: "Week 14 Assessment",
          duration: "N/A",
          id: "cs-14-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is Zero Trust Security?",
                options: [
                  "Trusting all internal users",
                  "Never trusting, always verifying",
                  "Having no security",
                  "Trusting everyone"
                ]
              },
              {
                text: "How is AI used in cybersecurity?",
                options: [
                  "To replace all security staff",
                  "For threat detection and response",
                  "To create viruses",
                  "To slow down networks"
                ]
              },
              {
                text: "What is a key IoT security challenge?",
                options: [
                  "Too much security",
                  "Limited resources and processing power",
                  "Too few devices",
                  "Excessive bandwidth"
                ]
              },
              {
                text: "Which is an emerging cybersecurity trend?",
                options: [
                  "Less encryption",
                  "Quantum computing threats and defenses",
                  "Removing passwords",
                  "Eliminating updates"
                ]
              },
              {
                text: "What is behavioral analytics?",
                options: [
                  "Studying animal behavior",
                  "Analyzing user behavior patterns for security",
                  "Employee performance reviews",
                  "Network speed testing"
                ]
              },
              {
                text: "Which is NOT a Zero Trust principle?",
                options: [
                  "Verify explicitly",
                  "Trust but verify",
                  "Assume breach",
                  "Least privilege access"
                ]
              },
              {
                text: "What is edge computing security?",
                options: [
                  "Physical security",
                  "Securing distributed computing resources",
                  "Web browser security",
                  "Password management"
                ]
              },
              {
                text: "Which is a future security challenge?",
                options: [
                  "Simpler attacks",
                  "Quantum computing impact on encryption",
                  "Less sophisticated threats",
                  "Decreased connectivity"
                ]
              }
            ]
          }
        }
      ]
    }
  ]
};