import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "보험설계사 강성현 - 당신의 미래를 안전하게",
  description: "25년 경력의 전문 보험설계사가 최적의 보험 설계를 제공합니다. 생명보험, 건강보험, 연금보험 등 고객 맞춤형 보험 상담.",
  keywords: "보험, 보험설계사, 강성현, 생명보험, 건강보험, 연금보험, 보험상담",
  openGraph: {
    title: "보험설계사 강성현 - 당신의 미래를 안전하게",
    description: "25년 경력의 전문 보험설계사가 최적의 보험 설계를 제공합니다",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${notoSansKr.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
