import React from 'react';
import '../style.css'; // Ensure your flip + glow styles are in this file

const projects = [
  {
    title: 'Crypto Website',
    description:
      'Luxury, glassmorphic-style crypto trading site with animations and Web3 onboarding.',
    tech: ['HTML', 'CSS', 'TypeScript'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Jasleen-05/crypto-website-jasleen' },
      { label: 'Live Demo', url: 'https://lovable.dev/projects/a98de9df-c9d7-4f7e-af23-776de63be175' },
    ],
  },
  {
    title: 'Web Portfolio',
    description:
      'Personal portfolio built using React with 3D Spline, dark mode, and project flips.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'HTML'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Jasleen-05/Web-Portfolio/tree/main' },
      { label: 'Live Demo', url: 'https://jasleen-web-portfolio.netlify.app/' },
      { label: 'GitHub-React', url: 'https://github.com/Jasleen-05/Web-Portfolio' },
      { label: 'Live Demo-React', url: 'https://react-jasleen-web-portfolio.netlify.app/' },
    ],
  },
  {
    title: 'AURA – Women’s Safety App',
    description:
      'Real-time AR scanning, voice SOS, emotion recognition, AI shield & legal help.',
    tech: ['Android', 'Kotlin', 'XML'],
    link: 'https://github.com/Jasleen-05/Aura',
  },
  {
    title: 'Property Price Predictor',
    description:
      'ML model predicting property rates using trend analysis and linear regression.',
    tech: ['Python', 'ML', 'Linear Regression'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Jasleen-05/Property-Price-Prediction' },
      { label: 'Live Demo', url: 'https://property-price-prediction-jasleen.streamlit.app/' },
    ],
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'Predicts potential customer loss using behavioral analytics and unsupervised learning.',
    tech: ['Python', 'ML', 'Unsupervised Learning'],
    links: [
      { label: 'GitHub', url: 'hhttps://github.com/Jasleen-05/Customer-Churn-Prediction' },
      { label: 'Live Demo', url: 'https://customer-churn-prediction-jasleen.streamlit.app/' },
    ],
  },
  {
    title: 'Early Disease Detection',
    description:
      'Analyzes patient data to detect potential diseases using predictive modeling.',
    tech: ['Healthcare', 'ML', 'Data Science', 'Python'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Jasleen-05/Early-Disease-Detection' },
      { label: 'Live Demo', url: 'https://early-disease-detection-jasleen.streamlit.app/' },
    ],
  },
  {
    title: 'E-Bidding Website',
    description:
      'Bid-based platform using HTML, CSS, and JavaScript for dynamic auction functionality.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Jasleen-05/E-bidding',
  },
  {
    title: 'Fine-Tuned Local Chatbot',
    description:
      'Offline chatbot using a fine-tuned Transformer model (Hugging Face + PyTorch) with Flask.',
    tech: ['Python', 'Flask', 'Hugging Face', 'LLM'],
    link: 'https://huggingface.co/Jasleen05/my-local-chatbot',
  },
  {
    title: 'Stable Diffusion Chatbot',
    description:
      'Flask chatbot that generates images from text using Stable Diffusion in real-time.',
    tech: ['Python', 'Flask', 'Stable Diffusion'],
    link: 'https://github.com/Jasleen-05/Stable-diffusion-chatbot',
  },
  {
    title: 'Mistral Chatbot',
    description:
      'Locally hosted conversational AI powered by Mistral-7B, built with Flask for real-time chat.',
    tech: ['Python', 'Flask', 'Mistral-7B'],
    link: 'https://github.com/Jasleen-05/Mistral-Chatbot',
  },
  {
    title: 'LLaMA Chatbot',
    description:
      "Lightweight AI chatbot using Meta's LLaMA model with Flask & Hugging Face Transformers.",
    tech: ['Python', 'Flask', 'LLaMA', 'Transformers'],
    link: 'https://github.com/Jasleen-05/llama-chatbot',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-16">
        <h3 className="text-3xl font-bold text-purple-600 mb-10 text-center">Projects</h3>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flip-card">
              <div className="flip-inner">
                {/* Front */}
                <div className="flip-front project-bubble">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back */}
                <div className="flip-back">
                  <div className="flex flex-col items-center gap-2">
                    {project.links ? (
                      project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-button"
                        >
                          {link.label}
                        </a>
                      ))
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-button"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;