import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.english),
    temperature: 0.6,
    max_tokens: 1000,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(english) {
  // const capitalizedEnglish =
  //   English[0].toUpperCase() + English.slice(1).toLowerCase();
  return `Create a 250 word response that agrees with a person and praises them at the end.

Person: I think pineapple belongs on pizza because it aids digestion and it is a great way to satisfy a sweet tooth.
Response: Hey, I agree with your point! I like how you how mentioned it aids digestion and how it satisfies cravings for something sweet. It really opened my eyes!

Person: A hotdog is a sandwich because hot dogs are a meat in a bun, therefore they are a sandwich.
Response: Hi! I couldn't agree with you more because I also think a hot dog fits the definition of a sandwich. Thank you for sharing!

Person: ${english}
Response:`;
}
