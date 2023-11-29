import { FormEvent, useState } from "react";
import CommandService from "./commandsService";

interface Message {
  prompt: string;
  response: string;
}

export default function Terminal() {
  const [messages, setMessages] = useState<Message[]>([]);
  const service = new CommandService(() => setMessages([]))

  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response: string | null  = service.handleCommand(input);
    setInput("");

    if(response === null) return;

    setMessages((prev) => [...prev, { prompt: input, response}])

    setTimeout(() =>{

        var element = document.getElementById("scroll-container");
        element?.scrollTo({top: element.scrollHeight, behavior: "smooth"})  
    },150)
  };

  return (
    <div
    id="scroll-container"
      className="w-full h-[50vh] bg-[#2D2F4A] rounded-[18px_18px_0_0] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.5)] z-10 relative -translate-y-7 font-mono p-6 
        focus:outline-none focus:shadow-[0_-10px_150px_-5px_#FF1AA333] transition text-slate-500 overflow-y-auto overflow-x-hidden"
    >
      {messages.map((message, index) => {
        return (
          <div key={index} className="flex flex-col">
            <span className="mr-2">
              <span className="text-white">~Guest::</span> {message.prompt}
            </span>
            <span className="text-white whitespace-pre-line">
              {message.response}
            </span>
          </div>
        );
      })}

      <form className="flex" onSubmit={handleSubmit}>
        <span contentEditable={false} className="text-white mr-2">
          ~Guest::
        </span>{" "}
        <input
          type="text"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSubmit={() => console.log("teste")}
          className="bg-transparent focus:outline-none w-full"
        />
      </form>
    </div>
  );
}
