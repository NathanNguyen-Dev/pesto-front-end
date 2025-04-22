'use client'; // Mark as client component if using hooks or event handlers later

import React from 'react';
// Remove Image import if no longer needed elsewhere, or keep if used
// import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Assuming shadcn Button
import { MapPin, Settings } from 'lucide-react'; // Removed BarChartHorizontal if only used for placeholder
import SkillRadarChart from '@/components/skill-radar-chart';
import ProfileNetworkGraph from '@/components/profile-network-graph';

// Hardcoded data for Alexandra Volkov
const profileData = {
  id: 'alexandra-volkov', // Adding an ID for consistency
  name: 'Alexandra Volkov',
  title: 'Senior Software Engineer',
  tagline: 'Seeking early-stage opportunities', // Example tagline
  location: 'Melbourne, VIC',
  avatarUrl: '/images/placeholder-avatar.png', // Keep for potential future use
  summary: "Ex-FAANG engineer with 8+ years experience in machine learning infrastructure. Passionate about building scalable AI products from the ground up. Looking for a founding engineer role.",
  skills: {
    Marketing: 3, // Example skill levels (e.g., 1-5 or 0-100)
    Sales: 2,
    'Tech/Engineering': 5,
    'People/Culture': 4,
    Operations: 3,
    Finance: 2,
  },
  // Placeholder for Experience & Education
  experience: [
    { role: 'Senior ML Engineer', company: 'Innovate Solutions', years: '2020-Present' },
    { role: 'Software Engineer', company: 'Global Tech Inc.', years: '2016-2020' },
  ],
  education: [
    { degree: 'Master of IT', university: 'University of Melbourne' },
    { degree: 'B.Sc. Computer Science', university: 'Monash University' },
  ],
  // --- Data for Network Graph ---
  network: {
    industry: "Artificial Intelligence",
    verticals: ["RAG", "GenAI", "MLOps"],
    investors: ["Startmate VC", "Example Angel Group"],
    // Add other connection types if needed (e.g., advisors, key partners)
  }
};

// Helper to create skill bar width (adjust scale as needed)
const getBarWidth = (level: number, maxLevel = 5): string => {
  const percentage = Math.min(Math.max(level / maxLevel, 0), 1) * 100;
  return `${percentage}%`;
};

// The actual page component
const UserProfilePage = ({ params }: { params: { profileId: string } }) => {
  // For now, we ignore params.profileId and use hardcoded data
  // Later, you would use profileId to fetch data, e.g.:
  // if (params.profileId !== profileData.id) { return <div>Profile not found</div>; }

  console.log("Rendering profile page for:", params.profileId);

  const skillEntries = Object.entries(profileData.skills);
  const firstInitial = profileData.name.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-orange-50 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl bg-white rounded-xl shadow-lg p-6 md:p-10">

        {/* Top Section: Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-8 border-b pb-8">
          {/* Avatar replaced with Initial */}
          <div className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border-4 border-gray-200">
            <span className="text-4xl md:text-5xl font-semibold">{firstInitial}</span>
          </div>

          {/* Name, Title, Location, Button */}
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{profileData.name}</h1>
            <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium my-2">
              {profileData.tagline || profileData.title}
            </span>
            <div className="flex items-center justify-center md:justify-start text-gray-500 mt-1 mb-4">
              <MapPin size={16} className="mr-1" />
              <span>{profileData.location}</span>
            </div>
            <Button className="bg-pesto-700 hover:bg-pesto-800 text-white px-6 py-2">
              Connect
            </Button>
          </div>
        </div>

        {/* Main Content: Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">

          {/* Left Column: Summary & Skills List */}
          <div className="md:col-span-1 space-y-6">
             {/* Summary */}
             <div>
               <h2 className="text-xl font-semibold text-gray-700 mb-2">About</h2>
               <p className="text-gray-600 leading-relaxed">{profileData.summary}</p>
             </div>

            {/* Skills Breakdown */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-3">Core Competencies</h2>
              <div className="space-y-3">
                {skillEntries.map(([skill, level]) => (
                  <div key={skill}>
                    <span className="block text-sm font-medium text-gray-600 mb-1">{skill}</span>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: getBarWidth(level) }}
                        title={`Level ${level}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skill Visualization */}
          <div className="md:col-span-2">
            <div className="border rounded-lg p-4 md:p-6 h-full bg-gray-50 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center border-b pb-2 flex-shrink-0">
                Skill Profile
              </h2>
              <div className="flex-grow flex items-center justify-center min-h-[300px]">
                 <SkillRadarChart skills={profileData.skills} maxLevel={5} />
              </div>
            </div>
          </div>
        </div>

        {/* --- New Network Graph Section --- */}
        <div className="mb-12 border-t pt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Professional Network</h2>
          <ProfileNetworkGraph
            profileName={profileData.name}
            networkData={profileData.network}
          />
        </div>

        {/* Additional Sections */}
        <div className="mt-12 border-t pt-8 space-y-8">
           {/* Experience */}
           <div>
               <h2 className="text-xl font-semibold text-gray-700 mb-3">Experience</h2>
               <div className="space-y-4">
                   {profileData.experience.map((exp, index) => (
                       <div key={index} className="border-l-4 border-pesto-600 pl-4">
                           <h3 className="font-medium text-gray-800">{exp.role}</h3>
                           <p className="text-sm text-gray-600">{exp.company}</p>
                           <p className="text-xs text-gray-400">{exp.years}</p>
                       </div>
                   ))}
               </div>
           </div>
           {/* Education */}
           <div>
               <h2 className="text-xl font-semibold text-gray-700 mb-3">Education</h2>
                <div className="space-y-4">
                   {profileData.education.map((edu, index) => (
                       <div key={index} className="border-l-4 border-blue-600 pl-4">
                           <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                           <p className="text-sm text-gray-600">{edu.university}</p>
                       </div>
                   ))}
               </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfilePage; 