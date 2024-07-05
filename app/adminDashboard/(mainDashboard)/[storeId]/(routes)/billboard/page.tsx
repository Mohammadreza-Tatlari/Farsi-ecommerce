import BillboardClient from "@/components/billboardComponents/BillboardClient";
import React from "react";

export default function BillboardPage() {
  return (
    <>
      <div dir="ltr" className="flex-col">
        <div className="flex-1 p-8 pt-6">
          <BillboardClient />
        </div>
      </div>
    </>
  );
}
