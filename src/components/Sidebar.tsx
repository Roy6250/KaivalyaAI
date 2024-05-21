import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import Accordion from './Accordion'
import { useEffect, useState } from 'react'
import { DocumentNote } from '@/types/Notes'
import { takeNotes } from '@/api/notes'
import { useMutation } from 'react-query'
import { img } from '@/assets'
import LoadingChatSymbol from './LoadigChatSymbol'
const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true }
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false }
]
const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  // Handle file upload here
  const file = event.target.files ? event.target.files[0] : null
  console.log(file)
}

const handleSubmit = () => {
  // Implement submit logic here
  console.log('Submit the uploaded file')
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const test: DocumentNote[] = [
  {
    note: '1. The document provides contact information for Providence Medicare Advantage Plans, including a phone number (1-833-949-0263) and a TTY number (711) for the hearing impaired. It specifies the hours of operation for phone inquiries and offers a website (ProvidenceTrueHealth.com/Guides) for more information or enrollment.'
    // pageNumbers: [1, 2]
  },
  {
    note: '2. Providence Medicare Advantage Plans are available in Clackamas, Multnomah, Washington, and Yamhill counties in Oregon.'
    // pageNumbers: [1]
  }
]
export default function Sidebar() {
  const [notesFetched, setIsFetched] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [notes, setNotes] = useState<Array<DocumentNote>>([])
  const { mutate: apiforNotes, isLoading, error, data } = useMutation(takeNotes)
  // setNotes({note:"Check"})
  const handleClick = () => {
    console.log('clicked')
    setIsOpen(!isOpen)
    setIsFetched(!notesFetched)

    apiforNotes({
      paperUrl: 'https://arxiv.org/pdf/2401.17165.pdf',
      name: 'final'
    })
    // if (notes.length > 0) {
    //   setNotes([])
    // } else {
    //   setNotes(data)
    // }
    // setNotes(data)
    console.log(data)
  }
  useEffect(() => {
    if (data) {
      // console.log(data)
      setNotes([data])
      // setNotes(test)
      console.log(notes)
      // setNotes((prevState) => ({
      //   ...prevState,
      //   test
      // }))
    }
  }, [data])

  const [audioFile, setAudioFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      setAudioFile(file)
    }
  }

  const handleUpload = async () => {
    // Handle upload logic here, you can use 'audioFile' state for further processing
    if (audioFile) {
      // For example, you can use FormData to upload the file
      const formData = new FormData()
      formData.append('audio', audioFile)

      // Send formData to your server using fetch or any other HTTP client
      // Example: fetch('/upload/audio', { method: 'POST', body: formData });

      // Reset the state after successful upload

      const response: any = await apiforNotes(formData)
      if (response) {
        console.log(response)
        setNotes(response)
      }
      setAudioFile(null)
    }
  }

  // bg-gradient-to-r from-[#faffd1] to-#a1ffce]
  return (
    <div className="bg-grey/20 flex min-h-screen grow flex-col gap-y-5  overflow-y-auto border-2  px-6 py-3 shadow-lg ring-1 ring-black/5	">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7 ">
          <li>
            <ul role="list" className="mx-2	 space-y-1 ">
              {navigation.map((item) => (
                <li key={item.name}>
                  {/* <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-white'
                          : 'text-indigo-200 group-hover:text-white',
                        'h-6 w-6 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                    {item.count ? (
                      <span
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
                        aria-hidden="true"
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </a> */}

                  {/* <Accordion title="Section 1">
                    <p>This is the content of section 1.</p>
                  </Accordion> */}
                  <Accordion
                    title="Upload Audio "
                    active={isOpen}
                    isActive={setIsOpen}
                    notes={notes}
                    setNotes={setNotes}
                  >
                    <div>
                      {/* <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileUpload}
                        className="mb-4"
                      />
                      <button
                        onClick={handleSubmit}
                        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
                      >
                        Submit
                      </button> */}
                      <form>
                        <div className="space-y-12 ">
                          <div className="border-b border-gray-900/10 pb-12 ">
                            <h1>
                              Generate Transcript by uploading the audio file
                            </h1>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              <div className="w-full sm:col-span-6">
                                {/* <label
                                  // htmlFor="username"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Document Url
                                </label> */}
                                <div className="mt-2">
                                  <div className="flex  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                      type="file"
                                      name="username"
                                      id="username"
                                      autoComplete="username"
                                      className="block  flex-1 rounded-lg border-0 bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                      placeholder="FileName"
                                      accept="audio/*"
                                      // hint="fileName"
                                      onChange={handleFileChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* <div className="col-span-full">
                                <label
                                  htmlFor="cover-photo"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Cover photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 bg-white px-6 py-10">
                                  <div className="text-center">
                                    <PhotoIcon
                                      className="mx-auto h-12 w-12 text-gray-300"
                                      aria-hidden="true"
                                    />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600 ">
                                      <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md border-2 bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                      >
                                        <span className="m-3 text-wrap">
                                          Upload a file
                                        </span>
                                        <input
                                          id="file-upload"
                                          name="file-upload"
                                          type="file"
                                          className="sr-only"
                                        />
                                      </label>
                                      <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">
                                      PNG, JPG, GIF up to 10MB
                                    </p>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                          <button
                            type="button"
                            className="rounded-md bg-[#a1ffce] px-3 py-2 text-sm font-semibold  text-gray-900 hover:border-2 hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className=" rounded-md bg-[#a1ffce] px-3 py-2 text-sm font-semibold text-black shadow-sm hover:border-2 hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            onClick={handleUpload}
                            disabled={!audioFile}
                          >
                            Uoload
                          </button>
                        </div>
                      </form>
                    </div>
                    {notesFetched ? <h1>Hide</h1> : null}
                  </Accordion>
                </li>
              ))}
            </ul>
          </li>

          {isLoading && (
            <p className="mx-4">
              <LoadingChatSymbol />
            </p>
          )}
          {notes && notes.length > 0 && (
            <div className="flex max-h-600 max-w-[600px] flex-col gap-2 overflow-y-auto px-3">
              <h2>Notes</h2>
              <div className="flex flex-col gap-2">
                {notes.map((note, index) => (
                  <div
                    className="my-2 flex flex-col gap-2 border-b border-black/50 p-2 text-black"
                    key={index}
                  >
                    <p>
                      {index + 1}. {note.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-black hover:hover:bg-white/40"
            >
              <img
                className="h-8 w-8 rounded-full bg-white"
                // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                src={img}
                alt=""
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Username</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
