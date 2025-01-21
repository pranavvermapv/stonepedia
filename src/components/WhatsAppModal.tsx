'use client'

import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

interface WhatsAppModalProps {
  isOpen: boolean
  onClose: () => void
}

const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Remove non-numeric characters and format the phone number
    const formattedPhoneNumber = phoneNumber.replace(/[^\d]/g, '')
    if (formattedPhoneNumber) {
      window.open(`https://wa.me/${formattedPhoneNumber}`, '_blank')
      onClose()
    } else {
      alert("Please enter a valid phone number.")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Contact Sales via WhatsApp</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <FaWhatsapp className="inline-block mr-2" />
              Join on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default WhatsAppModal
