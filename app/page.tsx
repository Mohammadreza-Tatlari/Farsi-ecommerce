import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <h1 className="text-2xl">صفحه اصلی</h1>
    <Link href={'/adminDashboard'}><Button size="lg" variant="outline" >داشبورد</Button></Link>
    </div>
  );
}
