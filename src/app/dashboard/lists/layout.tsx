import Layout from "@/containers/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lists",
  description: "Lists",
};

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <section className="gap-5">
        <h2 className="text-skin-base mx-3 mb-2 text-2xl font-semibold md:mx-0">
          My Lists
        </h2>
        {children}
      </section>
    </Layout>
  );
}
