import { GoogleGenerativeAI } from "@google/generative-ai";
import { MarkDwTemp } from "../Components/index";
import React, { useEffect, useState } from 'react'
import '../App.css'


const Chat = () => {
    const [userPrompt, setUserPrompt] = useState('');
    const [result, setResult] = useState('');

    const genAI = new GoogleGenerativeAI('AIzaSyBKvCxOu4zN5l9wygcfV7AnfG0ActLBSa0');

    async function generateStory() {
        try {

            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = `
            you are a business analyst assistant with all the knowledge of how business is created and executed from the ideation stage to the product/service launch.
            i am giving you a business/startup idea analyze the idea by identifing the market sector and validate the idea by giving an detailed analysis by using the following (business analysis models) like:
            1. SWOT Analysis,
            2. PESTEL Analysis,
            3. VRIO Framework,
            give detail analysis on each of the model and make sure the it is oriented towards the user idea. the response should be in a proper format.
            Here is the idea: ${userPrompt}.
            Do not give any conclusion at the end.
            `;
            
            const result = await model.generateContent(prompt)
            setResult(result.response.text());
        } catch (error) {
            console.error("Error generating content:", error);
        }
    }
    

    
    const submitPrompt = () => {
        
        generateStory();

    }
    

    return (

        <div className="min-h-screen w-3/5 flex-col justify-center items-end">
            {/* some text can be added to look good */}
            <div className="w-full flex flex-col items-center ">
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
                      <option value="pro" className="bg-[#525352ed]">Market Analysis (unlock with Pro Plan)</option>
                      <option value="advanced" className="bg-[#525352ed]">Marketing Strategy (unlock with Pro Plan)</option>
                      <option value="advanced" className="bg-[#525352ed]">sales strategy (unlock with Pro Plan)</option>
                      <option value="advanced" className="bg-[#525352ed]">MVP Roadmap (unlock with Pro Plan)</option>
                    </select>
                </div>
                <div className="h-96 w-6/12 p-5 border border-slate-400 bg-[#554e4ec1] rounded-xl flex flex-col gap-3 ">
                    <h1 className="font-semibold text-xl font-poppins">enter prompt</h1>
                    <p className="text-sm font-Roboto">explain your idea in more than 100 words.</p>
                    {/* <input type="text"
                    className="w-full h-72 pl-3 border-2 rounded-lg border-slate-300 bg-transparent"
                    /> */}
                    <textarea name="input-prompt"
                    onChange={(e)=> setUserPrompt(e.target.value)}
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

                    <div className="mt-11 mb-32 font-poppins text-xl">
                        <MarkDwTemp markedContent={result} />
                    </div>

            </div>
        </div>
    )
}

export default Chat