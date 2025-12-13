import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: response, isLoading, error } = useQuery<{ success: boolean; data: BlogPost[] }>({
    queryKey: ["/api/blog"],
  });

  const blogPosts = response?.data || [];

  return (
    <div>
      <Hero
        title="Digital Marketing Insights"
        subtitle="Expert tips, strategies, and industry insights to help you stay ahead in the ever-evolving world of digital marketing."
        showCta={false}
        variant="blog"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-blog-heading">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, tips, and strategies in digital marketing.
            </p>
          </div>

          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
              <p className="mt-4 text-muted-foreground">Loading articles...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">Failed to load blog posts. Please try again later.</p>
            </div>
          )}

          {!isLoading && !error && blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts available yet.</p>
            </div>
          )}

          {!isLoading && !error && blogPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col hover-elevate active-elevate-2 transition-all duration-300 group" data-testid={`card-blog-${post.slug}`}>
                    {post.imageUrl && (
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span data-testid={`text-date-${post.slug}`}>
                            {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span data-testid={`text-read-time-${post.slug}`}>5 min read</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors" data-testid={`text-title-${post.slug}`}>
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 flex-grow leading-relaxed" data-testid={`text-excerpt-${post.slug}`}>
                        {post.excerpt}
                      </p>
                      
                      <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary justify-start" data-testid={`button-read-more-${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
