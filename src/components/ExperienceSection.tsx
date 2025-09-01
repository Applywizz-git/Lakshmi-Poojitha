
import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "DXC Technology",
      location: "Karnataka, India",
      period: "Aug 2022-Jul 2023",
      description: "Worked on AI-powered analytics and data engineering solutions, integrating cloud platforms and machine learning models to improve decision-making speed and accuracy.",
      achievements: [
        "Delivered executive-ready Power BI dashboards blending Azure Synapse and on-prem SQL data, improving decision speed by 30%",
        "Led migration of multi-terabyte datasets into Azure Data Lake with optimized Data Factory pipelines, boosting analytics query performance by 40%",
        "Automated Python-based data cleaning routines, reducing manual reporting time from hours to minutes",
        "Built and fine-tuned XGBoost and TensorFlow models for sales forecasting, reducing excess inventory by 12%",
        "Integrated LangChain-based RAG workflows with Pinecone VectorDB, increasing AI assistant accuracy to 85% on domain-specific queries"
      ]
    },
    {
      title: "Software Trainee Engineer Intern",
      company: "Prorigo Software Pvt Ltd",
      location: "Maharashtra, India",
      period: "Jun 2021 - May 2022",
      description: "Contributed to front-end development, data visualization, and automation for compliance and analytics platforms.",
      achievements: [
        "Designed Figma-based interactive prototypes for compliance workflows, reducing onboarding time by 25%",
        "Developed responsive React.js components with full WCAG 2.1 accessibility compliance",
        "Built real-time compliance KPI dashboards using D3.js and Chart.js, enabling earlier risk detection",
        "Optimized API query handling, reducing dashboard load times from 1.2 seconds to under a second",
        "Automated front-end deployments via Jenkins CI/CD pipelines, reducing release cycles from hours to minutes"
      ]
    }
  ];

  return (
    <section id="experience" className="py-10 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional <span className="text-accent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of my journey delivering AI, data engineering, and software solutions in real-world projects.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'} md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-auto md:right-4 w-8 h-8 bg-accent rounded-full border-4 border-background shadow-lg flex items-center justify-center transform md:translate-x-1/2">
                  <Building className="w-4 h-4 text-accent-foreground" />
                </div>

                {/* Experience Card */}
                <div className="ml-12 md:ml-0 bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-accent font-semibold">{exp.company}</div>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      {/* <div className="flex items-center text-muted-foreground mb-1"> */}
                      {/* <div className="flex items-center text-muted-foreground whitespace-nowrap"> */}
                      <div className="flex items-center text-black whitespace-nowrap">


                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      {/* <div className="flex items-center text-muted-foreground"> */}
                      {/* <div className="flex items-center text-muted-foreground whitespace-nowrap"> */}
<div className="flex items-center text-black whitespace-nowrap">

                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-purple-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-purple-600 text-sm">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
