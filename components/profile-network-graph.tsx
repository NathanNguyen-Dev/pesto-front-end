'use client';

import React, { useMemo, useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ForceGraphProps } from 'react-force-graph-2d'; // Correct type import

// Dynamic import of the component
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

interface NetworkData {
  industry?: string;
  verticals?: string[];
  investors?: string[];
}

interface ProfileNetworkGraphProps {
  profileName: string;
  networkData: NetworkData;
}

// Define node colors for different types
const NODE_COLORS = {
  center: '#3b82f6', // Blue
  industry: '#10b981', // Emerald
  vertical: '#8b5cf6', // Violet
  investor: '#ec4899', // Pink
  default: '#6b7280', // Gray
};

// Define Link type for clarity
interface Link {
  source: string | number;
  target: string | number;
}

const ProfileNetworkGraph: React.FC<ProfileNetworkGraphProps> = ({ profileName, networkData }) => {
  const [isClient, setIsClient] = useState(false);
  const graphRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 450 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Ensure component only renders on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate graph data (nodes and links)
  const graphData = useMemo(() => {
    const nodes: any[] = [];
    const links: Link[] = [];
    const centerNodeId = 'center-profile';

    // Center Node
    nodes.push({ id: centerNodeId, name: profileName, color: NODE_COLORS.center, isCenter: true });

    // Industry Node
    if (networkData.industry) {
      const nodeId = `industry-${networkData.industry.replace(/\s+/g, '-').toLowerCase()}`;
      nodes.push({ id: nodeId, name: networkData.industry, color: NODE_COLORS.industry });
      links.push({ source: centerNodeId, target: nodeId });
    }

    // Verticals Nodes
    networkData.verticals?.forEach(vertical => {
      const nodeId = `vertical-${vertical.replace(/\s+/g, '-').toLowerCase()}`;
      nodes.push({ id: nodeId, name: vertical, color: NODE_COLORS.vertical });
      links.push({ source: centerNodeId, target: nodeId });
    });

    // Investors Nodes
    networkData.investors?.forEach(investor => {
      const nodeId = `investor-${investor.replace(/\s+/g, '-').toLowerCase()}`;
      nodes.push({ id: nodeId, name: investor, color: NODE_COLORS.investor });
      links.push({ source: centerNodeId, target: nodeId });
    });

    return { nodes, links };
  }, [profileName, networkData]);

  // Get container dimensions for the graph
  useEffect(() => {
    if (containerRef.current) {
        setDimensions({
            width: containerRef.current.offsetWidth,
            height: 450 // Fixed height or calculate dynamically
        });
    }
     // Optional: Add resize listener if needed
     const handleResize = () => {
         if (containerRef.current) {
             setDimensions({
                 width: containerRef.current.offsetWidth,
                 height: 450
             });
         }
     };
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Custom node rendering on canvas
  const nodeCanvasObject = (node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const label = node.name;
    const fontSize = node.isCenter ? 14 / globalScale : 10 / globalScale;
    ctx.font = `${fontSize}px Sans-Serif`;
    const textWidth = ctx.measureText(label).width;
    const nodeRadius = textWidth / 1.8 + 4 / globalScale; // Basic radius based on text width

    // Circle node
    ctx.beginPath();
    ctx.arc(node.x!, node.y!, nodeRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = node.color || NODE_COLORS.default;
    ctx.fill();

    // Text label
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff'; // White text for better contrast on colored nodes
    ctx.fillText(label, node.x!, node.y!);

    node.__nodeRadius = nodeRadius; // Save radius for link interactions
  };

  // Use the correct ForceGraphProps type if needed, or let TypeScript infer
  const graphProps /*: ForceGraphProps*/ = {
    ref: graphRef,
    width: dimensions.width,
    height: dimensions.height,
    graphData: graphData,
    nodeId: "id",
    nodeLabel: "name",
    nodeRelSize: 6,
    nodeCanvasObject: nodeCanvasObject,
    nodeCanvasObjectMode: () => 'after' as const, // Ensure string literal type
    linkColor: () => 'rgba(107, 114, 128, 0.6)',
    linkWidth: 1,
    linkDirectionalParticles: 1,
    linkDirectionalParticleWidth: 1.5,
    linkDirectionalParticleSpeed: 0.006,
    cooldownTicks: 100,
    onEngineStop: () => graphRef.current?.zoomToFit(400, 100),
    enableZoomInteraction: true,
    enablePanInteraction: true,
  };

  return (
    <div ref={containerRef} className="w-full h-[450px] border rounded-lg bg-gray-50 overflow-hidden">
      {/* Conditionally render the graph component only on the client */}
      {isClient && dimensions.width > 0 && (
        <ForceGraph2D {...graphProps} />
      )}
      {!isClient && <p className="text-center p-4 text-gray-500">Loading graph...</p>} {/* Optional loading state */}
    </div>
  );
};

export default ProfileNetworkGraph; 