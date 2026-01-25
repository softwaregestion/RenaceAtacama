import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import coaching from "@/assets/coaching.jpg";
import workspace from "@/assets/workspace.jpg";
import presentation from "@/assets/presentation.jpg";

const posts = [
  {
    image: coaching,
    category: "Business",
    title: "10 Strategies for Sustainable Business Growth",
    date: "Jan 20, 2026",
    readTime: "5 min read",
  },
  {
    image: workspace,
    category: "Marketing",
    title: "Digital Marketing Trends to Watch in 2026",
    date: "Jan 18, 2026",
    readTime: "4 min read",
  },
  {
    image: presentation,
    category: "Leadership",
    title: "Building High-Performance Teams from Scratch",
    date: "Jan 15, 2026",
    readTime: "6 min read",
  },
];

export function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-background" id="blog">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Latest Articles
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              EXPLORING{" "}
              <span className="font-script text-primary italic font-normal">Ideas</span>
              <br />
              ONE{" "}
              <span className="font-script text-primary italic font-normal">Post</span>{" "}
              AT A TIME.
            </h2>
          </div>
          
          <Button variant="hero" className="gap-2 w-fit">
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
