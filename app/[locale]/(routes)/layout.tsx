import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import getAllCommits from "@/actions/github/get-repo-commits";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL! || "http://localhost:3000"
  ),
  title: "",
  description: "",
  openGraph: {
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let session = await getServerSession(authOptions);

  // Auth Bypass for Cohero Dev
  if (!session) {
    session = {
      user: {
        id: "dev-bypass",
        name: "Cohero Dev",
        email: "dev@cohero.app",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cohero",
        userLanguage: "en",
        userStatus: "ACTIVE",
      }
    } as any;
  }

  const user = session?.user;
  // Removed strict redirects for PENDING/INACTIVE to allow full access

  const build = await getAllCommits();

  //console.log(typeof build, "build");
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar build={build} />
      <div className="flex flex-col h-full w-full overflow-hidden">
        <Header
          id={user?.id as string}
          name={user?.name as string}
          email={user?.email as string}
          avatar={user?.image as string}
          lang={user?.userLanguage as string}
        />
        <div className="flex-grow overflow-y-auto h-full p-5">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
