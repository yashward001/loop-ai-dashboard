import React from 'react'
import { SignedIn, SignedOut } from '@clerk/nextjs'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to LOOP.AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              AI-powered email productivity dashboard designed for college students.
              Never miss important emails, deadlines, or opportunities again.
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    🤖
                  </div>
                  <h3 className="font-semibold mb-2">AI-Powered</h3>
                  <p className="text-sm text-gray-600">
                    Automatically categorize and summarize your emails
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    📅
                  </div>
                  <h3 className="font-semibold mb-2">Smart Calendar</h3>
                  <p className="text-sm text-gray-600">
                    Extract deadlines and events from your emails
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    🎯
                  </div>
                  <h3 className="font-semibold mb-2">Priority Focus</h3>
                  <p className="text-sm text-gray-600">
                    Focus on what matters most with intelligent prioritization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignedOut>
      
      <SignedIn>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">
              Welcome to your LOOP.AI dashboard! 🎉
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Dashboard features coming soon in Phase 1 development...
            </p>
          </div>
        </div>
      </SignedIn>
    </div>
  )
}