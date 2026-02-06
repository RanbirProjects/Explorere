
import { GoogleGenAI, Type } from "@google/genai";
import { InsightResult } from "../types";

export const generateInsight = async (reflection: string): Promise<InsightResult> => {
  const rawKey = process.env.API_KEY || '';
  const sanitizedKey = rawKey.trim();

  if (!sanitizedKey) {
    throw new Error("API_KEY is missing. Please ensure your environment variable is configured.");
  }

  const ai = new GoogleGenAI({ apiKey: sanitizedKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Perform high-fidelity diagnostic analysis on: "${reflection}"`,
      config: {
        systemInstruction: `You are an elite Institutional Strategist and Organizational Architect. 
        Your task is to provide a high-density "Strategic Snapshot" that is concise, sharp, and advanced.
        
        TONE RULES:
        - No therapeutic or supportive language. 
        - Use advanced institutional terminology (Entropy, Velocity, Social Capital, Governance, Friction, Agency).
        - Maximum 12 words per summary.
        - The output must feel like a high-level briefing for a C-suite executive.
        
        OUTPUT STRUCTURE:
        - summary: A punchy, 1-line distillation of the structural failure.
        - themes: 3-4 advanced thematic anchors (e.g., "Governance Entropy", "Capital Dilution").
        - signal: A high-density emotional/energetic reading (e.g., "Frustrated // High Agency").
        - prompts: 2 Socratic, high-leverage strategic questions.
        - risk: A sharp 1-sentence behavioral vulnerability observation.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            themes: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            signal: { type: Type.STRING },
            prompts: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            risk: { type: Type.STRING }
          },
          required: ["summary", "themes", "signal", "prompts"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("The logic engine returned an empty diagnostic.");
    }

    return JSON.parse(text) as InsightResult;
  } catch (error: any) {
    throw error;
  }
};
