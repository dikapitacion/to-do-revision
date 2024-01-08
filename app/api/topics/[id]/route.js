import ConnectToDB from "@/libs/ConnectToDB";
import { NextResponse } from "next/server";
import Topic from "@/models/Topic";

export async function GET(req,{params}){
    const {id} = params
    await ConnectToDB()
    const topic  = await Topic.findById(id)
    return NextResponse.json({topic},{status:200})
}

export async function PUT(req,{params}){
    const {id} = params
    const { newTitle: title, newDescription: description } = await req.json()
    await ConnectToDB()
    await Topic.findByIdAndUpdate(id,{title,description})
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

//PUT function main jo 'const { newTitle: title, newDescription: description } = await req.json()' wali lline hai should have the same name jo json.stringify main use ho rahi hai iss vajah se issue aara hai