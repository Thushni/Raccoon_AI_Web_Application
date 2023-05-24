import { NextResponse } from "next/server";
import {verify} from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export function middleware(req) {
    const {cookies} = req;
    const jwt = cookies.OursiteJWT;

    const url = req.url;

    console.log(url);
    alert("middleware");


    if (url.includes("/login")) {
        if(jwt) {
            try{
                verify(jwt, secret);
                return NextResponse.redirect("/login");
            } catch(err) {
                // return NextResponse.redirect("/login");
            }
            
        }
        
    }


    if(url === "/DashBoard" || url === "/dummy") {
        return NextResponse.redirect("/login");
    }
    try{
        verify(jwt, secret);
        return NextResponse.next();
    } catch(err) {
        return NextResponse.redirect("/login");
    }

    return NextResponse.next();
}