'use client'
import { ComponentProps } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useFileInput } from './Root'
import { FileItem } from './FileItem'

export type FileListProps = ComponentProps<'div'>

export function FileList(props: FileListProps) {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3" {...props}>
      {files.map((file, index) => (
        <FileItem
          key={index}
          name={file.name}
          size={file.size}
          state="complete"
        />
      ))}
    </div>
  )
}
