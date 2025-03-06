import Layout from "@/containers/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore",
  description: "Explore",
};

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <section>
        <h2 className="text-skin-base mx-3 mb-2 text-2xl font-semibold md:mx-0">
          Explore
        </h2>
        {children}
      </section>
    </Layout>
  );
}
