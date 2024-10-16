import type { Metadata } from 'next';
import '@/app/styles/global.scss';

export const metadata: Metadata = {
  title: 'LaslesVPN',
  description: 'Want anything to be easy with LaslesVPN',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
