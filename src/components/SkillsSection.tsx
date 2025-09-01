
// export default SkillsSection;
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Programming & Scripting",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 92 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 88 },
        { name: "C#", level: 80 }
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "LangChain", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "OpenCV", level: 85 }
      ]
    },
    {
      title: "Cloud & MLOps",
      skills: [
        { name: "Azure Machine Learning", level: 88 },
        { name: "Databricks", level: 85 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 82 },
        { name: "MLflow", level: 80 }
      ]
    },
    {
      title: "Data Engineering & Visualization",
      skills: [
        { name: "Azure Data Factory", level: 88 },
        { name: "Pandas / NumPy", level: 92 },
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 85 },
        { name: "Vector Databases (Pinecone, FAISS)", level: 85 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical <span className="text-accent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertise in AI/ML, Generative AI, Cloud MLOps, and data engineering with a strong foundation in programming and analytics.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-accent font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 100 + skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-muted-foreground">AI & Data Projects</div>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
