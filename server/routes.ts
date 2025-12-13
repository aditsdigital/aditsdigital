import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, data: submission });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        error: error.message || "Failed to submit contact form" 
      });
    }
  });

  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json({ success: true, data: posts });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        error: error.message || "Failed to fetch blog posts" 
      });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ 
          success: false, 
          error: "Blog post not found" 
        });
      }
      res.json({ success: true, data: post });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        error: error.message || "Failed to fetch blog post" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
