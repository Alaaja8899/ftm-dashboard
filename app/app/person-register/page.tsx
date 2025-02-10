import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

function page() {
  return (
    <div>
      <ProtectedRoute>
        Register page
        </ProtectedRoute>
    </div>
  )
}

export default page
