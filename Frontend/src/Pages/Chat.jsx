import { GoogleGenerativeAI } from "@google/generative-ai";
import { MarkDwTemp } from "../Components/index";
import React, { useEffect, useState } from 'react'

// add css to the generated table 

const Chat = () => {
    const [userPrompt, setUserPrompt] = useState('');
    const [result, setResult] = useState('');


    // use dotenv before uploading to github
    const genAI = new GoogleGenerativeAI('AIzaSyBKvCxOu4zN5l9wygcfV7AnfG0ActLBSa0');
    // Define an async function to call the model
    async function generateStory() {
        try {
            // Generate text using the "gemini-1.5-flash" model
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = `
            i am giving you a business/startup idea analyze the idea by identifing the market sector and validate the idea by giving an detailed analysis by using the following business analysis models like:
            1. SWOT Analysis,
            2. PESTEL Analysis,
            3. VRIO Framework,
            give detail analysis on each of the model and make sure the it is oriented towards the user idea. the response should be in a proper format.
            Here is the idea: ${userPrompt}`;

            const result = await model.generateContent(prompt)
            setResult(result.response.text());
        } catch (error) {
            console.error("Error generating content:", error);
        }
    }

    // Call the function

    const submitPrompt = () => {
        generateStory();

    }
    // Initialize GoogleGenerativeAI with the API key

    return (

        <div className="h-screen w-3/5 flex-col justify-center items-end">
            {/* some text can be added to look good */}
            <div className="w-full  flex flex-col items-center ">
                <div className="mb-32">
                    <MarkDwTemp markedContent={result} />
                </div>
                {/* <div className="fixed left-1/4 bottom-5 p-2 w-6/12 flex justify-between pr-3 rounded-full bg-gradient-to-r from-teal-100 to-yellow-200">
                    <input type="text"
                        className="pl-3 text-black h-12 w-9/12 outline-none rounded-l-full bg-gradient-to-r from-teal-100 to-yellow-200"
                        onChange={(e) => setUserPrompt(e.target.value)}
                    />
                    <button
                        className="pl-4 pr-4 rounded-full bg-slate-800 duration-500 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-xl hover:shadow-yellow-200"
                        onClick={submitPrompt}
                    >
                        submit
                    </button>
                </div> */}
                <div>
                    <select name="analysis-type" className="w-80 bg-[#554e4ec1] p-2 m-1 border border-slate-400 rounded-xl" >
                     <option value="basic" className="bg-[#525352ed]">Idea Validation</option> 
                      <option value="pro" className="bg-[#525352ed]">Market Analysis</option>
                      <option value="advanced" className="bg-[#525352ed]">Marketing Strategy</option>
                      <option value="advanced" className="bg-[#525352ed]">sales strategy</option>
                      <option value="advanced" className="bg-[#525352ed]">MVP Roadmap</option>
                    </select>
                </div>
                <div className="h-96 w-fit p-5 border border-slate-400 bg-[#554e4ec1] rounded-xl flex flex-col gap-3 ">
                    <h1 className="font-semibold text-xl font-poppins">enter prompt</h1>
                    <p className="text-sm font-Roboto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, veniam?</p>
                    {/* <input type="text"
                    className="w-full h-72 pl-3 border-2 rounded-lg border-slate-300 bg-transparent"
                    /> */}
                    <textarea name="input-prompt"
                        className="w-full h-72 p-3 border-2 rounded-lg border-slate-300 bg-transparent font-poppins caret-white"
                    ></textarea>
                    <div className="flex gap-2">
                        <button
                            className="pl-4 pr-4 p-2 rounded-xl bg-slate-800 font-poppins hover:bg-slate-700"
                            onClick={submitPrompt}
                        >Submit</button>
                        <button
                            className="pl-4 pr-4 rounded-xl bg-slate-800 font-poppins hover:bg-slate-700"
                            
                        >Download Report</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat