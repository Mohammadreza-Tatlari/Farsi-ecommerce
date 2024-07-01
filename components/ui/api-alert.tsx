'use client'

import { Copy, Server } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Badge, BadgeProps } from "./badge";
import { Button } from "./button";
import { toast } from "react-hot-toast";

interface ApiAlertProps{
    title: string;
    description: string,
    variant: "public" | "admin"
}

const textMap: Record<ApiAlertProps["variant"] , string> = {
    public: "عمومی",
    admin: "ادمین"
}

const variantMap: Record<ApiAlertProps['variant'], BadgeProps["variant"]> ={
    public: 'secondary',
    admin: 'destructive'
}

export const ApiALert: React.FC<ApiAlertProps> = ({
title,
description,
variant = "public"
}) => {

    function onCopy(){
        navigator.clipboard.writeText(description)
        toast.success("کپی شد")
    }

return(
    <>
    <Alert>
        <AlertTitle dir="ltr" className="flex items-center space-x-1">
        <Server className="h-4 w-4 pb-1" />
            <p>{title}</p>
            <Badge className="mx-2" variant={variantMap[variant]}>
                {textMap[variant]}
            </Badge>
        </AlertTitle>
        <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative rounded-lg bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {description}
        </code>
        <Button variant="outline" size="icon" onClick={onCopy}>
            <Copy className="h-4 w-4"/>
        </Button>
        </AlertDescription>
    </Alert>
    </>
)
}