import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export async function checkUser() {
  const user = await currentUser();
    if (!user) {
        return null;
    }
    const existingUser = await db.user.findUnique({
        where: { clerkUserid: user.id },
    });
    if(existingUser) {
        return existingUser;
    }
    const newUser = await db.user.create({
        data: {
            clerkUserid: user.id,
            email: user.emailAddresses[0]?.emailAddress || "",
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
        },
    });
    return newUser;
}