//this path can make a new billboard if the id does not exist 
//and if so it has components to modify the existing billboard
import BillboardForm from "@/components/billboardComponents/BillboardForm"
import prismadb from "@/lib/prismadb"
export default async function BillboardPageId({params}: {params:{billboardId: string}}) {
    const billboard = await prismadb.billboard.findUnique({
        where:{
            id: params.billboardId
        }
    })
  return (
    <>
    <div dir="rtl" className="p-4 space-y-3">
    <BillboardForm receivedData={billboard}/>
    </div>
    </>
  )
}
