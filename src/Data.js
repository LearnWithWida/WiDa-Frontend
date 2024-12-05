import courseImg1 from './assets/courseimg1.png';
import courseImg2 from './assets/courseimg2.png';
import courseImg3 from './assets/courseimg3.png';
import testingVideo from './assets/videos/testing.mp4';

export const courseData = [
  {
    id: 1,
    image: courseImg1,
    title: 'Data Science',
    price:'₦80,000.00',
    purchaseTag: "Virtual Study",
    purchaseTagTwo: "Physical Stduy",
    level: 'Beginners - Intermediate',
    description:
      `"Uncover Insights from Data: Dive into the dynamic world of data science and learn to transform raw data into actionable insights that drive decision-making. From mastering Python programming to applying machine learning algorithms, this course equips you with the expertise to tackle complex real-world problems. You'll explore key topics such as data visualization, statistical analysis, and big data handling while working on hands-on projects that simulate industry challenges. Whether you're analyzing trends, predicting outcomes, or automating processes, this comprehensive course prepares you to harness the power of data and shape a successful career in a data-driven economy."`,
      modules: [
        "Data Analysis with Microsoft Excel and SQL",
        "Data Science with Python",
        "Data Presentation with PowerPoint",
        "Introduction to Python libraries",
        "Statistical Analysis"
      ],
      videoContent: [
        {
          moduleId: 1,
          moduleTitle: "Data Analysis with Microsoft Excel and SQL",
          videoUrl: testingVideo,
          thumbnail: courseImg1,
          description: "Learn the fundamentals of data analysis using Microsoft Excel and SQL. Master essential techniques for data manipulation, visualization, and basic statistical analysis.",
          quiz: [
            {
              question: "What is the primary function of SQL?",
              options: [
                "Web design",
                "Database management and querying",
                "Video editing",
                "Graphic design"
              ],
              correctAnswer: 1
            },
            {
              question: "Which Excel function is used for summing values?",
              options: [
                "COUNT",
                "AVERAGE",
                "SUM",
                "MAX"
              ],
              correctAnswer: 2
            }
          ]
        },
        {
          moduleId: 2,
          moduleTitle: "Data Science with Python",
          videoUrl: testingVideo,
          thumbnail: courseImg1,
          description: "Master Python programming for data science. Learn about data structures, pandas, numpy, and basic machine learning concepts.",
          quiz: [
            {
              question: "What is Python?",
              options: [
                "A snake species",
                "A programming language",
                "A database",
                "A web browser"
              ],
              correctAnswer: 1
            }
          ]
        }
      ]
  },
  {
    id: 2,
    image: courseImg2,
    title: 'Research Analysis',
    price:'₦80,000.00',
    purchaseTag: "Virtual Study",
    purchaseTagTwo: "Physical Stduy",
    level: 'Beginners - Intermediate',
    description:
      `"Master the Art of Investigation: Develop a sharp analytical mindset with our comprehensive research analysis course. Learn how to design effective studies, collect reliable data, and analyze results to uncover trends, patterns, and meaningful insights. From hypothesis testing to statistical methods, this course equips you with the tools to conduct high-quality research and make informed decisions. Gain practical skills in interpreting complex data and presenting findings that can drive impactful change in various fields. Whether you're preparing for academic research or data-driven decision-making, this course is your pathway to mastering research analysis."`,
      modules: [
        "Introduction to SPSS",
        "Introduction to R",
        "Statistical analysis with Excel"
      ],
      videoContent: [
        {
          moduleId: 1,
          moduleTitle: "Introduction to SPSS",
          videoUrl: testingVideo,
          thumbnail: courseImg2,
          description: "Learn the basics of SPSS for statistical analysis. Master data import, manipulation, and basic statistical tests.",
          quiz: [
            {
              question: "What is SPSS used for?",
              options: [
                "Statistical analysis",
                "Web development",
                "Video editing",
                "Gaming"
              ],
              correctAnswer: 0
            }
          ]
        },
        {
          moduleId: 2,
          moduleTitle: "Introduction to R",
          videoUrl: testingVideo,
          thumbnail: courseImg2,
          description: "Get started with R programming for data analysis. Master basic statistical concepts and data manipulation techniques.",
          quiz: [
            {
              question: "What is R primarily used for?",
              options: [
                "Web design",
                "Statistical computing",
                "Game development",
                "Mobile app development"
              ],
              correctAnswer: 1
            }
          ]
        }
      ]
    },
  {
    id: 3,
    image: courseImg3,
    title: 'Data Analysis',
    price:'₦80,000.00',
    purchaseTag: "Virtual Study",
    purchaseTagTwo: "Physical Stduy",
    level: 'Beginners - Intermediate',
    description:
      `"Transform Data into Decisions: Become a data analysis expert with our hands-on course designed to equip you with essential skills to process, clean, and visualize data effectively. Learn how to transform raw data into valuable insights that guide strategic decisions and drive business outcomes. You'll master key tools like Excel, SQL, and Power BI, while developing the ability to generate actionable recommendations that can optimize operations, enhance customer experiences, and increase income. Whether you're analyzing market trends, customer behavior, or operational performance, this course will give you the practical experience needed to turn data into a powerful tool for business success."`,
      modules: [
        "Data Analysis with Microsoft Excel",
        "Introduction to PowerBI",
        "Basic Statistics and Forecasting"
      ],
      videoContent: [
        {
          moduleId: 1,
          moduleTitle: "Data Analysis with Microsoft Excel",
          videoUrl: testingVideo,
          thumbnail: courseImg3,
          description: "Learn how to analyze data using Excel. Master essential techniques for data manipulation, visualization, and basic statistical analysis.",
          quiz: [
            {
              question: "What is the purpose of data analysis?",
              options: [
                "To create spreadsheets",
                "To find insights from data",
                "To write code",
                "To make presentations"
              ],
              correctAnswer: 1
            }
          ]
        },
        {
          moduleId: 2,
          moduleTitle: "Introduction to PowerBI",
          videoUrl: testingVideo,
          thumbnail: courseImg3,
          description: "Get introduced to PowerBI for data visualization. Learn about data visualization techniques and PowerBI features.",
          quiz: [
            {
              question: "What is PowerBI used for?",
              options: [
                "Data visualization",
                "Web development",
                "Video editing",
                "Graphic design"
              ],
              correctAnswer: 0
            }
          ]
        }
      ]
    }
]

export const pricing = {
  virtual: {
    original: "150000",
    current: "100000"  // Amount in Naira
  },
  physical: {
    original: "250000",
    current: "200000"  // Amount in Naira
  }
};