
import { GoogleGenAI } from "@google/genai";
import { Project, Experience } from '../types';

// Access API Key securely from environment variables
// We use a safe access pattern to satisfy TypeScript without conflicting with global Node types
const getApiKey = (): string => {
  // @ts-ignore - process is defined by Vite via define plugin
  return process.env.API_KEY || '';
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

const generateContent = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || '';
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    return "Error: Could not generate content. Please try again.";
  }
};


export const generateBio = async (name: string, title: string, skills: string): Promise<string> => {
  const prompt = `
    Generate a professional and engaging "About Me" bio for a portfolio website.
    The bio should be in the first person, 2-3 sentences long, and have a creative yet professional tone.
    
    Details:
    - Name: ${name}
    - Title/Role: ${title}
    - Key Skills: ${skills}

    Example Output:
    "As a passionate ${title}, I specialize in crafting exceptional digital experiences. With a strong foundation in ${skills}, I thrive on solving complex problems and turning innovative ideas into reality. I'm dedicated to continuous learning and pushing the boundaries of technology to create impactful solutions."

    Now, generate a new bio based on the provided details.
  `;
  return generateContent(prompt);
};

export const generateProjectDescription = async (project: Omit<Project, 'id' | 'longDescription'>): Promise<string> => {
  const prompt = `
    Generate a detailed and professional project description for a portfolio website.
    Elaborate on the project's goals, features, and the technologies used.
    
    Project Name: ${project.name}
    Brief Description: ${project.shortDescription}
    Technologies Used: ${project.technologies.join(', ')}

    Example Output:
    "For ${project.name}, the primary objective was to ${project.shortDescription.toLowerCase()}. This was achieved by developing a full-featured platform with capabilities such as [mention 2-3 key features, e.g., real-time data visualization, user authentication, and a responsive mobile-first design]. The tech stack was centered around ${project.technologies.join(', ')}, leveraging their strengths to build a robust and scalable application. This project showcases my ability to translate concepts into functional and user-friendly products."

    Now, generate a new project description based on the provided details.
  `;
  return generateContent(prompt);
};

export const generateExperienceDescription = async (experience: Omit<Experience, 'id' | 'longDescription'>): Promise<string> => {
    const prompt = `
      Generate a professional summary of responsibilities and achievements for a role at a company to be used in a portfolio.
      Focus on action verbs and quantifiable results if possible.
      
      Company: ${experience.company}
      Role: ${experience.role}
      Brief Description of Duties: ${experience.shortDescription}
      
      Example Output:
      "In my role as ${experience.role} at ${experience.company}, I was responsible for ${experience.shortDescription.toLowerCase()}. Key achievements included spearheading the development of a new feature that increased user engagement by 15%, optimizing database queries to reduce server response time by 30%, and collaborating with cross-functional teams to deliver projects ahead of schedule. I consistently contributed to a high-performing team environment and helped mentor junior developers."

      Now, generate a new experience summary based on the provided details.
    `;
    return generateContent(prompt);
};
