"use client"
import { NextUIProvider } from "@nextui-org/system";
import React from 'react';
export const RootLayoutProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  )
}
