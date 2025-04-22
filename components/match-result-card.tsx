'use client'; // Add use client for Tooltip interactivity

import React from 'react';

// Define the founder stage type
type FounderStage = 'E' | 'M' | 'P';

// Define the props for the component
interface MatchResultCardProps {
  avatarInitials: string;
  name: string;
  role: string;
  location: string;
  skills: string[];
  summary: string;
  matchReason: string; // The "Why it's a good match" text
  profileLink?: string; // Optional link for the profile button
  founderStage?: FounderStage | null; // Added founder stage prop (optional)
}

// Define the component
const MatchResultCard: React.FC<MatchResultCardProps> = ({
  avatarInitials,
  name,
  role,
  location,
  skills,
  summary,
  matchReason,
  founderStage, // Destructure the new prop
  profileLink = '#',
}) => {
  // Basic color mapping for skills - extend or customize as needed
  const getSkillColor = (skill: string) => {
    const lowerSkill = skill.toLowerCase();
    if (lowerSkill.includes('ai') || lowerSkill.includes('ml')) return 'bg-purple-100 text-purple-700 border-purple-200';
    if (lowerSkill.includes('python') || lowerSkill.includes('aws')) return 'bg-blue-100 text-blue-700 border-blue-200';
    if (lowerSkill.includes('ux') || lowerSkill.includes('design')) return 'bg-green-100 text-green-700 border-green-200';
    if (lowerSkill.includes('react') || lowerSkill.includes('frontend')) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    return 'bg-indigo-50 text-indigo-700 border-indigo-200'; // Default
  };

  // Helper to get display text and color for founder stage
  const getFounderStageDisplay = (stage: FounderStage | null | undefined) => {
    if (!stage) return null;
    switch (stage) {
      case 'E':
        return { text: 'Early Stage', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' };
      case 'M':
        return { text: 'Mid Stage', color: 'bg-amber-100 text-amber-700 border-amber-200' };
      case 'P':
        return { text: 'Established', color: 'bg-rose-100 text-rose-700 border-rose-200' };
      default:
        return null;
    }
  };

  const stageDisplay = getFounderStageDisplay(founderStage);

  return (
    // Added 'group' class for hover effect on children
    <div className="relative group border border-gray-200 rounded-lg p-4 flex gap-4 items-start hover:shadow-md transition-shadow duration-200 mb-4 bg-white">

      {/* Left Section: Avatar */}
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mt-1">
        {avatarInitials}
      </div>

      {/* Center Section: Details */}
      <div className="flex-grow">
        {/* Name, Role, and Founder Stage */}
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <span className="text-gray-600 text-sm">{role}</span>
          {/* Display Founder Stage Badge if available */}
          {stageDisplay && (
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${stageDisplay.color}`}>
              {stageDisplay.text}
            </span>
          )}
        </div>

        {/* Location */}
        <div className="text-sm text-gray-500 mb-2 flex items-center gap-1">
          {/* Location Icon Placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getSkillColor(skill)}`}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Summary */}
        <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
      </div>

      {/* Right Section: CTA */}
      <div className="flex-shrink-0 ml-4 text-right mt-1">
        <a
          href={profileLink}
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-5 rounded-md text-sm transition-colors duration-200 shadow-sm"
          aria-label={`View profile for ${name}`}
        >
          View Profile
        </a>
        {/* Placeholder for Ellipsis/More Actions */}
        {/* <button className="mt-2 text-gray-400 hover:text-gray-600">...</button> */}
      </div>

      {/* Hover Effect: Tooltip for Match Reason */}
      {/* Shows on group hover (hovering anywhere on the card) */}
      <div
        role="tooltip"
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-xs px-3 py-2 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 shadow-lg"
      >
        <span className="font-semibold">Why it's a good match:</span> {matchReason}
        {/* Tooltip arrow */}
        <svg className="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
        </svg>
      </div>
    </div>
  );
};

export default MatchResultCard; 