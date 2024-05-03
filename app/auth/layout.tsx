import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>{children}</div>
    </div>
  );
}
