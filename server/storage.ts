import { type ContactSubmission, type InsertContactSubmission, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.contactSubmissions = new Map();
    this.blogPosts = new Map();
    
    this.seedBlogPosts();
  }

  private seedBlogPosts() {
    const posts: InsertBlogPost[] = [
      {
        title: "10 SEO Strategies to Dominate Search Rankings in 2024",
        excerpt: "Discover the latest SEO techniques and best practices that will help your website rank higher and attract more organic traffic in the competitive digital landscape.",
        content: "Full blog content here...",
        imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
        slug: "seo-strategies-2024",
      },
      {
        title: "The Ultimate Guide to Social Media Marketing Success",
        excerpt: "Learn how to create engaging content, build a loyal following, and drive conversions across all major social media platforms with our comprehensive guide.",
        content: "Full blog content here...",
        imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        slug: "social-media-marketing-guide",
      },
      {
        title: "Maximizing ROI with Google Ads: Expert Tips and Tricks",
        excerpt: "Unlock the full potential of Google Ads with advanced targeting strategies, bid optimization techniques, and conversion tracking best practices.",
        content: "Full blog content here...",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        slug: "google-ads-roi-tips",
      },
    ];

    posts.forEach(post => {
      const id = randomUUID();
      const blogPost: BlogPost = {
        ...post,
        id,
        createdAt: new Date(),
      };
      this.blogPosts.set(id, blogPost);
    });
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug
    );
  }
}

export const storage = new MemStorage();
