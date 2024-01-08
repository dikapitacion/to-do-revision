import ConnectToDB from "@/libs/ConnectToDB";
import { NextResponse } from "next/server";
import Topic from "@/models/Topic";

export async function POST(req){
    const {title,description} = await req.json()
    await ConnectToDB()
    await Topic.create({title,description})
    return NextResponse.json({message:'title created'},{status:200})
}

export async function GET(){
    await ConnectToDB()
    const topics = await Topic.find()
    return NextResponse.json({topics})
}

export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id");
    await ConnectToDB()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message:'item deleted'},{status:200})
}

