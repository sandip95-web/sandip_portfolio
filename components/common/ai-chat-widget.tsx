"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  CheckCircle2,
  CornerDownLeft,
  MessageCircle,
  RotateCcw,
  Sparkles,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const SUGGESTED_QUESTIONS = [
  "What is your backend tech stack?",
  "Tell me about Gripas Tech CRM",
  "What is your Software QA experience?",
  "How can I contact or hire Sandeep?",
];

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// Simple markdown formatter for links, bold, and bullet points
function MarkdownContent({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <div className="space-y-1.5 text-xs leading-relaxed sm:text-sm">
      {lines.map((line, lineIdx) => {
        if (!line.trim()) return <div key={lineIdx} className="h-1" />;

        // Convert markdown links [text](url) and **bold**
        const formatted = renderLine(line);

        if (line.trim().startsWith("•") || line.trim().startsWith("-")) {
          return (
            <div key={lineIdx} className="flex items-start gap-1.5 pl-1">
              <span className="text-primary mt-1 text-xs">•</span>
              <span className="flex-1">{formatted}</span>
            </div>
          );
        }

        return <div key={lineIdx}>{formatted}</div>;
      })}
    </div>
  );
}

function renderLine(line: string) {
  // Regex to match [text](url) or **bold**
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push(renderBold(line.substring(lastIndex, match.index)));
    }
    const [, label, url] = match;
    parts.push(
      <a
        key={match.index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-primary underline underline-offset-2 hover:opacity-80"
      >
        {label}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < line.length) {
    parts.push(renderBold(line.substring(lastIndex)));
  }

  return parts;
}

function renderBold(text: string) {
  const boldRegex = /\*\*([^*]+)\*\*/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <strong key={match.index} className="font-semibold text-foreground">
        {match[1]}
      </strong>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-welcome",
      role: "assistant",
      content: `👋 Hi! I'm **Sandeep Maharjan's AI Assistant**.

I can answer any questions about his **Backend Development experience**, **Software QA & testing competencies**, **projects (Gripas CRM, Tiya, Silver6)**, or how to contact him.

What would you like to know?`,
      timestamp: formatTime(new Date()),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (userText?: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim() || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: textToSend.trim(),
      timestamp: formatTime(new Date()),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const history = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok) {
        throw new Error("Chat request failed");
      }

      const data = await res.json();
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.reply || "Sorry, I couldn't process that response.",
        timestamp: formatTime(new Date()),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-err-${Date.now()}`,
          role: "assistant",
          content:
            "I'm temporarily having trouble connecting. Feel free to contact Sandeep directly at [sandipmaharjan95@gmail.com](mailto:sandipmaharjan95@gmail.com)!",
          timestamp: formatTime(new Date()),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content: `👋 Conversation reset! How can I help you regarding Sandeep's skills or projects?`,
        timestamp: formatTime(new Date()),
      },
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open AI Assistant"
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {/* Glow ring */}
                <span className="absolute -inset-1 animate-pulse rounded-full bg-primary/40 opacity-75 blur-sm transition-all group-hover:opacity-100" />
                
                <div className="relative flex items-center justify-center">
                  <Bot className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                  </span>
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-4 right-4 z-50 flex h-[580px] max-h-[88vh] w-[92vw] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-border/80 bg-background/95 shadow-2xl backdrop-blur-md sm:bottom-6 sm:right-6 sm:w-[410px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/40 bg-muted">
                  <Image
                    src="/profile.png"
                    alt={siteConfig.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-1 ring-background" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-semibold text-foreground">
                      Sandeep&apos;s AI Assistant
                    </h3>
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Online • Verified Portfolio Info
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleReset}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  title="Reset conversation"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  title="Close chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin">
              {messages.map((message) => {
                const isAssistant = message.role === "assistant";
                return (
                  <div
                    key={message.id}
                    className={cn(
                      "flex flex-col gap-1 max-w-[85%]",
                      isAssistant ? "items-start" : "items-end ml-auto"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-2xl px-3.5 py-2.5 text-sm shadow-sm",
                        isAssistant
                          ? "bg-muted/80 text-foreground border border-border/50 rounded-tl-sm"
                          : "bg-primary text-primary-foreground rounded-tr-sm"
                      )}
                    >
                      {isAssistant ? (
                        <MarkdownContent text={message.content} />
                      ) : (
                        <p className="leading-relaxed">{message.content}</p>
                      )}
                    </div>
                    <span className="text-[10px] text-muted-foreground/70 px-1">
                      {message.timestamp}
                    </span>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {loading && (
                <div className="flex items-center gap-1.5 bg-muted/80 border border-border/50 rounded-2xl rounded-tl-sm px-4 py-3 w-fit">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested quick pills */}
            {messages.length <= 3 && !loading && (
              <div className="border-t border-border/40 bg-muted/20 px-3 py-2">
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1.5 px-1">
                  Quick Questions
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_QUESTIONS.map((question, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(question)}
                      className="rounded-full border border-border/70 bg-background/80 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="border-t border-border/60 bg-background p-3"
            >
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Sandeep's skills, experience..."
                  disabled={loading}
                  className="w-full rounded-full border border-border bg-muted/40 py-2.5 pl-4 pr-11 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || loading}
                  className="absolute right-1.5 h-7 w-7 rounded-full bg-primary text-primary-foreground shadow transition-all hover:scale-105 disabled:opacity-40"
                >
                  <CornerDownLeft className="h-3.5 w-3.5" />
                </Button>
              </div>
              <div className="mt-1.5 flex items-center justify-between px-1 text-[10px] text-muted-foreground/70">
                <span>Verified resume data</span>
                <span>Press Enter to send</span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
