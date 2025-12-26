// import { React, useState } from 'react'
// import { motion } from 'framer-motion';
// import { NavLink } from 'react-router-dom';

// function ProjectDetails() {
    // const [isHovering1, setHovering1] = useState(false);
    // const innerButtonStyles = {
    //     padding: '8px 16px',
    //     border: '1px solid #3f3f3f',
    //     textAlign: 'center',
    //     fontSize: '14px',
    //     fontWeight: '500',
    //     borderRadius: '9999px',
    //     backgroundColor: isHovering1 ? '#181818' : '#0e0e0e',
    //     transition: 'background-color 0.3s ease',
    // };
//     return (
//         <div
//             className='w-full h-screen py-[2vw] bg-[#0e0e0e] text-[#d9d9d9] flex flex-col items-start'>
            // <div className='button px-[5.5vw]'>
            //     <NavLink to="/">
            //         <div onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)} style={innerButtonStyles}>
            //             ⬅️ Back
            //         </div>
            //     </NavLink>
            // </div>
//             <div className='h-full flex items-center'>
//                 <div className='text border-t-[1px] border-b-[1px] border-[#696969] flex overflow-hidden whitespace-nowrap'>
//                     <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
//                         className='text-[12vw] font-["Clash"] tracking-[-0.2vw] uppercase font-semibold pr-16 -my-4'>
//                         {/* Delivering Results - Design & Dev */}
//                         ⚠️ Coming Soon
//                     </motion.h1>
//                     <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
//                         className='text-[12vw] font-["Clash"] tracking-[-0.2vw] uppercase font-semibold pr-16 -my-4'>
//                         {/* Delivering Results - Design & Dev */}
//                         ⚠️ Coming Soon
//                     </motion.h1>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default ProjectDetails


// -------------------------------------------- New Code Snippet --------------------------------------------

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { ExternalLink, Github, Calendar, Users, TrendingUp, Zap, Target, CheckCircle } from "lucide-react";
import { React, useState } from 'react'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function ProjectDetails() {
  const techStack = [
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "Vercel",
    "Stripe",
    "NextAuth.js",
    "Framer Motion",
    "Shadcn/ui",
  ];

  const metrics = [
    { label: "Performance Score", value: "98/100", icon: Zap },
    { label: "User Growth", value: "+245%", icon: TrendingUp },
    { label: "Active Users", value: "12,500+", icon: Users },
    { label: "Conversion Rate", value: "8.2%", icon: Target },
  ];

  const challenges = [
    {
      title: "Complex State Management",
      description:
        "Managing real-time data synchronization across multiple user interfaces while maintaining optimal performance.",
      solution:
        "Implemented a custom hook-based state management system with React Query for server state and Zustand for client state.",
    },
    {
      title: "Scalability Concerns",
      description: "Ensuring the application could handle increasing user load without performance degradation.",
      solution:
        "Adopted a microservices architecture with edge computing and implemented efficient caching strategies.",
    },
    {
      title: "User Experience Optimization",
      description: "Creating an intuitive interface that caters to both technical and non-technical users.",
      solution:
        "Conducted extensive user research and implemented progressive disclosure patterns with contextual help.",
    },
  ];

  const projectImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ];

    const [isHovering1, setHovering1] = useState(false);
    const innerButtonStyles = {
        padding: '8px 16px',
        border: '1px solid #3f3f3f',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '500',
        borderRadius: '9999px',
        backgroundColor: isHovering1 ? '#181818' : '#0e0e0e',
        transition: 'background-color 0.3s ease',
};

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100"> 
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className='button px-[5.5vw] absolute top-4 left-4 z-10'>
            <NavLink to="/">
                <div onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)} style={innerButtonStyles}>
                    ⬅️ Back
                </div>
            </NavLink>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-gray-600/40 bg-gray-700/30 text-gray-300">
                  <Calendar className="mr-2 h-3 w-3" />
                  Completed December 2024
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  E-Commerce Platform
                  <span className="block text-gray-300">Redesign</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  A complete overhaul of a legacy e-commerce platform, transforming it into a modern, scalable solution
                  that increased conversion rates by 245% and improved user engagement significantly.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" style={{ backgroundColor: '#d9d9d9', color: '#000' }} className="hover:opacity-90">
                  <a href="#" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Live Project
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-700 hover:bg-gray-800 bg-transparent"
                >
                  <a href="#" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-400/20 blur-3xl" />
              <img
                src="/placeholder.svg?height=500&width=700"
                alt="Project Hero Image"
                width={700}
                height={500}
                className="relative rounded-2xl border border-gray-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Project Overview */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
            <Separator className="bg-gray-800" />
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                This project involved the complete redesign and redevelopment of a legacy e-commerce platform serving
                over 10,000 daily active users. The existing system suffered from poor performance, outdated UI/UX, and
                scalability issues that were hindering business growth.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The goal was to create a modern, fast, and user-friendly platform that would not only solve existing
                problems but also provide a foundation for future growth. The project required careful planning,
                stakeholder alignment, and a phased migration approach to ensure zero downtime.
              </p>
            </div>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-300">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Duration</p>
                  <p className="font-semibold">6 months</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Team Size</p>
                  <p className="font-semibold">5 developers</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Role</p>
                  <p className="font-semibold">Lead Full-Stack Developer</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Industry</p>
                  <p className="font-semibold">E-commerce / Retail</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies & Tools</h2>
            <Separator className="bg-gray-800" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {techStack.map((tech, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-colors">
                <CardContent className="p-4 text-center">
                  <p className="font-medium text-gray-200">{tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Challenges & Solutions</h2>
            <Separator className="bg-gray-800" />
          </div>
          <div className="space-y-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="h-8 w-8 rounded-full bg-gray-700/50 flex items-center justify-center">
                      <span className="text-gray-300 font-bold text-sm">{index + 1}</span>
                    </div>
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">Challenge:</h4>
                    <p className="text-gray-300">{challenge.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Solution:
                    </h4>
                    <p className="text-gray-300">{challenge.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Results & Metrics */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Results & Impact</h2>
            <Separator className="bg-gray-800" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-gray-700/50 flex items-center justify-center">
                      <metric.icon className="h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-gray-300 mb-2">{metric.value}</p>
                  <p className="text-sm text-gray-400">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-300">Key Achievements</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    Reduced page load times by 65% through optimized code splitting and image optimization
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    Implemented real-time inventory management reducing overselling by 98%
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    Enhanced mobile experience leading to 180% increase in mobile conversions
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    Integrated advanced analytics providing actionable business insights
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visual Gallery */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Visual Gallery</h2>
            <Separator className="bg-gray-800" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {projectImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl border border-gray-800">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Project screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Links & Resources */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Links & Resources</h2>
            <Separator className="bg-gray-800" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                  Live Project
                </CardTitle>
                <CardDescription>Experience the fully functional application</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" style={{ backgroundColor: '#d9d9d9', color: '#000' }}>
                  <a href="#">Visit Website</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-gray-400" />
                  Source Code
                </CardTitle>
                <CardDescription>Explore the codebase and implementation details</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 bg-transparent">
                  <a href="#">View on GitHub</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                  Case Study
                </CardTitle>
                <CardDescription>Detailed technical documentation and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 bg-transparent">
                  <a href="#">Read More</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}