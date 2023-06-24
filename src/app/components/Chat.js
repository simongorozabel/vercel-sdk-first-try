"use client";

import { useChat } from "ai/react";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className=" bg-lime-400 p-10 rounded-full">
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <p>
              {message.role === "user" ? "👤" : "🤖"}
              {message.content}
            </p>
          </div>
        );
      })}

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <label>Write to the businesman to see his advise.</label>
        <input
          type="text"
          name="content"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
