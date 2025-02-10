'use client'
import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

function Page() {
  return (
    <div>
      <ProtectedRoute>
        Hello world
      </ProtectedRoute>
    </div>
  )
}

export default Page;
