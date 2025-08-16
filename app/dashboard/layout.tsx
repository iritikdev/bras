import React from 'react'

import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
    <div>sidebar</div>
    <div>{children}</div>
    </>
  );
}
