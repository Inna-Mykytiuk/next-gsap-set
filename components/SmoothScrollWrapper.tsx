"use client";

import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis'

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}

