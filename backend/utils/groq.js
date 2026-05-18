import Groq from "groq-sdk";
import "dotenv/config";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

const getGroqResponse = async (message) => {

    try {

        const chatCompletion = await groq.chat.completions.create({

            messages: [
                {
                    role: "user",
                    content: message
                }
            ],

           model: "llama-3.1-8b-instant",

        });

        return chatCompletion.choices[0].message.content;

    } catch (err) {

        console.log("GROQ ERROR => ", err);

        return "AI service temporarily unavailable.";
    }
};

export default getGroqResponse;