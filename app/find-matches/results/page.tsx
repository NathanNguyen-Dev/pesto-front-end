'use client';

import React from 'react';
// Use relative path and updated filename
import MatchResultCard from '../../../components/match-result-card';

// ... (Keep the hardcoded data definitions)

const exampleMatch1 = {
  avatarInitials: 'AV',
  name: 'Alexandra Volkov',
  role: 'Senior Software Engineer',
  location: 'Melbourne, VIC',
  skills: ['AI/ML', 'Python', 'AWS', 'Scalability'],
  summary: "Ex-FAANG engineer with 8+ years experience in machine learning infrastructure. Looking for a founding engineer role.",
  matchReason: "Currently at a startup, holds a Master's in IT, previous experience at large corporations.",
  profileLink: '/profile/alexandra-volkov',
  founderStage: 'E' as const // Add founder stage
};

const exampleMatch2 = {
  avatarInitials: 'BN',
  name: 'Ben Carter',
  role: 'UX Designer',
  location: 'Geelong, VIC',
  skills: ['User Research', 'Prototyping', 'Figma', 'Design Systems'],
  summary: 'Passionate UX designer focused on creating intuitive and engaging user experiences for early-stage products.',
  matchReason: 'Strong portfolio in relevant industry, experience working directly with founders.',
  profileLink: '/profile/ben-carter',
  founderStage: 'M' as const // Add founder stage
};

const exampleMatch3 = {
  avatarInitials: 'CS',
  name: 'Chloe Smith',
  role: 'Product Manager',
  location: 'Ballarat, VIC',
  skills: ['Roadmap Planning', 'Agile', 'User Interviews', 'Market Analysis'],
  summary: 'Product Manager transitioning from a larger tech company to the startup space. Excels at translating user needs into actionable plans.',
  matchReason: 'Proven experience scaling products, startup-focused mindset.',
  profileLink: '/profile/chloe-smith',
  founderStage: 'P' as const // Add founder stage
};


// Remove React.FC type annotation
const MatchResultsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Potential Matches</h1>
      <p className="text-center text-gray-600 mb-8">
        Showing results based on your search criteria. Review profiles and connect!
      </p>

      {/* Search Summary/Controls Area (Placeholder) */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <span className="text-sm text-gray-500">Showing 1-3 of 3 results (Hardcoded)</span>
        <div>
          <label htmlFor="sort" className="text-sm text-gray-500 mr-2">Sort by:</label>
          <select id="sort" name="sort" className="border border-gray-300 rounded-md text-sm p-1">
            <option value="relevance">Relevance</option>
            {/* Add other sort options later */}
          </select>
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-4">
        <MatchResultCard {...exampleMatch1} />
        <MatchResultCard {...exampleMatch2} />
        <MatchResultCard {...exampleMatch3} />
      </div>

      {/* Pagination Area (Placeholder) */}
      <div className="mt-8 flex justify-center">
        <nav aria-label="Pagination">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <span className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 cursor-not-allowed">
                Previous
              </span>
            </li>
            <li>
              <span aria-current="page" className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 font-medium">
                1
              </span>
            </li>
            <li>
              <span className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 cursor-not-allowed">
                Next
              </span>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
};

export default MatchResultsPage; 