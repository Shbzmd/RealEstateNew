import React from "react";
import Contentstack from "contentstack";
import Navbar from "../components/Navbar";

// Initialize your Contentstack stack
const Stack = Contentstack.Stack({
  api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY!,
  delivery_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN!,
  environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT!,
});

// This function will fetch data from Contentstack
async function getPageData() {
  const Query = Stack.ContentType("page").Query();
  Query.where("url", "/");
  const result = await Query.toJSON().find();
  return result[0]?.[0] || null;
}

// The component itself — now async
export default async function Home() {
  const page = await getPageData();

  if (!page) {
    return <div style={{ padding: 40 }}>No content found. Please check your published entry.</div>;
  }

  const hero = page.hero_image?.url;

  return (
    <div>
      {/* 👇 Navbar Added Here */}
      <Navbar />

      {/* 🏠 HERO SECTION */}
      <section
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: "8rem",
          color: "white",
          position: "relative",
        }}
      >
        <div style={{ background: "rgba(0,0,0,0.45)", position: "absolute", inset: 0 }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "700px" }}>
          <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>
            {page.hero_heading || "No heading found"}
          </h1>
          <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
            {page.hero_subheading || "No subheading found"}
          </p>
        </div>
      </section>

      {/* 🧾 RICH TEXT SECTION */}
      {page.rich_text && (
        <div
          style={{
            maxWidth: "1100px",
            margin: "3rem auto",
            padding: "0 2rem",
            lineHeight: "1.6",
            fontSize: "1.1rem",
            color: "#333",
          }}
          dangerouslySetInnerHTML={{ __html: page.rich_text }}
        />
      )}

      {/* 🧩 BLOCKS SECTION */}
      <div style={{ maxWidth: "1100px", margin: "2rem auto", padding: "0 2rem" }}>
        {page.blocks?.map((mod: any, index: number) => {
          const block = mod.block; // since modular blocks return like { block: { ...fields } }
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                margin: "3rem 0",
              }}
            >
              <img
                src={block?.image?.url}
                alt={block?.heading}
                style={{ width: "350px", borderRadius: "8px" }}
              />
              <div>
                <h2>{block?.heading}</h2>
                <p>{block?.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
