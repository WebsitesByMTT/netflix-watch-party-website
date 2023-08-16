import Script from "next/script";
import React from "react";

const Schema = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How to watch netflix together?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use the browser extension, which synchronizes playback and allows real-time chatting with friends. You can also enjoy screen share with your friends.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to watch a movie with friends online?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To watch a movie with friends online, use the extension, where you can create a virtual room and chat while enjoying the movie together in real time. Alternatively, you can also do video or audio calls to start the movie simultaneously and share reactions and comments. In comparison to teleparty extension, this extension has incredible features.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to screen share netflix?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It is a very simple and quick process, by installing the extension on your browser, you can share a URL link with your loved ones and enjoy share play.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you screen share netflix?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can not directly share your screen on it, but by installing our third-party extension you can share your screen on it and enjoy movies and series.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does netflix watch party work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This extension is a third-party browser extension, that synchronizes movie or TV show playback among multiple viewers, enabling real-time chat and calls for an immersive and shared streaming experience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Netflix shave watch party?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it has a watch party where you can enjoy unlimited movies and series.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to do a watch party on netflix?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To host a party, install a browser extension, then start a movie or show and invite friends via a unique URL to watch together in sync and chat in real-time.",
                  },
                },
              ],
            },
            null,
            "\t"
          ),
        }}
        id="schema"
      />
    </>
  );
};

export default Schema;
