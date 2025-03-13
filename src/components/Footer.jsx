import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Resources */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Resources</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Getting Started</a></li>
          <li><a href="#" className="hover:underline">Documentation</a></li>
          <li><a href="#" className="hover:underline">Tutorials</a></li>
          <li><a href="#" className="hover:underline">API Reference</a></li>
          <li><a href="#" className="hover:underline">Community Forums</a></li>
        </ul>
      </div>

      {/* Platform */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Platform</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Features</a></li>
          <li><a href="#" className="hover:underline">Supported Devices</a></li>
          <li><a href="#" className="hover:underline">System Requirements</a></li>
          <li><a href="#" className="hover:underline">Downloads</a></li>
          <li><a href="#" className="hover:underline">Release Notes</a></li>
        </ul>
      </div>

      {/* Community */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Community</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Events</a></li>
          <li><a href="#" className="hover:underline">Meetups</a></li>
          <li><a href="#" className="hover:underline">Conferences</a></li>
          <li><a href="#" className="hover:underline">Hackathons</a></li>
          <li><a href="#" className="hover:underline">Jobs</a></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer
