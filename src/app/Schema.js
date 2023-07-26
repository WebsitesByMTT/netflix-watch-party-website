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
                  name: "How to do groupwatch on Disney plus?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Start a movie or show, then invite friends through the icon to stream together in real-time.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you screen share Disney Plus?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes with this extension you can share your screen with it.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to do a watch party on Disney Plus?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To host a party on it, use this browser extension that synchronizes playback and allows chat, then invite friends to join by sharing the party link.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you group-watch Disney Plus on the same account?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can group view on it at the same account.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does Groupwatch on Disney Plus work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "After installing it on your browser, you can activate your account and start exploring your favorite content. You can also share the link with your friends to see movies together. You can watch the multiple latest series and movies on Teleparty Netflix and you can also Netflix chat.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to screen share Disney Plus?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use this extension to activate your account. Where you will get an option to share the link with your best buddy.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to share Disney Plus with family?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To share this with your family, create separate profiles within your account, or subscribe to the Bundle which includes multiple streaming services to enjoy content on different devices simultaneously for the whole family.",
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
