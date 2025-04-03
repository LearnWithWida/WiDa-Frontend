import testVideo from '../assets/videos/testing.mp4';

export const virtualAssistanceContent = {
  title: "Virtual Assistance Course",
  weeks: [
    {
      title: "Week 1;Virtual Assistant Fundamentals",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Introduction to Virtual Assistance",
          duration: "30 mins",
          id: "va-1-1",
          content: {
            video: testVideo,
            description: "Learn the basics of virtual assistance",
            materials: ["VA Basics PDF", "Introduction Slides"]
          }
        },
        {
          name: "Essential VA Tools and Software",
          duration: "35 mins",
          id: "va-1-2",
          content: {
            video: testVideo,
            description: "Overview of essential tools and software",
            materials: ["Tools Guide", "Software Setup Instructions"]
          }
        },
        {
          name: "Time Management for VAs",
          duration: "30 mins",
          id: "va-1-3",
          content: {
            video: testVideo,
            description: "Effective time management strategies",
            materials: ["Time Management Guide", "Templates"]
          }
        },
        {
          name: "Professional Communication Skills",
          duration: "35 mins",
          id: "va-1-4",
          content: {
            video: testVideo,
            description: "Developing professional communication",
            materials: ["Communication Guide", "Templates"]
          }
        },
        {
          name: "Week 1 Assessment",
          duration: "N/A",
          id: "va-1-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is the primary role of a Virtual Assistant?",
                options: [
                  "Managing physical office spaces",
                  "Providing remote administrative support",
                  "In-person customer service",
                  "Hardware maintenance"
                ]
              },
              {
                text: "Which tool is most commonly used for scheduling meetings?",
                options: [
                  "Microsoft Word",
                  "Google Calendar",
                  "Adobe Photoshop",
                  "QuickBooks"
                ]
              },
              {
                text: "What is a key benefit of working as a virtual assistant?",
                options: [
                  "Limited career growth",
                  "Location independence",
                  "Fixed 9-5 schedule",
                  "No need for technology skills"
                ]
              },
              {
                text: "Which of these is NOT typically a virtual assistant service?",
                options: [
                  "Email management",
                  "Calendar management",
                  "Physical office cleaning",
                  "Social media management"
                ]
              },
              {
                text: "What is an important time management technique for virtual assistants?",
                options: [
                  "Working on multiple tasks simultaneously",
                  "Prioritizing tasks and time blocking",
                  "Working without breaks",
                  "Only working when inspired"
                ]
              },
              {
                text: "Which communication skill is most important for virtual assistants?",
                options: [
                  "Speaking multiple languages",
                  "Clear and professional writing",
                  "Public speaking",
                  "Graphic design"
                ]
              },
              {
                text: "What technology is essential for a virtual assistant?",
                options: [
                  "Gaming computer",
                  "Reliable internet connection",
                  "3D printer",
                  "Virtual reality headset"
                ]
              },
              {
                text: "Which of these is a professional boundary a VA should establish?",
                options: [
                  "Being available 24/7",
                  "Taking on any task requested",
                  "Setting clear working hours",
                  "Working without contracts"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      title: "Week 2;Business Setup",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Legal Business Structure",
          duration: "35 mins",
          id: "va-2-1",
          content: {
            video: testVideo,
            description: "Understanding different business structures and legal requirements",
            materials: ["Business Structure Guide", "Registration Checklist"]
          }
        },
        {
          name: "Creating Your VA Brand",
          duration: "30 mins",
          id: "va-2-2",
          content: {
            video: testVideo,
            description: "Developing your brand identity and professional presence",
            materials: ["Branding Guide", "Brand Templates"]
          }
        },
        {
          name: "Setting Up Your Home Office",
          duration: "35 mins",
          id: "va-2-3",
          content: {
            video: testVideo,
            description: "Creating an efficient and professional home office setup",
            materials: ["Office Setup Guide", "Equipment Checklist"]
          }
        },
        {
          name: "Business Planning",
          duration: "35 mins",
          id: "va-2-4",
          content: {
            video: testVideo,
            description: "Creating a comprehensive business plan for your VA business",
            materials: ["Business Plan Template", "Financial Planning Guide"]
          }
        },
        {
          name: "Week 2 Assessment",
          duration: "N/A",
          id: "va-2-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is an important consideration when choosing a legal business structure?",
                options: [
                  "The color of your logo",
                  "Tax implications and liability protection",
                  "The number of employees you have",
                  "Your office location"
                ]
              },
              {
                text: "Which element is most important for a professional VA brand?",
                options: [
                  "Having an expensive office",
                  "Consistent visual identity and messaging",
                  "Using as many social media platforms as possible",
                  "Having a physical storefront"
                ]
              },
              {
                text: "What should be included in a VA business plan?",
                options: [
                  "Your favorite hobbies",
                  "Services, target market, and pricing strategy",
                  "Plans for hiring 50+ employees",
                  "Physical office expansion plans"
                ]
              },
              {
                text: "Which is NOT necessary for a basic home office setup?",
                options: [
                  "Reliable computer",
                  "High-speed internet",
                  "Commercial office furniture",
                  "Quiet workspace"
                ]
              },
              {
                text: "What is the purpose of a client contract?",
                options: [
                  "To make the relationship complicated",
                  "To protect both parties and clarify expectations",
                  "To lock clients into lifetime commitments",
                  "To impress clients with legal jargon"
                ]
              },
              {
                text: "Which business registration might a VA need?",
                options: [
                  "Manufacturing license",
                  "Business license or sole proprietorship",
                  "Restaurant permit",
                  "Import/export license"
                ]
              },
              {
                text: "What should be included in your VA service packages?",
                options: [
                  "Only the highest-priced services",
                  "Services you're not qualified to provide",
                  "Clear descriptions, deliverables, and pricing",
                  "Unlimited revisions and 24/7 availability"
                ]
              },
              {
                text: "What is important to consider when setting your VA rates?",
                options: [
                  "Only what competitors charge",
                  "Your experience, skills, and business expenses",
                  "Charging the absolute lowest rates possible",
                  "Charging the same rate for all services"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      title: "Week 3;Communication and Client Relations",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Professional Email Communication",
          duration: "35 mins",
          id: "va-3-1",
          content: {
            video: testVideo,
            description: "Mastering email etiquette and communication",
            materials: ["Email Guide", "Templates Pack"]
          }
        },
        {
          name: "Client Meeting Management",
          duration: "30 mins",
          id: "va-3-2",
          content: {
            video: testVideo,
            description: "Conducting and managing virtual client meetings",
            materials: ["Meeting Guide", "Agenda Templates"]
          }
        },
        {
          name: "Cross-Cultural Communication",
          duration: "35 mins",
          id: "va-3-3",
          content: {
            video: testVideo,
            description: "Working effectively with international clients",
            materials: ["Cultural Guide", "Communication Tips"]
          }
        },
        {
          name: "Conflict Resolution",
          duration: "35 mins",
          id: "va-3-4",
          content: {
            video: testVideo,
            description: "Handling difficult situations and resolving conflicts",
            materials: ["Resolution Guide", "Case Studies"]
          }
        },
        {
          name: "Week 3 Assessment",
          duration: "N/A",
          id: "va-3-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is an important skill for effective email management?",
                options: [
                  "Graphic design",
                  "Programming",
                  "Prioritization and organization",
                  "Video editing"
                ]
              },
              {
                text: "Which communication channel is typically NOT used by Virtual Assistants?",
                options: [
                  "Email",
                  "Video conferencing",
                  "In-person meetings",
                  "Instant messaging"
                ]
              },
              {
                text: "What is a best practice for client communication?",
                options: [
                  "Using slang and informal language",
                  "Responding whenever convenient",
                  "Clear, prompt, and professional responses",
                  "Avoiding written communication"
                ]
              },
              {
                text: "How should a VA handle cultural differences with international clients?",
                options: [
                  "Ignore them completely",
                  "Expect clients to adapt to your culture",
                  "Research and respect cultural differences",
                  "Only work with clients from your culture"
                ]
              },
              {
                text: "What is the best approach to handling client feedback?",
                options: [
                  "Taking it personally and defending your work",
                  "Ignoring feedback you disagree with",
                  "Receiving it professionally and making improvements",
                  "Arguing with the client about their preferences"
                ]
              },
              {
                text: "How should a VA handle a difficult client situation?",
                options: [
                  "Immediately terminate the relationship",
                  "Ignore the problem and hope it resolves itself",
                  "Address concerns professionally and find solutions",
                  "Complain about the client on social media"
                ]
              },
              {
                text: "What is important when conducting client meetings?",
                options: [
                  "Having no agenda",
                  "Preparation, punctuality, and follow-up",
                  "Keeping meetings as long as possible",
                  "Multitasking during the meeting"
                ]
              },
              {
                text: "Which is a key element of professional communication?",
                options: [
                  "Using technical jargon regardless of client understanding",
                  "Clarity, conciseness, and courtesy",
                  "Lengthy explanations with many details",
                  "Responding only when you have time"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      title: "Week 4;Project Management",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Project Planning Basics",
          duration: "35 mins",
          id: "va-4-1",
          content: {
            video: testVideo,
            description: "Fundamentals of project planning",
            materials: ["Planning Guide", "Templates"]
          }
        },
        {
          name: "Task Management",
          duration: "30 mins",
          id: "va-4-2",
          content: {
            video: testVideo,
            description: "Managing and prioritizing tasks",
            materials: ["Task Guide", "Checklists"]
          }
        },
        {
          name: "Project Tracking",
          duration: "35 mins",
          id: "va-4-3",
          content: {
            video: testVideo,
            description: "Tracking project progress",
            materials: ["Tracking Guide", "Templates"]
          }
        },
        {
          name: "Team Collaboration",
          duration: "35 mins",
          id: "va-4-4",
          content: {
            video: testVideo,
            description: "Working with project teams",
            materials: ["Collaboration Guide", "Tools"]
          }
        },
        {
          name: "Week 4 Assessment",
          duration: "N/A",
          id: "va-4-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is the best practice for managing a client's calendar?",
                options: [
                  "Schedule meetings without confirming availability",
                  "Double-book time slots to maximize efficiency",
                  "Confirm availability before scheduling",
                  "Only schedule meetings during weekends"
                ]
              },
              {
                text: "Which of these is NOT a common virtual assistant task?",
                options: [
                  "Email management",
                  "Social media management",
                  "Physical office maintenance",
                  "Data entry"
                ]
              },
              {
                text: "What is a key component of project planning?",
                options: [
                  "Starting without clear objectives",
                  "Defining scope, timeline, and deliverables",
                  "Avoiding client input",
                  "Skipping the planning phase entirely"
                ]
              },
              {
                text: "Which method is effective for task prioritization?",
                options: [
                  "Working on tasks in random order",
                  "Only doing tasks you enjoy",
                  "Using urgency/importance matrix (Eisenhower Box)",
                  "Leaving prioritization to chance"
                ]
              },
              {
                text: "What is an important aspect of project tracking?",
                options: [
                  "Only tracking completed tasks",
                  "Keeping progress information private from clients",
                  "Regular updates and milestone tracking",
                  "Avoiding documentation of progress"
                ]
              },
              {
                text: "How should a VA handle multiple client projects?",
                options: [
                  "Focus only on one client at a time",
                  "Organize and separate projects with clear systems",
                  "Mix all client work together",
                  "Prioritize only the highest-paying client"
                ]
              },
              {
                text: "What is a benefit of using project management software?",
                options: [
                  "Making projects more complicated",
                  "Avoiding client communication",
                  "Centralized organization and tracking",
                  "Increasing project costs unnecessarily"
                ]
              },
              {
                text: "Which is a best practice for meeting deadlines?",
                options: [
                  "Setting unrealistic timeframes",
                  "Building in buffer time and breaking down tasks",
                  "Waiting until the last minute",
                  "Accepting all deadline requests without question"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      title: "Week 5;Digital Tools and Technology",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Project Management Tools",
          duration: "35 mins",
          id: "va-5-1",
          content: {
            video: testVideo,
            description: "Using popular project management software",
            materials: ["Tools Comparison", "Setup Guides"]
          }
        },
        {
          name: "Cloud Storage Solutions",
          duration: "30 mins",
          id: "va-5-2",
          content: {
            video: testVideo,
            description: "Managing and organizing cloud-based files",
            materials: ["Cloud Storage Guide", "Organization Templates"]
          }
        },
        {
          name: "Productivity Apps",
          duration: "35 mins",
          id: "va-5-3",
          content: {
            video: testVideo,
            description: "Essential productivity applications for VAs",
            materials: ["Apps Guide", "Workflow Templates"]
          }
        },
        {
          name: "Communication Platforms",
          duration: "35 mins",
          id: "va-5-4",
          content: {
            video: testVideo,
            description: "Using various communication and collaboration tools",
            materials: ["Platforms Guide", "Setup Instructions"]
          }
        },
        {
          name: "Week 5 Assessment",
          duration: "N/A",
          id: "va-5-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What software is commonly used for project management by virtual assistants?",
                options: [
                  "Adobe Photoshop",
                  "Trello or Asana",
                  "QuickBooks",
                  "AutoCAD"
                ]
              },
              {
                text: "Which cloud storage solution is commonly used by virtual assistants?",
                options: [
                  "Local hard drives only",
                  "Google Drive or Dropbox",
                  "Printed documents",
                  "USB flash drives"
                ]
              },
              {
                text: "What is an important consideration when choosing VA software tools?",
                options: [
                  "Only selecting the most expensive options",
                  "Compatibility with client systems and ease of use",
                  "Choosing tools with the most features regardless of needs",
                  "Avoiding cloud-based solutions"
                ]
              },
              {
                text: "Which is a best practice for password management?",
                options: [
                  "Using the same password for all accounts",
                  "Writing passwords on sticky notes",
                  "Using a secure password manager",
                  "Sharing passwords via email"
                ]
              },
              {
                text: "What is important when sharing files with clients?",
                options: [
                  "Always sending large attachments via email",
                  "Using secure, organized sharing methods with clear naming",
                  "Keeping all files on your local computer only",
                  "Sharing everything in one folder without organization"
                ]
              },
              {
                text: "Which tool is most useful for scheduling appointments?",
                options: [
                  "Word processor",
                  "Calendly or similar scheduling software",
                  "Spreadsheet program",
                  "Social media platforms"
                ]
              },
              {
                text: "What is a key benefit of using automation tools?",
                options: [
                  "Replacing all human interaction",
                  "Making tasks more complicated",
                  "Saving time on repetitive tasks",
                  "Increasing costs unnecessarily"
                ]
              },
              {
                text: "Which is an important security practice for VAs?",
                options: [
                  "Sharing login credentials freely",
                  "Using public WiFi for client work without VPN",
                  "Regular software updates and using secure connections",
                  "Avoiding all security measures as they slow down work"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      title: "Week 6;Calendar and Email Management",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Calendar Management Strategies",
          duration: "35 mins",
          id: "va-6-1",
          content: {
            video: testVideo,
            description: "Advanced calendar management techniques",
            materials: ["Calendar Guide", "Scheduling Templates"]
          }
        },
        {
          name: "Email Organization",
          duration: "30 mins",
          id: "va-6-2",
          content: {
            video: testVideo,
            description: "Email management and organization systems",
            materials: ["Email Organization Guide", "Folder Templates"]
          }
        },
        {
          name: "Appointment Scheduling",
          duration: "35 mins",
          id: "va-6-3",
          content: {
            video: testVideo,
            description: "Managing appointments and scheduling tools",
            materials: ["Scheduling Tools Guide", "Best Practices"]
          }
        },
        {
          name: "Time Zone Management",
          duration: "35 mins",
          id: "va-6-4",
          content: {
            video: testVideo,
            description: "Working with clients across different time zones",
            materials: ["Time Zone Guide", "Planning Templates"]
          }
        },
        {
          name: "Week 6 Assessment",
          duration: "N/A",
          id: "va-6-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is the most effective way to manage multiple client calendars?",
                options: [
                  "Use separate calendar applications for each client",
                  "Use color coding and calendar sharing in a single system",
                  "Print all appointments and keep them in a binder",
                  "Schedule all clients at the same time to save time"
                ]
              },
              {
                text: "When working with clients in different time zones, what's the best practice?",
                options: [
                  "Always use your local time and let clients convert",
                  "Use UTC (Coordinated Universal Time) for all communications",
                  "Clearly specify the time zone for all appointments",
                  "Only work with clients in your time zone"
                ]
              },
              {
                text: "What is an effective email management strategy?",
                options: [
                  "Checking emails only once a week",
                  "Using folders, filters, and regular processing times",
                  "Keeping all emails in the inbox indefinitely",
                  "Responding to emails as they arrive 24/7"
                ]
              },
              {
                text: "Which is a best practice for calendar blocking?",
                options: [
                  "Scheduling every minute without breaks",
                  "Allocating time for specific tasks and including buffer time",
                  "Only scheduling client meetings",
                  "Avoiding any structure in your calendar"
                ]
              },
              {
                text: "What is important when scheduling appointments for clients?",
                options: [
                  "Booking without confirming client availability",
                  "Confirming details and sending calendar invites with reminders",
                  "Providing minimal information about the appointment",
                  "Scheduling at times convenient only for you"
                ]
              },
              {
                text: "How should a VA handle email overload?",
                options: [
                  "Ignore less important emails",
                  "Delete all emails without reading them",
                  "Implement a system like Inbox Zero or the 4D method",
                  "Forward all emails to the client to handle"
                ]
              },
              {
                text: "What is a key benefit of using scheduling software?",
                options: [
                  "Making scheduling more complicated",
                  "Eliminating the need for a calendar",
                  "Reducing back-and-forth emails and scheduling errors",
                  "Increasing the number of meetings"
                ]
              },
              {
                text: "Which is an important practice for managing recurring appointments?",
                options: [
                  "Setting them up once and never reviewing",
                  "Regular review and confirmation of recurring events",
                  "Avoiding recurring appointments entirely",
                  "Scheduling them manually each time"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      title: "Week 7;Content Management",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Blog Management",
          duration: "35 mins",
          id: "va-7-1",
          content: {
            video: testVideo,
            description: "Managing and organizing blog content",
            materials: ["Blog Management Guide", "Content Calendar"]
          }
        },
        {
          name: "Website Updates",
          duration: "30 mins",
          id: "va-7-2",
          content: {
            video: testVideo,
            description: "Basic website maintenance and updates",
            materials: ["Website Guide", "Maintenance Checklist"]
          }
        },
        {
          name: "Content Research",
          duration: "35 mins",
          id: "va-7-3",
          content: {
            video: testVideo,
            description: "Conducting effective content research",
            materials: ["Research Methods", "Source Guide"]
          }
        },
        {
          name: "SEO Basics",
          duration: "35 mins",
          id: "va-7-4",
          content: {
            video: testVideo,
            description: "Understanding basic SEO principles",
            materials: ["SEO Guide", "Optimization Checklist"]
          }
        },
        {
          name: "Week 7 Assessment",
          duration: "N/A",
          id: "va-7-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What is a content calendar used for?",
                options: [
                  "Tracking employee attendance",
                  "Planning and organizing content publication schedules",
                  "Managing client billing cycles",
                  "Scheduling social events"
                ]
              },
              {
                text: "Which of these is a basic SEO practice for blog content?",
                options: [
                  "Using as many keywords as possible in every paragraph",
                  "Creating extremely long titles with all keywords",
                  "Using relevant keywords naturally in quality content",
                  "Avoiding the use of headings and subheadings"
                ]
              },
              {
                text: "What is an important aspect of blog management?",
                options: [
                  "Publishing without proofreading",
                  "Consistent posting schedule and quality control",
                  "Using only automated content",
                  "Avoiding all images and media"
                ]
              },
              {
                text: "Which is a best practice for website updates?",
                options: [
                  "Making changes without backups",
                  "Testing updates before publishing and maintaining backups",
                  "Changing the entire website design frequently",
                  "Ignoring mobile responsiveness"
                ]
              },
              {
                text: "What is important when conducting content research?",
                options: [
                  "Using only one source",
                  "Copying content directly from other websites",
                  "Using reliable sources and proper citation",
                  "Focusing only on quantity, not quality"
                ]
              },
              {
                text: "Which is a key element of effective content creation?",
                options: [
                  "Using complex language to sound impressive",
                  "Understanding the target audience and their needs",
                  "Creating content without any specific goals",
                  "Avoiding all formatting and structure"
                ]
              },
              {
                text: "What is a benefit of repurposing content?",
                options: [
                  "It allows for plagiarism",
                  "It maximizes content value across different platforms",
                  "It eliminates the need for new content",
                  "It confuses the audience with repetition"
                ]
              },
              {
                text: "Which metric is important to track for content performance?",
                options: [
                  "Only the number of words",
                  "The age of the content",
                  "Engagement, traffic, and conversion rates",
                  "The number of images used"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      title: "Week 8;Financial Management",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Basic Bookkeeping",
          duration: "35 mins",
          id: "va-8-1",
          content: {
            video: testVideo,
            description: "Essential bookkeeping for virtual assistants",
            materials: ["Bookkeeping Guide", "Spreadsheet Templates"]
          }
        },
        {
          name: "Invoice Management",
          duration: "30 mins",
          id: "va-8-2",
          content: {
            video: testVideo,
            description: "Creating and managing invoices",
            materials: ["Invoice Templates", "Payment Systems Guide"]
          }
        },
        {
          name: "Expense Tracking",
          duration: "35 mins",
          id: "va-8-3",
          content: {
            video: testVideo,
            description: "Tracking business expenses effectively",
            materials: ["Expense Guide", "Tracking Templates"]
          }
        },
        {
          name: "Financial Planning",
          duration: "35 mins",
          id: "va-8-4",
          content: {
            video: testVideo,
            description: "Basic financial planning for VA business",
            materials: ["Planning Guide", "Budget Templates"]
          }
        },
        {
          name: "Week 8 Assessment",
          duration: "N/A",
          id: "va-8-assessment",
          isAssignment: true,
          content: {
            isAssignment: true,
            questions: [
              {
                text: "What should be included in a professional invoice?",
                options: [
                  "Only the total amount due",
                  "Your personal shopping list",
                  "Contact information, itemized services, payment terms, and due date",
                  "Client's personal information like birthdate and social security number"
                ]
              },
              {
                text: "Which of these is a best practice for expense tracking?",
                options: [
                  "Keep all receipts in an unsorted box",
                  "Only track large expenses",
                  "Categorize and record expenses regularly",
                  "Mix personal and business expenses in one account"
                ]
              },
              {
                text: "What is an important aspect of VA financial planning?",
                options: [
                  "Spending all income immediately",
                  "Budgeting for taxes, expenses, and income fluctuations",
                  "Avoiding all business investments",
                  "Ignoring retirement planning"
                ]
              },
              {
                text: "Which is a best practice for setting service rates?",
                options: [
                  "Always charging the lowest possible rate",
                  "Calculating based on expenses, market rates, and value provided",
                  "Charging different rates for each client without explanation",
                  "Never increasing rates for existing clients"
                ]
              },
              {
                text: "What is important when managing client payments?",
                options: [
                  "Accepting only cash payments",
                  "Having no payment policies",
                  "Clear payment terms and multiple payment options",
                  "Demanding payment before any work is done"
                ]
              },
              {
                text: "Which financial record should a VA maintain?",
                options: [
                  "Only records of paid invoices",
                  "No records at all",
                  "Comprehensive income, expenses, and tax documentation",
                  "Only records required by clients"
                ]
              },
              {
                text: "What is a benefit of using accounting software?",
                options: [
                  "Making finances more complicated",
                  "Eliminating the need for financial planning",
                  "Streamlining bookkeeping and generating financial reports",
                  "Increasing business expenses unnecessarily"
                ]
              },
              {
                text: "Which is a tax consideration for virtual assistants?",
                options: [
                  "Taxes don't apply to virtual work",
                  "Setting aside funds for taxes and tracking deductible expenses",
                  "Paying taxes only when convenient",
                  "Using only personal tax forms for business"
                ]
              }
            ]
          }
        }
      ]
    }
  ].filter(week => !week.title?.toLowerCase().includes('month') && !week.title?.toLowerCase().includes('final course'))
}; 