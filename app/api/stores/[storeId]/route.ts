//this route with dynamic file name is created to handle each store requests

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

//for updating the store
export async function PATCH(req: Request , {params}: {params: {storeId:string}}){

    try {
        const { userId } = auth()
        const { name } = await req.json()
        
        if(!userId){
            return new NextResponse("Unauthorized" , {status: 401})
        }

        if(!params.storeId){
            return new NextResponse("StoreID is Required or Page does not found" , {status: 401})
        }

        if(!name){
            return new NextResponse("name field is required!" , {status: 401})
        }

        const store = await prismadb.store.updateMany({
            where:{
                id: params.storeId,
                userId: userId
            },
            data: {
                name: name
            }  
        })
        return NextResponse.json(store)
        

    } catch (error) {
        console.log("STORE_PATCH" , error);
        
        return new NextResponse("Internal Error" , {status: 500})
    }
}
//for deleting the store

export async function DELETE(req: Request , {params}: {params:{ storeId : string}}){
    try {
        console.log("trying to delete the store");
        
        const {userId} = auth();
        
        if(!params.storeId){
            return new NextResponse("Store ID is required" , {status: 401})
        }
        if(!userId){
            return new NextResponse("Unauthorized" , {status: 401})
        }

        const deleteStore = await prismadb.store.deleteMany({
            where:{
                id: params.storeId,
                userId: userId
            }
        })

        return NextResponse.json(deleteStore)
        
    } catch (error) {
        console.log("STORE_DELETE", error);
        return new NextResponse("Internal Error" , {status: 500})
    }
}