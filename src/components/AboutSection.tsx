// import { Code, Database, Cloud, Users } from 'lucide-react';

// const AboutSection = () => {
//   const highlights = [
//     {
//       icon: Code,
//       title: "Full Stack Development",
//       description: "Expert in Java, Spring Boot, React, and modern web technologies"
//     },
//     {
//       icon: Cloud,
//       title: "Cloud Architecture",
//       description: "AWS certified with experience in microservices and serverless"
//     },
//     {
//       icon: Database,
//       title: "Database Design",
//       description: "Proficient in SQL, NoSQL, and data modeling best practices"
//     },
//     {
//       icon: Users,
//       title: "Team Leadership",
//       description: "Led cross-functional teams in agile development environments"
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-muted/5">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//               About <span className="text-accent">Me</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               A passionate IT professional with over 30 years of experience building enterprise-grade applications and leading development teams.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Content */}
//             <div className="space-y-6">
//               <h3 className="text-2xl font-bold text-foreground mb-4">
//                 Crafting Digital Solutions That Matter
//               </h3>
//               <p className="text-muted-foreground text-lg leading-relaxed">
//                 I specialize in developing scalable, high-performance applications using cutting-edge technologies. 
//                 My expertise spans across the entire software development lifecycle, from system architecture 
//                 and database design to deployment and maintenance.
//               </p>
//               <p className="text-muted-foreground text-lg leading-relaxed">
//                 Currently focused on Java ecosystem technologies including Spring Boot, microservices architecture, 
//                 and cloud-native development. I'm passionate about writing clean, maintainable code and 
//                 implementing best practices that ensure long-term project success.
//               </p>
//               <div className="flex flex-wrap gap-3 pt-4">
//                 {["Java", "Spring Boot", "React", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"].map((tech) => (
//                   <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Highlights Grid */}
//             <div className="grid sm:grid-cols-2 gap-6">
//               {highlights.map((highlight, index) => (
//                 <div
//                   key={index}
//                   className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border"
//                 >
//                   <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
//                     <highlight.icon className="w-6 h-6 text-accent" />
//                   </div>
//                   <h4 className="text-lg font-semibold text-card-foreground mb-2">
//                     {highlight.title}
//                   </h4>
//                   <p className="text-muted-foreground text-sm">
//                     {highlight.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import { Code, Database, Cloud, Brain } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Machine Learning & AI",
      description: "Proficient in TensorFlow, PyTorch, Keras, and scikit-learn for building predictive models."
    },
    {
      icon: Cloud,
      title: "Cloud & MLOps",
      description: "Experienced with Azure Machine Learning, Databricks, Docker, and CI/CD pipelines."
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Skilled in SQL, NoSQL, Azure Data Factory, Databricks, and vector databases like Pinecone & FAISS."
    },
    {
      icon: Brain,
      title: "Generative AI & LLMs",
      description: "Specialized in LangChain, Retrieval-Augmented Generation (RAG), and LLM fine-tuning."
    }
  ];

  return (
    <section id="about" className="py-10 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-accent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI/ML Engineer and Data Scientist with expertise in building production-ready machine learning, deep learning, and generative AI solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Turning Data into Intelligent Solutions
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I specialize in designing and deploying scalable AI systems that transform complex datasets into actionable insights. 
                My expertise spans the full machine learning lifecycle — from data engineering and model development to deployment and optimization.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently focused on Generative AI, Retrieval-Augmented Generation (RAG), cloud-based MLOps, and predictive modeling. 
                I am passionate about leveraging AI to solve real-world problems and deliver measurable business impact.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {["Python", "TensorFlow", "PyTorch", "LangChain", "Azure", "Databricks", "Power BI", "Pinecone"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border"
                >
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-purple-600 text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
