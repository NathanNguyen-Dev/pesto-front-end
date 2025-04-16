"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, User, ChevronDown } from "lucide-react"

interface SearchFormProps {
  className?: string
}

export function SearchForm({ className }: SearchFormProps) {
  const [location, setLocation] = useState("")
  const [role, setRole] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search submission
    console.log({ location, role, description })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-4xl rounded-lg border bg-white shadow-lg overflow-hidden ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 border-b">
        <div className="flex items-center px-4 py-3 border-r">
          <MapPin className="h-5 w-5 text-gray-400 mr-2" />
          <Input
            placeholder="Location (e.g. San Francisco, CA)"
            className="border-0 focus-visible:ring-0 p-0 text-base"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center flex-1">
            <User className="h-5 w-5 text-gray-400 mr-2" />
            <Input
              placeholder="Role, skills, or expertise"
              className="border-0 focus-visible:ring-0 p-0 text-base"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <textarea
            placeholder="Describe your perfect match..."
            className="w-full h-24 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pesto-500 resize-none text-base"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="text-sm text-gray-500 mb-4 italic">
          Try: "I'm looking for a technical co-founder with experience in AI and machine learning"
        </div>
        <Button type="submit" className="w-full bg-pesto-700 hover:bg-pesto-800 text-white py-6 text-lg">
          Find Matches
        </Button>
      </div>
    </form>
  )
}
