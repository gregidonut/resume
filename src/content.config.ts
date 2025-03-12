import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
    resume: defineCollection({
        loader: glob({
            pattern: "src/components/main/resumeContent/*.md",
        }),
    }),
};
