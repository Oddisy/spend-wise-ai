import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export async function checkUser() {
  const user = await currentUser();
  if (!user) return null;

  const email = user.emailAddresses[0]?.emailAddress?.toLowerCase() || "";

  // First check by Clerk ID
  let existingUser = await db.user.findUnique({
    where: { clerkUserid: user.id },
  });

  if (existingUser) return existingUser;

  // Check if email already exists (for another account)
  existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return existingUser;
  }

  // Safe to create new user
  const newUser = await db.user.create({
    data: {
      clerkUserid: user.id,
      email,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
    },
  });

  return newUser;
}
