import { Resolvers } from "./resolvers-types";

export const resolvers: Resolvers = {
    Query: {
        links: async (parent, args, context) => {
            const results = await context.prisma.link.findMany();
            return results;
        }
    }
}