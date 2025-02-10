import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

function page() {
  return (
    <div>
      <ProtectedRoute>
        Manage profile
        </ProtectedRoute>
    </div>
  )
}

export default page
