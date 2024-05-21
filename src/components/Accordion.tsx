import { DocumentNote } from '@/types/Notes'
import React, { useState, FC } from 'react'

interface AccordionProps {
  title: string
  active: any
  isActive: any
  children: React.ReactNode
  notes: DocumentNote[]
  setNotes: React.Dispatch<React.SetStateAction<DocumentNote[]>>
}

const Accordion: FC<AccordionProps> = ({
  title,
  active,
  isActive,
  children,
  notes,
  setNotes
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const borderStyle = active == true ? 'border-b-2' : ''

  return (
    <div className="my-2  items-center   rounded-lg rounded-md border-black bg-white/20 shadow-lg ring-1 ring-black/5	hover:border-2 ">
      <div
        className={`flex divide-x rounded-lg  border-black bg-white/30 hover:bg-white/40 focus:outline-none ${borderStyle}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className=" mt-2 h-12 w-auto"
        >
          <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
        </svg>

        <button
          className="w-full   px-4 py-5 text-left text-lg font-medium text-gray-800 "
          onClick={() => {
            isActive(!active)

            if (notes.length > 0) {
              setNotes([])
            }
          }}
        >
          {title}
        </button>
      </div>

      {active && <div className="p-10">{children}</div>}
    </div>
  )
}

export default Accordion
