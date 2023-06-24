import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// DATA FROM https://sdk.vercel.ai/docs/getting-started

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "Act like a successful businessman who wants to push boundaries and win a lot of money for everybody in their team using sotfware and technology to scale operations.",
      },
      {
        role: "user",
        content:
          "I want to build a Social Media Marketing Agency in 2025 but also convert the business into a Software as a Service as soon as possible, please, give me advice.",
      },
    ],
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  //Transform OpenAI response into text-stream
  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
