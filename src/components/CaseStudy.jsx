// import React, { useState } from 'react'
// import { motion } from 'framer-motion';
// import { NavLink, useParams } from 'react-router-dom';
// import { ExternalLink, Github, Calendar, Users, TrendingUp, Zap, Target, CheckCircle } from "lucide-react";
// import { getProjectById, getIconByName } from '../CMS/project-list';

// export default function ProjectDetails() {
//   const { projectId } = useParams();
//   const project = getProjectById(projectId);
  
//   const [isHovering1, setHovering1] = useState(false);
//   const [isHovering2, setHovering2] = useState(false);
//   const [isHovering3, setHovering3] = useState(false);

//   // If project not found, show error message
//   if (!project) {
//     return (
//       <div className="w-full min-h-screen bg-[#0e0e0e] text-[#e9e9e9] font-['Clash'] flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-[4vw] font-semibold mb-[2vw]">Project Not Found</h1>
//           <p className="text-[1.5vw] text-[#b8b8b8] mb-[2vw]">The project you're looking for doesn't exist.</p>
//           <NavLink to="/" className="inline-block bg-[#e9e9e9] text-[#0e0e0e] px-6 py-3 rounded-full font-medium hover:bg-[#f5f5f5] transition-colors">
//             Back to Home
//           </NavLink>
//         </div>
//       </div>
//     );
//   }

//   const innerButtonStyles = {
//     padding: '8px 16px',
//     border: '1px solid #3f3f3f',
//     textAlign: 'center',
//     fontSize: '14px',
//     fontWeight: '500',
//     borderRadius: '9999px',
//     backgroundColor: isHovering1 ? '#181818' : '#0e0e0e',
//     transition: 'background-color 0.3s ease',
//   };

//   const primaryButtonStyles = {
//     padding: '12px 24px',
//     backgroundColor: isHovering2 ? '#f5f5f5' : '#e9e9e9',
//     color: '#0e0e0e',
//     border: 'none',
//     borderRadius: '9999px',
//     fontSize: '14px',
//     fontWeight: '500',
//     transition: 'background-color 0.3s ease',
//     cursor: 'pointer',
//   };

//   const secondaryButtonStyles = {
//     padding: '12px 24px',
//     backgroundColor: isHovering3 ? '#181818' : 'transparent',
//     color: '#e9e9e9',
//     border: '1px solid #3f3f3f',
//     borderRadius: '9999px',
//     fontSize: '14px',
//     fontWeight: '500',
//     transition: 'background-color 0.3s ease',
//     cursor: 'pointer',
//   };

//   // Helper function to render metric icons
//   const renderMetricIcon = (iconName) => {
//     const IconComponent = getIconByName(iconName);
//     return IconComponent ? <IconComponent className="w-6 h-6 text-[#b8b8b8]" /> : null;
//   };

//   return (
//     <div className="w-full min-h-screen bg-[#0e0e0e] text-[#e9e9e9] font-['Clash']">
//       {/* Back Button */}
//       <div className='button px-[5.5vw] py-[2vw] absolute top-0 left-0 z-10'>
//         <NavLink to="/">
//           <div onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)} style={innerButtonStyles}>
//             ⬅️ Back
//           </div>
//         </NavLink>
//       </div>

//       {/* Hero Section */}
//       <div className="relative pt-[8vw] pb-[8vw] px-[5.5vw] bg-gradient-to-br from-[#0e0e0e] to-[#181818]">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4vw] items-center">
//           <div className="space-y-[2vw]">
//             <div className="space-y-[1vw]">
//               <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] border border-zinc-800 rounded-full text-[12px] font-light">
//                 <Calendar className="w-3 h-3" />
//                 Completed {project.completionDate}
//               </div>
//               <h1 className="text-[6vw] lg:text-[4vw] font-semibold leading-none tracking-tight uppercase font-['tiny']">
//                 {project.title}
//                 <span className="block text-[#b8b8b8] font-['Clash']">{project.subtitle}</span>
//               </h1>
//               <p className="text-[1.4vw] text-[#b8b8b8] leading-relaxed font-light max-w-[90%]">
//                 {project.description}
//               </p>
//             </div>
//             <div className="flex flex-wrap gap-4">
//               <a 
//                 href={project.links.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onMouseEnter={() => setHovering2(true)} 
//                 onMouseLeave={() => setHovering2(false)} 
//                 style={primaryButtonStyles}
//                 className="flex items-center gap-2 no-underline"
//               >
//                 <ExternalLink className="w-4 h-4" />
//                 View Live Project
//               </a>
//               <a 
//                 href={project.links.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onMouseEnter={() => setHovering3(true)} 
//                 onMouseLeave={() => setHovering3(false)} 
//                 style={secondaryButtonStyles}
//                 className="flex items-center gap-2 no-underline"
//               >
//                 <Github className="w-4 h-4" />
//                 Source Code
//               </a>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="bg-[#181818] rounded-[1.2vw] border border-zinc-800 p-[2vw] overflow-hidden">
//               {/* <div className="bg-[#2a2a2a] rounded-[0.8vw] h-[25vw] flex items-center justify-center"> */}
//                 <img 
//                   src={project.images.hero}
//                   alt={`${project.title} Hero Image`}
//                   className="w-full h-full overflow-hidden rounded-[1.2vw] transition-transform duration-300 hover:scale-105"
//                 />
//               {/* </div> */}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Project Overview */}
//       <div className="px-[5.5vw] py-[4vw]">
//         <div className="border-t border-zinc-800 pt-[2vw]">
//           <div className="mb-[3vw]">
//             <h2 className="text-[3vw] font-semibold mb-[1vw] uppercase">
//               <span className="font-['tiny']">Project</span> <span className="font-['Clash']">Overview</span>
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2vw]">
//             <div className="lg:col-span-2 space-y-[1.5vw]">
//               {project.overview.map((paragraph, index) => (
//                 <p key={index} className="text-[1.4vw] text-[#b8b8b8] leading-relaxed font-light">
//                   {paragraph}
//                 </p>
//               ))}
//             </div>
//             <div className="bg-[#181818] border border-zinc-800 rounded-[1.2vw] p-[1.5vw]">
//               <h3 className="text-[1.25vw] font-medium mb-[1vw] text-[#b8b8b8]">Project Details</h3>
//               <div className="space-y-[1vw]">
//                 <div>
//                   <p className="text-[0.85vw] text-[#666] font-light">Duration</p>
//                   <p className="text-[1vw] font-medium">{project.duration}</p>
//                 </div>
//                 <div>
//                   <p className="text-[0.85vw] text-[#666] font-light">Team Size</p>
//                   <p className="text-[1vw] font-medium">{project.teamSize}</p>
//                 </div>
//                 <div>
//                   <p className="text-[0.85vw] text-[#666] font-light">Role</p>
//                   <p className="text-[1vw] font-medium">{project.role}</p>
//                 </div>
//                 <div>
//                   <p className="text-[0.85vw] text-[#666] font-light">Industry</p>
//                   <p className="text-[1vw] font-medium">{project.industry}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tech Stack */}
//       <div className="px-[5.5vw] py-[2vw]">
//         <div className="border-t border-zinc-800 pt-[2vw]">
//           <h2 className="text-[3vw] font-semibold mb-[2vw] uppercase">
//             <span className="font-['tiny']">Technologies</span> <span className="font-['Clash']">& Tools</span>
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1vw]">
//             {project.techStack.map((tech, index) => (
//               <div key={index} className="bg-[#181818] border border-zinc-800 rounded-[0.8vw] p-[1vw] text-center hover:border-zinc-600 transition-colors">
//                 <p className="text-[1vw] font-medium">{tech}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Visual Gallery */}
//       <div className="px-[5.5vw] py-[2vw]">
//         <div className="border-t border-zinc-800 pt-[2vw]">
//           <h2 className="text-[3vw] font-semibold mb-[2vw] uppercase">
//             <span className="font-['tiny']">Visual</span> <span className="font-['Clash']">Gallery</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-[1vw]">
//             {project.images.gallery.map((image, index) => (
//               <div key={index} className="group relative overflow-hidden rounded-[1.2vw] border border-zinc-800">
//                 <div className="bg-[#2a2a2a] h-[20vw] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
//                   <span className="text-[#666] text-[1vw]">Project Screenshot {index + 1}</span>
//                 </div>
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Challenges & Solutions */}
//       <div className="px-[5.5vw] py-[2vw]">
//         <div className="border-t border-zinc-800 pt-[2vw]">
//           <h2 className="text-[3vw] font-semibold mb-[2vw] uppercase">
//             <span className="font-['tiny']">Challenges</span> <span className="font-['Clash']">& Solutions</span>
//           </h2>
//           <div className="space-y-[1.5vw]">
//             {project.challenges.map((challenge, index) => (
//               <div key={index} className="bg-[#181818] border border-zinc-800 rounded-[1.2vw] p-[1.5vw]">
//                 <div className="flex items-center gap-3 mb-[1vw]">
//                   <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
//                     <span className="text-[#b8b8b8] font-medium text-[1vw]">{index + 1}</span>
//                   </div>
//                   <h3 className="text-[1.25vw] font-medium">{challenge.title}</h3>
//                 </div>
//                 <div className="space-y-[1vw] ml-11">
//                   <div>
//                     <h4 className="text-[1vw] font-medium text-red-400 mb-2">Challenge:</h4>
//                     <p className="text-[1vw] text-[#b8b8b8] font-light">{challenge.description}</p>
//                   </div>
//                   <div>
//                     <h4 className="text-[1vw] font-medium text-[#b8b8b8] mb-2 flex items-center gap-2">
//                       <CheckCircle className="w-4 h-4" />
//                       Solution:
//                     </h4>
//                     <p className="text-[1vw] text-[#b8b8b8] font-light">{challenge.solution}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Results & Metrics */}
//       <div className="px-[5.5vw] py-[2vw]">
//         <div className="border-t border-zinc-800 pt-[2vw]">
//           <h2 className="text-[3vw] font-semibold mb-[2vw] uppercase">
//             <span className="font-['tiny']">Results</span> <span className="font-['Clash']">& Impact</span>
//           </h2>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1vw] mb-[2vw]">
//             {project.metrics.map((metric, index) => (
//               <div key={index} className="bg-gradient-to-br from-[#181818] to-[#141414] border border-zinc-800 rounded-[1.2vw] p-[1.5vw] text-center">
//                 <div className="mb-4 flex justify-center">
//                   <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
//                     {renderMetricIcon(metric.icon)}
//                   </div>
//                 </div>
//                 <p className="text-[2vw] lg:text-[1.5vw] font-semibold text-[#b8b8b8] mb-2">{metric.value}</p>
//                 <p className="text-[0.85vw] text-[#666] font-light">{metric.label}</p>
//               </div>
//             ))}
//           </div>
//           <div className="bg-[#181818] border border-zinc-800 rounded-[1.2vw] p-[1.5vw]">
//             <h3 className="text-[1.25vw] font-medium mb-[1vw] text-[#b8b8b8]">Key Achievements</h3>
//             <ul className="space-y-3 text-[#b8b8b8]">
//               {project.achievements.map((achievement, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-[#b8b8b8] mt-0.5 flex-shrink-0" />
//                   <span className="text-[1vw] font-light">{achievement}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Links & Resources */}
//       <div className="px-[5.5vw] py-[2vw] pb-[4vw]">
//         <div className="border-t border-zinc-800 pt-[2vw]">
//           <h2 className="text-[3vw] font-semibold mb-[2vw] uppercase">
//             <span className="font-['tiny']">Links</span> <span className="font-['Clash']">& Resources</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-[1vw]">
//             <div className="bg-[#181818] border border-zinc-800 rounded-[1.2vw] p-[1.5vw] hover:border-zinc-600 transition-colors">
//               <div className="flex items-center gap-3 mb-[1vw]">
//                 <ExternalLink className="w-5 h-5 text-[#b8b8b8]" />
//                 <h3 className="text-[1.15vw] font-medium">Case Study</h3>
//               </div>
//               <p className="text-[0.85vw] text-[#666] font-light mb-[1vw]">Detailed technical documentation and insights</p>
//               <a 
//                 href={project.links.caseStudy}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block w-full border border-zinc-600 text-[#e9e9e9] py-2 rounded-full text-[1vw] font-medium hover:bg-[#181818] transition-colors text-center no-underline"
//               >
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { NavLink, useParams } from 'react-router-dom';
import { ExternalLink, Github, Calendar, Users, TrendingUp, Zap, Target, CheckCircle, Smartphone, Star, MessageCircle, Apple, PlayIcon, AppleIcon, LucideApple } from "lucide-react";
import { getProjectById, getIconByName } from '../CMS/project-list';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);
  
  const [isHovering1, setHovering1] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  // If project not found, show error message
  if (!project) {
    return (
      <div className="w-full min-h-screen bg-[#0e0e0e] text-[#e9e9e9] font-['Clash'] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[4vw] font-semibold mb-[2vw]">Project Not Found</h1>
          <p className="text-[1.5vw] text-[#b8b8b8] mb-[2vw]">The project you're looking for doesn't exist.</p>
          <NavLink to="/" className="inline-block bg-[#e9e9e9] text-[#0e0e0e] px-6 py-3 rounded-full font-medium hover:bg-[#f5f5f5] transition-colors">
            Back to Home
          </NavLink>
        </div>
      </div>
    );
  }

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

  // Dynamic button styles based on type
  const getButtonStyles = (type, isHovered) => {
    switch (type) {
      case 'primary':
        return {
          padding: '12px 24px',
          backgroundColor: isHovered ? '#f5f5f5' : '#e9e9e9',
          color: '#0e0e0e',
          border: 'none',
          borderRadius: '9999px',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        };
      case 'secondary':
        return {
          padding: '12px 24px',
          backgroundColor: isHovered ? '#181818' : 'transparent',
          color: '#e9e9e9',
          border: '1px solid #3f3f3f',
          borderRadius: '9999px',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        };
      case 'app':
        return {
          padding: '12px 24px',
          backgroundColor: isHovered ? '#2a2a2a' : '#181818',
          color: '#e9e9e9',
          border: '1px solid #3f3f3f',
          borderRadius: '9999px',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        };
      default:
        return {
          padding: '12px 24px',
          backgroundColor: isHovered ? '#181818' : 'transparent',
          color: '#e9e9e9',
          border: '1px solid #3f3f3f',
          borderRadius: '9999px',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        };
    }
  };

  // Get icon for different link types
  const getLinkIcon = (linkType) => {
    switch (linkType) {
      case 'live':
        return <ExternalLink className="w-4 h-4" />;
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'appStore':
        return <Apple className="w-4 h-4" />;
      case 'playStore':
        return <PlayIcon className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  // Helper function to render metric icons
  const renderMetricIcon = (iconName) => {
    const IconComponent = getIconByName(iconName);
    return IconComponent ? <IconComponent className="w-6 h-6 text-[#b8b8b8]" /> : null;
  };

  // Render dynamic buttons based on available links
  const renderDynamicButtons = () => {
    if (!project.links) return null;

    const buttons = [];
    let buttonIndex = 0;

    // Primary button (live link gets priority)
    if (project.links.live) {
      buttons.push(
        <a 
          key="live"
          href={project.links.live.link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton('live')} 
          onMouseLeave={() => setHoveredButton(null)} 
          style={getButtonStyles('primary', hoveredButton === 'live')}
          className="flex items-center gap-2 no-underline"
        >
          {getLinkIcon('live')}
          {project.links.live.label}
        </a>
      );
    }

    // Secondary buttons
    Object.entries(project.links).forEach(([key, link]) => {
      if (key === 'live') return; // Skip live as it's already added as primary
      
      const buttonType = 'secondary';
      buttons.push(
        <a 
          key={key}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton(key)} 
          onMouseLeave={() => setHoveredButton(null)} 
          style={getButtonStyles(buttonType, hoveredButton === key)}
          className="flex items-center gap-2 no-underline"
        >
          {getLinkIcon(key)}
          {link.label}
        </a>
      );
    });

    return buttons;
  };

  const [hasPlayed, setHasPlayed] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#0e0e0e] text-[#e9e9e9] font-['Clash']">
      {/* Back Button */}
      <div className='button px-[5.5vw] py-[2vw] absolute top-0 left-0 z-10'>
        <NavLink to="/">
          <div onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)} style={innerButtonStyles}>
            ⬅️ Back
          </div>
        </NavLink>
      </div>

      {/* Hero Section */}
<div className="relative pt-[8vw] pb-[8vw] px-[5.5vw] bg-gradient-to-br from-[#0e0e0e] to-[#181818]">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4vw] items-center">
    <div className="space-y-[2vw]">
      <div className="space-y-[1vw]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] border border-zinc-800 rounded-full text-[12px] font-light">
          <Calendar className="w-3 h-3" />
          Completed {project.completionDate}
        </div>
        <h1 className="text-[6vw] lg:text-[4vw] font-semibold leading-none tracking-tight uppercase font-['tiny']">
          {project.title}
          <span className="block text-[#b8b8b8] font-['Clash']">{project.subtitle}</span>
        </h1>
        <p className="text-[1.4vw] text-[#b8b8b8] leading-relaxed font-light max-w-[90%]">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        {renderDynamicButtons()}
      </div>
    </div>

    {/* Hero Video — Auto continue after hover, no scaling */}  
    <div className="relative">
      <div className="bg-[#181818] rounded-[1.5vw] border border-zinc-800 p-[1vw] overflow-hidden group">
        <video
          src={project.images.hero_vid}
          muted
          loop = {false}
          playsInline 
          className="w-full h-full object-cover rounded-[1.2vw]"
          // onEnded={() => setHasPlayed(false)}
          onEnded={(e) => {
            const video = e.currentTarget;
            video.currentTime = 3; // Reset to start
            video.pause(); // Pause the video
          }}
          onMouseEnter={(e) => {
            const video = e.currentTarget;
            if (!video.playing && video.paused) {
              video.currentTime = 0;
              video.play();
              // setHasPlayed(true);
            }
          }}
        />
        {/* Poster overlay (shown only if video hasn't played yet) */}
      {/* {!hasPlayed && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 pointer-events-none">
          <img
            src={project.images.hero} // add this to your CMS or object
            alt="Video Cover"
            className="max-h-[60%] max-w-[60%] object-contain"
          />
        </div>
      )} */}
      </div>
    </div>
  </div>
</div>


      {/* Project Overview */}
      <div className="px-[5.5vw] py-[4vw]">
        <div className="border-t border-zinc-800 pt-[2vw]">
          <div className="mb-[3vw]">
            <h2 className="text-[3vw] font-semibold mb-[1vw] uppercase">
              <span className="font-['tiny']">Project</span> <span className="font-['Clash']">Overview</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2vw]">
            <div className="lg:col-span-2 space-y-[1.5vw]">
              {project.overview.map((paragraph, index) => (
                <p key={index} className="text-[1.4vw] text-[#b8b8b8] leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="bg-[#181818] border border-zinc-800 rounded-[1.2vw] p-[1.5vw]">
              <h3 className="text-[1.25vw] font-medium mb-[1vw] text-[#b8b8b8]">Project Details</h3>
              <div className="space-y-[1vw]">
                <div>
                  <p className="text-[0.85vw] text-[#666] font-light">Duration</p>
                  <p className="text-[1vw] font-medium">{project.duration}</p>
                </div>
                <div>
                  <p className="text-[0.85vw] text-[#666] font-light">Team Size</p>
                  <p className="text-[1vw] font-medium">{project.teamSize}</p>
                </div>
                <div>
                  <p className="text-[0.85vw] text-[#666] font-light">Role</p>
                  <p className="text-[1vw] font-medium">{project.role}</p>
                </div>
                <div>
                  <p className="text-[0.85vw] text-[#666] font-light">Industry</p>
                  <p className="text-[1vw] font-medium">{project.industry}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="px-[5.5vw] py-[2vw]">
        <div className="border-t border-zinc-800 pt-[2vw]">
          <h2 className="text-[3vw] font-semibold mb-[2vw] uppercase">
            <span className="font-['tiny']">Technologies</span> <span className="font-['Clash']">& Tools</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1vw]">
            {project.techStack.map((tech, index) => (
              <div key={index} className="bg-[#181818] border border-zinc-800 rounded-[0.8vw] p-[1vw] text-center hover:border-zinc-600 transition-colors">
                <p className="text-[1vw] font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

{/* Visual Gallery */}
<div className="px-[5.5vw] py-[2vw]">
  <div className="border-t border-zinc-800 pt-[2vw]">
    <h2 className="text-[3vw] font-semibold mb-[2vw] uppercase">
      <span className="font-['tiny']">Visual</span> <span className="font-['Clash']">Gallery</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1vw] h-[90vh]">
      {project.images.gallery.map((image, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-[1.2vw] border border-zinc-800 w-full h-full flex items-center justify-center"
        >
          <img
            src={image}
            alt={`Project Screenshot ${index + 1}`}
            className={
              // index === 0
              //   ? "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" :
              "max-h-[95%] max-w-[95%] object-contain transition-transform duration-300 group-hover:scale-105"
            }
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      ))}
    </div>
  </div>
</div>



      {/* Challenges & Solutions */}
      <div className="px-[5.5vw] py-[2vw]">
        <div className="border-t border-zinc-800 pt-[2vw]">
          <h2 className="text-[3vw] font-semibold mb-[2vw] uppercase">
            <span className="font-['tiny']">Challenges</span> <span className="font-['Clash']">& Solutions</span>
          </h2>
          <div className="space-y-[1.5vw]">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="bg-[#181818] border border-zinc-800 rounded-[1.2vw] p-[1.5vw]">
                <div className="flex items-center gap-3 mb-[1vw]">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                    <span className="text-[#b8b8b8] font-medium text-[1vw]">{index + 1}</span>
                  </div>
                  <h3 className="text-[1.25vw] font-medium">{challenge.title}</h3>
                </div>
                <div className="space-y-[1vw] ml-11">
                  <div>
                    <h4 className="text-[1vw] font-medium text-red-400 mb-2">Challenge:</h4>
                    <p className="text-[1vw] text-[#b8b8b8] font-light">{challenge.description}</p>
                  </div>
                  <div>
                    <h4 className="text-[1vw] font-medium text-[#b8b8b8] mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Solution:
                    </h4>
                    <p className="text-[1vw] text-[#b8b8b8] font-light">{challenge.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results & Metrics */}
      <div className="px-[5.5vw] py-[2vw]">
        <div className="border-t border-zinc-800 pt-[2vw]">
          <h2 className="text-[3vw] font-semibold mb-[2vw] uppercase">
            <span className="font-['tiny']">Results</span> <span className="font-['Clash']">& Impact</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1vw] mb-[2vw]">
            {project.metrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-[#181818] to-[#141414] border border-zinc-800 rounded-[1.2vw] p-[1.5vw] text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    {renderMetricIcon(metric.icon)}
                  </div>
                </div>
                <p className="text-[2vw] lg:text-[1.5vw] font-semibold text-[#b8b8b8] mb-2">{metric.value}</p>
                <p className="text-[0.85vw] text-[#666] font-light">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#181818] border border-zinc-800 rounded-[1.2vw] p-[1.5vw]">
            <h3 className="text-[1.25vw] font-medium mb-[1vw] text-[#b8b8b8]">Key Achievements</h3>
            <ul className="space-y-3 text-[#b8b8b8]">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#b8b8b8] mt-0.5 flex-shrink-0" />
                  <span className="text-[1vw] font-light">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Client Feedback Section */}
          {project.clientFeedback && (
            <div className="mt-[2vw]">
              {/* <h3 className="text-[1.5vw] font-medium mb-[1.5vw] text-[#b8b8b8] flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Client Feedback
              </h3> */}
              <div className="bg-gradient-to-br from-[#181818] to-[#141414] border border-zinc-800 rounded-[1.2vw] p-[1.5vw]">
                <div className="flex items-center gap-3 mb-[1vw]">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <div className="text-[#b8b8b8] font-medium text-[1vw]">
                      <img 
                        src={project.clientFeedback.image}
                        alt={`${project.clientFeedback.clientName.charAt(0)}`}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[1vw] font-medium">{project.clientFeedback.clientName || 'Client'}</p>
                    <p className="text-[0.85vw] text-[#666]">{project.clientFeedback.position || 'Position'}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < (project.clientFeedback.rating || 5) ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-600'}`} 
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="text-[1vw] text-[#b8b8b8] font-light italic border-l-2 border-zinc-700 pl-4">
                  "{project.clientFeedback.testimonial || 'Great work and excellent communication throughout the project.'}"
                </blockquote>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}