"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot } from "lucide-react";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import { envbaseURL } from "@/app/service/api";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { ScrollArea } from "@/components/UI/scroll-area";

interface Message {
  sessionId?: string | null;
  content: string;
  role: "user" | "assistant";
  [key: string]: any;
}

const ChatComponent: React.FC = () => {
  const theme = useTheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const apiEndpoint = "customer-care/chats";

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const fetchChatHistory = async () => {
      const sessionId = localStorage.getItem("sessionId");
      if (sessionId && sessionId !== "undefined") {
        try {
          const response = await axios.get(
            `${envbaseURL}/customer-care/chat-history?sessionId=${sessionId}`
          );
          if (response?.data?.data) {
            setMessages(response.data.data);
          }
        } catch (error) {
          console.error("Error fetching Blinky's chat history:", error);
        }
      }
    };

    // fetchChatHistory();
  }, []);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "" || isSending) return;

    const sessionId = localStorage.getItem("sessionId") ?? null;
    const newMessage: Message = {
      content: inputValue,
      role: "user",
      timestamp: new Date(),
      ...(sessionId && sessionId !== "undefined" && { sessionId }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsSending(true);

    try {
      const response = await axios.post(`${envbaseURL}/${apiEndpoint}`, {
        message: inputValue,
        sessionId: sessionId && sessionId !== "undefined" ? sessionId : null,
      });

      const blinkyResponse: Message = response?.data?.data ?? {
        content: "Sorry, I didn't get a proper response.",
        role: "assistant",
        error: true,
        timestamp: new Date(),
      };

      if (blinkyResponse?.sessionId) {
        localStorage.setItem("sessionId", blinkyResponse.sessionId);
      }

      if (blinkyResponse?.error) {
        throw new Error("Blinky's response error");
      }

      setMessages((prev) => [
        ...prev,
        {
          ...blinkyResponse,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Error talking to Blinky:", error);
      setMessages((prev) => [
        ...prev,
        {
          content:
            "Blinky is having trouble responding. Please try again later.",
          role: "assistant",
          error: true,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-[calc(100vw-2rem)] sm:w-80 bg-background shadow-xl rounded-xl overflow-hidden border border-border flex flex-col"
            style={{
              height: "calc(100vh - 8rem)",
              maxHeight: "500px",
              width: "calc(100vw - 2rem)",
              maxWidth: "24rem",
            }}
          >
            <div className="bg-primary text-primary-foreground p-3 sm:p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Bot className="w-5 h-5" />
                  <motion.span
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                  />
                </div>
                <span className="font-medium text-sm sm:text-base">
                  Chat with Blinky
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-full hover:bg-primary/80 transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <ScrollArea
              ref={chatContainerRef}
              className="flex-1 p-3 sm:p-4 overflow-y-auto"
            >
              <div className="space-y-3 sm:space-y-4">
                {messages.length === 0 && !isSending ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-muted-foreground py-4 flex flex-col items-center text-sm sm:text-base"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <p>Hi there! I'm Blinky, your virtual assistant.</p>
                    <p className="mt-1">How can I help you today?</p>
                  </motion.div>
                ) : (
                  messages.map((message, index) => (
                    <motion.div
                      key={`${message.timestamp?.getTime() || index}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-end gap-2 ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-3 h-3 text-primary" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] p-2 sm:p-3 rounded-xl text-sm sm:text-base ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-none"
                            : "bg-muted text-muted-foreground rounded-bl-none"
                        } ${
                          message.error &&
                          "bg-destructive/10 text-destructive-foreground"
                        }`}
                      >
                        <p>{message.content}</p>
                        {message.timestamp && (
                          <p className="text-xs mt-1 opacity-60 text-right">
                            {new Date(message.timestamp).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))
                )}
                {isSending && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-end gap-2 justify-start"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 text-primary" />
                    </div>
                    <div className="max-w-[80%] p-2 sm:p-3 bg-muted text-muted-foreground rounded-xl rounded-bl-none text-sm sm:text-base">
                      <div className="flex items-center space-x-2">
                        <span>Blinky is typing</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-75" />
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-150" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            <div className="p-2 sm:p-3 border-t border-border flex items-center space-x-2">
              <Input
                type="text"
                placeholder="Ask Blinky..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isSending}
                className="flex-1 text-sm sm:text-base"
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isSending}
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-9 w-9 sm:h-10 sm:w-10"
              >
                <Send className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="bg-primary text-primary-foreground p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        aria-label={open ? "Close chat with Blinky" : "Chat with Blinky"}
      >
        {open ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <div className="relative">
            <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full"
            />
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default ChatComponent;
