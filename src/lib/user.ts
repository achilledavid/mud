// import { Prisma } from "@prisma/client";
// import prisma from "./prisma";

// export const getFullUser = async ({ email }: { email: string }) => {
//     const user = await prisma.user.findUnique({
//         select: {
//             id: true,
//             firstname: true,
//             lastname: true,
//             email: true,
//             createdAt: true,
//         },
//         where: {
//             email
//         },
//     })
//     return user;
// }

// export type FullUserType = Prisma.PromiseReturnType<typeof getFullUser>